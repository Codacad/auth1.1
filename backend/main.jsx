import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Github from "./pages/Github/Github.jsx";
import Contact from "./pages/Contact.jsx";
import Repos from './pages/Github/Repos.jsx'
import { GhProfile, GhRepos } from "./pages/Github/Apis.jsx";
import "./index.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/github", element: <Github />, loader:{GhProfile} },
      { path: "/github/repos", element: <Repos />, loader:{GhRepos} },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
