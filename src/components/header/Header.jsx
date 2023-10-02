import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogout = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/order">Order</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">WB Book</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5 items-center">
            {user ? (
              <>
                <NavLink to="/profile">
                  <img
                    src={
                      user?.photoURL ||
                      "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                    }
                    alt={user?.displayName || ""}
                    className="w-16 rounded-full border-2"
                  />
                </NavLink>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <ul tabIndex={0} className="menu menu-horizontal px-1">
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
