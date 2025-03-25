import { ChangeEvent, FC, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/CharacterLimitInput.module.css";
import { type themeColorType } from "../types/themeColorType";

type CharacterLimitInputProps = {
  setCharacterLimit: (limit: number) => void;
  characterLimit: number;
};

const CharacterLimitInput: FC<CharacterLimitInputProps> = ({
  setCharacterLimit,
  characterLimit,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCharacterLimit(Number(event.target.value));
  };

  const theme: themeColorType = useContext(ThemeContext);

  return (
    <div className={styles.characterLimitInputContainer}>
      <label htmlFor="limit">Character Limit: </label>
      <input
        type="range"
        id="limit"
        min="1"
        max="1000"
        onChange={handleChange}
        className={
          theme === "dark" ? styles.numberInputDark : styles.numberInputLight
        }
      />
      <span>{characterLimit > 0 ? characterLimit : null}</span>
    </div>
  );
};

export default CharacterLimitInput;
