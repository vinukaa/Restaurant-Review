import styled from 'styled-components';
import ImgBg from '../images/res-open.jpg';

export const ViewContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))
    , 
     url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const ViewContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((75vw - 1300px) /2);
`
export const ViewItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-contetnt: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 1700px;
    color: #fff;
    line-height: 1.2;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

// export const ViewH1 = styled.div`
//     font-size: clamp(3.5rem, 10vw, 5rem);
//     margin-top: 12rem;
//     margin-bottom: 5rem;
//     margin-left: 0.8rem;
//     box-shadow: 3px 5px #e9ba23;
//     letter-spacing: 3px;
// `

// export const ViewP = styled.div`
//     font-size: clamp(1.8rem, 2.5vw, 1rem);
//     margin-bottom: 3rem;
// `


