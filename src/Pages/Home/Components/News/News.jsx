import React from "react";
import NewsList from "./NewsList";

export default function News() {
  return (
    <div className="main-container flex flex-col my-16 items-center gap-[4rem] w-full max-w-[1440px] bg-[#fff] relative overflow-hidden mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <span className="text-[16px] font-medium leading-[29px] text-[#0e4a79]">
          آخر أخبارنا
        </span>
        <span className="text-[32px] font-semibold leading-[58px] text-[#0e4a79] text-center">
          كن على اطلاع دائم مع إنجاز!
        </span>
      </div>

      {/* News List */}
      <NewsList />

      {/* Browse All Button */}
      <div className="flex justify-center w-[207px] h-[49px] bg-[#f1f8fd] rounded-full">
        <span className="flex items-center justify-center    ">
          <div className="w-[20px] h-[20px] bg-[url('https://placehold.co/20x20')] bg-cover bg-no-repeat" />
          <span className="text-[14px] font-normal text-[#0e4a79] ml-2">
            تصفح جميع الاخبار
          </span>
        </span>
      </div>

    </div>
  );
}
