import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../src/img/doc.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Google from "./Google";
import axios from "axios";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    createUser(data?.email, data?.password)
      .then((result) => {
        updateUser(data?.name, data?.photo)
          .then(() => {
            axios
              .post(
                `https://doc-house-server-omihasan1307.vercel.app/users?uid=${result?.user?.uid}`,
                {
                  userName: data?.name,
                  userEmail: data?.email,
                  userPhoto: data?.photo,
                  userUid: result?.user?.uid,
                  role: "patient",
                }
              )
              .then(() => {});

            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="my-10 mx-10 lg:mx-16 absolute top-0 left-10 lg:left-32">
        <Link
          to="/"
          className="text-white border px-4 py-2 rounded hover:bg-green-900"
        >
          Back to home
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-20  justify-items-center content-center">
        <div className=" bg-[#07332F] min-h-screen flex justify-center items-center ">
          <div className="p-10 lg:p-20">
            <img className="w-full " src={loginBg} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border shadow-xl rounded px-10 py-10 lg:w-full ">
            <div>
              <h2 className="text-3xl font-bold text-left w-full">
                Sign Up to Doc House
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full ">
                <div className="mb-5">
                  <label className="font-semibold mx-2">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Your Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      This Name field is required
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <label className="font-semibold mx-2">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      This Email field is required
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <label className="font-semibold mx-2">Photo URL</label>
                  <input
                    {...register("photo", { required: true })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="text"
                    name="photo"
                    placeholder="Enter Your Photo"
                  />
                  {errors.photo && (
                    <span className="text-red-500">
                      This Photo field is required
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <label className="font-semibold mx-2">Password</label>
                  <input
                    {...register("password", { required: true, minLength: 6 })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="password"
                    name="password"
                    required
                    placeholder="Enter Your Password"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">
                      This password field is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Password must be 6 digit
                    </span>
                  )}
                </div>
                <div>
                  <input
                    className="text-white w-full px-5 py-2 rounded bg-[#F7A582]"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="divider">OR</div>
              <div>
                <Google />
              </div>
              <p className="mt-3 font-semibold">
                Already an user?{" "}
                <Link to="/login" className="text-[#F7A582]">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
