import React from "react";
import styles from "./SubNav.module.css";

const SubNav = () => {
  return (
    <div>
      <div className={styles.subnav}>
        <div className={styles.navItem}><b>All</b></div>
        <div className={styles.navItem}>Best Sellers</div>
        <div className={styles.navItem}>Mobiles</div>
        <div className={styles.navItem}>Customer Service</div>
        <div className={styles.navItem}>Clearance Store</div>
        <div className={styles.navItem}>Today's Deals</div>
        <div className={styles.navItem}>Fashion</div>
        <div className={styles.navItem}>Electronics</div>
        <div className={styles.navItem}>Prime</div>
        <div className={styles.navItem}>New Releases</div>
      </div>
    </div>
  );
};

export default SubNav;
