import { FC } from "react";
import styles from "../styles/SeeMoreButton.module.css";

type SeeMoreButtonProps = {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
};

const SeeMoreButton: FC<SeeMoreButtonProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const handleOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <button className={styles.seeMoreButton} onClick={handleOnClick}>
      <h3>{isCollapsed ? "See More" : "See Less"}</h3>
      <p
        className={isCollapsed ? styles.buttonArrowDown : styles.buttonArrowUp}
      >
        ^
      </p>
    </button>
  );
};

export default SeeMoreButton;
