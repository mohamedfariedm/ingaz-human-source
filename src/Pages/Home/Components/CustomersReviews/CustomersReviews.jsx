
import React from "react";
import image1 from "../../../../assets/reviews/rectangele.svg";
import image2 from "../../../../assets/reviews/Subtract.svg";

const CustomersReviews = () => {
  return (
    <div className="main-container w-full max-w-[1440px] h-auto sm:h-[838px] bg-white relative overflow-hidden mx-auto my-0">
      {/* Header */}
      <div className="flex flex-col gap-5 items-center relative z-[73] mt-16 sm:mt-[64px] mx-auto w-[512px] text-center">
        <span className="text-sm sm:text-base font-medium leading-[29px] text-[#0e4a79]">
          آراء عملائنا
        </span>
        <span className="text-lg sm:text-2xl font-semibold leading-[58px] text-[#0e4a79]">
          ما الذي يقوله شركاؤنا عن خدماتنا؟
        </span>
      </div>

      {/* Reviews Section */}
      <div className="relative mt-12 mx-auto flex flex-wrap justify-center gap-8">
        {[1, 2,3].map((_, index) => (
          <div
            key={index}
            className="relative w-[319px] h-[259px] bg-cover bg-no-repeat  z-5"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div
              className="absolute top-0 left-0 w-[68px] h-[64px] bg-cover bg-no-repeat  flex items-center justify-center z-10"
              style={{ backgroundImage:`url(${image1})`}}
            >
              <div
                className="w-4 h-2 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url(https://placehold.co/40x20)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full bg-white shadow-md">
          <div
            className="w-6 h-6 bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url(https://placehold.co/24x24)",
            }}
          ></div>
        </button>
        <button className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full bg-white shadow-md">
          <div
            className="w-6 h-6 bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url(https://placehold.co/24x24)",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default CustomersReviews;
