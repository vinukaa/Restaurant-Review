import React, { useEffect, useState } from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { GlobalStyle } from "../globalStyles";
import { productData } from "../components/Products/data";
import axios from "axios";
import { API_URL } from "../constants/constants";
import {ProductContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductButton} from '../components/Products/ProductElements';
import { useHistory } from "react-router-dom";


export const Home =()=>{

    const [restaurantData , setRestaurantData] = useState([]);
    const history = useHistory(); 
    let [user, setUser] = useState(null);

    useEffect(() => {

        const getUserData = () => {
    
          setUser(JSON.parse(localStorage.getItem("user-info")));
          localStorage.removeItem('restaurantData');
    
        };
    
        getUserData();
    
      }, []);

      const restaurantNavigation = () => {
        history.push("./view-restaurant");
    }

    const loginNavigation = () => {
        history.push("./login");
    }
    

     useEffect(() => {
        const getFileList = async () => {
        try {
            const  restData  = await axios.get(`${API_URL}/restaurant/get`, {
                headers: { 
                },
            }); 
            setRestaurantData(restData.data);
            console.log(restData.data);
        } catch (error) {
            error.response && console.log(error.response.data);
            console.log(error);
        }
        };

        getFileList();

        
    }, [restaurantData]);

    
    return(
        <> 
         <GlobalStyle />
          <Hero />
           <ProductContainer>
                <ProductsHeading>Top rated Restaurants</ProductsHeading>  
                <ProductWrapper> 
                    {restaurantData.map((item) =>
                        <>
                        {console.log(item)}
                        <Products data={item} heading='Top rated restaurants' button='Rate Here'/>
                        </>
                    )}
                    
                </ProductWrapper>
                </ProductContainer>
          <Feature />
          <Footer />
        </>
    );
}