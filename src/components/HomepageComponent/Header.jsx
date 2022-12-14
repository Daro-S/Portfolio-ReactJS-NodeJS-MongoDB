import React from "react";
import heroImg from "../../assets/Hero.png";
import Passions from "./Passions";

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="header-profile">
        <div className="text-profile">
          <p id="profile-text">
            <span>Hi!</span>
            <br />
            <b>
              I'm Daro Sim. <br></br>a Front-End Developer
            </b>
          </p>
          <p >
            Front-End devel oper based in Bekasi, Indonesian I’am coding with a
            <br />
            clean and beautiful problem solving in mind.
          </p>
        </div>
          <img src={heroImg} alt="" />
      </div>
    </div>
    </>
  );
};

export default Header;
