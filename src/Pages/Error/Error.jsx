import { Link } from "react-router-dom";
import error from "../../../src/img/error.png";

const Error = () => {
  return (
    <div className="text-center my-20">
      <h1 className="font-bold text-5xl mb-4">Sorry</h1>
      <p className="text-gray-400">This page is not Found</p>
      <img className="mx-auto" src={error} alt="" />
      <Link to="/">
        {" "}
        <button className="text-white  px-5 py-2 rounded bg-[#F7A582]">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;
