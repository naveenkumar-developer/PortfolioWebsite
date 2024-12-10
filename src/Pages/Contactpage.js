import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../assets/styles/Contactpage.css";

function Contactpage() {
  //SET INITIAL STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    position: "",
    message: "",
  });
const form=useRef();
  //SET ERROR STATE
  const [nameErrorFlag, setNameErrorFlag] = useState(false);
  const [emailErrorFlag, setEmailErrorFlag] = useState(false);
  const [companyErrorFlag, setCompanyErrorFlag] = useState(false);
  const [positionErrorFlag, setPositionErrorFlag] = useState(false);
  const [messageErrorFlag, setMessageErrorFlag] = useState(false);

  //ALERT BOX SHOW

  const [alertBoxOpen, setAlertBoxOpen] = useState(false);
  const [submitBox, setSubmitBoxOpen] = useState(false);

  // SET VALUES STATE USER ENTER THE LETTERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // VALIDATE THE NAME
  const validateName = () => {
    const isValid = formData.name.trim().length > 0;
    setNameErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE THE EMAIL
  const validateEmail = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailPattern.test(formData.email.trim());
    setEmailErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE THE COMPANY NAME
  const validateCompanyName = () => {
    const isValid = formData.company_name.trim().length > 0;
    setCompanyErrorFlag(!isValid);
    return isValid;
  };

  // VALIDATE THE POSITION
  const validatePosition = () => {
    const isValid = formData.position.trim().length > 0;
    setPositionErrorFlag(!isValid);
    return isValid;
  };

  //VALIDATE MESSAGES
  const validateMessage = () => {
    const isValid = formData.message.trim().length >= 25;
    setMessageErrorFlag(!isValid);
    return isValid;
  };

  // CLEAR THE INPUT VALUES AFTER THE SUBMITTED
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCompanyValid = validateCompanyName();
    const isPositionValid = validatePosition();
    const isMessageValid = validateMessage();

    if (
      isNameValid &&
      isEmailValid &&
      isCompanyValid &&
      isPositionValid &&
      isMessageValid
    ) {
      const service_id="service_ri8h3ej";
      const template_id="template_e9k72ru";
      const public_key="dM7GIGSk621njewwi";
      emailjs.sendForm(service_id,template_id, form.current,{
        publicKey:public_key,
      })
      .then(
        ()=>{
          console.log("SUCCESS")
        },
        (error)=>{
          console.log("FAILED...", error.text);
        }
      )
      setFormData({
        name: "",
        email: "",
        company_name: "",
        position: "",
        message: "",
      });
      setAlertBoxOpen(false);
      setSubmitBoxOpen(true);
    } else {
      setAlertBoxOpen(true);
      setSubmitBoxOpen(false);
    }
  };
  return (
    <>
      <div className="contactpage">
        {alertBoxOpen && (
          <div className="errorBox">
            <div className="errorIcon">
              <ErrorIcon />
            </div>
            <h1>Error!</h1>
            <p>Fix the all errors</p>
            <button
              type="button"
              className="closeBtn"
              onClick={() => setAlertBoxOpen(false)}
            >
              CLOSE
            </button>
          </div>
        )}
        {submitBox && (
          <div className="submittedBox">
            <div className="submitIcon">
              <CheckCircleIcon />
            </div>
            <h1>Success!</h1>
            <p>Form submitted successfully</p>
            <button
              type="button"
              className="closeBtn"
              onClick={() => setSubmitBoxOpen(false)}
            >
              CLOSE
            </button>
          </div>
        )}
        <div className="titleContact">
          <h2>Contact</h2>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="contactForm">
          <div className="inputgroup">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              aria-label="name"
              onChange={handleChange}
              required
            />
            {nameErrorFlag && <div className="error">Enter your name</div>}
          </div>
          <div className="inputgroup">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              aria-label="email"
              onChange={handleChange}
              required
            />
            {emailErrorFlag && (
              <div className="error">Enter your correct email address</div>
            )}
          </div>

          <div className="inputgroup">
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              placeholder="Company name"
              aria-label="company name"
              onChange={handleChange}
              required
            />
            {companyErrorFlag && (
              <div className="error">Enter your company name</div>
            )}
          </div>

          <div className="inputgroup">
            <input
              type="text"
              name="position"
              value={formData.position}
              placeholder="position"
              aria-label="position"
              onChange={handleChange}
              required
            />
            {positionErrorFlag && (
              <div className="error">Enter the job title</div>
            )}
          </div>

          <div className="inputgroup">
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              aria-label="message"
              onChange={handleChange}
              required
            />
            {messageErrorFlag && (
              <div className="error">minimum 25 charecters required</div>
            )}
          </div>

          <button type="submit" aria-label="contact submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contactpage;
