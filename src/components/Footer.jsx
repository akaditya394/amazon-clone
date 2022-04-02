import React from "react";
import styles from "./Footer.module.css";
import AmazonLogo from "../assests/amazon-long-logo-white-removebg-preview.png";

const Footer = () => {
  return (
    <div>
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
              <b>Connect with Us</b>
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
        <div className={styles.countries}>
          <div>
            <img
              className={styles.logoImg}
              src={AmazonLogo}
              alt="Amazon Logo"
            />
          </div>
          <div className={styles.countryName}>
            <div>India</div>
            <div>US</div>
            <div>UK</div>
            <div>Australia</div>
            <div>France</div>
            <div>Russia</div>
            <div>Italy</div>
            <div>Brazil</div>
            <div>South Africa</div>
            <div>New Zealand</div>
          </div>
        </div>
        <div className={styles.misc}>
          <div className={styles.miscItems}>
            <div>Conditions for Use & Sale</div>
            <div>Privacy Notice</div>
            <div>Interest Based Ads</div>
            <div>© 1996-2022, Amazon.com, Inc. or its affiliates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
