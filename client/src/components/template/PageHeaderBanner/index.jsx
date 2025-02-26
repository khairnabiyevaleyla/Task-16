import React from "react";
import { Link } from "react-router";
import styles from "./style.module.scss";
import PageHeaderBannerImg from "@/assets/pageheaderbanner.jpg";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const PageHeaderBanner = () => {
  return (
    <div className={styles.root}>
      <div className="relative">
        <img
          src={PageHeaderBannerImg}
          className="w-full min-h-[200px] object-cover"
          alt="Shop Banner"
        />
        <div className={styles.textbox}>
          <nav>
            <ul className={styles.breadcrumbs}>
              <li>
                <Link to="/" className={styles.breadcrumbbutton}>
                  Home
                </Link>
              </li>
              <li className="my-2">
                <ArrowRightIcon />
              </li>
              <li>
                <Link to="/shop" className={styles.breadcrumbbuttonactive}>
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
          <h1 className={styles.heading}>Shop Page</h1>
          <p className={styles.text}>
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderBanner;
