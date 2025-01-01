import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Dropdown } from "react-bootstrap";
import glopal from "../../assets/global.svg";

const LanguageSelector = () => {
  const dropdownRef = useRef(null);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <span
        onClick={toggleDropdown}
        className="flex items-center gap-2 cursor-pointer bg-blue-100 rounded-[8px] px-[12px] py-[8px] focus:outline-none"
      >
        <span className="text-small-bukra text-[14px] text-primary hidden md:flex">
          {currentLanguage === "ar" ? "العربية" : "English"}
        </span>
        <div
          className="language-icon w-[20px] h-[20px]"
          style={{
            backgroundImage: `url(${glopal})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </span>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-[120px] bg-white border border-gray-200 rounded shadow-md z-50">
          <ul className="flex flex-col">
            <li>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`block w-full text-start px-4 py-2 hover:bg-blue-100 ${
                  currentLanguage === "en" ? "font-bold text-blue-700" : ""
                }`}
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange("ar")}
                className={`block w-full text-start px-4 py-2 hover:bg-blue-100 ${
                  currentLanguage === "ar" ? "font-bold text-blue-700" : ""
                }`}
              >
                العربية
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
