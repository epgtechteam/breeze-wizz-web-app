// components/Banner.js
import styles from "@components/banner/Banner.module.css";
import React from "react";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="max-w-screen-xl">
        <p className={styles.bannerTitle}>
          Efficient Service Management with Financing Offers
        </p>
      </div>
      <div className="max-w-screen-xl">
        <p className={styles.bannerSubtitle}>
          Manage jobs, create estimates and invoices,<br></br> and offer
          financing options to your customers effortlessly.
        </p>
      </div>
      <div className="max-w-screen-xl mt-40">
        <button className={styles.ctaButton}>
          <a href="/offers">Try It Now — With Financing Options!</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
