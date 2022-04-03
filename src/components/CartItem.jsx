import React from "react";
import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      <div>
        <img className={styles.img} src={props.src} alt="product" />
      </div>
      <div className={styles.details}>
        <div>{props.description}</div>
        <div className={styles.stock}>
          <b>In Stock</b>
        </div>
        <div className={styles.fba}><b>Fullfiled by amazon</b></div>
      </div>
      <div className={styles.price}>{props.price}</div>
    </div>
  );
}

export default CartItem;
