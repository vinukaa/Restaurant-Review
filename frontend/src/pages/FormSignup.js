import React, {useState} from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import { useHistory } from 'react-router-dom';


const FormSignup = ({ submitForm }) => {
  const { handleClick, values, handleSubmit, errors } = useForm(submitForm, validate);

  const history = useHistory(); 

  const signin = () => {
      history.push("./login");
  }  

  // const [username, setusername] = useState('')
  // const [email, setemail] = useState('')
  // const [password, setpassword] = useState('')
  // const [password2, setpassword2] = useState('')

  
  
  
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create your account by filling out the information below.</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username} 
            // onChange={(e) => setusername(e.target.value)}
            onChange={handleClick}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            // onChange={(e) => setemail(e.target.value)}
            onChange={handleClick}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            // onChange={(e) => setpassword(e.target.value)}
            onChange={handleClick}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter your password"
            value={values.password2}
            // onChange={(e) => setpassword2(e.target.value)}
            onChange={handleClick}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={handleClick}>
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#" onClick={signin} >here</a>
        </span>
      </form>
    </div>
    
  );
};

export default FormSignup;
