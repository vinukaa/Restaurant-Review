import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import resImage from "../images/img-2.svg";
import Login from "./Login";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img className="sign-up-image" src={resImage} alt="resturant"></img>
        </div>
        {!isSubmitted ? <Login submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default LoginForm;
