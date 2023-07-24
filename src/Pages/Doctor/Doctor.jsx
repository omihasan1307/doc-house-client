import { Rating } from "@smastrom/react-rating";
import useAllDoctors from "../../hooks/useAllDoctors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [data, refetch, isLoading] = useAllDoctors();

  return (
    <div>
      <div className="my-10">
        {isLoading ? (
          <div className=" flex  justify-center">
            <span className="loading loading-bars loading-lg text-success"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 mt-16 mb-10  ">
            {data?.map((doc) => (
              <div key={doc._id}>
                <div className="border rounded-xl">
                  <div className="my-5 w-[350px] h-[300px]  mx-auto">
                    <img
                      className="object-cover w-full h-full rounded-lg"
                      src={doc?.doctorImg}
                    />
                  </div>
                  <div className="mx-5">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Dr. {doc?.doctorName}
                      </h2>
                      <h2 className="text-gray-400 font-semibold">
                        Specialty : {doc?.doctorSpecialty}
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
                        <FontAwesomeIcon
                          className="text-[#F7A582]"
                          icon={faCalendar}
                        />
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
                      <div className="ms-4 text-gray-500">${doc?.fees}</div>
                    </div>
                    <div>
                      <Link
                        className="text-white w-full my-3 px-5 py-2 rounded bg-[#F7A582] text-xl text-center inline-block"
                        to={`/doctorDetails/${doc._id}`}
                      >
                        <button>View Profile</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctor;
