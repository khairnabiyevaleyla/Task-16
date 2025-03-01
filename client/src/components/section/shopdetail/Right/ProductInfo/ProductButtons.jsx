import React from "react";
import styles from "./style.module.scss";
import HeartIcon from "@/components/icons/HeartIcon";

const ProductButtons = () => {
  return (
    <div className="my-8">
      {" "}
      <div className="flex gap-4">
        <div className={styles.count}>
          <ul>
            <li>-</li>
            <li>0</li>
            <li>+</li>
          </ul>
        </div>
        <div className={styles.wishlist}>
          <button>
            <HeartIcon />
            Wishlist
          </button>
        </div>
      </div>
      <div className={styles.shopbtn}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductButtons;
