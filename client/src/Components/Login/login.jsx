import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";

const LoginPage = ({ setShowlogin }) => {
  const [current, setCurrent] = useState("Login");
  const { url, setTokens } = useContext(StoreContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((data) => ({ ...data, [name]: value }));
  };
  console.log(userData);

  const submitData = async (e) => {
    e.preventDefault();
    let newUrl = url;

    if (current === "Login") {
      newUrl += "/api/user/login";
      if (!userData.password) {
        toast.error("Passwords is incorrect");
        return;
      }
    } else {
      newUrl += "/api/user/register";
      if (userData.password !== userData.confirmpassword) {
        toast.error("Passwords do not match");
        return;
      }
    }

    const response = await axios.post(`${newUrl}`, userData);
    if (response.data.success) {
      setTokens(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      setShowlogin(false);
    } else {
      // alert(response.data.message)
      toast.error(response?.data?.message || "An error occurred.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowlogin(false); // Automatically close the login page if logged in
    }
  }, [setShowlogin]);

  
  return (
    <div className={styles.login}>
      <form className={styles.loginContainer} onSubmit={submitData}>
        <div className={styles.loginTitle}>
          <DoDisturbIcon
            onClick={() => setShowlogin(false)}
            className={styles.closeIcon}
          />
          <h2>{current}</h2>
        </div>
        <div className={styles.loginInputs}>
          {current === "Login" ? null : (
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={userData.username}
              required
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={userData.email}
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            required
            onChange={handleChange}
          />
          {current === "Login" ? null : (
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              value={userData.confirmpassword}
              required
              onChange={handleChange}
            />
          )}
        </div>

        <button type="submit">
          {current === "Sign up" ? "Create account" : "Login"}
        </button>

        {current !== "Login" ? (
          <div className={styles.loginCondition}>
            <input type="checkbox" required />
            <span style={{ fontSize: "0.7rem" }}>
              {" "}
              <i>By continuing you agree to our privacy policy </i>
            </span>
          </div>
        ) : null}

        {current === "Login" ? (
          <p>
            Create a new account.{" "}
            <small onClick={() => setCurrent("Sign up")}>click here</small>
          </p>
        ) : (
          <p>
            Have an account?{" "}
            <small onClick={() => setCurrent("Login")}>Login</small>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
