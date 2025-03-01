import React from "react";
import LeftSide from "./Left/LeftSide";
import RightSide from "./Right/RightSide";
import styles from "./style.module.scss";
import BreadCrumbs from "@/components/section/shopdetail/BreadCrumbs/BreadCrumbs";

const ShopSection = () => {
  return (
    <div className={styles.root}>
      <div>
        <BreadCrumbs />
        <div className="grid grid-cols-2 gap-16">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
