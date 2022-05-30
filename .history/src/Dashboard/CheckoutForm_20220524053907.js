import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutForm = ({ clientSecret, item }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error.message);
    }
    // else {
    //   console.log(paymentMethod);
    // }
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: item.userName,
            email: item.email,
          },
        },
      });
    if (paymentError) {
      console.log(paymentError.message);
    } else {
      if (paymentIntent.id) {
        await fetch(`http://localhost:5000/purchaseById/${item._id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ paymentId: paymentIntent.id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success(`Payment Complete. paymentId: ${paymentIntent.id}`);
              navigate("/dashboard/my-order");
            }
          });
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className={` btn btn-success btn-sm mt-10 text-white ${
          loading && "loading"
        }`}
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        {loading ? "" : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
