import React, { useEffect } from "react";
import visson from "../../../../assets/mission/vector2.svg";


const Vission = () => {
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
<div  className="main-container xl:w-[1642px] xl:h-[498.455px] relative mx-auto my-[110px] animate-section opacity-0 transition-opacity duration-1000 ">


  {/* Vision Section */}
  <div className=" xl:h-[498.455px] xl:w-[1152px] flex items-center justify-end ">
  <div className="flex xl:w-[560px] flex-col gap-[24px] items-end flex-nowrap relative mt-[2px] ">
    <span className="xl:h-[87px] self-stretch shrink-0 basis-auto  text-[48px] font-semibold leading-[87px] text-[#0e4a79] tracking-[0.96px] relative text-right  z-[1]">
      رؤيتنا
    </span>
    <span className="flex xl:w-[560px] h-[132px] items-start self-stretch shrink-0  text-[18px] font-normal leading-[32.76px] text-[#667680] tracking-[0.36px] relative z-[2]">
      أن نكون الرواد في مجال الموارد البشرية والاستشارات الإدارية على مستوى
      المملكة والمنطقة، من خلال تقديم خدمات بمعايير عالمية تعزز من قدرات
      الأفراد وتساهم في نجاح المؤسسات وتحقيق التنمية المستدامة.
    </span>
  </div>

  </div>

  {/* Background Placeholder */}
  <div
  style={{ backgroundImage: `url(${visson})` }}
    className="w-full h-[350px] bg-center   xl:w-[1440px] xl:h-[501.455px] bg-contain  xl:bg-cover bg-no-repeat xl:absolute top-[-1.5px] xl:left-[70%] xl:translate-x-[-55.56%] xl:translate-y-0 z-[1]"
  />
</div>


  );
};

export default Vission;
