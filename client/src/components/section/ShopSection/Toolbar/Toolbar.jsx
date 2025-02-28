import React from "react";
import styles from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";
import Grid2 from "@/components/icons/Grid2";
import Grid3 from "@/components/icons/Grid3";

const Toolbar = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.categories],
    queryFn: () => getApi(`/categories`),
  });

  return (
    <div className={styles.toolbar}>
      <h3 className={styles.title}>Living Room</h3>

      <div className={styles.controls}>
        <select className={styles.categoryname}>
          <option>Sort by</option>
          {data?.data &&
            data?.data.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
        </select>

        <div className="flex gap-2">
          <Grid3 />
          <Grid2 />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
