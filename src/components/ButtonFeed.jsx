import React from "react";
import styles from "./ButtonFeed.module.css";

function ButtonFeed(props) {
  return (
    <div>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
}

export default ButtonFeed;
