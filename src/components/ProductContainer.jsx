import React from "react";
import styles from "./ProductContainer.module.css";
import Button from "./Button";

const ProductContainer = (props) => {
  return (
    <div>
      <div className={styles.main}>
        <div>
          <img className={styles.img} src={props.src} alt="product" />
        </div>
        <div>
        {props.description}
        </div>
        <div>{props.rating}</div>
        <div>{props.price}</div>
        <div><Button className={styles.button}>Buy</Button></div>
      </div>
    </div>
  );
};

export default ProductContainer;
