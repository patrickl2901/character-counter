import React, { FC, useContext } from "react";
import quoteLeftSolidImg from "../assets/quote-left-solid.svg";
import styles from "../styles/HeaderLogo.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { themeColorType } from "../types/themeColorType";

const HeaderLogo: FC = () => {
  const theme: themeColorType = useContext(ThemeContext);
  return (
    <div className={styles.headerLogoContainer}>
      <img
        src={quoteLeftSolidImg}
        alt="quotes"
        className={
          theme === "dark" ? styles.quotesImgDark : styles.quotesImgLight
        }
      />
      <h3 className={theme === "dark" ? styles.h3dark : styles.h3light}>
        Character Counter
      </h3>
    </div>
  );
};

export default HeaderLogo;
