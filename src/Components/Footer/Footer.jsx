import React from "react";
import Newsletter from "./Newsletter";
import ContactInfo from "./ContactInfo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col  gap-[32px] sm:gap-[64px] w-full px-4 sm:px-[144px] pt-[32px] sm:pt-[64px] pb-[20px] sm:pb-[40px] items-center bg-[#f1f8fd] mx-auto">
      {/* Contact Info and Newsletter */}
      <div className="flex flex-col sm:flex-row w-full max-w-[1152px] justify-between items-start sm:items-center gap-[32px] sm:gap-0">
        <ContactInfo />
        <Newsletter />
      </div>

      {/* Footer Links */}
      <FooterLinks />
    </div>
  );
};

export default Footer;
