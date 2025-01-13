import React from "react";
import logo from "../../assets/logo.svg";
import call from "../../assets/footer/call.svg";
import mail from "../../assets/footer/mail-01.svg";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation("Footer"); // Import the translation function

  return (
    <div className="flex flex-col gap-[24px] sm:gap-[48px] w-full max-w-[513px] justify-center items-center sm:items-start sm:justify-start px-4 sm:px-0">
      {/* Logo and Description */}
      <div className="flex flex-col gap-[12px] items-start sm:items-stretch">
        <div
          className="w-[120px] h-[30px] sm:w-[210px] sm:h-[54px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        />
        <span className="text-[#667680] text-[12px] sm:text-[14px] leading-5 sm:leading-6 text-center sm:rtl:text-right sm:ltr:text-left">
        {t("footer.description")}

        </span>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col gap-[16px] items-center sm:items-stretch">
        <span className="text-[14px] sm:text-[16px] font-semibold text-[#111317]">
        {t("footer.question")}
        </span>
        <div className="flex flex-wrap gap-[16px] sm:gap-[56px] justify-center sm:justify-start">
          <ContactItem
           label={t("footer.call_us")}
            value="+966 920020077"
            icon={call} // Call Icon
          />
          <ContactItem
         label={t("footer.email_us")}
            value="info@enjaz.com.sa"
            icon={mail} // Email Icon
          />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ label, value, icon }) => (
  <div className="flex gap-[8px] sm:gap-[16px] items-center">
    {/* Icon */}
    <div
      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${icon})` }}
    />
    {/* Label and Value */}
    <div className="flex flex-col gap-[2px] sm:gap-[4px] text-center sm:text-right">
      <span className="text-[10px] sm:text-[12px] text-[#667680]">{label}</span>
      <span className="text-[12px] sm:text-[14px] text-[#0e4a79]" dir="ltr">{value}</span>
    </div>
  </div>
);

export default ContactInfo;
