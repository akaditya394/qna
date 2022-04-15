import React from "react";
import styles from "./Feed.module.css";
import Navbar from "../components/Navbar";
import ButtonFeed from "../components/ButtonFeed";
import FeedItem from "../components/FeedItem";

function Feed() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.feed}>
        <section className={styles.leftSection}>
          <ButtonFeed>History</ButtonFeed>
          <ButtonFeed>Science</ButtonFeed>
          <ButtonFeed>Politics</ButtonFeed>
          <ButtonFeed>Movies</ButtonFeed>
          <ButtonFeed>Sports</ButtonFeed>
        </section>
        <section className={styles.middleSection}>
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </section>
        <section className={styles.rightSection}></section>
      </div>
    </div>
  );
}

export default Feed;
