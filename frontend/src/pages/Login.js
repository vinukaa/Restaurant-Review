import React, {useState, useEffect} from "react";
// import LoginUseForm from "./LoginUseForm";
// import validate from "./validateInfo";
import "./Form.css";
// import resImage from "../images/img-2.svg";
import { useHistory } from "react-router";
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { API_URL } from "../constants/constants";
// const Login = ({ submitForm }) => {
//   const { handleClicks, values, buttonSubmit } = LoginUseForm(submitForm, validate);
 
 function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(""); 
    const history = useHistory();

    const [show, setShow] = useState(false);
    const [IsError, setIsError] = useState("");
    const [message, setMessage] = useState('');

    
    useEffect(() => {
      if(localStorage.getItem('user-info')){
        history.push("/login")
      }
    }, [])



    // const handleClicks = (e) => {
    //   if (e.target.name === "username") {
    //     setUserName(e.target.value);
    //   } else if (e.target.name === "password") {
    //     setPassword(e.target.value);
    //   }
    // };
  
    async function userLoginBleh () {
    
        console.warn(userName, password)
        let item = {userName, password};

        if(userName == "admin" && password =="admin" ){
          history.push("/admin")
        }else{
          try{
            let result = await axios.post(`${API_URL}/user/signin/` , item, {
                headers: { 
                },
            })
            .then((res) => {
               setMessage('sign in success') 
                localStorage.setItem("user-info",JSON.stringify(res.data.User))
                setMessage("Login Success")
                setShow(true)
                setIsError(null)
                history.push("/")
            })
            .catch((error) => {
                setMessage("sign in failed! Try Again! Error : " + error);  
            });
          
           
          } catch (e) {
              setMessage(e);
              setShow(true);
              setIsError("error");
    
    
          }
        }
        
          // .then((response) => response.JSON)
          // .then((data) => {
          //   console.log(data);
          // });
      }
    // };

  return (

    // <div className="form-container">
    // <span className="close-btn">x</span>
    // <div className="form-content-left">
    //   <img className="sign-up-image" src={resImage} alt="resturant"></img>
    // </div>

 

    <div className="form-content-right">

      <form className="form">
        <h1>You can log into the system from here.</h1>
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
            // value={userName}
            onChange={(e)=> setUserName(e.target.value)}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
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
            // value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
       
        <button className="form-input-btn" type="button" onClick={userLoginBleh}>
          Log In
        </button>


        {

       show && (
     <>
        { IsError  && ( 
          <>
           <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Error credentials!</Alert.Heading>
              <p>
                    {!message?message:null}
              </p>
            </Alert>
            </>
             ) 
        }
         {    !IsError && (
               <>
               <Alert variant="success" onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>Succesfully logged!</Alert.Heading>
                  <p>
                        {!message?message:null}
                  </p>
                </Alert>
                </>
             )} 

             </>
             
       )
       }
       
  
        
      </form>
    </div>
    // </div>
  );
};

export default Login;
