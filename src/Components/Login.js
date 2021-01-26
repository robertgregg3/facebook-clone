import React from "react";
import facebookLogo from "../images/facebook.png";
import facebookTextLogo from "../images/facebook-text-logo.png";
import "../css/Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__container">
        <img src={facebookLogo} alt="Facebook logo" />
        <img src={facebookTextLogo} alt="Facebook text logo" />
        <Button className="login__button" type="submit" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
