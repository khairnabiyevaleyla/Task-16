import React, { useState } from "react";
import styles from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";
import Grid2 from "@/components/icons/Grid2";
import Grid3 from "@/components/icons/Grid3";

const Toolbar = ({ setGrid }) => {
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
          <span className="cursor-pointer" onClick={() => setGrid(2)}>
            <Grid2 />
          </span>
          <span className="cursor-pointer" onClick={() => setGrid(3)}>
            <Grid3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
