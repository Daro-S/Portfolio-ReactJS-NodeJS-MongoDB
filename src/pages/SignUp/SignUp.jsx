import React from "react";

import "../SignIn/SignIn.css";
import closeCircle from "../../assets/Signin&upImg/close-circular-button-symbol.png";

const SignUp = () => {
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
          <span>Have an Account? <a href="#"><p1>Sign in</p1></a></span>
        </div>
        <div className="login-signin">
          Sign Up
        </div>
        <div className="login-input">
          <label htmlFor="" className="input">
          Enter your username or email address 
          </label>
          <br />
          <input type="text" placeholder="  Username or email address" />
          <br />
          <div className="user-name-tel">
          <div className="on-top">
          <label htmlFor="" className="input">
          User name
          </label>
          <br />
          <br />
          <input type="text" placeholder="  Username" />
          <br /><br />
          </div>
          <div className="on-top">
          <label htmlFor="" className="input">
          Contact Number
          </label>
          <br />
          <br />
          <input type="text" placeholder="  Phone number" />
          <br /><br />
          </div>
          </div>
          <label htmlFor="" className="input" >
            Enter your password
          </label>
          <br />
          <input type="password" placeholder="   password" />
          <br /><br />
          <button className="submit-btn">
            Sign up
          </button>
        </div>
      </div>
      </div>
        </div>
        <div class="card"> 
        <button><img src={closeCircle} alt="" /></button>
    <div class="card_img"> 
        <img id="profile" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image"/>
    </div>
    <div class="card_info"> 
        <h2>Doggy</h2>
        <p>Active 2 days ago</p>
    </div>
</div>
    </div>
  );
};

export default SignUp;
