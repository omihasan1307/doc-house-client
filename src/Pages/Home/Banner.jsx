import { Link } from "react-router-dom";
import banner from "../../../src/img/banner.png";
import circle from "../../../src/img/Ellipse 1.png";
import tablet from "../../../src/img/tablet.png";

const Banner = () => {
  return (
    <div className="bg-[#07332F] text-white">
      <div className="grid lg:grid-cols-2 gap-14 px-10 lg:h-[600px] lg:pt-20 max-w-screen-2xl mx-auto">
        <div className="text-center lg:text-left  h-[75%]">
          <h2 className="mt-20 font-semibold text-5xl">
            Your Best Medical <br /> Help Center
          </h2>
          <p className="mb-10 mt-5">
            At Doc House Dental Hospital, we are dedicated to bringing you
            top-notch dental care with a modern twist. Our cutting-edge online
            appointment system makes it easier than ever for patients to access
            our expert dental services.
          </p>
          <Link
            to="/appoinment"
            className="text-white px-5 py-2 rounded bg-[#F7A582]"
          >
            Appoinment
          </Link>
        </div>
        <div className="flex justify-center items-center ">
          <div className="">
            <img
              className="lg:w-[35%] pb-20 lg:absolute top-20 mt-20  lg:-ms-20"
              src={banner}
              alt=""
            />
            <div className="hidden lg:block">
              <img className=" lg:w-[60%] lg:ms-28 " src={circle} alt="" />
              <img className=" lg:w-[10%] lg:mx-6 " src={tablet} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
