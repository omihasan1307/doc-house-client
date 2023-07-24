import axios from "axios";
import useAllUsers from "../hooks/useAllUsers";
import { enqueueSnackbar } from "notistack";

const AllUsers = () => {
  const [data, refetch, isLoading] = useAllUsers();

  const handleDelete = (user) => {
    axios
      .delete(
        `https://doc-house-server-omihasan1307.vercel.app/users/${user?._id}?userUid=${user?.userUid}`
      )
      .then(() => {
        refetch();
        enqueueSnackbar(`Hi , Your doctor Deleted Successfully `, {
          variant: "success",
        });
      });
  };
  const handleUpate = (user) => {
    if (user?.role === "patient") {
      axios
        .patch(
          `https://doc-house-server-omihasan1307.vercel.app/users/${user?._id}`
        )
        .then(() => {
          refetch();
          enqueueSnackbar(`Hi , Your doctor updated Successfully `, {
            variant: "success",
          });
        });
    } else {
      alert("admin");
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold mx-10 my-10">All User's</h1>
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
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data?.map((user, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className=" space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user?.userPhoto}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.userName}</td>
                    <td>{user?.userEmail}</td>
                    <td>
                      <button
                        onClick={() => handleUpate(user)}
                        className="btn btn-ghost btn-xs uppercase bg-green-500 text-white"
                      >
                        {user?.role}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
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

export default AllUsers;
