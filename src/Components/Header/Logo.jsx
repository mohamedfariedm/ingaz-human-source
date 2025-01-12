import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  const handleLogoClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to="/#home"
      onClick={handleLogoClick}
      className="logo-image w-[150px] md:w-[226px] h-[38px] md:h-[58px] shrink-0 relative overflow-hidden"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></Link>
  );
};

export default Logo;
