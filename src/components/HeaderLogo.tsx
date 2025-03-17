import React from "react";
import quoteLeftSolidImg from "../assets/quote-left-solid.svg";
import styles from "../styles/HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogoContainer}>
      <img
        src={quoteLeftSolidImg}
        alt="quotes"
        className={styles.quotesImgDark}
      />
      <h3>Character Counter</h3>
    </div>
  );
};

export default HeaderLogo;
