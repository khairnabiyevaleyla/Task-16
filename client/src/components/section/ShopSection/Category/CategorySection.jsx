import React, { useState } from "react";
import SidebarTitle from "@/components/shared/SideBarTitle/SidebarTitle";
import styles from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";

const CategorySection = ({ setCategory }) => {
  const { data } = useQuery({
    queryKey: [QueryKeys.categories],
    queryFn: () => getApi(`/categories`),
  });

  return (
    <div className={styles.root}>
      <SidebarTitle title="CATEGORIES" />
      <ul className={styles.list}>
        {data?.data &&
          data?.data.map((item, index) => (
            <li
              key={index}
              className={styles.text}
              onClick={() => setCategory(item?.name)}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategorySection;
