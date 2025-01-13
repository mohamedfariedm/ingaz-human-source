import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  // Define links with names and URLs
  const { t } = useTranslation("Footer");

  const links = [
    { name: t("footer.terms_of_use"), url: "/terms" },
    { name: t("footer.privacy_policy"), url: "/privacy" },
    { name: t("footer.about_us"), url: "/aboutus" },
    { name: t("footer.contact_us"), url: "/contactus" },
  ];

  return (
    <div className="flex flex-col sm:flex-row w-full max-w-[1152px] border-b border-[#f1f3f9] pt-[20px] sm:pt-[40px] gap-4 sm:gap-0 justify-between items-center mx-auto px-4 sm:px-0">
      {/* Links */}
      <div className="flex flex-wrap gap-4 sm:gap-[32px] justify-center sm:justify-start">
        {links.reverse().map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="text-[#667680] text-[12px] sm:text-[14px] hover:underline cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Footer Copyright */}
      <span className="text-[#667680] text-[12px] sm:text-[14px] text-center sm:text-right">
      {t("footer.copyright")}
            </span>
    </div>
  );
};

export default FooterLinks;
