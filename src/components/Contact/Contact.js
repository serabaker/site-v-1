import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      `Hello ${firstName} ${lastName}, your submission was successful! We will be in contact shortly.`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <form
      id="contact"
      name="myForm"
      onSubmit={handleSubmit}
      className="form-container"
      // action=""
      // method="post"
    >
      <h2 className="contact-h2">{message}</h2>
      <ul className="form-ul">
        <h1 className="contact-h1">Contact Us</h1>
        <li className="form-li">
          <label className="label" htmlFor="fname">
            First name:{" "}
          </label>
          <input
            className="input"
            type="text"
            id="fname"
            name="user-fname"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              // console.log(event.target.value);
            }}
            required
          />
        </li>
        <li className="form-li">
          <label className="label" htmlFor="lname">
            Last name:{" "}
          </label>
          <input
            className="input"
            type="text"
            id="lname"
            name="user-lname"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              // console.log(event.target.value);
            }}
            required
          />
        </li>
        <li className="form-li">
          <label className="label" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="user-email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              // console.log(event.target.value);
            }}
            required
          />
        </li>
        <li className="form-li">
          <label className="label" htmlFor="msg">
            Message <span>(optional)</span>:
          </label>
          <input
            className="text-area"
            id="msg"
            type="text"
            name="user-msg"
            onChange={(event) => {
              // console.log(event.target.value);
            }}
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
