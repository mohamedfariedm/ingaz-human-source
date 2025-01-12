import React, { useEffect, useState } from "react";
import "./Services.css";
import arrowLeft from "../../../../assets/about/arrow-left.svg";
import mask1 from "../../../../assets/services/1.svg";
import mask2 from "../../../../assets/services/2.svg";
import mask3 from "../../../../assets/services/3.svg";
import mask4 from "../../../../assets/services/4.svg";
import mask5 from "../../../../assets/services/5.svg";
import mask6 from "../../../../assets/services/6.svg";
import mask7 from "../../../../assets/services/7.svg";
import mask8 from "../../../../assets/services/8.svg";
import mask9 from "../../../../assets/services/9.svg";
import mask10 from "../../../../assets/services/10.svg";
import mask11 from "../../../../assets/services/11.svg";
import subtract from "../../../../assets/services/subtract.svg";
import subtract1 from "../../../../assets/services/subtract1.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("Services");

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

  const [selectedCategory, setSelectedCategory] = useState("business");

  const cardData = [
    { name: t("categories.industrial"), image: mask1, category: "business" },
    { name: t("categories.real_estate"), image: mask2, category: "business" },
    { name: t("categories.education"), image: mask3, category: "individual" },
    { name: t("categories.education"), image: mask3, category: "business" },
    { name: t("categories.technology"), image: mask4, category: "business" },
    { name: t("categories.energy"), image: mask5, category: "business" },
    { name: t("categories.logistics"), image: mask6, category: "business" },
    { name: t("categories.retail"), image: mask7, category: "business" },
    { name: t("categories.hospitality"), image: mask9, category: "business" },
    { name: t("categories.hospitality"), image: mask9, category: "individual" },
    { name: t("categories.medical"), image: mask10, category: "business" },
    { name: t("categories.medical"), image: mask10, category: "individual" },
    { name: t("categories.banking"), image: mask11, category: "business" },
  ];

  const filteredData = cardData.filter((card) => card.category === selectedCategory);
  return (
    <div id="services" className="main-container w-full h-auto bg-[#fff] relative overflow-hidden mx-auto mb-16 my-0 px-4 lg:px-0 animate-section opacity-0 transition-opacity duration-1000">
      {/* Header Section */}
      <div className="flex flex-col gap-[20px] items-center text-center mt-16">
        <span className="text-[16px] font-medium leading-[29px] text-[#0e4a79]">
        {t("title")}
        </span>
        <span className="text-[24px] md:text-[32px] font-semibold leading-[36px] md:leading-[58px] text-[#0e4a79]">
        {t("subtitle")}
        </span>
      </div>

      {/* Button toggle Section */}
      <div className="flex justify-center mt-[80px] mb-[80px] gap-4">
  <div className="main-container flex w-[180px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] items-center flex-nowrap bg-[#f1f8fd] rounded-[99px] relative mx-auto my-0">
    {/* Business Button */}
    <button
      onClick={() => setSelectedCategory("business")}
      className={`flex w-[80px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[99px] border-none relative z-[2] pointer ${
        selectedCategory === "business"
          ? "bg-[#0e4a79] text-[#fff]"
          : "bg-transparent text-[#667680]"
      }`}
    >
      <span className="flex w-[48px] h-[19px] justify-center items-start shrink-0 basis-auto text-[12px] font-medium leading-[19px] relative text-center whitespace-nowrap z-[3]">
      {t("business")}
      </span>
    </button>
    {/* Individual Toggle */}
    <div
      onClick={() => setSelectedCategory("individual")}
      className={`flex cursor-pointer w-[88px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[99px] relative pointer ${
        selectedCategory === "individual"
          ? "bg-[#0e4a79] text-[#fff]"
          : "bg-transparent text-[#667680]"
      }`}
    >
      <span className="flex w-[35px] h-[19px] justify-end items-start shrink-0 basis-auto text-[12px] font-medium leading-[19px] relative text-right whitespace-nowrap z-[1]">
      {t("individual")}
      </span>
    </div>
  </div>
</div>


      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[48px] max-w-[1152px] mx-auto  cardHolder">
        {filteredData.map((card, index) => (
          <Link
           to={selectedCategory=="business"?"/bussnissform":"/individaulsForm"}
            key={index}
            className="w-[172px] h-[197px] relative mx-auto my-0 flex flex-col rtl:items-end justify-center group transition-all duration-500"
          >
            {/* Icon */}
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className={`w-[48px] h-[48px] bg-cover bg-no-repeat relative z-[5] mt-[24px] mr-0 mb-0 ml-[62px] filter-custom`}
            />
            {/* Name */}
            <span className="flex w-[112px] h-[44px] justify-center items-start text-[12px] font-medium leading-[21.84px] text-[#0e4a79] group-hover:text-[#15B86C] transition-all duration-500 relative text-center z-[4] mt-[24px] mr-0 mb-0 ml-[29px]">
              {card.name}
            </span>
            {/* Button */}
            <div className="group-green flex w-[108px] h-[30px] pt-[5px] pr-[19px] pb-[5px] pl-[19px] gap-[8px] items-center flex-nowrap bg-[#f1f8fd] hover:bg-[#15B86C] rounded-[138.079px] border-none relative z-[1] pointer mt-[27px] mr-0 mb-0 ml-px  group-hover:translate-x-8 transition-all duration-500 ">
              <span id="textWitehover" className="flex w-[42px] h-[18px] justify-center items-start shrink-0 basis-auto text-[10px] font-medium leading-[18px] text-[#0e4a79] group-hover:text-[#15B86C] relative text-center whitespace-nowrap z-[3]">
              {t("register_now")}
              </span>
              <div
                className="w-[20px] h-[20px] shrink-0 bg-cover bg-no-repeat relative z-[2]"
              >
                <svg id="svgCapture" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.334 16H26.6673" className="stroke-[#0E4A79] group-hover:stroke-[#15B86C] " strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.21952 18.1371L8.50809 19.1522C10.5958 20.7969 11.6397 21.6191 12.4868 21.2441C13.3339 20.869 13.3339 19.5845 13.3339 17.0154V14.9853C13.3339 12.4162 13.3339 11.1317 12.4868 10.7566C11.6397 10.3815 10.5958 11.2038 8.5081 12.8485L7.21952 13.8635C5.96249 14.8538 5.33398 15.349 5.33398 16.0003C5.33398 16.6517 5.96249 17.1469 7.21952 18.1371Z"  className="stroke-[#0E4A79] group-hover:stroke-[#15B86C]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </div>
            </div>
            {/* Background */}
            <div
            id="subtract"
              className="w-[172px] h-[197px] bg-cover bg-no-repeat absolute top-0 left-0 transition-all duration-500"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
