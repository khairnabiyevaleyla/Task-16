import React from "react";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";
import styles from "./style.module.scss";

const BreadCrumbs = ({ LinkId }) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`),
    enabled: !!id,
  });

  if (isLoading) return null;

  return (
    <div className="my-4">
      <ul className={styles.links}>
        <Link to="/">
          <li className={styles.link}>
            Home <ArrowRightIcon />
          </li>
        </Link>
        <Link to="/shop">
          <li className={styles.link}>
            Shop <ArrowRightIcon />
          </li>
        </Link>
        <Link to={`/shop/${LinkId}`}>
          <li className={styles.link}>
            {data?.data?.[0]?.categories?.[0]?.name}
            <ArrowRightIcon />
          </li>
        </Link>
        <Link to={`/shop/${LinkId}`}>
          <li className={`${styles.link} ${styles.active}`}>
            {data?.data?.[0]?.name}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
