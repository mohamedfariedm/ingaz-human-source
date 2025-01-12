import React, { useEffect, useState, useRef } from "react";
import StatCard from "./StatCard";
import "./StatisticsSection.css";

const stats = [
  { number: 450, label: "عميل" },
  { number: 6000, label: "وظيفة" },
  { number: 200, label: "دورة تدريبية" },
  { number: 96, label: "خدمة عملاء" },
];

export default function StatisticsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false); // Reset animation
          setTimeout(() => setVisible(true), 100); // Trigger reanimation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className="max-w-[1440px] mx-auto animate-section opacity-0 transition-opacity duration-1000"
    >
      <div className="w-full xl:w-[760px] flex flex-col items-center mx-auto gap-[3rem]">
        <h2 className="text-[32px] font-semibold leading-[58px] text-[#0e4a79]">
          إنجاز في أرقام
        </h2>
        <p className="text-[16px] font-medium leading-[29px] text-[#667680] text-center">
          مع "إنجاز"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة
          معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب، والاستشارات
          باستخدام أحدث التقنيات لدعم أهدافك وتحقيق رؤية المملكة 2030 من خلال
          تمكين الكوادر الوطنية وبناء شراكات استراتيجية.
        </p>
      </div>
      <div className="h-[637px] relative stats-container">
        <div className="background-image"></div>
        <div className="flex flex-col md:flex-row justify-center items-center absolute bottom-0 w-full">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={visible ? stat.number : 0} // Reset and reanimate when visible
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
