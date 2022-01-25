import { css } from "@emotion/react";
import styled from "@emotion/styled";

const color__gold = "#FFD700";

export const ItemStyles = css`
 
  .dude {
    color: ${color__gold};
  }

  .item {
 
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      border: 1px lightblue;
      border-radius: 0.4rem;
      height: 100%;
   

    &__button {
      border-radius: 0.4rem;
      width: 100%;
    }

    &__img {
      max-height: 250px;
      object-fit: cover;
      border-radius: 0.4rem;
    }
  }

`; 

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid blue;
  border-radius: 0.4rem;
  height: 100%;
`;

