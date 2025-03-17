import React, { FC } from "react";
import styles from "../styles/Header.module.css";
import SwitchThemeButton from "./SwitchThemeButton";
import HeaderLogo from "./HeaderLogo";
import { themeColorType } from "../types/themeColorType";

type HeaderProps = {
  setTheme: (theme: themeColorType) => void;
};

const Header: FC<HeaderProps> = ({ setTheme }) => {
  return (
    <header className={styles.div}>
      <HeaderLogo />
      <SwitchThemeButton setTheme={setTheme} />
    </header>
  );
};

export default Header;
