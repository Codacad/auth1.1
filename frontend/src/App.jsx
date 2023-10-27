import { useContext } from "react";
import AuthContext from "./context/AuthContext/AuthContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Github from "./pages/Github/Github.jsx";
import Contact from "./pages/Contact.jsx";
import Repos from "./pages/Github/Repos.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  const { user } = useContext(AuthContext);
  let isUserAuthenticated = JSON.parse(user);
  return (
    <>
      <Header user={isUserAuthenticated} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route
          path={"/github"}
          element={
            isUserAuthenticated ? <Github /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path={"/github/repos"}
          element={isUserAuthenticated ? <Repos /> : <Navigate to={"/login"} />}
        />
        <Route
          path={"/login"}
          element={
            isUserAuthenticated ? <Navigate to={"/github"} /> : <Login />
          }
        />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
