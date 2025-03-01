import React from "react";
import ShopSection from "@/components/section/shopdetail/index";
import CommentSide from "@/components/section/shopdetail/Comments/CommentSide";
import SignUpBanner from "@/components/shared/SignUpBanner/index";

const ShopDetail = () => {
  return (
    <div className="border-t border-[#F3F5F7]">
      <ShopSection />
      <CommentSide />
      <SignUpBanner />
    </div>
  );
};

export default ShopDetail;
