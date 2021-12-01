import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';


export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #d8c0c0;
    font-size: 4rem;
    display: flex;
    align-items: left;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    } 

`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-180%, 75%);
        font-weight: bold;
    }
`;

export const Bars = styled(BiRestaurant)`
    font-size: 3rem;
    transform: translate(-50%, -15%);
    padding: 0.1rem 0rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 3rem 5rem;
    justify-content: flex-end;
`;

export const Button = styled.div`
    width: 200px;
    color: #fff;
    cursor: pointer;
    height: 40px;
    font-size: 20px;
    box-sizing: border-box;
    padding: 0rem 1rem;
    background: #F3C94B;
    text-align: center;
    line-height: 36px;
    border-radius: 21px;
`;
