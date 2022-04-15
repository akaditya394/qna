import React from "react";
import styles from "./Auth.module.css";
import NavbarNL from "../components/NavbarNL";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={styles.auth}>
      <NavbarNL />
      <h1 className={styles.tagName}>The best answer to any question</h1>
      <Link to="/feed">
        <Button>Sign In</Button>
      </Link>
    </section>
  );
}

export default Auth;
