import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Error from "../Pages/Error/Error";
import DoctorDetails from "../Pages/Home/DoctorDetails";
import Dasboard from "../admin/Dasboard";
import AddDoctor from "../admin/AddDoctor";
import AllUsers from "../admin/AllUsers";
import AllDoctors from "../admin/AllDoctors";
import Doctor from "../Pages/Doctor/Doctor";

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
        path: "Doctor",
        element: <Doctor />,
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
        path: "doctorDetails/:id",
        element: <DoctorDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctorDetails/${params.id}`),
      },
      {
        path: "dashboard",
        element: <Dasboard />,
        children: [
          {
            path: "addDoctor",
            element: <AddDoctor />,
          },
          {
            path: "allDoctors",
            element: <AllDoctors />,
          },
          {
            path: "allUsers",
            element: <AllUsers />,
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
