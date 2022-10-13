import React from "react";
import AboutStats from "../Settings/AboutStats";
import Settings from "../Settings/Settings";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about container">
      <h2>About Me</h2>
      <div className="profile">
        <img src={Settings.profile_photo} alt="profile_photo" />
        <div className="info">
          <p> Name : {Settings.name}</p>
          <p> Age : {Settings.Age}</p>
          <p> Birthday : {Settings.Birthday}</p>
          <p> Country : {Settings.Country}</p>
          <p> Degree : {Settings.Degree}</p>
          <p>
            Email : <a href={`mailto:${Settings.Email}`}>{Settings.Email}</a>
          </p>
        </div>
      </div>
      <div className="stats">
        {AboutStats.map((item, index) => (
          <div className="card" key={index}>
            <i>{item.icon} </i>
            <h3>{item.title}</h3>
            <p> {item.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
