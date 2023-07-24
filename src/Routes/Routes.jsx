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
import ManageDashoard from "../admin/ManageDashoard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PatientDashboad from "../patient/PatientDashboad";
import Payment from "../Payment/Payment";
import PrivateRoute from "../providers/AuthProviders";
import Paid from "../Payment/Paid";

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
          fetch(
            `https://doc-house-server-omihasan1307.vercel.app/doctorDetails/${params.id}`
          ),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doc-house-server-omihasan1307.vercel.app/bookingList/${params.id}`
          ),
      },

      {
        path: "patient",
        element: <PatientDashboad />,
      },
      {
        path: "dashboard",
        element: (
          <AdminPrivateRoute>
            <Dasboard />
          </AdminPrivateRoute>
        ),
        children: [
          {
            path: "manageDashboard",
            element: <ManageDashoard />,
          },
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
