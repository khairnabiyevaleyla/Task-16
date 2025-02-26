import React from "react";
import SignUpBanner from "@/components/shared/SignUpBanner/index";
import PageHeaderBanner from "@/components/template/PageHeaderBanner/index";
import styles from "./style.module.scss";
import FilterSection from "@/components/section/ShopSection/Filter/FilterSection";
import CategorySection from "@/components/section/ShopSection/Category/CategorySection";

const Shop = () => {
  return (
    <div>
      <PageHeaderBanner />
      <div className={styles.root}>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <FilterSection />
            <CategorySection />
          </div>
          <div className="col-span-9">products cards</div>
        </div>
      </div>
      <SignUpBanner />
    </div>
  );
};

export default Shop;
