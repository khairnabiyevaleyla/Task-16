import React from "react";
import SignUpBanner from "@/components/shared/SignUpBanner/index";
import PageHeaderBanner from "@/components/template/PageHeaderBanner/index";
import styles from "./style.module.scss";
import FilterSection from "@/components/section/ShopSection/Filter/FilterSection";
import CategorySection from "@/components/section/ShopSection/Category/CategorySection";
import Toolbar from "@/components/section/ShopSection/Toolbar/Toolbar";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QuerieKeys";
import { getApi } from "@/http/api";
import WhiteButton from "@/components/shared/Button/WhiteButton";

const Shop = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.products],
    queryFn: () => getApi(`/products?populate=*`),
  });

  return (
    <div>
      <PageHeaderBanner />
      <div className={styles.root}>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <FilterSection />
            <CategorySection />
          </div>
          <div className="col-span-9">
            <Toolbar />
            <div className="grid grid-cols-3 my-10">
              {" "}
              {data &&
                data?.data?.map((card, index) => (
                  <ProductCard
                    key={index}
                    image={`http://localhost:1337${card.image.url}`}
                    name={card.name}
                    finalprice={card.finalprice}
                    oldprice={card.oldprice}
                  />
                ))}{" "}
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <WhiteButton />
        </div>
      </div>
      <SignUpBanner />
    </div>
  );
};

export default Shop;
