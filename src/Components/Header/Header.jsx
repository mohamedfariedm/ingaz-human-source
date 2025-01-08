import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed z-50 header-container flex w-full h-[100px] py-[18px] px-[16px] md:px-[64px] lg:px-[80px] justify-between items-center bg-white/10 backdrop-blur-md mx-auto top-0">
      <Logo />

      {/* Full Navigation for Medium and Larger Screens */}
      <div className="flex gap-[3rem]">
        <nav className="hidden lg:flex">
          <Navigation />
        </nav>

        {/* Dropdown Menu for Small Screens */}
        <div ref={menuRef} className="relative">
          {isMenuOpen && (
            <div className="absolute top-[100%] -left-[20%] w-screen bg-white shadow-md z-50 md:hidden">
              <nav className="flex flex-col p-4">
                <Navigation />
              </nav>
            </div>
          )}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            {/* Burger Menu Button */}
            <span
              className="md:hidden flex items-center cursor-pointer justify-center rounded"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon
                className="text-primary group-hover:text-white"
                icon={isMenuOpen ? faXmark : faBars}
                size="lg"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
