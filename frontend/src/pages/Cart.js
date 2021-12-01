import { Button, Container, Dialog, DialogContent, DialogTitle, Grid, Paper, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useReducer, useState } from "react";
import { useStyles } from "./cartStyle";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {CartItem} from "../components/Cart/cartItem";
import axios from "axios";
import { API_URL } from "../constants/constants";

export const Cart =() =>{
    const classes = useStyles();
    const history = useHistory();
    const [totalBill,setTotalBill] = useState()
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
    let [item, setItem] = useState([]);

 

    useEffect(() => {
        const getFileList = async () => {
        try { 
            const  restData  = await axios.get(`${API_URL}/order/get/`+user._id, {
                headers: { 
                },
            }); 
            setItem(restData.data.data);
            console.log(restData.data.data);
        } catch (error) {
            error.response && console.log(error.response.data.data);
            console.log(error);
        }
        };

        getFileList();

        
    }, [item]);


    return ( 

         <Dialog open={true} fullScreen='md'>
            <DialogTitle > 
                 <div className={classes.heading}>
                    <div><FaShoppingCart/> Cart</div>
                    <Button className={classes.closeBtn} onClick={() => history.goBack()}>X</Button>
                </div>
            </DialogTitle>
            <DialogContent style={{
                backgroundColor: '#2f0017'
            }}>
                <Paper className={classes.container}>
                <div className={classes.cartTool}> 
                    <Button className={classes.payButton}>Check out</Button> 
                 </div>
                 <hr/>
                 {item.map((data)=> 
                      <CartItem 
                        id={data._id} 
                        qty={data.qty} 
                        name={data.itemName} 
                        totalPrice={data.totalPrice} 
                        unitPrice={data.unitPrice}
                        hotelId = {data.hotelId}
                        userId={data.userId}
                        />             
                    )}
                </Paper>   
            </DialogContent>
        </Dialog> 
    )
}