import React from "react";
import styles from "./style.module.scss";

const SidebarTitle = ({ title }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default SidebarTitle;
