import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
  const { google } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    google()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="text-white w-full px-5 py-2 rounded bg-[#F7A582]"
      >
        Google
      </button>
    </div>
  );
};

export default Google;
