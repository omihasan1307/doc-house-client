import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="my-24 bg-[#07332F] text-white px-8 lg:px-0">
      <div className="max-w-screen-2xl mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold my-5">Contact With Us</h2>
            <p className="text-gray-300 mb-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi.
            </p>
            <div className="flex">
              <h2 className="text-gray-300">
                <FontAwesomeIcon icon={faPhone} />
              </h2>
              <h2 className="ms-4 text-gray-300">+88 01750 14 14 14</h2>
            </div>
            <div className="flex mt-5">
              <h2 className="text-gray-300">
                <FontAwesomeIcon icon={faLocationDot} />
              </h2>
              <h2 className="ms-5 text-gray-300">
                Dhanmondi, Dhaka, Bangladesh
              </h2>
            </div>
          </div>
          <div>
            <form action="">
              <div className="flex justify-between mb-8 w-full">
                <div className="w-[48%]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
                <div className="w-[48%]">
                  <input
                    type="text"
                    placeholder="Email"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
              </div>
              <div className="flex justify-between mb-8 w-full">
                <div className="w-[48%]">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
                <div className="w-[48%]">
                  <input
                    type="text"
                    placeholder="Doctor Name"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
              </div>
              <div className="flex justify-between mb-8 w-full">
                <div className="w-[48%]">
                  <input
                    type="date"
                    placeholder="Date"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
                <div className="w-[48%]">
                  <input
                    type="text"
                    placeholder=" Time"
                    className="text-white rounded-lg px-4 py-4 w-full bg-[#153f3c]"
                  />
                </div>
              </div>
              <button className="text-white w-full my-3 px-5 py-2 rounded bg-[#F7A582] text-xl">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
