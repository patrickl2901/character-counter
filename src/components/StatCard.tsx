import React, { FC } from "react";
import styles from "../styles/StatCard.module.css";

type StatCardProps = {
  data: number;
  dataName: string;
  cardBackgroundColor?: string;
};

const StatCard: FC<StatCardProps> = ({
  data,
  dataName,
  cardBackgroundColor,
}) => {
  return (
    <div className={`${styles.statCard} ${cardBackgroundColor}`}>
      <h1>{data}</h1>
      <h3>{dataName}</h3>
    </div>
  );
};

export default StatCard;
