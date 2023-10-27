import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/secure_login.svg";
import  useAuthContext from "../../context/AuthContext/AuthContext";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { user, setUser } = useContext(useAuthContext);
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5500/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });  
      let data = await response.json();   
      if(data.login){
        localStorage.setItem('user', JSON.stringify(data))
        setUser(localStorage.getItem('user'))       
        setEmail("")
        setPassword("")
        navigate('/github')
      }  else {
        console.log(data.message)
      }        
    } catch (error) {
      console.log(error)
    }    
  };
  return (
    <>
      <div className="login w-[70%] py-8 grid grid-cols-2 items-center justify-between m-auto">
        <div className="img">
          <img src={LoginImg} alt="Register" className="w-[400px] m-auto" />
        </div>
        <form
          onSubmit={handleLogin}
          className="w-[70%] flex flex-col m-auto gap-4 items-center"
        >
          <h1 className="text-4xl font-bold text-orange-800">Login</h1>
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
          <button type="submit" className="bg-orange-800 text-white p-2 block w-full rounded-md text-xl font-semibold">
            Login
          </button>
          <div>
            <span>New to Website?</span>{" "}
            <Link
              className="text-xl text-gray-700 font-bold hover:text-orange-900"
              to={"/register"}
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
