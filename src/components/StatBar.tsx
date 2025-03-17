import React, { FC } from "react";
import styles from "../styles/StatBar.module.css";

type StatBarProps = {
  dataName: string;
  amount: number;
  percentage: number;
};

const StatBar: FC<StatBarProps> = ({ dataName, amount, percentage }) => {
  return (
    <div className={styles.statBarContainer}>
      <span className={styles.dataName}>{dataName}</span>
      <div className={styles.bar}></div>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.percentage}>({percentage})%</span>
    </div>
  );
};

export default StatBar;
