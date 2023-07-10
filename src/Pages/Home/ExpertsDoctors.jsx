import { Rating } from "@smastrom/react-rating";
import expertDoc from "../../img/expertDoctor.png";
import Title from "../../shared/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ExpertsDoctors = () => {
  return (
    <div>
      <Title
        title={"Our Expert Doctors"}
        subtitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></Title>
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 mt-16 mb-10 lg:mx-10">
        <div className="border rounded-xl">
          <div className="my-5">
            <img className="mx-auto w-[90%]" src={expertDoc} alt="" />
          </div>
          <div className="mx-5">
            <div>
              <h2 className="text-xl font-semibold">Karyen Anderson</h2>
              <h2 className="text-gray-400 font-semibold">
                BTP - Senior Physiotherapist
              </h2>
              <div className="my-5">
                <Rating style={{ maxWidth: 100 }} value={5} readOnly />
              </div>
              <hr />
            </div>
            <div className="flex mt-5 mb-3">
              <div>
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faLocationDot}
                />
              </div>
              <div className="ms-5 text-gray-500">
                Dhanmondi, Dhaka, Bangladesh
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon className="text-[#F7A582]" icon={faCalendar} />
              </div>
              <div className="ms-5 text-gray-500">
                Available On Mon, 22 December
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faMoneyCheckDollar}
                />
              </div>
              <div className="ms-4 text-gray-500">$15</div>
            </div>
            <div className="text-white w-full my-3 px-5 py-2 rounded bg-[#F7A582] text-xl text-center">
              <Link to="/doctorDetails">View Profile</Link>
            </div>
          </div>
        </div>
        <div className="border rounded-xl">
          <div className="my-5">
            <img className="mx-auto w-[90%]" src={expertDoc} alt="" />
          </div>
          <div className="mx-5">
            <div>
              <h2 className="text-xl font-semibold">Karyen Anderson</h2>
              <h2 className="text-gray-400 font-semibold">
                BTP - Senior Physiotherapist
              </h2>
              <div className="my-5">
                <Rating style={{ maxWidth: 100 }} value={5} readOnly />
              </div>
              <hr />
            </div>
            <div className="flex mt-5 mb-3">
              <div>
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faLocationDot}
                />
              </div>
              <div className="ms-5 text-gray-500">
                Dhanmondi, Dhaka, Bangladesh
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon className="text-[#F7A582]" icon={faCalendar} />
              </div>
              <div className="ms-5 text-gray-500">
                Available On Mon, 22 December
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faMoneyCheckDollar}
                />
              </div>
              <div className="ms-4 text-gray-500">$15</div>
            </div>
            <button className="text-white w-full my-3 px-5 py-2 rounded bg-[#F7A582] text-xl">
              View Profile
            </button>
          </div>
        </div>
        <div className="border rounded-xl">
          <div className="my-5">
            <img className="mx-auto w-[90%]" src={expertDoc} alt="" />
          </div>
          <div className="mx-5">
            <div>
              <h2 className="text-xl font-semibold">Karyen Anderson</h2>
              <h2 className="text-gray-400 font-semibold">
                BTP - Senior Physiotherapist
              </h2>
              <div className="my-5">
                <Rating style={{ maxWidth: 100 }} value={5} readOnly />
              </div>
              <hr />
            </div>
            <div className="flex mt-5 mb-3">
              <div>
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faLocationDot}
                />
              </div>
              <div className="ms-5 text-gray-500">
                Dhanmondi, Dhaka, Bangladesh
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon className="text-[#F7A582]" icon={faCalendar} />
              </div>
              <div className="ms-5 text-gray-500">
                Available On Mon, 22 December
              </div>
            </div>
            <div className="flex mb-3">
              <div>
                {" "}
                <FontAwesomeIcon
                  className="text-[#F7A582]"
                  icon={faMoneyCheckDollar}
                />
              </div>
              <div className="ms-4 text-gray-500">$15</div>
            </div>
            <button className="text-white w-full my-3 px-5 py-2 rounded bg-[#F7A582] text-xl">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsDoctors;
