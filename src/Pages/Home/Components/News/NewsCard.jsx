import React, { useState } from "react";

const NewsCard = ({ title, description, mainImage, actionIcon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="news-card w-[368px] h-[483px] relative group transition-shadow"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-3 w-[336px] absolute top-[274px] left-[17px] z-10">
        <span className="font-['29LT_Bukra'] text-[16px] font-semibold leading-[29px] text-[#0e4a79] group-hover:text-white transition-colors">
          {title}
        </span>
        <span className="font-['29LT_Bukra'] text-[14px] font-normal leading-[27px] text-[#667680] group-hover:text-white transition-colors">
          {description}
        </span>
      </div>

      {/* Images */}
      <div
        className="w-[368px] h-[258px] bg-cover bg-no-repeat rounded-t-[16px] absolute top-0 left-0"
        style={{
          backgroundImage: `url(${mainImage})`,
        }}
      />

      <div className="w-[368px] h-[225px] absolute top-[258px] left-0">
        <svg
          width="368"
          height="225"
          viewBox="0 0 368 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 0C0.447715 0 0 0.44771 0 0.999995V118C0 135.673 14.3269 150 32 150H47C64.6731 150 79 164.327 79 182V193C79 210.673 93.3269 225 111 225H336C353.673 225 368 210.673 368 193V1C368 0.447715 367.552 0 367 0H1Z"
            className="fill-[#F1F8FD] group-hover:fill-primary transition-colors"
          />
        </svg>
      </div>

      {/* Action Icon */}
      <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#f1f8fd] group-hover:bg-primary rounded-full absolute top-[419px] left-0 z-10 transition-colors">
        <div
          className={`w-[32px] h-[32px] ${
            isHovered ? "animate-rocket" : "animate-rocket-reverse"
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#0E4A79] group-hover:stroke-white transition-colors"
          >
            <path
              d="M14.666 14.667L23.9993 24.0003"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2787 8.11037L12.9344 8.26089C15.6169 8.50476 16.9581 8.62669 17.2737 9.49851C17.5895 10.3703 16.6371 11.3226 14.7324 13.2273L13.2273 14.7324C11.3226 16.6371 10.3703 17.5895 9.49851 17.2737C8.62669 16.9581 8.50476 15.6169 8.26089 12.9344L8.11037 11.2787C7.96355 9.66355 7.89013 8.85597 8.37305 8.37305C8.85597 7.89013 9.66355 7.96355 11.2787 8.11037Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* View More Link */}
      <span
        onClick={onClick}
        className="absolute top-[432px] right-[16px] text-[16px] font-normal text-[#667680] group-hover:text-white cursor-pointer hover:underline transition-colors"
      >
        عـرض الـمـزيـد
      </span>
    </div>
  );
};

export default NewsCard;
