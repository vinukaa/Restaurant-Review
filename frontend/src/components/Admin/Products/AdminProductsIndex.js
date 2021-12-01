import React from 'react';
import {ProductContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductIcons, ProductIconLink} from './AdminProductsEle';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';



const AdminProductsIndex = ({heading, data}) => {
    
    // const history = useHistory(); 

    // const restaurantNavigation = () => {
    //     history.push("./view-restaurant");
    // }
    
    return (
        <ProductContainer>
           <ProductsHeading>{heading}</ProductsHeading>  
           <ProductWrapper>
             {data.map((product, AdminProductsIndex) => {
                 return(
                     <ProductCard key={AdminProductsIndex}>
                         <ProductImg src={product.img} alt={product.alt} />
                         <ProductInfo>
                             <ProductTitle>{product.name}</ProductTitle>
                             <ProductDesc>{product.desc}</ProductDesc> 
                            <ProductIcons>
                                <ProductIconLink>
                                    <FaEdit /> 
                                </ProductIconLink>
                                <ProductIconLink>
                                    <FaTrashAlt /> 
                                </ProductIconLink> 
                             </ProductIcons> 
                             {/* <ProductButton onClick={restaurantNavigation}>{product.button}</ProductButton> */}
                         </ProductInfo>
                     </ProductCard>
                 )
             })}  
           </ProductWrapper>
        </ProductContainer>
    )
}

export default AdminProductsIndex
