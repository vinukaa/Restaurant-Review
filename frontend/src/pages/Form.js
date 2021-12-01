import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import resImage from "../images/img-2.svg";
import image1 from "../images/restaurant-1.jpg";



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      
      <div style={{
        backgroundImage: `url(${image1})`, height: `100vh`,
        backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`
      }}>

          <br /><br /><br /><br /><br />
        <div className="form-container">
          <span className="close-btn">x</span>
          <div className="form-content-left">
            <img className="sign-up-image" src={resImage} alt="resturant"></img>
          </div>

          {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
        
      </div>
      </div>
    
  );
};

export default Form;
