import React, { useEffect } from "react";
import image1 from "../../../../assets/partners/18.svg";
import image2 from "../../../../assets/partners/17.svg";
import image3 from "../../../../assets/partners/16.svg";
import image4 from "../../../../assets/partners/15.svg";
import image5 from "../../../../assets/partners/14.svg";
import image6 from "../../../../assets/partners/6.svg";
import image7 from "../../../../assets/partners/5.svg";
import image8 from "../../../../assets/partners/4.svg";
import image9 from "../../../../assets/partners/21.svg";
import image10 from "../../../../assets/partners/22.svg";
import image11 from "../../../../assets/partners/23.svg";
import image12 from "../../../../assets/partners/24.svg";
import image13 from "../../../../assets/partners/25.svg";
import image14 from "../../../../assets/partners/26.svg";
import image15 from "../../../../assets/partners/27.svg";
import image16 from "../../../../assets/partners/35.svg";

export default function PartnersSection() {

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

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const imagesTwo = [image16, image15, image14, image13, image12, image11, image10, image9];

  return (
    <div id="partners" className="main-container max-w-[1440px] h-auto  xl:h-[602px] bg-[#fff] relative overflow-hidden mx-auto my-0 animate-section opacity-0 transition-opacity duration-1000">
      {/* Title Section */}
      <div className="flex  flex-col gap-[20px] items-center flex-nowrap relative z-[41] mt-[64px] mx-auto">
        <span className="h-[29px] text-[16px] font-medium leading-[29px] text-[#0e4a79] text-center">
          شركاؤنا في النجاح
        </span>
        <span className=" h-[58px] text-[32px] font-semibold leading-[58px] text-[#0e4a79] text-center">
          نفخر بشراكتنا مع الأفضل
        </span>
      </div>

      <div className="flex flex-row xl:flex-col">
      {/* First Row of Images */}
      <div className="flex w-auto gap-[6.057px] items-center justify-center flex-col xl:flex-row flex-nowrap relative z-[1] mt-[111px]   mx-auto xl:ms-10">
        {images.slice(0, 8).map((image, index) => (
          <div
            key={`first-row-${index}`}
            className="w-[173.221px] h-[98.118px] bg-contain shrink-0  bg-no-repeat relative z-[2]"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Second Row of Images */}
      <div className="flex w-auto gap-[6.057px] flex-col xl:flex-row justify-center items-center flex-nowrap relative z-[21] xl:mt-[38.763px] mt-[111px] mx-auto">
        {imagesTwo.map((image, index) => (
          <div
            key={`second-row-${index}`}
            className="w-[173.221px] h-[98.118px] bg-contain shrink-0  bg-no-repeat relative z-[22]"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      </div>
    </div>
  );
}
