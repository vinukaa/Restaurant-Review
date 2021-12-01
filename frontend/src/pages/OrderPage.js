import React from "react";
import { Checkbox, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';
import { Button, Col, Row } from "react-bootstrap";
import { FoodImg } from "./OrderFoodsElements";
import { useStyles } from "./orderStyle";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { useEffect } from "react";

export const Order= (props) =>{
    
   const classes = useStyles();
   const [orderQty ,setOrderQty] = useState(1)
   const [totalPrice,setTotalPrice] = useState(orderQty * props.price);
   const [restaurant,setRestaurant] = useState()
   const [user,setUser] = useState(localStorage.getItem(JSON.stringify('user-info')))

    useEffect(() => {

        const getUserData = () => {
          const resturentData =  JSON.parse(localStorage.getItem("restaurantData")) 
          setRestaurant(resturentData)
        };
    
        getUserData();
    
      }, []);
     
    useEffect(() => {

        const getUserData = () => {
          const usertData =  JSON.parse(localStorage.getItem("user-info")) 
          setUser(usertData)
        };
    
        getUserData();
    
      }, []);
     
   const onValueChange = (e) =>{
       setOrderQty(e.target.value);
       setTotalPrice(0)
       setTotalPrice(e.target.value * props.price)
   }

    const handleOnSubmit = async (event) => { 
       
        const data={
            hotelId:restaurant.id, 
            itemName:props.name, 
            userId:user._id,
            itemId:props.id,
            unitPrice:props.price,
            totalPrice:totalPrice,
            qty:orderQty

        }
        await axios.post(`${API_URL}/order/add`, data, {
            headers: { 
            },
        });
        props.setOpenPOpup(false)

    };
    return(
       <Dialog open={props.openPopUP} >
            < DialogTitle
            maxWidth='lg'>
                <div>Order</div>
                <hr/>
            </DialogTitle>
            <DialogContent >
                <Row >
                    <Row className={classes.buttonRow}>
                        <Col md={8}>
                            <Typography className={classes.itemName}>{props.name}</Typography>
                             <p className={classes.itemPrice}>LKR {props.price}</p>
                        </Col>
                        <Col md={4} >
                            <Row>
                                <p className={classes.totalPrice}>Quantity :</p>
                                <input type= 'number' value={orderQty} onChange={(e) => onValueChange(e)} min='0'/> 
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row className={classes.centerFlex}> 
                         <img src={props.img || 'https://cdn.pixabay.com/photo/2020/02/28/12/43/bibimbap-4887417_1280.jpg'} width='300px' height='300px'/>
                    </Row>
                    <Row className={classes.buttonRow}>
                        <Col md={6}>
                            <Button className={classes.button} onClick={() => handleOnSubmit()}>Order</Button>
                            <Button className={classes.button}  variant='danger' onClick={() => props.setOpenPOpup(false)}>Cancel</Button>
                        </Col>
                        <Col md={6} >
                           <p className={classes.totalPrice}>Total cost : LKR {totalPrice}</p>
                        </Col>
                    </Row>
                </Row>
                </DialogContent>
        </Dialog>
    )
}