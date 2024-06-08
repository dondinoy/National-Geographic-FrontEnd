import { NavLink } from "react-router-dom";
// import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { BsSearch } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthConext";
import logoImage from "../../assets/logoImage.avif";

const Navbar = () => {
  const { isLoggedIn, logout, role } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const userNameLocal = localStorage.getItem("user");
  useEffect(() => {
    setUserName(userNameLocal);
  }, [userNameLocal]);

  return (
    <nav className="flex flex-row justify-between bg-slate-100 text-xl text-slate-900 dark:bg-slate-700 dark:text-white shadow-lg  p-4">
      <div className="flex flex-row gap-3">
        <div>
          <NavLink to={"/menu"}>
            <RiMenu2Fill color="black"/>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/search"}>
            <BsSearch color="black"/>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <NavLink to="/articles">
          <img src={logoImage} />
        </NavLink>
      </div>

      <div className="flex flex-row gap-2">
        {!isLoggedIn && <NavLink className={"text-black"} to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink className={"text-black"} to="/register">Register</NavLink>}
        {isLoggedIn && "" + userName + ""}
        {isLoggedIn && (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
