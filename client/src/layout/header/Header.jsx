import React from "react";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header>
      <div>
        <h1 className={styles.logo}>3legant.</h1>
      </div>
    </header>
  );
};

export default Header;
