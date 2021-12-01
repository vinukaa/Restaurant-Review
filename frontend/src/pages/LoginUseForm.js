// import { useState, useEffect } from "react";

// const LoginUseForm = (callback, validate) => {
//     const [values, setValues] = useState({
//         username: '',
//         password: ''
//     });
//     // const [errors, setErrors] = useState({});

    // const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleClicks = e => {
//         console.log("user: ")
//         const { name, value} = e.target
//         setValues({
//             ...values,
//             [name]: value
//         });
        
//     };



// const userLogin = (e) => {
//     // e.preventDefault()
//     console.log("username",values.userName)
//     // if(values.userName!=="" && values.email!=="" && values.password!=="" && values.password2!==""){
//     //     console.log("name: ")
//         const FormSignup = {userName:values.username,password:values.password}
//     console.log(FormSignup)
//     fetch("http://localhost:8085/user/login",{
//       method: "POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(FormSignup)
//     // FormSignup
//     }).then(response => response.JSON).then(data => {
//       console.log(data);
//     }) 
//     // }
//   }

  
//   const buttonSubmit = e => {
//     e.preventDefault();

//     console.log("buttonSubmit:")
//     console.log(values)

    // setErrors(validate(values));
    // setIsSubmitting(true);
    // if (isSubmitting === true){
    //     console.log("check API call: ");
    //    userLogin();


    // }
// };


// useEffect(() =>{
//     if(Object.keys(errors).length === 0 && isSubmitting){
//         callback();
//     }
// }, [errors]
// );

// return{ handleClicks, values, buttonSubmit};

// };


// export default LoginUseForm;
