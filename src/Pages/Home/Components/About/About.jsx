import React, { useEffect } from "react";
import image1 from "../../../../assets/about/vector.svg";
import background from "../../../../assets/about/image.svg";
import question from "../../../../assets/about/question.svg";
import Arrow from "../../../../assets/about/arrow-left.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation("About"); // Load About namespace


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
<div id="about" className=" w-full max-w-[1440px] xl:w-[1440px] h-[635px] bg-[#fff] relative  mx-auto my-5 xl:my-0 animate-section opacity-0 transition-opacity duration-1000">
  <div
    className="w-full bg-contain h-[300px]   xl:w-[1295.727px]  xl:h-[512.455px] xl:bg-cover bg-no-repeat xl:absolute xl:top-[61.772px] xl:left-0 "
    style={{ backgroundImage: `url(${image1})` }}
  >
    <div
      className=" hidden xl:block w-[161px] h-[274px] bg-cover  bg-no-repeat xl:absolute xl:left-[10px] xl:mt-[53.228px] mr-0 mb-0 ml-[858px]"
      style={{ backgroundImage: `url(${question})` }}
    />

  </div>
  <span className="flex xl:w-[466px]  xl:h-[116px] justify-end items-start  text-[32px] font-semibold leading-[58.24px] text-[#0e4a79] absolute top-[186px] xl:left-[831px] text-start z-[1]">
    {t("title")}  </span>

      <div className=" w-full flex flex-col justify-center items-center gap-10 xl:block xl:w-[760px] h-[160px] text-[0px]  mx-auto my-0 xl:absolute xl:top-[413px] xl:left-[537px] z-[6]">
      <span className="flex md:w-[696px] md:h-[96px] justify-end items-start  text-[16px] font-normal leading-[32px] text-[#667680] relative text-start z-[3] mt-[90px] xl:rtl:mt-[32px] xl:ltr:mt-[22px] mr-0 mb-0 md:ms-[32px] ">
        {t("description")}
      </span>
      <Link to={"aboutus"} className="flex w-[124px] h-[36px] pt-[14px] pr-[34px] pb-[14px] pl-[34px] gap-[8px] justify-center items-center flex-nowrap bg-[#f1f8fd] group hover:bg-primary hover:scale-75 rounded-[99px] xl:absolute xl:rtl:left-0 xl:ltr:right-0 rtl:mt-[-4px] ltr:mt-2 mr-0 mb-0 ml-0 z-10 transition-all duration-[500ms]">
 
        <svg className="stroke-[#0E4A79] group-hover:stroke-white transition-all duration-[500ms]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.334 16H26.6673"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.21952 18.1371L8.50809 19.1522C10.5958 20.7969 11.6397 21.6191 12.4868 21.2441C13.3339 20.869 13.3339 19.5845 13.3339 17.0154V14.9853C13.3339 12.4162 13.3339 11.1317 12.4868 10.7566C11.6397 10.3815 10.5958 11.2038 8.5081 12.8485L7.21952 13.8635C5.96249 14.8538 5.33398 15.349 5.33398 16.0003C5.33398 16.6517 5.96249 17.1469 7.21952 18.1371Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </Link>
      <div
      style={{ backgroundImage: `url(${background})` }}

      className=" hidden xl:block xl:w-[760px] xl:h-[160px] bg-cover bg-no-repeat xl:absolute xl:top-0 xl:left-0 z-[2]  ltr:rotate-y-180  " />
    </div>
</div>

  );
};

export default About;
