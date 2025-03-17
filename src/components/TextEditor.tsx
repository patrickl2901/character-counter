import React from "react";
import styles from "../styles/TextEditor.module.css";

const TextEditor = () => {
  return (
    <textarea
      name="mainTextInput"
      id="mainTextInput"
      className={styles.mainTextInput}
      placeholder="Type something..."
    ></textarea>
  );
};

export default TextEditor;
