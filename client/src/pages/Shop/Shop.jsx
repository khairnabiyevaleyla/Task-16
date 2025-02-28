import React, { useState } from "react";
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
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import SidebarTitle from "@/components/shared/SideBarTitle/SidebarTitle";

const Shop = () => {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(1000);
  const [pageSize, setPageSize] = useState(3);
  const [pageLimit, setPageLimit] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [gridCount, setGridCount] = useState(2);

  console.log(gridCount);
  const { data } = useQuery({
    queryKey: [
      QueryKeys.products,
      pageSize,
      pageLimit,
      categoryName,
      startValue,
      endValue,
    ],
    queryFn: () =>
      getApi(
        `/products?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*&filters[categories][name][$contains]=${categoryName}&filters[finalprice][$gte]=${startValue}&filters[finalprice][$lte]=${endValue}`
      ),
  });

  const totalPage = Math.ceil(data?.meta?.pagination?.total / pageSize);

  return (
    <div>
      <PageHeaderBanner />
      <div className={styles.root}>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <FilterSection />
            <CategorySection setCategory={setCategoryName} />
            <div className={styles.pricebox}>
              <SidebarTitle title="PRICE" />
              <RangeSlider
                min={0}
                max={1000}
                defaultValue={[0, 1000]}
                value={0}
                onInput={(value) => {
                  setStartValue(value[0]);
                  setEndValue(value[1]);
                }}
                className={styles.customSlider}
              />
              <div className="flex justify-between items-center gap-30 my-3">
                <button>{startValue}</button>
                <button>{endValue}</button>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <Toolbar setGrid={setGridCount} />
            <div className={`grid grid-cols-${gridCount} my-10`}>
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
          {totalPage && (
            <ul className={styles.pages}>
              <li
                disabled={pageLimit === 1}
                className="disabled:opacity-50"
                onClick={() => setPageLimit(pageLimit - 1)}
              >
                <i className={`ri-arrow-left-s-line ${styles.page}`}></i>{" "}
              </li>
              {new Array(totalPage).fill(1).map((_, index) => (
                <li
                  className={styles.page}
                  key={index}
                  onClick={() => setPageLimit(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
              <li
                disabled={pageLimit === totalPage}
                className="disabled:opacity-50"
                onClick={() => setPageLimit(pageLimit + 1)}
              >
                <i className={`ri-arrow-right-s-line ${styles.page}`}></i>{" "}
              </li>
            </ul>
          )}
        </div>
      </div>
      <SignUpBanner />
    </div>
  );
};

export default Shop;
