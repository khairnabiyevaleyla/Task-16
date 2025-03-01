import React from "react";
import styles from "./style.module.scss";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const ProductFeatures = () => {
  return (
    <div className="my-6">
      <div className={styles.features}>
        <h6>Measurements</h6>
        <p>17 1/2x20 5/8 "</p>
      </div>
      <div className={styles.features}>
        <h6 className="flex items-center gap-1">
          Choose Color
          <ArrowRightIcon width={24} height={24} />
        </h6>
        <p>Black </p>
        <div className="flex gap-4">
          <div className="w-[72px] h-[72px] object-contain">
            <img
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full"
            />
          </div>
          <div className="w-[72px] h-[72px] object-contain">
            <img
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full"
            />
          </div>
          <div className="w-[72px] h-[72px] object-contain">
            <img
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full"
            />
          </div>
          <div className="w-[72px] h-[72px] object-contain">
            <img
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
