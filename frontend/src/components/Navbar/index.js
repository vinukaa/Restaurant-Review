import React, { useEffect,useState } from 'react'
import { Nav, NavIcon, NavLink, Bars, ButtonContainer, Button } from './NavbarElements';
import { useHistory } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';



const Navbar = ({toggle}) => {

    const history = useHistory(); 

    let [user, setUser] = useState(null);

    useEffect(() => {

        const getUserData = () => {
    
          setUser(JSON.parse(localStorage.getItem("user-info")));
    
        };
    
        getUserData();
    
      }, []);

    const signup = () => {
        history.push("./form-signup");
    }

    const signin = () => {
        history.push("./login");
    }

    const travel = () => {
        history.push("./travel");
    }

    const drinks = () => {
        history.push("./drinks");
    }

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  

    return (
        <>
            <Nav>
                <NavLink to='/'> &nbsp; &nbsp; &nbsp; &nbsp; RATIFY</NavLink>
                <NavIcon onClick={toggle}><Bars /> </NavIcon>
            
                {!user?(
                            <>
                                {/* <Button onClick={signup}>SIGN UP</Button> &nbsp;
                                <Button onClick={signin}>LOG IN </Button>&nbsp; */}
                                <h3 style={{color: "#ffffff", alignItems: "center" , marginTop:"44px"}}>Welcome !!</h3>
                        </>
                        ):(
                            <> 
                                {/* <Button onClick={logout}>LOG OUT</Button>&nbsp; */}
                                <h3 style={{color: "#ffffff", alignItems: "center" , marginTop:"44px"}}>Welcome {user.name} !!</h3>
                            </>
                        )
                        
                        }
                
                        
                                
    
                    <ButtonContainer>
                        <Button onClick={travel}>TRAVEL</Button> &nbsp;
                        <Button onClick={drinks}>DRINKS</Button> &nbsp;

                        {!user?(
                            <>
                                <Button onClick={signup}>SIGN UP</Button> &nbsp;
                                <Button onClick={signin}>LOG IN </Button>&nbsp;
                        </>
                        ):(
                            <> 
                                <Button onClick={logout}>LOG OUT</Button>&nbsp;
                                {/* <h3 style={{color: "#ffffff", alignItems: "center" , marginTop:"44px"}}>Welcome {user.name}</h3> */}
                            </>
                        )
                        
                        }
                    </ButtonContainer>
                  
                
            </Nav>
        </>
    );
};

export default Navbar;
