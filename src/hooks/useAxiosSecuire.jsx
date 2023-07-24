import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://doc-house-server-omihasan1307.vercel.app",
});
const useAxiosSecuire = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    instance.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = token;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [instance];
};

export default useAxiosSecuire;
