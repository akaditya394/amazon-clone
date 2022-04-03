import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./ProductContainer.module.css";
import Button from "./Button";

const ProductContainer = (props) => {
  const price = `$${props.price}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      description: props.description,
      amount: 1,
      price: props.price,
      src: props.src
    });
  };

  return (
    <div>
      <div className={styles.main}>
        <div>
          <img className={styles.img} src={props.src} alt="product" />
        </div>
        <div>{props.description}</div>
        <div>{props.rating}</div>
        <div>{props.price}</div>
        <div>
          <Button className={styles.button} onClick={addToCartHandler}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
