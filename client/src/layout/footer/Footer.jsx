import React from "react";
import styles from "./style.module.scss";
import { NavBarElements } from "@/constants/NavBarItems";
import { Link } from "react-router";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.root}>
          <div className={styles.logoSection}>
            <div className="flex gap-8">
              <h1 className={styles.logo}>3legant.</h1>
              <p className={styles.text}>Gift & Decoration Store</p>
            </div>
          </div>
          <div className={styles.navSection}>
            <ul className={styles.navlist}>
              {NavBarElements.map((item, index) => (
                <li key={index} className={styles.navtext}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottomroot}>
          <div className="flex gap-7">
            <p className={styles.bottomtext}>
              Copyright © 2023 3legant. All rights reserved
            </p>
            <ul className="flex gap-7">
              <li className={styles.bottomlist}>Privacy Policy</li>
              <li className={styles.bottomlist}>Terms of Use</li>
            </ul>
          </div>
          <div className="flex gap-6">
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
