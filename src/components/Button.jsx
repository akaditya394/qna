import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
}

export default Button;
