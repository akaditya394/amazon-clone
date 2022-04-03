import React from "react";
import styles from "./TotalValue.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function TotalValue(props) {
  return (
    <div className={styles.total}>
      <div></div>
      <div>
        <b>{props.allTotalAmount}</b>
      </div>
      <div>
        <Link to="/thankyou">
          <Button className={styles.button}>Buy Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default TotalValue;
