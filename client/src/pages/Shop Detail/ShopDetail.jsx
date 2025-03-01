import React from "react";
import ShopSection from "@/components/section/shopdetail/index";
import CommentSide from "@/components/section/shopdetail/Comments/CommentSide";

const ShopDetail = () => {
  return (
    <div className="border-t border-[#F3F5F7]">
      <ShopSection />
      <CommentSide />
    </div>
  );
};

export default ShopDetail;
