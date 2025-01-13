import React from "react";
import call from "../../assets/footer/call.svg";
import mail from "../../assets/footer/mail-01.svg";
import instagram from "../../assets/footer/instagram.svg";
import linkedin from "../../assets/footer/linkedin-02.svg";
import twitter from "../../assets/footer/new-twitter.svg";
import snap from "../../assets/footer/snapchat.svg";
import whatsapp from "../../assets/footer/whatsapp.svg";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation("Footer");

  // Array of social media icons and their alt text
  const socialIcons = [
    { src: snap, alt: "Snapchat" },
    { src: twitter, alt: "Twitter" },
    { src: whatsapp, alt: "WhatsApp" },
    { src: linkedin, alt: "LinkedIn" },
    { src: instagram, alt: "Instagram" },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-[454px]  px-4 sm:px-0">
      {/* Newsletter Section */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-[20px] leading-[33.6px] sm:text-[24px] font-semibold text-[#1d1d1d]">
          {t("footer.newsletter_title")}
          </span>
          <span className="text-[12px] sm:text-[14px] text-[#667680] leading-[21px]">
          {t("footer.newsletter_description")}
          </span>
        </div>
        <div className="flex gap-4 items-start">
          {/* Email Input Field */}
          <div className="relative flex-1">
            <div className="flex items-center justify-end bg-[#fff] rounded-[12px] border h-[45px] border-[#f1f3f9] p-5">
              <img
                src={mail}
                alt="Email Icon"
                className="w-[16px] h-[16px]"
              />
            </div>
            <input
              className="absolute inset-0 w-full h-full  font-semibold leading-[21px] heig bg-transparent border-none outline-none text-[12px] sm:text-[14px] placeholder-[#667680] p-5"
              placeholder={t("footer.email_placeholder")}
            />
          </div>
          {/* Subscribe Button */}
          <button className="w-[80px] sm:w-[99px] h-[40px] sm:h-[45px] flex items-center justify-center bg-[#0e4a79] rounded-[12px] text-white shadow-md">
          {t("footer.subscribe_now")}
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-start gap-4 sm:gap-4">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="w-[20px] h-[20px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
