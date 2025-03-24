import { FC, useState } from "react";
import styles from "../styles/TextEditorSection.module.css";
import TextEditor from "./TextEditor";
import TickOption from "./TickOption";
import CharacterLimitInput from "./CharacterLimitInput";
import calculateReadingTime from "../api/calculateReadingTime";

type TextEditorSectionProps = {
  setTextContent: (content: string) => void;
  setExcludeSpaces: (spaces: boolean) => void;
  setUseCharacterLimit: (characterLimit: boolean) => void;
  useCharacterLimit: boolean;
  parsedAmounts: Array<number>;
};

const TextEditorSection: FC<TextEditorSectionProps> = ({
  setTextContent,
  setExcludeSpaces,
  setUseCharacterLimit,
  useCharacterLimit,
  parsedAmounts,
}) => {
  const [characterLimit, setCharacterLimit] = useState<number>(-1);

  return (
    <div className={styles.TextEditorSectionContainer}>
      <TextEditor
        setTextContent={setTextContent}
        characterLimit={characterLimit}
        useCharacterLimit={useCharacterLimit}
      />
      <div className={styles.optionsContainer}>
        <TickOption
          label="Exclude Spaces"
          checkboxId="spacesOption"
          setOption={setExcludeSpaces}
        />
        <TickOption
          label="Set Character Limit"
          checkboxId="characterLimitOption"
          setOption={setUseCharacterLimit}
        />
        {useCharacterLimit ? (
          <CharacterLimitInput
            setCharacterLimit={setCharacterLimit}
            characterLimit={characterLimit}
          />
        ) : null}
        <p>Approx. reading time: {calculateReadingTime(parsedAmounts[1])}</p>
      </div>
    </div>
  );
};

export default TextEditorSection;
