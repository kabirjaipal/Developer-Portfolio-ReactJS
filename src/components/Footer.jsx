import React from "react";
import FooterSocials from "../Settings/FooterSocials";
import "../Styles/Footer.css";

const Footer = ({ page, setPage }) => {
  return (
    <div className="footer">
      <div className="left">
        {FooterSocials.map((item, index) => (
          <a href={item.link} key={index} target={"_blank"}>
            {item.icon}
          </a>
        ))}
      </div>
      <div className="middle">
        <h2>Tech Boy</h2>
      </div>
      <div className="right">
        {["About US", "Contact US"].map((item, index) => (
          <p key={index} onClick={() => setPage(item)} > {item} </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
