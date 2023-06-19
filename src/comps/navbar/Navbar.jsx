import { React, useEffect, useState } from "react";
import "./navbar.scss";
import { GrLogout } from "react-icons/gr";
import Logo1 from "../../images/logo.png";
import Logo2 from "../../images/kids.png";
import { account } from "../../backEND/BackEnd";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = ({ currentUser, setCurrentUser }) => {
  /**************************************************************/
  const [user, setUser] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  /**************************************************************/
  const getUserData = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      console.log("Error retrieving user data:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  /**************************************************************/
  const handleSignOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
      setCurrentUser(!currentUser);
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  /**************************************************************/
  const toggleMenu = () => {
    setMenu(true);
  };
  /**************************************************************/
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo-container">
          <img className="one" src={Logo1} alt="Logo 1" />
          <img className="logo" src={Logo2} alt="Logo 2" />
        </div>

        <div className="user-info">
          <h2 className="username">{user.name}</h2>
          <GrLogout className="logout-icon" onClick={handleSignOut} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
