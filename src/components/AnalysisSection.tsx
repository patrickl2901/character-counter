import { FC } from "react";
import StatCard from "./StatCard";
import StatBar from "./StatBar";
import styles from "../styles/AnalysisSection.module.css";

type AnalysisSectionProps = {
  parsedAmounts: Array<number>;
  charSet: Map<string, number>;
};

// TODO: make letter density section collapsible, showing 5 entries initially
const AnalysisSection: FC<AnalysisSectionProps> = ({
  parsedAmounts,
  charSet,
}) => {
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
        {Array.from(charSet.entries()).map((entry) => {
          const [key, value] = entry;
          return (
            <StatBar
              dataName={key}
              amount={value}
              percentage={Number(((value / parsedAmounts[0]) * 100).toFixed(1))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnalysisSection;
