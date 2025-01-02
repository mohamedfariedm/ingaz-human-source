import React from "react";

export default function PartnersSection() {
  return (
<div className="main-container max-w-[1440px] h-[602px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      {/* Title Section */}
      <div className="flex w-[362px] flex-col gap-[20px] items-center flex-nowrap relative z-[41] mt-[64px] mx-auto">
        <span className="h-[29px] text-[16px] font-medium leading-[29px] text-[#0e4a79] text-center">
          شركاؤنا في النجاح
        </span>
        <span className="w-[362px] h-[58px] text-[32px] font-semibold leading-[58px] text-[#0e4a79] text-right">
          نفخر بشراكتنا مع الأفضل
        </span>
      </div>

      {/* First Row of Images */}
      <div className="flex w-[3402.644px] gap-[6.057px] items-center flex-nowrap relative z-[1] mt-[111px] mx-auto">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-[173.221px] h-[98.118px] shrink-0 bg-[#f1f8fd] bg-cover bg-no-repeat relative z-[2]"
              style={{
                backgroundImage: `url(https://placehold.co/173x98?text=Logo+${
                  index + 1
                })`,
              }}
            />
          ))}
      </div>

      {/* Second Row of Images */}
      <div className="flex w-[3403.855px] gap-[6.057px] items-center flex-nowrap relative z-[21] mt-[38.763px] mx-auto">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              key={index + 20}
              className="w-[173.221px] h-[98.118px] shrink-0 bg-[#f1f8fd] bg-cover bg-no-repeat relative z-[22]"
              style={{
                backgroundImage: `url(https://placehold.co/173x98?text=Logo+${
                  index + 21
                })`,
              }}
            />
          ))}
      </div>
    </div>
  );
}
