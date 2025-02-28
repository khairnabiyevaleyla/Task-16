import React from "react";
import styles from "./style.module.scss";

const WhiteButton = ({ onclick }) => {
  return (
    <div className={styles.root}>
      <button onClick={onclick}>Load more</button>
    </div>
  );
};

export default WhiteButton;
