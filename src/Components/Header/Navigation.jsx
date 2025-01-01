import React from "react";

const Navigation = () => {
  const navItems = [
    { text: "الرئيسية", active: true },
    { text: "من نحن", active: false },
    { text: "خدمتنا", active: false },
    { text: "إنجاز في أرقام", active: false },
    { text: "الشركاء", active: false },
    { text: "آراء عملائنا", active: false },
    { text: "الاعتمادات", active: false },
    { text: "أخبارنا", active: false },
    { text: "تواصل معنا", active: false },
  ];

  return (
    <ul className="flex flex-wrap flex-col md:flex-row gap-4 md:gap-8 items-center">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className={`text_small_Bukra text-[14px] ${
              item.active
                ? "font-extrabold text-primary"
                : "font-normal text-gray-600"
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
