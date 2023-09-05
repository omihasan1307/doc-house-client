import { useContext, useEffect, useState } from "react";
import chair from "../../img/chair 1.png";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import useService from "../../hooks/useService";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import useAdmin from "../../hooks/useAdmin";
import { useNavigate } from "react-router-dom";
const Appoinment = () => {
  const navigate = useNavigate();

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [service, refetch] = useService();
  const [data] = useAdmin();
  const { user } = useContext(AuthContext);
  const [selectedDay, setSelectedDay] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [matched, setMatched] = useState(true);
  const [update, setupdate] = useState({});

  if (selectedDay) {
    if (!user) {
      navigate("/login");
    }
  }

  const dated = `${monthName[selectedDay?.month - 1]} ${selectedDay?.day}, ${
    selectedDay?.year
  }`;
  useEffect(() => {
    setDate(dated);
  }, [dated]);

  const getAllPreviousDates = () => {
    const today = new Date();
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - 1);
    const currentYear = today.getFullYear();
    const startDate = new Date(currentYear, 0, 1);

    const endDate = new Date(
      previousDate.getFullYear(),
      previousDate.getMonth(),
      previousDate.getDate()
    );
    const dates = [];
    while (startDate <= endDate) {
      const dateObject = {
        year: startDate.getFullYear(),
        month: startDate.getMonth() + 1,
        day: startDate.getDate(),
      };
      dates.push(dateObject);
      startDate.setDate(startDate.getDate() + 1);
    }
    return dates;
  };

  const previousDates = getAllPreviousDates();
  const handleDisabledSelect = (disabledDay) => {
    console.log("Tried selecting a disabled day", disabledDay);
  };

  const handleCliCk = (id) => {
    const findService = service.find((e) => e._id === id);
    setSlot(findService);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event?.target;
    const date = form?.date?.value;
    const slot = form?.slot?.value;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const fees = form?.fees?.value;
    const phoneNumber = form?.phoneNumber?.value;

    axios
      .post(`https://doc-house-server-omihasan1307.vercel.app/bookingList`, {
        bookingDate: date,
        bookingSlot: slot,
        serviceName: update.service_name,
        fees: parseFloat(fees),
        name,
        email,
        phoneNumber,
      })
      .then((data) => {
        refetch();
        enqueueSnackbar(`Hi , Your appoinment has been added `, {
          variant: "success",
        });
      });
  };

  const handleSLot = (time, name) => {
    axios
      .get(
        `https://doc-house-server-omihasan1307.vercel.app/booked?date=${date}&slot=${time}&name=${name}`
      )
      .then((response) => {
        setMatched(response.data.message);
      });
  };

  return (
    <div>
      <div className="bg-[#07332F] text-white">
        <div className="  h-[300px] max-w-screen-2xl mx-auto">
          <h1 className="font-bold text-3xl mx-5 py-20">Appoinment</h1>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:my-10 px-10 lg:px-20">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            disabledDays={previousDates}
            onDisabledDayError={handleDisabledSelect}
            shouldHighlightWeekends
          />
          <div className=" lg:-ms-20 my-5 lg:my-0">
            <img src={chair} alt="" />
          </div>
        </div>

        <div className="py-10 ">
          {selectedDay && (
            <div>
              <div className="text-center">
                <div className="py-6 my-16 lg:my-16 ">
                  <h2 className=" text-yellow-600">
                    Available Services on {date}
                  </h2>
                  <h1 className="text-5xl font-bold my-2">
                    Please select a service.
                  </h1>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 my-14 justify-center">
                  {service?.map(({ _id, service_img, service_name }) => (
                    <div key={_id}>
                      <button onClick={() => handleCliCk(_id)}>
                        <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center justify-center space-x-5">
                          <img
                            className=" bg-pink-100 px-2 py-2 rounded-lg"
                            src={service_img}
                            alt=""
                          />
                          <h2 className="text-xl font-bold text-left ">
                            {service_name}
                          </h2>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {data?.role === "patient" && (
          <div className="py-10 ">
            {slot && (
              <div>
                <div className="text-center">
                  <div className="py-6 my-16 lg:my-16 ">
                    <h1 className="text-4xl font-bold my-2 ">
                      Available slots for {slot?.service_name}.
                    </h1>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-10 my-14 justify-center">
                    {slot?.slots?.map((e, index) => (
                      <div key={index} className="">
                        <div className="border rounded-xl shadow-xl w-[350px] mx-auto py-10">
                          <div className="w-20 h-20 mx-auto ">
                            <img
                              className="w-full h-full object-contain bg-pink-50 px-4 py-2 rounded-full"
                              src={e?.img}
                              alt=""
                            />
                          </div>
                          <div className="my-10">
                            <h2 className="text-2xl font-bold  text-center ">
                              {e?.service_name}
                            </h2>
                            <h2 className="text-center py-2 font-semibold">
                              Fees: $ {e?.fees}
                            </h2>
                            <h2 className=" text-center py-2 font-semibold ">
                              {e?.available_slots}
                            </h2>
                          </div>
                          <label
                            onClick={() => {
                              handleSLot(e?.available_slots, e?.service_name),
                                setupdate(e);
                            }}
                            htmlFor="my_modal_6"
                            className="text-white uppercase px-5 py-2  rounded bg-[#F7A582]"
                          >
                            book appoinment
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {data?.role === "doctor" ||
          (data?.role === "admin" && (
            <p className="text-center text-2xl font-bold my-10 text-gray-500">
              {" "}
              No option for Admin and doctor
            </p>
          ))}

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className=" flex justify-end ">
              <label
                htmlFor="my_modal_6"
                className="w-7 h-7 text-xs cursor-pointer rounded-full flex justify-center items-center bg-gray-400 text-white"
              >
                X
              </label>
            </div>

            {matched ? (
              <form onSubmit={handleSubmit}>
                <h3 className="font-bold text-lg">{update.service_name}</h3>
                <div className="my-5">
                  <input
                    type="text"
                    name="date"
                    className="border rounded w-full py-1 px-4"
                    defaultValue={date}
                  />
                </div>
                <div className="my-5">
                  <input
                    type="text"
                    name="slot"
                    className="border rounded w-full py-1 px-4"
                    defaultValue={update.available_slots}
                  />
                </div>
                <div className="my-5">
                  <input
                    type="text"
                    name="name"
                    className="border rounded w-full py-1 px-4"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="my-5">
                  <input
                    type="text"
                    name="email"
                    className="border rounded w-full py-1 px-4"
                    defaultValue={user?.email}
                  />
                </div>
                <div className="my-5">
                  <input
                    type="text"
                    name="fees"
                    className="border rounded w-full py-1 px-4"
                    defaultValue={update.fees}
                  />
                </div>
                <div className="my-5">
                  <input
                    type="number"
                    name="phoneNumber"
                    className="border rounded w-full py-1 px-4"
                    placeholder="Phone Number"
                  />
                </div>
                <button className="text-white uppercase px-5 rounded bg-[#F7A582] w-full ">
                  <label
                    htmlFor="my_modal_6"
                    className="inline-block w-full py-2 "
                  >
                    Submit
                  </label>
                </button>
              </form>
            ) : (
              <p className="text-center text-2xl font-bold bg-[#F7A582] text-white py-5 my-2 rounded">
                {" "}
                Slot Booked. Not Available{" "}
              </p>
            )}

            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
