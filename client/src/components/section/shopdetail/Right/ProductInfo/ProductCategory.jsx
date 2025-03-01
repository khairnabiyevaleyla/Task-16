import React from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";

const ProductCategory = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`),
    enabled: !!id,
  });

  if (isLoading) return null;
  return (
    <div className="flex gap-10 border-t pt-7 border-[#E8ECEF]">
      <div>
        <p className={styles.title}>SKU</p>
        <p className={styles.title}>CATEGORY</p>
      </div>
      <div>
        <p className={styles.text}>1117</p>
        <p className={styles.text}>{data?.data?.[0]?.categories?.[0]?.name}</p>
      </div>
    </div>
  );
};

export default ProductCategory;
