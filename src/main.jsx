import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import "@smastrom/react-rating/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    <App />
  </React.StrictMode>
);
