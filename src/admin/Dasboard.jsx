import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

const Dasboard = () => {
  const active = "lg:mx-5  bg-[#F7A582]";
  const inActive = "mx-5 ";

  const navItem = (
    <div className="uppercase ">
      <li>
        <NavLink
          to="allUsers"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          All Users
        </NavLink>
      </li>

      <li className="my-2">
        <NavLink
          to="addDoctor"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Add a Doctor
        </NavLink>
      </li>
      <li className="my-2">
        <NavLink
          to="allDoctors"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Manage Doctors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Home
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-2" className=" lg:hidden">
            <div className="border px-2 py-2 rounded ">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 ">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
