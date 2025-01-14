import React from "react";
import { useTranslation } from "react-i18next";
import Vector from "assets/contactus.svg";
import Vector1 from "assets/contactus/elements.svg";
import Vector2 from "assets/contactus/mail-02.svg";

const LeftPart = () => {
  const { t } = useTranslation("contact"); // Use the "contact" namespace for translations

  return (
    <div className="flex gap-y-[72px] xl:gap-x-[32px] items-center justify-center xl:justify-start xl:grow basis-0 flex-wrap relative z-[6]">
      <div
        className="w-full md:w-[591px] md:h-[250.43px] ltr:rotate-y-180 bg-cover bg-no-repeat relative z-[7]"
        style={{ backgroundImage: `url(${Vector})` }}
      />
      <div className="flex flex-col md:flex-row gap-[32px] items-center flex-nowrap relative z-[8] md:w-[524px]">
        {/* Phone Section */}
        <div className="flex flex-col gap-[16px] justify-center items-center md:grow md:basis-0 md:flex-nowrap relative z-[15]">
          <div className="w-[48px] h-[48px] bg-[#f1f8fd] rounded-full relative overflow-hidden flex justify-center items-center">
            <div className="w-[24px] h-[24px] relative ">
              <div
                className="w-[24px] h-[24px] bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${Vector1})` }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start self-stretch flex-nowrap relative z-[19]">
            <span className="h-[29px] self-stretch basis-auto text-[16px] font-medium leading-[29px] text-[#0e4a79] tracking-[0.32px] relative text-center z-20">
              {t("leftPart.phoneTitle")}
            </span>
            <span className="flex md:w-[246px] md:h-[50px] justify-center items-start self-stretch text-[14px] font-normal leading-[25.48px] text-[#94969c] tracking-[0.28px] relative text-center z-[21]">
              {t("leftPart.phoneDescription")}
            </span>
          </div>
        </div>
        {/* Email Section */}
        <div className="flex flex-col gap-[16px] justify-center items-center md:grow md:basis-0 md:flex-nowrap relative z-[8]">
          <div className="w-[48px] h-[48px] bg-[#f1f8fd] rounded-full flex justify-center items-center relative overflow-hidden z-[9]">
            <div className="w-[24px] h-[24px] flex justify-center items-center relative z-10">
              <div
                className="w-[24px] h-[24px] bg-cover bg-no-repeat  relative z-[11] mt-[2.752px] mr-0 mb-0 ml-[1.25px]"
                style={{ backgroundImage: `url(${Vector2})` }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start self-stretch flex-nowrap relative z-[12]">
            <span className="h-[29px] self-stretch basis-auto text-[16px] font-medium leading-[29px] text-[#0e4a79] tracking-[0.32px] relative text-center z-[13]">
              {t("leftPart.emailTitle")}
            </span>
            <div className="self-stretch text-[14px] font-normal leading-[25.48px] tracking-[0.28px] relative text-center z-[14]">
              <span className="text-[14px] font-normal leading-[25.48px] text-[#94969c] tracking-[0.28px] relative text-center">
                {t("leftPart.emailLine1")}{" "}
              </span>
              <span className="text-[14px] font-normal leading-[25.48px] text-[#94969c] tracking-[0.28px] relative text-center">
                {t("leftPart.emailLine2")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
