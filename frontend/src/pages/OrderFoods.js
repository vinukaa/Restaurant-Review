import {React , useState , useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import { OrderComponent } from './foodItem';
import {FoodContainer, FoodWrapper, FoodsHeading, FoodTitle, FoodCard, FoodImg, FoodInfo, FoodDesc, FoodButton, ButtonContainer, Button} from './OrderFoodsElements';
import { Order } from './OrderPage';




const Foods = ({heading, data}) => {
    
    const history = useHistory(); 

    let [item,setItem] = useState();

    const addres = () => {
        history.push("./cart");
    }


    return (
        <FoodContainer>
             <ButtonContainer>
                        <Button onClick={addres}>Cart</Button>
             </ButtonContainer>
           <FoodsHeading>{heading}</FoodsHeading>  
           <FoodWrapper>
             {data.map((food, index) => {
                 return( 
                            <OrderComponent food={food} index={index}/> 
                 )
             })}  
            </FoodWrapper>
        </FoodContainer>
    )
}

export default Foods
