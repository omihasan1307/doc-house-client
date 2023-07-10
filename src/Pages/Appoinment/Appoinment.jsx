import { useState } from "react";
import chair from "../../img/chair 1.png";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import img1 from "../../img/teeth1.png";
import img2 from "../../img/teeth2.png";
import img3 from "../../img/teeth3.png";
import img4 from "../../img/teeth4.png";
import img5 from "../../img/teeth5.png";
import img6 from "../../img/teeth6.png";

const Appoinment = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  console.log(selectedDay);

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

  const handleCliCk = () => {
    console.log("clicksss");
  };
  return (
    <div>
      <div className="bg-[#07332F] text-white  h-[300px]">
        <h1 className="font-bold text-3xl mx-5 py-20">Appoinment</h1>
      </div>

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

      {selectedDay && (
        <div className=" ">
          <div className="text-center">
            <div className="my-10 lg:my-16">
              <h2 className=" text-yellow-600">
                Available Services on April 30, 2022
              </h2>
              <h1 className="text-5xl font-bold my-2">
                Please select a service.
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 my-14 justify-center">
              <button onClick={handleCliCk()}>
                <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                  <img
                    className="ms-10 bg-pink-100 px-2 py-2 rounded-lg"
                    src={img1}
                    alt=""
                  />
                  <h2 className="text-2xl font-bold text-left ms-10">
                    Teeth <br /> Orthodontics
                  </h2>
                </div>
              </button>

              <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                <img
                  className="ms-10 bg-pink-100 px-2 py-2 rounded-lg"
                  src={img2}
                  alt=""
                />
                <h2 className="text-2xl font-bold text-left ms-10">
                  Cosmetic <br /> Dentisty
                </h2>
              </div>
              <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                <img
                  className="ms-10 bg-pink-100 px-2 py-4 rounded-lg"
                  src={img3}
                  alt=""
                />
                <h2 className="text-2xl font-bold text-left ms-10">
                  Teeth <br /> Cleaning
                </h2>
              </div>
              <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                <img
                  className="ms-10 bg-pink-100 px-2 py-2 rounded-lg"
                  src={img4}
                  alt=""
                />
                <h2 className="text-2xl font-bold text-left ms-10">
                  Cavity <br /> Protection
                </h2>
              </div>
              <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                <img
                  className="ms-10 bg-pink-100 px-2 py-2 rounded-lg"
                  src={img5}
                  alt=""
                />
                <h2 className="text-2xl font-bold text-left ms-10">
                  Pediatric <br /> Dental
                </h2>
              </div>
              <div className="border rounded-xl shadow-xl w-[366px] h-[150px] flex items-center">
                <img
                  className="ms-10 bg-pink-100 px-2 py-2 rounded-lg"
                  src={img6}
                  alt=""
                />
                <h2 className="text-2xl font-bold text-left ms-10">
                  Oral <br /> Surgery
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appoinment;
