import React from "react";
import Settings from "../Settings/Settings";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1> {Settings.name} </h1>
      <p> {Settings.position} </p>
      <img src={Settings.profile_photo} alt="profile_pic" />
      <p className="header_para">
        I Am A Full-Stack Developer. I Have Always Been Interested In Computer
        Programming And Have Always Been Curious About Different Technologies. I
        Am Currently Learning MERN Stack, JavaScript, HTML, C , C++, Python, And
        CSS And Am Confident Enough To Learn New Things And Develop My Soft
        Skills And Problem-Solving Skills. I Enjoy The Process Of Converting
        Complex Code Into Simple And Build Effective Web Applications. I Am A
        Quick Learner And Disciplined. I Have Good Knowledge Of The JavaScript
        Programming Language, Data Structures, And Algorithms With Problem
        Solving Skills.
      </p>
    </div>
  );
};

export default Header;
