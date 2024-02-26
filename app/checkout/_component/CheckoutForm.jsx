import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useCart } from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import CartApis from "../../_utils/CartApis";
import OrderApis from "../../_utils/orderApis";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useCart();
  const { user } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    createOrder();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const createOrder = () => {
    let productIds = [];
    cart.forEach((el) => {
      productIds.push(el?.product?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds,
      },
    };
    OrderApis.createOrder(data).then((res) => {
      if (res) {
        cart.forEach((el) => {
          CartApis.deleteCartItem(el?.id).then((result) => {});
        });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-5 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="my-5 transition-all duration-200 shadow-md shadow-accent100 hover:shadow-accent200 bg-accent200 hover:text-text100 text-white py-2 px-4 rounded-md hover:bg-accent100 w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
