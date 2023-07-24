import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../src/img/doc.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Google from "./Google";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data?.email, data?.password).then(() => {
      Swal.fire({
        title: "User successfully login",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
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
                Sign In to Doc House
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full ">
                <div className="mb-5">
                  <label className="font-semibold mx-2">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="text"
                    name="email"
                    id=""
                    placeholder="Enter Your Email"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      This email field is required
                    </span>
                  )}
                </div>
                <div className="mb-5">
                  <label className="font-semibold mx-2">Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="block border px-4 py-2 mt-2 rounded bg-slate-100 w-full"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter Your Password"
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      This email field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    className="text-white w-full px-5 py-2 rounded bg-[#F7A582]"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <div className="divider">OR</div>
              <div>
                <Google />
              </div>
              <p className="mt-3 font-semibold">
                New to Doc-House?{" "}
                <Link to="/signup" className="text-[#F7A582]">
                  REGISTER
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
