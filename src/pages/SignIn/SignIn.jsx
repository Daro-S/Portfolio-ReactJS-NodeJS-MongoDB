import React from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";
import google from "../../assets/Signin&upImg/google.png";
import faceBook from "../../assets/Signin&upImg/facebook.png";
import apple from "../../assets/Signin&upImg/apple.png";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="logo">WeChii</div>
        <div className="header">
          
        <div className="text-container">
        <p><span id="header">Sign in to </span><br /> Lorem Ipsum is simply</p> 
        <span>
          Lorem Ipsum is simply dummy text of the printing and <br /> typesetting 
          industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever
          since the 1500s,
        </span>
      </div>
      <div className="seperator"></div>
      <div className="login-container">
        <div className="login-elements">
        <div className="login-header-text">
          <p1>Welcome to <span>WeChii</span></p1>
          <span>No Account? <a id= "link" href="#">
            <Link to={'/signup'}>
            <p1>Sign up</p1>
            </Link>
            </a></span>
        </div>
        <div className="login-signin">
          Sign in
        </div>
        <div className="signin-btn">
          <button className="google">
            <img src={google} alt="" /> 
            <p>Sign in with Google</p>
          </button>
          <div className="small-btn">
          <button className="facebook" id="FA-icon">
            <img src={faceBook} alt="" id="icon"/>
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="apple" id="FA-icon">
            <img src={apple} alt="" id="icon" />
          </button>
          </div>
        </div>
        <div className="login-input">
          <label htmlFor="" className="input">
          Enter your username or email address 
          </label>
          <br />
          <input type="text" placeholder="  Username or email address" />
          <br /><br />
          <label htmlFor="" className="input" >
            Enter your password
          </label>
          <br />
          <input type="password" placeholder="   password" />
          <a href="#"><span>Forgot Password</span></a>
          <Link to="/">
            <button className="submit-btn">
              Sign in
            </button>
            </Link>
        </div>
      </div>
      </div>
        </div>
    </div>
  );
};

export default SignIn;
