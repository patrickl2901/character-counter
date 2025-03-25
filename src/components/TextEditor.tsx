import React, { FC, useContext } from "react";
import styles from "../styles/TextEditor.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { type themeColorType } from "../types/themeColorType";

type TextEditorProps = {
  setTextContent: (content: string) => void;
  characterLimit: number;
  useCharacterLimit: boolean;
};

// TODO: exclude spaces option should affect character limit

const TextEditor: FC<TextEditorProps> = ({
  setTextContent,
  characterLimit,
  useCharacterLimit,
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
      maxLength={useCharacterLimit ? characterLimit : -1}
    ></textarea>
  );
};

export default TextEditor;
