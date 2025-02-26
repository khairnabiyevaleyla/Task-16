import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router";
import { NavBarElements } from "@/constants/NavBarItems";
import SearchIcon from "@/components/icons/SearchIcon";
import UserIcon from "@/components/icons/UserIcon";
import ShopIcon from "@/components/icons/ShopIcon";
import EllipseIcon from "@/components/icons/EllipseIcon";
import BurgerMenuIcon from "@/components/icons/BurgerMenuIcon";

const Header = () => {
  return (
    <>
      <header id="desktop_menu" className="max-lg:hidden">
        <div className={styles.root}>
          <h1 className={styles.logo}>3legant.</h1>
          <ul className={styles.navlist}>
            {NavBarElements.map((item, index) => (
              <li key={index} className={styles.navtext}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.icons}>
            <SearchIcon stroke="#141718" width="24" height="24" />
            <UserIcon stroke="#141718" width="24" height="24" />
            <ShopIcon stroke="#141718" width="24" height="24" />
            <div className="relative">
              <EllipseIcon width="24" height="24" />
              <span className={styles.count}>0</span>
            </div>
          </div>
        </div>
      </header>

      <header id="mobile_menu" className="hidden max-lg:block">
        <div className={styles.root}>
          <div className="flex items-center">
            <BurgerMenuIcon stroke="#141718" width="24" height="24" />
            <h1 className={styles.logo}>3legant.</h1>
          </div>
          <div className="flex items-center gap-1">
            <ShopIcon stroke="#141718" width="24" height="24" />
            <div className="relative">
              <EllipseIcon width="24" height="24" />
              <span className={styles.count}>0</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
