import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-[1152px] border-b border-[#f1f3f9] pt-[20px] sm:pt-[40px] gap-4 sm:gap-0 justify-between items-center mx-auto px-4 sm:px-0">
      {/* Links */}
      <div className="flex flex-wrap gap-4 sm:gap-[32px] justify-center sm:justify-start">
        {["شروط الاستخدام", "سياسة الخصوصية", "معلومات عنا", "تواصل معنا"].reverse().map(
          (link, index) => (
            <span
              key={index}
              className="text-[#667680] text-[12px] sm:text-[14px] hover:underline cursor-pointer"
            >
              {link}
            </span>
          )
        )}
      </div>

      {/* Footer Copyright */}
      <span className="text-[#667680] text-[12px] sm:text-[14px] text-center sm:text-right">
        2025 ©, جميع الحقوق محفوظة لشركة انجاز للموارد البشرية
      </span>
    </div>
  );
};

export default FooterLinks;
