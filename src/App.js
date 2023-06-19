import { React, useState, useEffect } from "react";
import Error from "./images/Oopsbutton-removebg-preview.png";
import "./app.scss";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from "./comps/navbar/Navbar.jsx";
import Leftbar from "./comps/leftbar/Leftbar.jsx";
import Home from "./comps/home/Home.jsx";
import OlloJ from "./comps/olloJ/OlloJ.jsx";
import SignUp from "./comps/signUp/SignUp.jsx";
import SignIn from "./comps/signIn/SignIn.jsx";
import "./App.css";
import { AuthProvider } from "./local/Local.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("userToken") || false
  );

  /************************************************************/
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userToken", currentUser);
    } else {
      localStorage.removeItem("userToken");
    }
    console.log(currentUser);
  }, [currentUser]);
  /************************************************************/
  const Layout = () => {
    return (
      <div>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  /****************/

  const Users = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  /****************/

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Users>
          <Layout />
        </Users>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <OlloJ /> },
      ],
    },
    {
      path: "/login",
      element: (
        <SignIn setCurrentUser={setCurrentUser} currentUser={currentUser} />
      ),
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);
  /************************************************************/

  return (
    <AuthProvider>
      <div className="app">
        <div className="error">
          <img src={Error} alt="pic" />
          <h2>
            对不起，
            <br />
            此页面无法在手机上打开
          </h2>
        </div>

        <div className="main">
          <RouterProvider router={router} />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
