import React from "react";
import ServicesData from "../Settings/ServicesData";
import "../Styles/Services.css";

const Services = () => {
  return (
    <div className="services container">
      <h1>Services</h1>
      <div className="services">
        {ServicesData.map((item, index) => (
          <div key={index} className="service">
            <p> {item} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
