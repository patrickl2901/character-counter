import React, { FC, useContext } from "react";
import styles from "../styles/TextEditor.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { themeColorType } from "../types/themeColorType";

type TextEditorProps = {
  setTextContent: (content: string) => void;
  characterLimit: number;
};

const TextEditor: FC<TextEditorProps> = ({
  setTextContent,
  characterLimit,
}) => {
  const theme: themeColorType = useContext(ThemeContext);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextContent(event.target.value.toString());
  };

  return (
    <textarea
      name="mainTextInput"
      id="mainTextInput"
      className={
        theme === "dark" ? styles.mainTextInputDark : styles.mainTextInputLight
      }
      placeholder="Type something..."
      onChange={handleChange}
      maxLength={characterLimit}
    ></textarea>
  );
};

export default TextEditor;
