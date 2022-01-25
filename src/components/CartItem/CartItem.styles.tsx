import { css } from "@emotion/react"; 
import styled from "@emotion/styled";


export const Wrapper = styled.div`

font-family: arial;
display: grid; 
justify-content: space-between;
width: 100%;
padding: 1rem;
margin-bottom: 1rem;
border: 1px solid grey; 
 
grid-template-columns: 1fr 1fr;
img{
    width: 50%;
    justify-self: flex-end;
}
 
.cart{
    &__information{
        display: flex; 
        justify-content: end; 
        flex-flow: column;

    }
    &__button{
        display:flex;
        justify-content: space-between;
        flex-flow: row;
        margin: 1rem 0;
    } 
    
  
    &__item__title{
        display: block;
        margin-bottom: 0.5rem;
    }
    &__item__price{
        display: flex;
        flex-flow: row; 
        font-size: 0.8rem;
        font-weight: normal;
        font-style: italic;text-transform: capitalize;
    }
    &__item__totalprice{
        display: flex;
        text-transform: capitalize;
        flex-flow: row; 
        justify-content: right;
        font-weight: bold;
    }
}

`;