import { FC, useContext } from "react";
import styles from "../styles/TickOption.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { type themeColorType } from "../types/themeColorType";

type TickOptionProps = {
  label: string;
  checkboxId: string;
  setOption: (option: boolean) => void;
};

const TickOption: FC<TickOptionProps> = ({ label, checkboxId, setOption }) => {
  const theme: themeColorType = useContext(ThemeContext);

  const handleChecked = (event: { target: { checked: boolean } }) => {
    if (event.target.checked == true) {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  return (
    <div
      className={
        theme === "dark"
          ? styles.tickOptionContainerDark
          : styles.tickOptionContainerLight
      }
    >
      <input
        type="checkbox"
        name="optionBox"
        id={checkboxId}
        onChange={handleChecked}
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default TickOption;
