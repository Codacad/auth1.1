import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="mt-20">
        <div className="w-[70%] m-auto">
          <div className="header border-b-2 pb-4">
            <Link to={"/"} className="logo block w-40">
              <h1 className="text-2xl font-bold">
                Mohd{" "}
                <span className="text-orange-800 text-2xl font-bold">Rizwan</span>
              </h1>
            </Link>
          </div>
          <div className="links grid grid-cols-2 py-4">
            <ul className="">
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
            </ul>
            <div className="social-icons flex gap-4 justify-end">
              <Link
                className="login font-bold fext-2xl text-gray-700 hover:text-orange-800"
                to={"/login"}
              >
                Facebook
              </Link>
              <Link
                className="register font-bold fext-2xl text-gray-700 hover:text-orange-800"
                to={"/register"}
              >
                Instagram
              </Link>
              <Link
                className="register font-bold fext-2xl text-gray-700 hover:text-orange-800"
                to={"/register"}
              >
                Whats App
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
