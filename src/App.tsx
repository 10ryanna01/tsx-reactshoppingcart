import { useState } from "react";
import { useQuery } from "react-query";

// components list

import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIocon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

 

// styles and my custom styles
import { Global } from "@emotion/react";
import { Myownstyles, ToggleCartIcon, Wrapper } from "./App.styles";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  //calculate amount
  amount: number;
};

export interface Props {
  App: HTMLElement;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data, "products" );

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // has the item been added to the cart?

      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // first time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div> something didnt load ...sorry dude</div>;
  return (
    <div data-testid="testAppContainer">
      <Global styles={Myownstyles} />

      
      <div className="dude">hello world start</div>

      <div className="shopping__wrapper">
        <ToggleCartIcon onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIocon />
          </Badge>
        </ToggleCartIcon>

        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          cart goes here
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>

        <Wrapper>
          <Grid container spacing={3}>
            {data?.map((item) => (
              <Grid item key={item.id} xs={12} sm={3}>
                <Item item={item} handleAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </div>
    </div>
  );
};

export default App;
