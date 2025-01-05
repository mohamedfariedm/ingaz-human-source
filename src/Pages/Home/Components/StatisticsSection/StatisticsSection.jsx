
import React from "react";
import StatCard from "./StatCard";
import "./StatisticsSection.css";

const stats = [
  { number: "+450", label: "عميل" },
  { number: "+6000", label: "وظيفة" },
  { number: "+200", label: "دورة تدريبية" },
  { number: "+96", label: "خدمة عملاء" },
];

export default function StatisticsSection() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className=" w-full xl:w-[760px] flex flex-col items-center mx-auto gap-[3rem] ">
        <h2 className="text-[32px] font-semibold leading-[58px] text-[#0e4a79]">إنجاز في أرقام</h2>
        <p className="text-[16px] font-medium leading-[29px] text-[#667680] text-center  ">
          مع "إنجاز"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة
          معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب، والاستشارات
          باستخدام أحدث التقنيات لدعم أهدافك وتحقيق رؤية المملكة 2030 من خلال
          تمكين الكوادر الوطنية وبناء شراكات استراتيجية.
        </p>
      </div>
      <div className="h-[637px] relative stats-container">
        <div className="background-image"></div>
        <div className="flex flex-col md:flex-row justify-center items-center  absolute bottom-0 w-full ">
        {stats.map((stat, index) => (
          <StatCard key={index} number={stat.number} label={stat.label} />
        ))}

        </div>
      </div>
    </section>
  );
}
