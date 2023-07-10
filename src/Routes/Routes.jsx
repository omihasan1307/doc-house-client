import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Error from "../Pages/Error/Error";
import DoctorDetails from "../Pages/Home/DoctorDetails";
import Dasboard from "../admin/Dasboard";
import AddDoctor from "../admin/AddDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "appoinment",
        element: <Appoinment />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "doctorDetails",
        element: <DoctorDetails />,
      },
      {
        path: "dashboard",
        element: <Dasboard />,
        children: [
          {
            path: "addDoctor",
            element: <AddDoctor />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
