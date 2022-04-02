import React from "react";
import Navbar from "./Navbar";
import SubNav from "./SubNav";
import Carousel from "./Carousel";
import ProductContainer from "./ProductContainer";
import styles from "./Home.module.css";
import Product1 from "../assests/product1.jpg";
import Product2 from "../assests/product2.jpg";
import Product3 from "../assests/product3.jpg";
import Product4 from "../assests/product4.jpg";
import Product5 from "../assests/product5.jpg";
import Product6 from "../assests/product6.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <Carousel />
      <div className={styles.products}>
        <ProductContainer
          src={Product1}
          description="Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |
          FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime
          (SM-M215GLBDINS)"
          rating="⭐⭐⭐⭐ 5493"
          price="$ 200"
        />
        <ProductContainer
          src={Product2}
          description="MacBook Air (M1,2020)"
          rating="⭐⭐⭐⭐ 8076"
          price="$ 999"
        />
        <ProductContainer
          src={Product3}
          description="Sony Bravia 80 cm (32 inches) HD Ready Smart LED TV 32W6103 (Black) (2021 Model)"
          rating="⭐⭐⭐ 10,016"
          price="$ 320"
        />
      </div>
      <div className={styles.products}>
        <ProductContainer
          src={Product4}
          description="Skybags New Neon 13 30 L Backpack (Blue), free size (BPNNE13HBLU)"
          rating="⭐⭐⭐⭐ 1,099"
          price="$ 50"
        />
        <ProductContainer
          src={Product5}
          description="Nike Women's WMNS Gts '16 Txt Black/White Running Shoe-9 B(M) US UK (840306-010)"
          rating="⭐⭐⭐⭐ 576"
          price="$ 15"
        />
        <ProductContainer
          src={Product6}
          description="Sapiens: A Brief History of Humankind Paperback | 11 June 2015"
          rating="⭐⭐⭐⭐ 42,186"
          price="$ 8"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.backToTop}>
          <p>Back to top</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactColumns}>
            <div>
              <b>Get to Know Us</b>
            </div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Press Releases</div>
            <div>Amazon Cares</div>
            <div>Get a Smile</div>
            <div>Amazon Science</div>
          </div>
          <div className={styles.contactColumns}>
            <div>
              <b>Conncect with Us</b>
            </div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
          <div className={styles.contactColumns}>
            <div>
              <b>Make Money with Us</b>
            </div>
            <div>Sell on Amazon</div>
            <div>Sell under Amazon Accelerator</div>
            <div>Amazon Global Selling</div>
            <div>Become an Affiliate</div>
            <div>Fullfilment by Amazon</div>
            <div>Advertise your Products</div>
            <div>Amazon Pay on Merchants</div>
          </div>
          <div className={styles.contactColumns}>
            <div>
              <b>Let Us Help You</b>
            </div>
            <div>COVID-19 & Amazon</div>
            <div>Your Account</div>
            <div>Returns</div>
            <div>100% Purchase Protection</div>
            <div>Amazon App Download</div>
            <div>Help</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
