import alarm from "../../../src/img/alarm.png";
import location from "../../../src/img/location.png";
import call from "../../../src/img/call.png";

const Address = () => {
  return (
    <div className="my-24 max-w-screen-2xl mx-auto px-8 lg:px-0">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="bg-[#07332F] text-white py-16 px-2 flex rounded-lg ">
          <img className=" w-[50px] h-[50px] ms-10" src={alarm} alt="" />
          <div className="mx-8">
            <h2 className="font-bold text-2xl mb-2">Opening Hours</h2>
            <p>
              Open 9.00 am to 5.00pm <br /> Everyday
            </p>
          </div>
        </div>

        <div>
          <div className="bg-[#F7A582] text-white py-16 px-2 flex rounded-lg">
            <img className=" w-[50px] h-[50px] ms-10" src={location} alt="" />
            <div className="mx-8">
              <h2 className="font-bold text-2xl mb-2">Our Locations</h2>
              <p>
                Dhanmondi 17, Dhaka -1200 <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#07332F] text-white py-16 px-2 flex rounded-lg">
            <img className=" w-[50px] h-[50px] ms-10" src={call} alt="" />
            <div className="mx-8">
              <h2 className="font-bold text-2xl mb-2">Contact Us</h2>
              <p>
                +88 01750 00 00 00 <br /> +88 01750 00 00 00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
