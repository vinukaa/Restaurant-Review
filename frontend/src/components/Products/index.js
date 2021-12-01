import {React , useState , useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import {ProductContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductButton} from './ProductElements';




const Products = ({heading, data,button}) => {
    
    const history = useHistory(); 

    let [user, setUser] = useState(null);

    useEffect(() => {

        const getUserData = () => {
    
          setUser(JSON.parse(localStorage.getItem("user-info")));
      
        };
    
        getUserData();
    
      }, []);

      const restaurantNavigation = () => {
        history.push("./view-restaurant");
    }

    const loginNavigation = () => {
        history.push("./login");
    }
    
    const gotoRating = () =>{
          const restaurantData ={
            id:data._id,
            name:data.name,
            description:data.description,
            images:data.image,           
          }
         localStorage.setItem("restaurantData",JSON.stringify(restaurantData));
         user ? restaurantNavigation() : loginNavigation();
    }

    return ( 
                     <ProductCard>
                         <ProductImg src={data.image}  />
                         <ProductInfo>
                             <ProductTitle style={{color: "#E1B01E"}}>{data.name}</ProductTitle>
                             <ProductDesc>{data.description}</ProductDesc>                       
                             <ProductButton onClick={() => gotoRating()}>{button}</ProductButton>
                         </ProductInfo>
                     </ProductCard>  
    )
}

export default Products
