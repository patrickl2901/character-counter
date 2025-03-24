import { FC, useState } from "react";
import StatCard from "./StatCard";
import StatBar from "./StatBar";
import styles from "../styles/AnalysisSection.module.css";
import SeeMoreButton from "./SeeMoreButton";

type AnalysisSectionProps = {
  parsedAmounts: Array<number>;
  charSet: Map<string, number>;
};

const AnalysisSection: FC<AnalysisSectionProps> = ({
  parsedAmounts,
  charSet,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const entriesToDisplay = isCollapsed
    ? Array.from(charSet.entries()).slice(0, 5)
    : Array.from(charSet.entries());

  return (
    <div className={styles.analysisSectionContainer}>
      <div className={styles.cardSectionContainer}>
        <StatCard
          dataName="Total Characters"
          data={parsedAmounts[0]}
          cardBackgroundColor="backgroundPurple"
        />
        <StatCard
          dataName="Word Count"
          data={parsedAmounts[1]}
          cardBackgroundColor="backgroundYellow"
        />
        <StatCard
          dataName="Sentence Count"
          data={parsedAmounts[2]}
          cardBackgroundColor="backgroundRed"
        />
      </div>
      <div className={styles.letterDensitySectionContainer}>
        <h2>Letter Density</h2>
        {entriesToDisplay.map(([key, value]) => (
          <StatBar
            dataName={key}
            amount={value}
            percentage={Number(((value / parsedAmounts[0]) * 100).toFixed(1))}
          />
        ))}
        <SeeMoreButton
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
    </div>
  );
};

export default AnalysisSection;
