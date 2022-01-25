import Button from "@material-ui/core/Button";

import { CartItemType } from "../../App";
//styles
import { Wrapper } from "../CartItem/CartItem.styles";
 

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <Wrapper>
    
      <div className="cart__information">
      <h3  className="cart__item__title">{item.title}  <p className="cart__item__price">price: &pound;{item.price} </p></h3>
     
     

      <div className="cart__button">
      <Button
          size="small"
          variant="contained"
          onClick={() => removeFromCart(item.id)}
          className="cart__button__addremove"
        >
          -
        </Button>
        <p>{item.amount}</p>

        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(item)}
          className="cart__button__addremove"
        >
          +
        </Button>
    
       
        </div>
        <p className="cart__item__totalprice">total:  &pound;{(item.amount * item.price).toFixed(2)}</p>
      </div>
      <img src={item.image} alt={item.title} />
   
    </Wrapper>
  </div>
);

export default CartItem;
