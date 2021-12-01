import styled from 'styled-components';
import ImgBg from '../../../images/res-5.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))
    , 
     url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((75vw - 1300px) /2);
`
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-contetnt: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 700px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.div`
    font-size: clamp(3.5rem, 10vw, 5rem);
    margin-top: 15rem;
    margin-bottom: 2rem;
    margin-left: 0.9rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`

export const HeroP = styled.div`
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    margin-bottom: 3rem;
`


