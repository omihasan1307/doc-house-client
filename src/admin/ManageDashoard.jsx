import useAllDoctors from "../hooks/useAllDoctors";
import useAllUsers from "../hooks/useAllUsers";
import singleMan from "../img/man.png";
import people from "../img/people.png";
import note from "../img/note.png";
import useAllPayments from "../hooks/useAllPayments";
import PaitentAreaChart from "./PatientAreaChart";
import PatientPieChart from "./PatientPieChart";

const ManageDashoard = () => {
  const [data, refetch, isLoading] = useAllDoctors();
  const [allpayment, loader = isLoading] = useAllPayments();

  const [user = data, ,] = useAllUsers();

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-10 mx-5 my-10">
        <div className="border px-10 py-5 rounded-lg shadow-md">
          <div className="flex items-center ">
            <img className="bg-red-100 p-2 rounded" src={singleMan} alt="" />
            <h1 className="mx-5 text-gray-400 text-5xl font-bold">
              {!isLoading && data?.length}
            </h1>
          </div>
          <hr className="my-5 text-red-200" />
          <h1 className="text-xl ">Doctor's</h1>
        </div>
        <div className="border px-10 py-5 rounded-lg shadow-md">
          <div className="flex items-center ">
            <img className="bg-[#e8fbd2] p-2 rounded" src={people} alt="" />
            <h1 className="mx-5 text-gray-400 text-5xl font-bold">
              {user?.length}
            </h1>
          </div>
          <hr className="my-5 text-red-200" />
          <h1 className="text-xl ">Patient's</h1>
        </div>
        <div className="border px-10 py-5 rounded-lg shadow-md">
          <div className="flex items-center ">
            <img className="bg-[#f7f0b8] p-2 rounded" src={note} alt="" />
            <h1 className="mx-5 text-gray-400 text-5xl font-bold">
              {!isLoading && allpayment?.length}
            </h1>
          </div>
          <hr className="my-5 text-red-200" />
          <h1 className="text-xl ">Appointment</h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mx-5 my-10">
        <div>
          <h1 className="text-xl font-bold text-gray-400">Patient's</h1>
          <hr className="my-5 text-red-200" />
          <PaitentAreaChart />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-400">Appoinment</h1>
          <hr className="my-5 text-red-200" />
          <PatientPieChart />
        </div>
      </div>
    </div>
  );
};

export default ManageDashoard;
