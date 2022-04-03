import React from "react";
import styles from "./TotalValue.module.css";
import Button from "../components/Button";

function TotalValue() {
  return (
    <div className={styles.total}>
      <div>Cost: $200</div>
      <div>
        <b>Total Cost: $800</b>
      </div>
      <div>
        <Button className={styles.button}>Buy Now</Button>
      </div>
    </div>
  );
}

export default TotalValue;
