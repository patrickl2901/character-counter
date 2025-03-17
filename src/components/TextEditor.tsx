import React, { FC, useContext } from "react";
import styles from "../styles/TextEditor.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { themeColorType } from "../types/themeColorType";

const TextEditor: FC = () => {
  const theme: themeColorType = useContext(ThemeContext);
  return (
    <textarea
      name="mainTextInput"
      id="mainTextInput"
      className={
        theme === "dark" ? styles.mainTextInputDark : styles.mainTextInputLight
      }
      placeholder="Type something..."
    ></textarea>
  );
};

export default TextEditor;
