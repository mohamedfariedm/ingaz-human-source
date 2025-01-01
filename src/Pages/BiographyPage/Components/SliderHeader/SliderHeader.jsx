import ArrowDown from "Components/ArrowDown/ArrowDown";
import "./SliderHeader.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const SliderHeader = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
            } else {
              entry.target.classList.remove("animate-visible");
            }
          });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
      );
  
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect(); // Cleanup
    }, []);
  return (
    <>
    <div id="main"></div>
      <div className="banner-main-area--1 h-[150vh]">
        <div className="banner-one section-padding bg-image h-[150vh] lg:h-[150vh]  ">
          <div className="video-bg overlay-bg animate-section opacity-0 transition-opacity duration-1000">
            <video
              autoPlay
              className="video-src"
              loop
              muted
              // @ts-ignore
              playsInline=""
              preload="auto"
            >
              <source src="https://s3-figma-videos-production-sig.figma.com/video/1252915703189651761/TEAM/81fe/069d/-e6cc-4aa2-9003-241779d178c5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pszZO8hO1485GmNc2Hjznt0oD1uPzym073UV-xXnl8k3PWBd~vkp6l1N-jpPWdgs0M6C8c28a9znMhTr5G1~0GJQlsHwq2BVpy~7HtINHR-LOaqezG1moBhNqa~JH-bePWXIMMBK69HdMYWRmrZakq8JKkyurOBw3ofsNJAHzufTzrYdvbtf3upwSBFv8iKNKoFpK-r4VOkREsNWj~3EenNTPjNbAi6Uu1gc~8GUIaMuH~KvFm-CTzFbCH4NKA~4YvSVhZJJBB037tghe2Fsde7WfjE4E3lRIDm5mjHwLel-Kxy5WJ9OXqBm7sjs96Y7INIaULYRx2rBLbl3uJOY6g__" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderHeader;
