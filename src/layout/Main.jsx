import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="">
      {hideHeaderFooter || <Navbar />}
      <Outlet />
      {hideHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
