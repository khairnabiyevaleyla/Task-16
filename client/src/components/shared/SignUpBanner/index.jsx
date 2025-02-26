import React from "react";
import SignUpImage from "@/assets/signupbanner.jpg";
import styles from "./style.module.scss";
import EmailIcon from "@/components/icons/EmailIcon";

const SignUpBanner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <img src={SignUpImage} alt="Sign Up Banner" />
        <div className={styles.inputbox}>
          <h3 className={styles.heading}>Join Our Newsletter</h3>
          <p className={styles.title}>
            Sign up for deals, new products and promotions
          </p>
          <div className={styles.submitbox}>
            <EmailIcon />
            <input type="email" placeholder="Email address" />
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBanner;
