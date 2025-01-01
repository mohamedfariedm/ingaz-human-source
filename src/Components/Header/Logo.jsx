import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div
      className="logo-image w-[150px] md:w-[226px] h-[38px] md:h-[58px] shrink-0 relative overflow-hidden"
      style={{
        backgroundImage:
          `url(${logo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Logo;
