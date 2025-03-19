import { FC, useState } from "react";
import styles from "../styles/TextEditorSection.module.css";
import TextEditor from "./TextEditor";
import TickOption from "./TickOption";
import CharacterLimitInput from "./CharacterLimitInput";

type TextEditorSectionProps = {
  setTextContent: (content: string) => void;
  setExcludeSpaces: (spaces: boolean) => void;
  setUseCharacterLimit: (characterLimit: boolean) => void;
  useCharacterLimit: boolean;
};

const TextEditorSection: FC<TextEditorSectionProps> = ({
  setTextContent,
  setExcludeSpaces,
  setUseCharacterLimit,
  useCharacterLimit,
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
        <p>Approx. reading time: less than 1 minute</p>
      </div>
    </div>
  );
};

export default TextEditorSection;
