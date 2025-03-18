import React, { FC } from "react";
import StatCard from "./StatCard";
import StatBar from "./StatBar";
import styles from "../styles/AnalysisSection.module.css";

type AnalysisSectionProps = {
  parsedAmounts: Array<number>;
};

const AnalysisSection: FC<AnalysisSectionProps> = ({ parsedAmounts }) => {
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
        <StatBar dataName="E" amount={40} percentage={16.06} />
      </div>
    </div>
  );
};

export default AnalysisSection;
