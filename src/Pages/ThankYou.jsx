import React from "react";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import styles from "./ThankYou.module.css";
import Footer from "../components/Footer";
import ProductContainer from "../components/ProductContainer";
import Product1 from "../assests/product1.jpg";
import Product2 from "../assests/product2.jpg";
import Product3 from "../assests/product3.jpg";

function ThankYou() {
  return (
    <div>
      <Navbar />
      <SubNav />
      <div className={styles.ThankYou}>
        <div className={styles.main}>
          <div className={styles.tytext}>
            <h2>Thank You, your order has been placed</h2>
          </div>
          <div>
            <p>
              <b>
                An email confirmation has been sent to your resgistered email
                address.
              </b>
            </p>
          </div>
          <div>
            <p>
              <b>Order Id: 84198498641465</b>
            </p>
          </div>
          <div>
            <p>
              Order will be delivered by{" "}
              <span className={styles.eta}>
                <b>5 April 2022</b>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>People have also bought...</h2>
      </div>
      <div className={styles.products}>
        <ProductContainer
          src={Product1}
          description="Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |
          FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime
          (SM-M215GLBDINS)"
          rating="⭐⭐⭐⭐ 5493"
          price={200}
          id="1"
        />
        <ProductContainer
          src={Product2}
          description="MacBook Air (M1,2020)"
          rating="⭐⭐⭐⭐ 8076"
          price={999}
          id="2"
        />
        <ProductContainer
          src={Product3}
          description="Sony Bravia 80 cm (32 inches) HD Ready Smart LED TV 32W6103 (Black) (2021 Model)"
          rating="⭐⭐⭐ 10,016"
          price={320}
          id="3"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;
