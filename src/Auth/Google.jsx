import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Google = () => {
  const { google } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    google()
      .then((res) => {
        const user = res.user;
        axios
          .post(
            `https://doc-house-server-omihasan1307.vercel.app/users?uid=${res?.user?.uid}`,
            {
              userName: user?.displayName,
              userEmail: user?.email,
              userPhoto: user?.photoURL,
              userUid: user?.uid,
              role: "patient",
            }
          )
          .then((userData) => {
            console.log("userData", userData);
          });

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
