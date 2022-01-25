import { Global } from "@emotion/react";
import {ItemStyles, Wrapper} from "./Item.styles";

import Button from "@material-ui/core/Button";

import { CartItemType } from "../../App";


type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const handlebuttonClick = () => {
    return handleAddToCart(item);
  };

  return (
  <>
    <Global styles={ItemStyles} />
    <Wrapper>

    <div className="item">
      <img className="item__img" src={item.image} alt={item.title}  />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>

      <Button onClick={handlebuttonClick} className="item__button"> add to cart </Button>
    </div> 
    </Wrapper>
    </>
  );
};

export default Item;
