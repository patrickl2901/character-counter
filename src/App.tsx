import { useState } from "react";
import "./App.css";
import AnalysisSection from "./components/AnalysisSection.tsx";
import Header from "./components/Header.tsx";
import TextEditorSection from "./components/TextEditorSection.tsx";
import { ThemeContext } from "./context/ThemeContext.tsx";
import { themeColorType } from "./types/themeColorType.ts";

function App() {
  const [theme, setTheme] = useState<themeColorType>("dark");

  return (
    <div className={theme === "dark" ? "app" : "appLight"}>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <h1>Analyze your text in real-time.</h1>
        <TextEditorSection />
        <AnalysisSection />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
