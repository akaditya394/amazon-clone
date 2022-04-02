import React from "react";
import styles from "./Navbar.module.css";
import amazonLongLogo from "../assests/amazon-long-logo-white-removebg-preview.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <img src={amazonLongLogo} alt="amazon-logo" />
        </div>
        <div className={styles.inputBar}>
          <input type="text" placeholder="electronics,books,movies and more!" />
          <Button>Search</Button>
        </div>
        <div className={styles.leftItems}>
          <div className={styles.leftItem}>
            <div>Location</div>
            <div>
              <b>India</b>
            </div>
          </div>
          <div className={styles.leftItem}>
            <div>Hello, Sign in</div>
            <div>
              <b>Accounts & Lists</b>
            </div>
          </div>

          <div className={styles.leftItem}>
            <div>Returns</div>
            <div>
              <b>& Orders</b>
            </div>
          </div>
          <div className={styles.leftItem}>
            <b>Cart</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
