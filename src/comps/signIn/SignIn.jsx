import { React, useState } from "react";
import "./signIn.scss";

import { Link, useNavigate } from "react-router-dom";
import { account } from "../../backEND/BackEnd";

const SignIn = ({ currentUser, setCurrentUser }) => {
  /**************************************************************/
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  /**************************************************************/

  /**************************************************************/

  /**************************************************************/

  const SignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your details first!");
      return;
    }
    try {
      await account.createEmailSession(email, password);
      setTimeout(() => {
        navigate("/");
        setCurrentUser(!currentUser);
      }, 2000);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        navigate("/login");
        setLogged(false);
        setErrorMessage("邮箱或密码不正确!");
        setPassword("");
        setUsername("");
      }, 2000);
    } finally {
      setLogged(true);
    }
  };
  /**************************************************************/

  /**************************************************************/
  return (
    <div className="login">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div className="card">
        <div className="left">
          <div className="content">
            <h2>
              <span>No account?</span> No problem!
            </h2>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <div class="button">
                <button class="btn">
                  <span></span>
                  <p
                    data-start="good luck!"
                    data-text="Go!"
                    data-title="注册"
                  ></p>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="contentTwo">
            {logged ? (
              <>
                <div class="wrapper">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="shadow"></div>
                  <div class="shadow"></div>
                  <div class="shadow"></div>
                </div>
              </>
            ) : (
              <>
                <div className="login-box">
                  <h1>登陆</h1>
                  {errorMessage && <p>{errorMessage}</p>}
                  <form onSubmit={SignIn}>
                    <div class="user-box">
                      <input
                        type="text"
                        name=""
                        required=""
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label>邮箱</label>
                    </div>
                    <div class="user-box">
                      <input
                        type="password"
                        name=""
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label>密码</label>
                    </div>
                    <center>
                      <button>
                        完成
                        <span></span>
                      </button>
                    </center>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
