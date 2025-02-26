import React from "react";
import SidebarTitle from "@/components/shared/SideBarTitle/SidebarTitle";
import styles from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";

const CategorySection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.categories],
    queryFn: () => getApi(`/categories`),
  });

  return (
    <div className={styles.root}>
      <SidebarTitle title="CATEGORIES" />
      <div>
        <ul className="flex flex-col gap-3">
          {data?.data &&
            data?.data.map((item, index) => (
              <li key={index} className={styles.text}>
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
