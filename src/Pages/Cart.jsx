import React from "react";
import styles from "./Cart.module.css";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import Footer from "../components/Footer";
import TotalValue from "../components/TotalValue";
import CartItem from "../components/CartItem";
import Product1 from "../assests/product1.jpg";
import Product2 from "../assests/product2.jpg";
import Product3 from "../assests/product3.jpg";
import Product4 from "../assests/product4.jpg";
import Product5 from "../assests/product5.jpg";
import Product6 from "../assests/product6.jpg";

const DUMMY_ITEMS = [
  {
    src: { Product1 },
    description:
      "Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime(SM-M215GLBDINS)",
    rating: "⭐⭐⭐⭐ 5493",
    price: "$ 200",
  },
  {
    src: { Product2 },
    description: "MacBook Air (M1,2020)",
    rating: "⭐⭐⭐⭐ 8076",
    price: "$ 999",
  },
  {
    src: { Product3 },
    description:
      "Sony Bravia 80 cm (32 inches) HD Ready Smart LED TV 32W6103 (Black) (2021 Model)",
    rating: "⭐⭐⭐ 10,016",
    price: "$ 320",
  },
  {
    src: { Product4 },
    description:
      "Skybags New Neon 13 30 L Backpack (Blue), free size (BPNNE13HBLU)",
    rating: "⭐⭐⭐⭐ 1,099",
    price: "$ 50",
  },
  {
    src: { Product5 },
    description:
      "Nike Women's WMNS Gts '16 Txt Black/White Running Shoe-9 B(M) US UK (840306-010)",
    rating: "⭐⭐⭐⭐ 576",
    price: "$ 15",
  },
  {
    src: { Product6 },
    description:
      "Sapiens: A Brief History of Humankind Paperback | 11 June 2015",
    rating: "⭐⭐⭐⭐ 42,186",
    price: "$ 8",
  },
];

const Cart = () => {
  return (
    <div>
      <Navbar />
      <SubNav />
      <h2>Shopping Cart</h2>
      <div className={styles.cartMain}>
        <div className={styles.cartItems}>
          <CartItem
            src={Product1}
            description="Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |
          FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime
          (SM-M215GLBDINS)"
            price="$200"
          />
          <CartItem
            src={Product1}
            description="Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |
          FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime
          (SM-M215GLBDINS)"
            price="$200"
          />
          <CartItem
            src={Product1}
            description="Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) |
          FHD+ sAMOLED | 6 Months Free Screen Replacement for Prime
          (SM-M215GLBDINS)"
            price="$200"
          />
        </div>
        <TotalValue />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
