import React from "react";
import styles from "./Login.module.css";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import GoogleAuth from "../firebase";

const Login = () => {

  return (
    <div className={styles.login}>
      <div className={styles.authMain}>
        <Button className={styles.button} onClick={GoogleAuth}>
          <FontAwesomeIcon icon={faGoogle} />
          <span> Login with Google</span>
        </Button>
        <Button className={styles.button} onClick={GoogleAuth}>
          <FontAwesomeIcon icon={faGoogle} />
          <span> Sign up with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
