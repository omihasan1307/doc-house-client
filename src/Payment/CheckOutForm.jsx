import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecuire from "../hooks/useAxiosSecuire";
import { Link } from "react-router-dom";

const CheckOutForm = ({ fees, data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [instance] = useAxiosSecuire();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    instance.post("/create-payment-intent", { fees }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [fees, instance]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: "service pending",
        fees: fees,
        bookingDate: data.bookingDate,
        bookingSlot: data.bookingSlot,
        serviceName: data.serviceName,
        bookingID: data._id,
        name: user?.displayName,
      };

      instance.post("/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
          // display confirm
        }
      });
    }
  };

  return (
    <div>
      {transactionId ? (
        <div>
          <p className="text-green-500 text-base">
            {" "}
            Transaction complete with transactionId: {transactionId}
          </p>
          <Link className="btn" to="/">
            {" "}
            Back To Home
          </Link>
        </div>
      ) : (
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
            className="btn w-full bg-[#07332F] mt-10 text-white"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
      )}

      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </div>
  );
};

export default CheckOutForm;
