import React, { FC, useContext } from "react";
import styles from "../styles/TickOption.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { themeColorType } from "../types/themeColorType";

type TickOptionProps = {
  label: string;
  checkboxId: string;
};

const TickOption: FC<TickOptionProps> = ({ label, checkboxId }) => {
  const theme: themeColorType = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark"
          ? styles.tickOptionContainerDark
          : styles.tickOptionContainerLight
      }
    >
      <input type="checkbox" name="optionBox" id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default TickOption;
