import { useEffect, useState } from "react";
import "./ButtonScroll.css";
import img from "../../assets/images/buttonScroll/airplane.svg";

const ButtonScroll = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200;

      if (scrollPosition > scrollThreshold) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const currentScroll = scrollPosition;
      const maxScroll = documentHeight - windowHeight;
      const progress = (currentScroll / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* <button
        onClick={scrollToTop}
        className={`btn-scroll ${isActive ? "active" : ""}`}
      >
        <img
          src={img}
          alt="airplan"
          width={"25px"}
          height={"25px"}
          className="image-svg-air"
        />
        <div className="progress-container">
          <svg className="progress-circle" viewBox="0 0 100 100">
            <circle className="progress-circle-track" cx="50" cy="50" r="40" />
            <circle
              className="progress-circle-bar"
              cx="50"
              cy="50"
              r="40"
              style={{
                strokeDasharray: 251.2,
                strokeDashoffset: 251.2 - (251.2 * scrollProgress) / 100
              }}
            />
          </svg>
        </div>
      </button> */}
    </>
  );
};

export default ButtonScroll;
