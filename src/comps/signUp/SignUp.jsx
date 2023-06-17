import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account, dataBase } from "../../backEND/BackEnd";
import { v4 } from "uuid";
import "./signUp.scss";
/**************************************************************/

const SignUp = () => {
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [logged, setLogged] = useState(false);
  const [details, setDetails] = useState();
  const navigate = useNavigate();

  /**************************************************************/
  const dataBaseID = "6484a4156c1a1f4d0da2";
  const collectionID = "6484a478572b93186f1f";
  /**************************************************************/
  const SignUp = async (e) => {
    e.preventDefault();

    try {
      // Sign Up
      const signUpResponse = await account.create(
        v4(),
        email,
        password,
        displayName
      );
      setDetails(signUpResponse);
      setTimeout(() => {
        setLogged(!logged);
        navigate("/login");
        console.log(details);
      }, 1500);

      // im creating a document in the database
      const promise = dataBase.createDocument(dataBaseID, collectionID, v4(), {
        names: displayName,
      });
      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    } catch (error) {
      setTimeout(() => {
        setLogged(false);
        navigate("/register");
        setErrorMessage("该邮箱已被注册!");
      }, 2000);
    } finally {
      setLogged(true);
    }
  };
  /**************************************************************/

  /**************************************************************/

  /**************************************************************/

  return (
    <div className="register">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div className="card">
        <div className="left">
          <div className="content">
            <div>
              <h1>Sign Up Today!</h1>
            </div>

            <div class="button">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div>
                  <h3>已有账号?</h3>;
                  <button class="btn">
                    <span></span>
                    <p
                      data-start="good luck!"
                      data-text="Go!"
                      data-title="登陆"
                    ></p>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="contentTwo">
            {logged ? (
              <div class="gearbox">
                <div class="overlay"></div>
                <div class="gear one">
                  <div class="gear-inner">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                  </div>
                </div>
                <div class="gear two">
                  <div class="gear-inner">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                  </div>
                </div>
                <div class="gear three">
                  <div class="gear-inner">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                  </div>
                </div>
                <div class="gear four large">
                  <div class="gear-inner">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="login-box">
                  <div className="rules">
                    <h3>
                      请注意，我们强烈建议您不要使用个人电子邮件地址来注册我们的应用。我们鼓励您创建一个专门用于此目的的新电子邮件帐户，以增强您的隐私和安全性
                    </h3>
                  </div>
                  {errorMessage && <p>{errorMessage}</p>}
                  <h1>注册</h1>
                  <form onSubmit={SignUp}>
                    <div class="user-box">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label>邮箱</label>
                    </div>
                    <div class="user-box">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label>密码</label>
                    </div>
                    <div class="user-box">
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label>用户名</label>
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

export default SignUp;
