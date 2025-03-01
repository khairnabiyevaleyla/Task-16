import React from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";

const ProductImage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`),
    enabled: !!id,
  });

  if (isLoading) return null;

  return (
    <div>
      <div className={styles.root}>
        <div className={styles.image}>
          <img
            src={`http://localhost:1337${data?.data?.[0]?.image?.url}`}
            alt="Product"
          />
          <div className={styles.tags}>
            <span className="text-[#121212] bg-[#e9e3e3]">NEW</span>
            <span className="text-[#FEFEFE] bg-[#38CB89]">-50%</span>
          </div>
        </div>
        <div className={styles.bottomimage}>
          <div className={styles.imagebox}>
            {" "}
            <img
              src={`http://localhost:1337${data?.data?.[0]?.image?.url}`}
              alt="Product"
            />
          </div>
          <div className={styles.imagebox}>
            {" "}
            <img
              src={`http://localhost:1337${data?.data?.[0]?.image?.url}`}
              alt="Product"
            />
          </div>
          <div className={styles.imagebox}>
            {" "}
            <img
              src={`http://localhost:1337${data?.data?.[0]?.image?.url}`}
              alt="Product"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
