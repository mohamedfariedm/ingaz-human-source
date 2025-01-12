import React, { useEffect } from "react";
import vector from "../../../../assets/assosiates/Vector.svg";
import image1 from "../../../../assets/assosiates/6.svg";
import image2 from "../../../../assets/assosiates/8.svg";
import image3 from "../../../../assets/assosiates/4.svg";
import image4 from "../../../../assets/assosiates/10.svg";
import image5 from "../../../../assets/assosiates/5.svg";
import image6 from "../../../../assets/assosiates/9.svg";
import image7 from "../../../../assets/assosiates/1.svg";
import image8 from "../../../../assets/assosiates/2.svg";
import image9 from "../../../../assets/assosiates/3.svg";
import image10 from "../../../../assets/assosiates/7.svg";
export default function AccreditationSection() {

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
    <div id="accreditations" className="main-container w-full xl:w-[1440px] xl:h-[793px] bg-[#fff] relative overflow-hidden mx-auto my-0 animate-section opacity-0 transition-opacity duration-1000">
      <div className="flex xl:w-[550px] flex-col gap-[20px] items-center flex-nowrap relative z-[22] mt-[64px] mx-auto">
      <span className="xl:h-[29px]  text-[16px] font-medium leading-[29px] text-[#0e4a79] text-center">
          الاعتمادات
        </span>
        <span className="xl:w-[550px] xl:h-[58px]  text-[32px] font-semibold leading-[58px] text-[#0e4a79]  text-center">
          مؤسسات معترف بها اعتمدت خدماتنا
        </span>
      </div>

      <div className=" max-w-[1061px] flex flex-col items-center justify-center gap-10  xl:h-[436px] relative z-20 mt-[87px] mx-auto">
        <div className="">
        <div
          className="xl:w-[54.62%] xl:h-[100.35%] w-full h-auto  bg-cover bg-no-repeat  xl:absolute xl:top-[-0.17%] xl:left-[-0.07%] relative top-0 left-0"
        style={{backgroundImage: `url(${vector})`}}
        />
        <img className=" xl:hidden" src={vector} alt="" />
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center">
        <div className="w-[221px] h-[103px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-0 left-[649px]">
          <div
            className="w-[189px] h-[71px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image1})`}}
          />
        </div>
        <div className="w-[158px] h-[103px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-0 left-[903px]">
          <div
            className="w-[126px] h-[71px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image2})`}}
          />
        </div>
        <div className="w-[125px] h-[123px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[112px] left-[649px]">
          <div
            className="w-[93px] h-[91px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image3})`}}
          />
        </div>
        <div className="w-[79px] h-[112px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[118px] left-[790px]">
          <div
            className="w-[47px] h-[80px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image4})`}}
          />
        </div>
        <div className="w-[172px] h-[97px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[125px] left-[889px]">
          <div
            className="w-[140px] h-[65px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image5})`}}
          />
        </div>
        <div className="w-[82px] h-[83px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[244px] left-[979px]">
          <div
            className="w-[50px] h-[51px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image8})`}}
          />
        </div>
        <div className="w-[135px] h-[69px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[251px] left-[649px]">
          <div
            className="w-[103px] h-[37px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
          style={{backgroundImage: `url(${image6})`}}
          />
        </div>
        <div className="w-[173px] h-[56px] bg-[#f1f8fd] rounded-[12px] border-none xl:absolute top-[258px] left-[796px]">
          <div
            className="w-[141px] h-[24px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
            style={{backgroundImage: `url(${image7})`}}
          />
        </div>
        <div className="w-[166px] h-[99px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[336px] left-[895px]">
          <div
            className="w-[134px] h-[67px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
            style={{backgroundImage: `url(${image10})`}}

          />
        </div>
        <div className="w-[219px] h-[91px] bg-[#f1f8fd] rounded-[12px] xl:absolute top-[344px] left-[649px]">
          <div
            className="w-[187px] h-[59px]  bg-cover bg-no-repeat mt-[16px] mx-auto"
            style={{backgroundImage: `url(${image9})`}}

          />
        </div>
        </div>
      </div>
    </div>
  );
}
