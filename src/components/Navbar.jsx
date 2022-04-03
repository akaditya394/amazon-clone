import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import amazonLongLogo from "../assests/amazon-long-logo-white-removebg-preview.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <Link to="/">
            <img
              className={styles.img}
              src={amazonLongLogo}
              alt="amazon-logo"
            />
          </Link>
        </div>
        <div className={styles.inputBar}>
          <input type="text" />
          <Button className={styles.button}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>
        <div className={styles.leftItems}>
          <div className={styles.leftItem}>
            <div>Location</div>
            <div>
              <b>India</b>
            </div>
          </div>
          <Link to="/auth" className={styles.leftItem}>
            <div>Hello, Sign in</div>
            <div>
              <b>Accounts & Lists</b>
            </div>
          </Link>

          <div className={styles.leftItem}>
            <div>Returns</div>
            <div>
              <b>& Orders</b>
            </div>
          </div>
          <Link to="/cart" className={styles.leftItem}>
            <FontAwesomeIcon icon={faCartShopping} />
            <b> Cart</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
