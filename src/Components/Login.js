import React from "react";
import facebookLogo from "../images/facebook.png";
import facebookTextLogo from "../images/facebook-text-logo.png";
import "../css/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider, provider2 } from "../firebase";
import { useStateValue } from "../Contexts/StateProvider";
import { actionTypes } from "../Contexts/Reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  const signIn2 = () => {
    auth
      .signInWithPopup(provider2)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={facebookLogo} alt="Facebook logo" />
        <img src={facebookTextLogo} alt="Facebook text logo" />
        <Button className="login__button--fb" type="submit" onClick={signIn}>
          Facebook Sign in
        </Button>
        <Button
          className="login__button--google"
          type="submit"
          onClick={signIn2}>
          Google Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
