import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FoodButton, FoodCard, FoodDesc, FoodImg, FoodInfo, FoodTitle } from "./OrderFoodsElements";
import { Order } from "./OrderPage";

export const OrderComponent=(food,index)=>{ 

    let [user, setUser] = useState(null);
    let [openPopUP, setOpenPopup] = useState(false);
    const history = useHistory(); 

      useEffect(() => {

        const getUserData = () => {
    
          setUser(JSON.parse(localStorage.getItem("user-info")));
    
        };
    
        getUserData();
    
      }, []);

    const restaurantNavigation = () => {
          
    }


    return(
         <FoodCard key={index}>
                         <FoodImg src={food.food.img} alt={food.alt} />
                         <FoodInfo>
                             <FoodTitle>{food.food.name}</FoodTitle>
                             <FoodDesc>LKR {food.food.desc}</FoodDesc>                
                             <FoodButton onClick={() => user ? setOpenPopup(true): history.push("./login")} >{food.food.button}</FoodButton>
                         </FoodInfo>
                        <Order price={food.food.desc} id={food.food.id} image={food.food.img} name={food.food.name} openPopUP={openPopUP} setOpenPOpup={setOpenPopup}/>
            </FoodCard>
    )
}