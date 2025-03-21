import { useState } from "react";
import "./App.css";
import AnalysisSection from "./components/AnalysisSection.tsx";
import Header from "./components/Header.tsx";
import TextEditorSection from "./components/TextEditorSection.tsx";
import { ThemeContext } from "./context/ThemeContext.tsx";
import { themeColorType } from "./types/themeColorType.ts";
import parseTextContent from "./api/parseTextContent.ts";
import createCharSet from "./api/createCharSet.ts";

function App() {
  const [theme, setTheme] = useState<themeColorType>("dark");
  const [textContent, setTextContent] = useState<string>("");
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);
  const [useCharacterLimit, setUseCharacterLimit] = useState<boolean>(false);
  const parsedAmounts = parseTextContent(textContent, excludeSpaces);
  const charSet: Map<string, number> = createCharSet(textContent);

  return (
    <div className={theme === "dark" ? "app" : "appLight"}>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <h1>Analyze your text in real-time.</h1>
        <TextEditorSection
          setTextContent={setTextContent}
          setExcludeSpaces={setExcludeSpaces}
          setUseCharacterLimit={setUseCharacterLimit}
          useCharacterLimit={useCharacterLimit}
        />
        <AnalysisSection parsedAmounts={parsedAmounts} charSet={charSet} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
