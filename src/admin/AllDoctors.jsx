import axios from "axios";
import useAllDoctors from "../hooks/useAllDoctors";
import { enqueueSnackbar } from "notistack";

const AllDoctors = () => {
  const [data, refetch, isLoading] = useAllDoctors();
  const handleDelete = (doc) => {
    axios
      .delete(`http://localhost:5000/doctorList/${doc?._id}?uid=${doc?.uid}`)
      .then((data) => {
        refetch();
        enqueueSnackbar(`Hi , Your doctor Deleted Successfully `, {
          variant: "success",
        });
      });
  };
  return (
    <div>
      <h1 className="text-xl font-bold mx-10 my-10">All Doctor's</h1>
      <div>
        {isLoading ? (
          <div className=" flex  justify-center">
            <span className="loading loading-bars loading-lg text-success"></span>
          </div>
        ) : (
          <div className="overflow-x-auto mb-20">
            <table className="table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Fees</th>
                  <th>Specialty</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data?.map((doc, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className=" space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={doc?.doctorImg}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{doc?.doctorName}</td>
                    <td>{doc?.doctorEmail}</td>
                    <td>{doc?.fees}</td>
                    <td>{doc?.doctorSpecialty}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(doc)}
                        className="btn btn-ghost btn-xs uppercase bg-red-500 text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDoctors;
