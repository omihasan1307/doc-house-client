import { Rating } from "@smastrom/react-rating";
import doctor from "../../img/expertDoctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DoctorDetails = () => {
  return (
    <div>
      <div className="bg-[#07332F] text-white  h-[300px] rounded-es-xl rounded-ee-xl">
        <h1 className="font-bold text-3xl mx-28 py-28">Doctor Profile</h1>
      </div>
      <div className="border flex my-8 rounded-xl shadow-lg">
        <div className="w-[35%] lg:w-[35%] lg:h-[50%] px-4 py-4">
          <img className="h-full w-full object-cover rounded-lg" src={doctor} />
        </div>
        <div className=" lg:ms-5 mt-5">
          <h2 className="text-2xl font-bold">Dr. Ruby Perrin</h2>
          <p className="text-gray-400 mt-1">MBBS, MD - General Medicine</p>
          <p className="text-gray-400 mt-1">age : 35 </p>
          <div className="my-5">
            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
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
          <div className="mt-5">
            <button className="btn btn-outline btn-warning  ">
              Dental Filling
            </button>
            <button className="btn btn-outline btn-warning my-3 lg:my-0 lg:mx-5">
              Teeth Whitneing
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-xl font-bold my-2">About Me</h2>
          <p className="text-gray-600 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl font-bold my-2">Education</h1>
            <div>
              <li className="mx-5 mt-8 font-semibold">
                American Dental Medical University
              </li>
              <p className="mx-10 my-3">
                {" "}
                BDS
                <br /> 1998 - 2003
              </p>
            </div>
            <div>
              <li className="mx-5 mt-3 font-semibold">
                American Dental Medical University
              </li>
              <p className="mx-10 my-3">
                {" "}
                MDS
                <br /> 2003 - 2005
              </p>
            </div>
            <h1 className="text-xl font-bold mb-5 mt-8">Work & Experience</h1>
            <div>
              <li className="mx-5 mt-8 font-semibold">
                Glowing Smiles Family Dental Clinic{" "}
              </li>
              <p className="mx-10 my-3">2010 - Present (5 years)</p>
            </div>
            <div>
              <li className="mx-5 mt-3 font-semibold">
                Comfort Care Dental Clinic
              </li>
              <p className="mx-10 my-3">2007 - 2010 (3 years)</p>
            </div>
            <div>
              <li className="mx-5 mt-3 font-semibold">
                Dream Smile Dental Practice
              </li>
              <p className="mx-10 my-3">2005 - 2007 (2 years)</p>
            </div>
            <h1 className="text-xl font-bold mb-5 mt-8">Services</h1>
            <div>
              <li className="mx-5 mb-2 text-gray-600">Tooth cleaning</li>
              <li className="mx-5 mb-2 text-gray-600">Root Canal Therapy</li>
              <li className="mx-5 mb-2 text-gray-600">Implants</li>
              <li className="mx-5 mb-2 text-gray-600">Composite Bonding</li>
              <li className="mx-5 mb-2 text-gray-600">Fissure Sealants</li>
              <li className="mx-5 mb-2 text-gray-600">Surgical Extractions</li>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold my-2 ">Awards</h1>
            <div>
              <p className="text-gray-700 mx-5 mt-8"> July 2019</p>
              <li className="mt-2 font-semibold">Humanitarian Award</li>
              <p className="text-gray-700 mx-5 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mx-5 mt-8"> March 2011</p>
              <li className="mt-2 font-semibold">
                Certificate for International Volunteer Service
              </li>
              <p className="text-gray-700 mx-5 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mx-5 mt-8"> May 2008</p>
              <li className="mt-2 font-semibold">
                The Dental Professional of The Year Award
              </li>
              <p className="text-gray-700 mx-5 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
            <h1 className="text-xl font-bold mb-5 mt-8">Specializations</h1>
            <div>
              <li className="mx-5 mb-2 text-gray-600">Specializations</li>
              <li className="mx-5 mb-2 text-gray-600">Dental Care</li>
              <li className="mx-5 mb-2 text-gray-600">
                Oral and Maxillofacial Surgery
              </li>
              <li className="mx-5 mb-2 text-gray-600">Orthodontist</li>
              <li className="mx-5 mb-2 text-gray-600">Periodontist</li>
              <li className="mx-5 mb-2 text-gray-600"> Prosthodontics</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
