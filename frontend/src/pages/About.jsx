import React from "react";
import ShowingSupport from "../assets/undraw_showing.svg";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="about flex w-[70%] m-auto px-4 py-16">
        <div className="img">
          <img src={ShowingSupport} alt="" />
        </div>
        <div className="text px-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-orange-800 text-4xl font-bold mb-4">
            Introduction to ReactJS
          </h1>
          <p>
            Delve into the fundamentals of ReactJS, understanding its core
            concepts such as components, state, and props. Learn how React
            simplifies UI development and enhances user experience.
          </p>
          <Link
            to={""}
            className="bg-orange-800 w-40 text-center mt-4 rounded-md p-2 px-8 text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
