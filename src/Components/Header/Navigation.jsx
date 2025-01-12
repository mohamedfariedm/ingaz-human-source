import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null); // Ref for the dropdown menu

  const { t } = useTranslation("Navigation"); // Load "Navigation" namespace

  const links = [
    { textKey: "home", id: "/#home" },
    { textKey: "about", id: "/#about" },
    { textKey: "services", id: "/#services" },
    { textKey: "numbers", id: "/#numbers" },
    { textKey: "partners", id: "/#partners" },
    { textKey: "reviews", id: "/#reviews" },
    { textKey: "accreditations", id: "/#accreditations" },
    { textKey: "news", id: "/#news" },
    { textKey: "contactus", id: "/contactus" },
  ];

  // Scroll to hash on initial load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      let mostVisibleSection = null;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          mostVisibleSection = entry.target.id;
          maxIntersectionRatio = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);

        const newUrl = `/#${mostVisibleSection}`;
        if (window.location.hash !== newUrl) {
          window.history.pushState(null, "", newUrl);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id.slice(2)); // Remove "/#" to get the section id
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [links, activeSection]);

  // Function to determine if a link is active
  const isLinkActive = (href) => {
    return `/#${activeSection}` === href;
  };

  return (
    <ul
      ref={menuRef} // Attach ref here
      className="flex flex-wrap flex-col md:flex-row gap-4 md:gap-8 items-center"
    >
      {links.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.id}
            className={`${
              isLinkActive(item.id)
                ? "font-extrabold text-primary text-[14px]"
                : "font-normal text-gray-600 text-[14px] text_small_Bukra"
            }`}
          >
            {t(item.textKey)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

