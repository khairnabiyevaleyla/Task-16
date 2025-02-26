import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router";
import { NavBarElements } from "@/constants/NavBarItems";

const Header = () => {
  return (
    <header>
      <div className={styles.root}>
        {" "}
        <div>
          <h1 className={styles.logo}>3legant.</h1>
        </div>
        <div>
          <ul className={styles.navlist}>
            {NavBarElements &&
              NavBarElements.map((item, index) => (
                <li key={index} className={styles.navtext}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
