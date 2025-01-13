import React, { useEffect } from "react";
import NewsList from "./NewsList";
import backgroundImage from "../../../../assets/news/Subtract.svg";
import image1 from "../../../../assets/news/1.svg";
import arrow from "../../../../assets/news/arrow-up-left.svg";
import image2 from "../../../../assets/news/2.svg";
import image3 from "../../../../assets/news/3.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function News() {
  const { t } = useTranslation("News"); // Use News namespace

  useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
              } else {
                entry.target.classList.remove("animate-visible");
              }
            });
          },
          { threshold: 0.2 } // Trigger animation when 20% of the section is visible
        );
    
        const sections = document.querySelectorAll(".animate-section");
        sections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect(); // Cleanup
      }, []);
      const newsData = [
        {
          title: t("news_item_1.title"),
          description: t("news_item_1.description"),
          mainImage: image3,
          secondaryImage: backgroundImage,
          actionIcon: arrow,
        },
        {
          title: t("news_item_2.title"),
          description: t("news_item_2.description"),
          mainImage: image1,
          secondaryImage: backgroundImage,
          actionIcon: arrow,
        },
        {
          title: t("news_item_3.title"),
          description: t("news_item_3.description"),
          mainImage: image2,
          secondaryImage: backgroundImage,
          actionIcon: arrow,
        },
        // Add more news items here
      ];

  return (
    <div id="news" className="main-container  flex flex-col my-16 items-center gap-[4rem] w-full max-w-[1440px] bg-[#fff] relative overflow-hidden mx-auto px-4 sm:px-8 animate-section opacity-0 transition-opacity duration-1000">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <span className="text-[16px]  font-medium leading-[29.12px] text-[#0e4a79]">
        {t("latest_news")}
        </span>
        <span className="text-[32px]  font-extrabold leading-[58px] text-[#0e4a79] text-center">
        {t("stay_updated")}
        </span>
      </div>

      {/* News List */}
      <NewsList newsData={newsData} />

      {/* Browse All Button */}
      <div className="group flex justify-center overflow-hidden w-[207px] h-[49px] bg-[#f1f8fd] rounded-full hover:scale-[85%] transition-transform duration-500 cursor-pointer">
  <Link to={"/news"} className="flex items-center justify-center relative ">
    {/* Text */}
    <span className="text-[14px] font-normal text-[#0e4a79] ml-2">
    {t("browse_all_news")}
    </span>

    {/* SVG Container */}
    <div className="w-[20px] h-[20px] absolute left-[-80px] transition-all duration-500 group-hover:-left-5">
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#0E4A79] -rotate-45"
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
  </Link>
</div>


    </div>
  );
}
