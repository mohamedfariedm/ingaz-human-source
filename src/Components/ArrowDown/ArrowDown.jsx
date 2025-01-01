import { useEffect, useState } from "react";
import "./ArrowDown.css";

const ArrowDown = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const scrollThreshold = 200;

  //     if (scrollPosition > scrollThreshold) {
  //       setIsActive(true);
  //     } else {
  //       setIsActive(false);
  //     }

  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.body.clientHeight;
  //     const currentScroll = scrollPosition;
  //     const maxScroll = documentHeight - windowHeight;
  //     const progress = (currentScroll / maxScroll) * 100;
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const ArrowDownFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="absolute start-0 end-0 bottom-0 flex justify-center items-center">
    <svg
               xmlns="http://www.w3.org/2000/svg"
               className="arrow-down top-arrow absolute transition-all duration-300"
               viewBox="0 0 20 20"
               fill="white"
               aria-hidden="true"
             >
               <path
                 fillRule="evenodd"
                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                 clipRule="evenodd"
               />
   
             </svg>
   
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="arrow-down bottom-arrow absolute transition-all duration-300"
               viewBox="0 0 20 20"
               fill="white"
               aria-hidden="true"
             >
               <path
                 fillRule="evenodd"
                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                 clipRule="evenodd"
               />
             </svg>
   
    </div>
  );
};

export default ArrowDown;
