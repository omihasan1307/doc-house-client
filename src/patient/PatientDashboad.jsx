import useBookingList from "../hooks/useBookingList";
import { Link } from "react-router-dom";
import usePayment from "../hooks/usePayment";

const PatientDashboad = () => {
  const [data, refetch, isLoading] = useBookingList();
  const [payment = data, reload = refetch, loading = isLoading] = usePayment();

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-xl font-bold mx-10 my-10">
        My Appoinment : {data?.length}
      </h1>
      {data?.length > 0 ? (
        <div>
          {isLoading ? (
            <div className=" flex  justify-center">
              <span className="loading loading-bars loading-lg text-success"></span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="uppercase bg-slate-100">
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Treatment</th>
                    <th>Fees</th>
                    <th>Payment</th>
                  </tr>
                </thead>

                <tbody>
                  {data?.map(
                    (
                      {
                        name,
                        bookingDate,
                        bookingSlot,
                        _id,
                        serviceName,
                        fees,
                      },
                      index
                    ) => (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{bookingDate}</td>
                        <td>{bookingSlot}</td>
                        <td>{serviceName}</td>
                        <td>{fees}</td>
                        <td>
                          <Link
                            className="text-white uppercase px-5 py-2  rounded bg-[#F7A582]"
                            to={`/payment/${_id}`}
                          >
                            pay
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-400">
          {" "}
          No listed appoinment yet{" "}
        </p>
      )}

      <h1 className="text-xl font-bold mx-10 my-10">
        My Paid Appoinment : {payment?.length}
      </h1>

      {payment?.length > 0 ? (
        <div className="my-10">
          {isLoading ? (
            <div className=" flex  justify-center">
              <span className="loading loading-bars loading-lg text-success"></span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="uppercase bg-slate-100">
                    <th>#</th>
                    <th>Name</th>
                    <th>Service Name</th>
                    <th>Booking Date</th>
                    <th>Booking Slot</th>
                    <th>transactionId</th>
                    <th>status</th>
                  </tr>
                </thead>

                <tbody>
                  {payment?.map(
                    (
                      {
                        transactionId,
                        bookingDate,
                        bookingSlot,
                        _id,
                        serviceName,
                        status,
                        name,
                      },
                      index
                    ) => (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{serviceName}</td>
                        <td>{bookingDate}</td>
                        <td>{bookingSlot}</td>
                        <td>{transactionId}</td>
                        <td>
                          <p className="text-white uppercase text-center py-2 w-44 rounded bg-[#F7A582]">
                            {status}
                          </p>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-400">
          {" "}
          No listed appoinment yet{" "}
        </p>
      )}
    </div>
  );
};

export default PatientDashboad;
