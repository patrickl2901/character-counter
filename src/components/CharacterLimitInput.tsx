import React, { FC } from "react";

type CharacterLimitInputProps = {
  setCharacterLimit: (limit: number) => void;
};

const CharacterLimitInput: FC<CharacterLimitInputProps> = ({
  setCharacterLimit,
}) => {
  const handleChange = (event) => {
    setCharacterLimit(event.target.value);
  };
  return (
    <div>
      <label htmlFor="limit">Character Limit: </label>
      <input type="number" min="1" onChange={handleChange} />
    </div>
  );
};

export default CharacterLimitInput;
