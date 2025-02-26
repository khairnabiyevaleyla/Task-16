import React from "react";
import FilterIcon from "@/components/icons/FilterIcon";
import styles from "./style.module.scss";

const FilterSection = () => {
  return (
    <div className={styles.root}>
      <FilterIcon />
      <h3 className={styles.heading}>Filter</h3>
    </div>
  );
};

export default FilterSection;
