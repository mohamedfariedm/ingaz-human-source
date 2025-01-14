import React, { useEffect } from "react";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import singleImage from "../../assets/news/rectangle.svg";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation("news"); // Use the "news" namespace for translations

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

  return (
    <>
      <HelmetInfo titlePage={t("news_details_title")} />
      <div className="xl:w-[1152px] flex gap-[50px] flex-col relative mx-auto my-[164px] px-5 xl:px-0">
        <BreadCrumb name={t("news_details_breadcrumb")} />
        <div className="flex xl:w-[1014px] flex-col gap-[24px] items-center shrink-0 flex-nowrap relative mx-auto z-[5] animate-section opacity-0 transition-opacity duration-1000">
          <span className="flex xl:w-[1014px]  justify-center items-start self-stretch shrink-0 text-[48px] text_bold_Bukra leading-[87.36px] text-[#0e4a79] tracking-[0.50px] relative text-center z-[6]">
            {t("news_details_heading")}
          </span>
          <span className="flex xl:w-[1014px]  justify-center items-start self-stretch shrink-0 text-[18px] font-normal leading-[32.76px] text-[#667680] tracking-[0.36px] relative text-center z-[7]">
            {t("news_details_subheading")}
          </span>
        </div>
        <div className="xl:w-[1152px] flex flex-col gap-[63px] items-start self-stretch shrink-0 flex-nowrap relative z-[8] animate-section opacity-0 transition-opacity duration-1000">
          <div
            className="h-[648px] self-stretch shrink-0 bg-[rgba(217,217,217,0.2)] bg-cover bg-no-repeat rounded-[32px] relative z-[9]"
            style={{
              backgroundImage: `url(${singleImage})`,
            }}
          />
          <span className="flex xl:w-[1152px]  justify-start items-start self-stretch shrink-0 text-[20px] font-normal leading-[48px] text-[#667680] tracking-[0.4px] relative text-start z-10">
            {t("news_details_content")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Stats;
