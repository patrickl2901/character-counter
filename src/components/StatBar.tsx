import { FC, useContext } from "react";
import styles from "../styles/StatBar.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { type themeColorType } from "../types/themeColorType";

type StatBarProps = {
  dataName: string;
  amount: number;
  percentage: number;
};

const StatBar: FC<StatBarProps> = ({ dataName, amount, percentage }) => {
  const theme: themeColorType = useContext(ThemeContext);
  const barPercentage = `${percentage}%`;

  return (
    <div className={styles.statBarContainer}>
      <span className={styles.dataName}>{dataName}</span>
      <div className={theme === "dark" ? styles.barDark : styles.barLight}>
        <div
          className={`${
            theme === "dark" ? styles.barProgressDark : styles.barProgressLight
          }`}
          id="progressBar"
          style={{ width: barPercentage }}
        ></div>
      </div>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.percentage}>({percentage}%)</span>
    </div>
  );
};

export default StatBar;
