import React from "react";
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

const Services = () => {
  const cardData = [
    { name: "القطاع الصناعي والتشغيلي", image: mask1 },
    { name: "قطاع العقارات والبنية التحتية", image: mask2 },
    { name: "قطاع التعليم والتدريب", image: mask3 },
    { name: "قطاع التكنولوجيا والاتصالات", image: mask4 },
    { name: "قطاع الطاقة والبيئة", image: mask5 },
    { name: "قطاع النقل والخدمات اللوجستية", image: mask6 },
    { name: "قطاع التجزئة", image: mask7 },
    { name: "قطاع الأعمال", image: mask8 },
    { name: "قطاع الضيافة والترفيه", image: mask9 },
    { name: "قطاع الطبي", image: mask10 },
    { name: "قطاع البنوك والتأمين", image: mask11 },
  ];

  return (
    <div className="main-container w-full h-auto bg-[#fff] relative overflow-hidden mx-auto mb-16 my-0 px-4 lg:px-0">
      {/* Header Section */}
      <div className="flex flex-col gap-[20px] items-center text-center mt-16">
        <span className="text-[16px] font-medium leading-[29px] text-[#0e4a79]">
          خدمتنا
        </span>
        <span className="text-[24px] md:text-[32px] font-semibold leading-[36px] md:leading-[58px] text-[#0e4a79]">
          اكتشف خدماتنا المتميزة
        </span>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-[80px] mb-[80px] gap-4">
        <div className="main-container flex w-[180px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] items-center flex-nowrap bg-[#f1f8fd] rounded-[99px] relative mx-auto my-0">
          <button className="flex w-[80px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#0e4a79] rounded-[99px] border-none relative z-[2] pointer">
            <span className="flex w-[48px] h-[19px] justify-center items-start shrink-0 basis-auto text-[12px] font-medium leading-[19px] text-[#fff] relative text-center whitespace-nowrap z-[3]">
              الأعمال
            </span>
          </button>
          <div className="flex w-[88px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[99px] relative">
            <span className="flex w-[35px] h-[19px] justify-end items-start shrink-0 basis-auto text-[12px] font-medium leading-[19px] text-[#667680] relative text-right whitespace-nowrap z-[1]">
              الأفراد
            </span>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[48px] max-w-[1152px] mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[172px] h-[197px] relative mx-auto my-0 flex flex-col items-end justify-center"
          >
            {/* Icon */}
            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="w-[48px] h-[48px] bg-cover bg-no-repeat relative z-[5] mt-[24px] mr-0 mb-0 ml-[62px]"
            />
            {/* Name */}
            <span className="flex w-[112px] h-[44px] justify-center items-start text-[12px] font-medium leading-[21.84px] text-[#0e4a79] relative text-center z-[4] mt-[24px] mr-0 mb-0 ml-[29px]">
              {card.name}
            </span>
            {/* Button */}
            <button className="flex w-[108px] h-[30px] pt-[5px] pr-[19px] pb-[5px] pl-[19px] gap-[8px] items-center flex-nowrap bg-[#f1f8fd] rounded-[138.079px] border-none relative z-[1] pointer mt-[27px] mr-0 mb-0 ml-px">
              <span className="flex w-[42px] h-[18px] justify-center items-start shrink-0 basis-auto text-[10px] font-medium leading-[18px] text-[#0e4a79] relative text-center whitespace-nowrap z-[3]">
                سجل الان
              </span>
              <div
                style={{ backgroundImage: `url(${arrowLeft})` }}
                className="w-[20px] h-[20px] shrink-0 bg-cover bg-no-repeat relative z-[2]"
              />
            </button>
            {/* Background */}
            <div
              style={{ backgroundImage: `url(${subtract})` }}
              className="w-[172px] h-[197px] bg-cover bg-no-repeat absolute top-0 left-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
