import React, { useState } from "react";
import RegisterImg from "../../assets/register.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [registerMessage, setRegisterMessage] = useState({});
  let navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5500/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      let data = await response.json();
      if (data.register) {
        navigate("/login");
        return;
      }
      setRegisterMessage(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="register w-[70%] py-8 grid grid-cols-2 items-center justify-between m-auto">
        <div className="img">
          <img src={RegisterImg} alt="Register" className="w-[400px] m-auto" />
        </div>
        <form
          onSubmit={handleRegister}
          className="flex w-[70%] m-auto flex-col gap-4 items-center"
        >
          <h1 className="text-4xl font-bold text-orange-800">Register</h1>
          {!registerMessage.register ? (
            <span className="block w-full text-red-600">
              {registerMessage.message}
            </span>
          ) : (
            <span>{registerMessage.message}</span>
          )}
          <input
            type="text"
            className="w-full border-[1px] outline-[2px] outline-gray-400 border-gray-400 rounded-md text-gray-500 px-4 py-2 text-xl font-[400]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="email"
            className="w-full border-[1px] outline-[2px] outline-gray-400 border-gray-400 rounded-md text-gray-500 px-4 py-2 text-xl font-[400]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
          <input
            type="password"
            className="w-full border-[1px] outline-[2px] outline-gray-400 border-gray-400 rounded-md text-gray-500 px-4 py-2 text-xl font-[400]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="bg-orange-800 text-white p-2 block w-full rounded-md text-xl font-semibold">
            Register
          </button>
          <div>
            <span>Already have an account?</span>{" "}
            <Link
              className="text-xl text-gray-700 font-bold hover:text-orange-900"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
