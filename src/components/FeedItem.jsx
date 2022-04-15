import React from "react";
import styles from "./FeedItem.module.css";

function FeedItem() {
  return (
    <div className={styles.main}>
      <div className={styles.picAndName}>
        <div>
          <img src="" alt="profilePic" />
        </div>
        <div>
          <span>Aditya Kumar</span>
        </div>
      </div>
      <div>
        <div>
          <b>What is Lorem Ipsum?</b>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. <b>Read More</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
