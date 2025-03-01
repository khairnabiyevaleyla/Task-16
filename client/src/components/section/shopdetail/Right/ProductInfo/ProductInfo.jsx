import React from "react";
import styles from "./style.module.scss";
import StarIcon from "@/components/icons/StarIcon";
import Countdown from "@/components/section/shopdetail/Right/ProductInfo/CountDown";
import ProductFeatures from "@/components/section/shopdetail/Right/ProductInfo/ProductFeatures";
import ProductButtons from "@/components/section/shopdetail/Right/ProductInfo/ProductButtons";
import ProductCategory from "@/components/section/shopdetail/Right/ProductInfo/ProductCategory";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";

const ProductInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`),
    enabled: !!id,
  });

  if (isLoading) return null;
  const rating = 5;
  return (
    <div>
      <div className={styles.rating}>
        <ul className="flex gap-1">
          {[...Array(rating)].map((_, index) => (
            <li key={index}>
              <StarIcon />
            </li>
          ))}
        </ul>
        <p>
          <span>0</span> Reviews
        </p>
      </div>
      <div className={styles.name}>
        <h4>{data?.data?.[0]?.name}</h4>
        <p>
          Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.
        </p>
        <div className={styles.price}>
          <h6>
            ${data?.data?.[0]?.finalprice}{" "}
            {data?.data?.[0]?.oldprice && (
              <span className={styles.oldprice}>
                ${data?.data?.[0]?.oldprice}
              </span>
            )}
          </h6>
        </div>
      </div>
      <div className={styles.countdown}>
        <p>Offer expires in:</p>
        <Countdown targetDate={new Date("2025-03-10T00:00:00")} />
      </div>{" "}
      <ProductFeatures />
      <ProductButtons />
      <ProductCategory />
    </div>
  );
};

export default ProductInfo;
