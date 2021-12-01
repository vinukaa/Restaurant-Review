import { useState, useEffect } from "react";
import { API_URL } from "../constants/constants";
import axios from 'axios'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [message,setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClick = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value

        });
    };

    const handleClick2 = (e) => {
        // e.preventDefault()
        console.log("username",values.userName)
        if(values.userName!=="" && values.email!=="" && values.password!=="" && values.password2!==""){
            console.log("name: ")
            const FormSignup = {userName:values.username,email:values.email,password:values.password, userRole:"CUSTOMER"}
        console.log(FormSignup)

          axios.post(`${API_URL}/user/signup` , FormSignup, {
                headers: { 
                },
            })
            .then((res) => {
                console.log("New User Added")
            })
            .catch((error) => {
                setMessage("Error! : " + error);  
            });


        // fetch(,{
        //   method: "POST",
        //   headers:{"Content-Type":"application/json"},
        //   body:
        // // FormSignup
        // }).then(() => {
         
        // })
        }
        
      
      }


    const handleSubmit = e => {
        e.preventDefault();


        console.log(values)

        setErrors(validate(values));
        setIsSubmitting(true);
        // if (isSubmitting === true){
        //     console.log("check API call: ");
            handleClick2();


        // }
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    }, [errors]
    );
    
    return{ handleClick, values, handleSubmit, errors};

};

export default useForm;