import React from "react";
import HeartIcon from "@/components/icons/HeartIcon";
import styles from "./style.module.scss";
import StarIcon from "@/components/icons/StarIcon";
import { Link } from "react-router";

const ProductCard = ({
  name,
  finalprice,
  oldprice,
  image,
  LinkId,
  addToCart,
}) => {
  const rating = 5;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Link to={`/shop/${LinkId}`}>
          <img src={image} alt={name} />
        </Link>
        <div className={styles.wishlist}>
          <HeartIcon />
        </div>
        <div className={styles.tags}>
          <span className="text-[#121212] bg-[#e9e3e3]">NEW</span>
          <span className="text-[#FEFEFE] bg-[#38CB89]">-50%</span>
        </div>
        <div className={styles.button}>
          <button onClick={() => addToCart()}>Add To Cart </button>
        </div>
      </div>
      <div className={styles.body}>
        <ul className="flex gap-1">
          {[...Array(rating)].map((_, index) => (
            <li key={index}>
              <StarIcon />
            </li>
          ))}
        </ul>
        <Link to={`/shop/${LinkId}`} className={styles.name}>
          <p>{name}</p>
        </Link>
        <p className={styles.finalprice}>
          ${finalprice}{" "}
          {oldprice && <span className={styles.oldprice}>${oldprice}</span>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
