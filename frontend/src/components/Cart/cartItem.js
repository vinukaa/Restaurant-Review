import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useStyles } from "../../pages/cartStyle";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../constants/constants";

export const CartItem = (props) =>{

    const classes = useStyles();
    const [qty,setQty] = useState(); 
   const  [totalPrice,setTotalPrice] = useState(props.qty * props.price); 
    const [editQty,setEditQty] = useState(true)

    const onChangeValue= (e) =>{
        setQty( e.target.value) 
       setTotalPrice(0)
       setTotalPrice(e.target.value * props.unitPrice)

    }
        /**
         *  update todo 
         */
        const handleUpdate = () => { 
            const data ={ 
                unitPrice:props.unitPrice,
                totalPrice:totalPrice,
                qty:qty
            }
            axios
                .put(`${API_URL}/order/update/` + props.id, data, {
                headers: {
                },
                })
                .then((res) => {
                  console.log('update success')  
                }); 
                
            }

        /**
         * delete order
         */
        const handleDelete = () => {
            axios
            .delete(`${API_URL}/order/delete/` + props.id, {
                headers: { 
                },
            })
            .then((res) => {
               console.log('delete success')
            })
            .catch((error) => {
                console.log("Delete failed! Try Again!");  
            });
        }


    return(
        <div style={{
            width:'80%'
        }}>
            <div className={classes.cartItemContainer}>
                <div>
                    <img src={props.image || 'https://cdn.pixabay.com/photo/2020/02/28/12/43/bibimbap-4887417_1280.jpg'} width='90px' height='90px'/>
                </div>
                <div className={classes.itemName}>{props.name}</div>
                    <div>
                        <span>Quantity : </span>  
                        <input type='number' min='1' value={qty || props.qty} readOnly={editQty} onChange={(e) => onChangeValue(e)}/>
                        <Button onClick={()=> setEditQty(editQty?false:true)}> 
                            {
                                editQty?(
                                    <>
                                        <FaPencilAlt style={{
                                            color:'gray',
                                            marginLeft:10,
                                            height:24,
                                            width:24
                                        }}/>
                                    </>
                                ):(
                                    <>
                                        <FaCheck style={{
                                            color:'green',
                                            marginLeft:10,
                                            height:24,
                                            width:24
                                        }}
                                        onClick={()=>handleUpdate()}
                                        />
                                    </>
                                )
                            }
                            
                        </Button>
                </div>
                <div >Unit price : LKR {props.unitPrice}</div>
                <div className={classes.totalPrice}>Total price : LKR  { totalPrice|| props.totalPrice}</div>
                <div>
                    <Button className={classes.delete} onClick={() =>handleDelete()}><FaTrash/></Button>
                </div>
            </div>
        </div>
    );
} 