import React, { FC } from "react";
import styles from "../styles/TickOption.module.css";

type TickOptionProps = {
  label: string;
  checkboxId: string;
};

const TickOption: FC<TickOptionProps> = ({ label, checkboxId }) => {
  return (
    <div className={styles.tickOptionContainer}>
      <input type="checkbox" name="optionBox" id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default TickOption;
