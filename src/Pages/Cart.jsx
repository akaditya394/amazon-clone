import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartProvider from "../store/CartProvider";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import Footer from "../components/Footer";
import TotalValue from "../components/TotalValue";
import CartItem from "../components/CartItem";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;
//   const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
      <CartProvider>
    <div>
      <Navbar />
      <SubNav />
      <h2>Shopping Cart</h2>
      <div className={styles.cartMain}>
        <div className={styles.cartItems}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              description={item.description}
              src={item.src}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </div>
        <TotalValue allTotalAmount={totalAmount} />
      </div>
      <Footer />
    </div>
    </CartProvider>
  );
};

export default Cart;
