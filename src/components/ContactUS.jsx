import React, { useState } from "react";
import "../Styles/ContactUS.css";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = { name, email, subject, message };
    console.log(user);
    
  };

  return (
    <div className="contact container">
      <h1>Contact Us</h1>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Subject</label>
        <input
          type="text"
          placeholder="Form Subject.."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Subject</label>
        <textarea
          cols="20"
          rows="7"
          placeholder="Write something.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUS;
