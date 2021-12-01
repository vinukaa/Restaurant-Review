import styled from 'styled-components'

export const FoodContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color: #fff;
`;

export const FoodWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const FoodCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const FoodImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;

export const FoodsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const FoodTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const FoodInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const FoodDesc =styled.p`
    margin-bottom: 1rem;
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

/*export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;*/

export const FoodButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;