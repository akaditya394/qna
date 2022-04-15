import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={styles.appName}>qna</h1>
      </div>
      <div>Home</div>
      <div>Following</div>
      <div>Answer</div>
      <div>Notifications</div>
      <div>
        <input className={styles.input} type="text" placeholder="search question" />
      </div>
      <div>
        <img src="" alt="profilePic" />
      </div>
    </div>
  );
}

export default Navbar;
