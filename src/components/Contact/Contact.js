import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <form id="#contact" className="form-container" action="" method="post">
      <ul className="form-ul">
        <h1 className="contact-h1">Contact Us</h1>
        <li className="form-li">
          <lable className="label" for="fname">
            First name:{" "}
          </lable>
          <input
            className="input"
            type="text"
            id="fname"
            name="user-fname"
            required
          />
        </li>
        <li className="form-li">
          <lable className="label" for="lname">
            Last name:{" "}
          </lable>
          <input
            className="input"
            type="text"
            id="lname"
            name="user-lname"
            required
          />
        </li>
        <li className="form-li">
          <lable className="label" for="email">
            Email:{" "}
          </lable>
          <input
            className="input"
            type="email"
            id="email"
            name="user-email"
            required
          />
        </li>
        <li className="form-li">
          <lable className="label" for="msg">
            Message <span>(optional)</span>:{" "}
          </lable>
          <input
            className="input"
            type="msg"
            id="msg"
            name="user-msg"
            required
          />
        </li>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </ul>
    </form>
  );
};

export default Contact;
