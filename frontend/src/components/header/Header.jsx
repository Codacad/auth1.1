import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = ({ user, setUser }) => {
    const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <header className="w-[70%] m-auto border-b-2">
        <nav className="flex justify-between items-center p-4">
          <NavLink to={"/"} className="logo">
            <h1 className="text-2xl font-bold">
              Mohd{" "}
              <span className="text-orange-800 text-2xl font-bold">Rizwan</span>
            </h1>
          </NavLink>
          <ul className="flex gap-8">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `text-lg hover:text-orange-800 ${
                    isActive ? "text-orange-800 font-bold" : "text-gray-700"
                  }`;
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `text-lg hover:text-orange-800 ${
                    isActive ? "text-orange-800 font-bold" : "text-gray-700"
                  }`;
                }}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `text-lg hover:text-orange-800 ${
                    isActive ? "text-orange-800 font-bold" : "text-gray-700"
                  }`;
                }}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  className={({ isActive }) => {
                    return `text-lg hover:text-orange-800 ${
                      isActive ? "text-orange-800 font-bold" : "text-gray-700"
                    }`;
                  }}
                  to={"/github"}
                >
                  Github
                </NavLink>
              )}
            </li>
          </ul>
          {user ? (
            <div className="buttons flex items-center gap-4">
              <span>{user && user.user.email}</span>
              <Link
                onClick={handleLogout}
                to={"/login"}
                className="logout bg-orange-800 px-4 py-2 text-yellow-50 rounded-sm"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="buttons flex items-center gap-4">
              <Link className="login" to={"/login"}>
                Login
              </Link>
              <Link
                className="register py-2 px-8 rounded-md shadow-sm bg-orange-800 text-white"
                to={"/register"}
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
