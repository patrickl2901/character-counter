import React from "react";
import styles from "../styles/TextEditorSection.module.css";
import TextEditor from "./TextEditor";
import TickOption from "./TickOption";

const TextEditorSection = () => {
  return (
    <div className={styles.TextEditorSectionContainer}>
      <TextEditor />
      <div className={styles.optionsContainer}>
        <TickOption label="Exclude Spaces" checkboxId="spacesOption" />
        <TickOption
          label="Set Character Limit"
          checkboxId="characterLimitOption"
        />
        <p>Approx. reading time: less than 1 minute</p>
      </div>
    </div>
  );
};

export default TextEditorSection;
