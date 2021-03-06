import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  `pk_test_51L3KgoECfuvDjmxRclxSCVDEgEwGNh9gNnRXkFieEAlFnb8p2JV6MglZ3KRZdICRgX6GdC87sZjTekcCwAqaX5NU00NIEUjnkE`
);

const Payment = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`https://desolate-scrubland-35954.herokuapp.com/purchaseById/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  useEffect(() => {
    if (item.price) {
      fetch(
        "https://desolate-scrubland-35954.herokuapp.com/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            toast.error("Amount Limit Crossed. Limit: 9,999.99/-");
          }
        });
    }
  }, [item]);

  return (
    <div className=" flex justify-center">
      <div>
        <h2 className=" text-center text-primary text-4xl mb-10 uppercase">
          Please pay to confirm
        </h2>
        <div className="card max-w-lg bg-base-200 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm item={item} clientSecret={clientSecret} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
