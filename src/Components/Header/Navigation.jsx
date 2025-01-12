import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  let navigation=useNavigate()
  const [navItems, setNavItems] = useState([
    { text: "الرئيسية", id: "home", active: true },
    { text: "من نحن", id: "about", active: false },
    { text: "خدمتنا", id: "services", active: false },
    { text: "إنجاز في أرقام", id: "numbers", active: false },
    { text: "الشركاء", id: "partners", active: false },
    { text: "آراء عملائنا", id: "reviews", active: false },
    { text: "الاعتمادات", id: "accreditations", active: false },
    { text: "أخبارنا", id: "news", active: false },
    { text: "تواصل معنا", id: "contact", active: false, redirect: true },
  ]);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    if (currentPath === "/contactus") {
      setNavItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          active: item.id === "contact",
        }))
      );
    } else {
      const activeId = currentHash.replace("#", "") || "home";
      setNavItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          active: item.id === activeId,
        }))
      );
    }
  }, [location]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          window.history.replaceState(null, null, `#${sectionId}`);
          setNavItems((prevItems) =>
            prevItems.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  const handleNavigationClick = (index, id, redirect) => {
    if (redirect) {
      navigation("/contactus")
      return;
    }

    const isHomePage = location.pathname === "/";
    if (!isHomePage) {
      navigation(`/#${id}`)
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setNavItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  return (
    <ul className="flex flex-wrap flex-col md:flex-row gap-4 md:gap-8 items-center">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.redirect ? "/contactus" : `/#${item.id}`}
            className={`${
              item.active
                ? "font-extrabold text-primary text-[14px]"
                : "font-normal text-gray-600 text-[14px] text_small_Bukra"
            }`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              handleNavigationClick(index, item.id, item.redirect);
            }}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
