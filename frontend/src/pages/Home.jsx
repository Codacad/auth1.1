import React, {useContext} from "react";
import MomentRelax from "../assets/undraw_a_moment.svg";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext/AuthContext";
const Home = () => {

  return (
    <>
      <div className="home w-[70%] flex m-auto py-8 px-4 items-center">
        <div className="img">
          <img src={MomentRelax} alt="" />
        </div>
        <div className="text flex flex-col items-end gap-4">        
          <h1 className="text-4xl text-gray-900 font-bold">
            Welcome to My Dream
          </h1>
          <h3 className="text-2xl text-orange-700  font-semibold">
            Help me achieve the dream
          </h3>
          <Link
            to={""}
            className="bg-orange-800 py-2 px-8 rounded-md text-white"
          >
            Download Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
