import { FC, useContext } from "react";
import circleHalfStroke from "../assets/circle-half-stroke-solid.svg";
import styles from "../styles/SwitchThemeButton.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { type themeColorType } from "../types/themeColorType";

type SwitchThemeButtonProps = {
  setTheme: (theme: themeColorType) => void;
};

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({ setTheme }) => {
  const theme: themeColorType = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      className={
        theme === "dark"
          ? styles.switchThemeButtonDark
          : styles.switchThemeButtonLight
      }
      onClick={toggleTheme}
    >
      <img
        src={circleHalfStroke}
        alt="Switch Theme"
        className={
          theme === "dark"
            ? styles.circleHalfStrokeImgDark
            : styles.circleHalfStrokeImgLight
        }
      />
    </button>
  );
};

export default SwitchThemeButton;
