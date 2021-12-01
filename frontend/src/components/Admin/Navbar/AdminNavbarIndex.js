import React, { useEffect } from 'react'
import { Nav, NavIcon, NavLink, ButtonContainer, Button } from './AdminNavbarElements';
import { useHistory } from 'react-router-dom';



const AdminNavbarIndex = ({toggle}) => {

    const history = useHistory(); 

    const addres = () => {
        history.push("./add-res");
    }

   
    return (
        <>
            <Nav>
                <NavLink to='/'>RATIFY</NavLink>
                <NavIcon onClick={toggle}>
                    <ButtonContainer>
                        <Button onClick={addres}>Add Restaurant</Button>
                        <Button onClick={addres}>Foods</Button>
                        <Button onClick={addres}>Drinks</Button>
                        <Button onClick={addres}>Travel</Button>
                
                    </ButtonContainer>
                    {/* <Bars /> */}
                </NavIcon>
            </Nav>
        </>
    );
};

export default AdminNavbarIndex;
