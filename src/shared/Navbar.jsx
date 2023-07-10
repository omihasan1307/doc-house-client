import { NavLink } from "react-router-dom";
import logo from "../../src/img/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const active =
    "bg-[#F7A582] px-4 py-2 rounded lg:mx-5 lg:inline inline-block lg:my-0 my-1 w-full uppercase";
  const inActive =
    "lg:text-white mx-5 inline-block lg:inline inline-block lg:my-0 my-1 w-full uppercase";

  const navItem = (
    <div className="lg:text-white lg:flex items-center ">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appoinment"
          className={({ isActive }) => (isActive ? active : inActive)}
        >
          Appoinment
        </NavLink>
      </li>
      <li>
        {user ? (
          <div className="flex justify-center items-center ">
            <button onClick={handleLogout} className="me-5 uppercase">
              LogOut
            </button>
            <div className="avatar">
              <div title={user?.displayName} className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? active : inActive)}
          >
            Login
          </NavLink>
        )}
      </li>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-[#07332F]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn  lg:hidden rounded-3xl bg-white me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 p-2 shadow text-black border bg-slate-200 rounded-box w-52  "
            >
              {navItem}
            </ul>
          </div>
          <a className="normal-case text-xl text-white  ">
            <div className="lg:mx-4 flex items-center font-bold">
              <img className="w-10" src={logo} alt="" />
              <p className="mx-4 ">
                <span className="text-[#F7A582]">DOC </span> HOUSE
              </p>
            </div>
          </a>
        </div>
        <div className="lg:navbar-end hidden lg:flex mx-5 ">
          <ul className=" px-1">{navItem}</ul>
        </div>
        <div className="lg:hidden navbar-end">
          <a className="btn uppercase">login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
