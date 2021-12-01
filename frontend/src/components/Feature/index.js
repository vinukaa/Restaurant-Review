import React from 'react';
import { useHistory } from 'react-router-dom';
// import { render } from 'sass';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {

    const history = useHistory(); 
    const restaurantNavigation = () => {
        history.push("./view-restaurant");
    }

    return (
      <>
        <FeatureContainer>
            <h1 style={{color: "#E1B01E"}}>Best Restaurant Ever Today</h1>
            <p>FAYER(Madrid,Spain)FAYER means fire and fire is our inspiration.
                A unique place with a kitchen to discover.</p>
    
            </FeatureContainer>
        
        <br />
        <FeatureContainer>
            <h1 style={{color: "#E1B01E"}}>Best Restaurant Ever Today</h1>
            <p>King Of Mambo,A vibrant Mediterranean restaurant with a Cuban soul, King of The Mambo combines the colonial charm of Galle Face Hotel with a resonant energy from its Cuban live band. </p>
            {/* <img src = "https://material.angular.io/assets/img/examples/shiba1.jpg"></img> */}
        </FeatureContainer>
        </>
        
    );

}

export default Feature;
