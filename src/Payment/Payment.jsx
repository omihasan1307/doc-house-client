import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_APP_Payment_Gateway_PK);
const Payment = () => {
  const loader = useLoaderData();
  const {
    bookingDate,
    bookingSlot,
    email,
    fees,
    name,
    phoneNumber,
    serviceName,
    _id,
  } = loader;

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 my-10">
        <div>
          <h1 className="text-xl">{name}</h1>
          <h1 className="text-sm my-2">{email}</h1>
          <hr className="my-2 w-[50%] " />
          <h1>Service Name : {serviceName}</h1>
          <h1>Booking Date : {bookingDate}</h1>
          <h1>Booking Slot : {bookingSlot}</h1>
          <h1>Booking fees : ${fees}</h1>
          <h1>Phone Number : {phoneNumber}</h1>
        </div>
        <div className=" px-4 py-4">
          <Elements stripe={stripePromise}>
            <CheckOutForm data={loader} fees={fees}></CheckOutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
