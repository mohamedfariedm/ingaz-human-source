import React, { useState } from "react";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import NewsList from "Pages/Home/Components/News/NewsList";
import backgroundImage from "../../assets/news/Subtract.svg";
import image1 from "../../assets/news/1.svg";
import arrow from "../../assets/news/arrow-up-left.svg";
import image2 from "../../assets/news/2.svg";
import image3 from "../../assets/news/3.svg";
import serchIcon from "../../assets/Icons/serchicon.svg";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("عرض الكل");

  const categories = [
    "عرض الكل",
    "الإدارة",
    "القيادة",
    "نجاح العملاء",
    "تطوير البرمجيات",
    "منتج",
    "تصميم",
  ];

  const newsData = [
    {
      title: "لماذا إنجاز هو خيارك الأفضل للموارد البشرية؟",
      description:
        "مع \"إنجاز\"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب.",
      mainImage: image3,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "تطوير البرمجيات",
    },
    {
      title: "قيادة الفريق لتحقيق الأهداف",
      description:
        "تعلم كيفية قيادة فريق عملك نحو النجاح باستخدام أساليب إدارية فعالة وخطط استراتيجية.",
      mainImage: image1,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "القيادة",
    },
    {
      title: "استراتيجيات نجاح العملاء",
      description:
        "تعرف على أحدث استراتيجيات بناء علاقات طويلة الأمد مع العملاء لتحقيق نجاح متبادل.",
      mainImage: image2,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "نجاح العملاء",
    },
    {
      title: "أفضل طرق إدارة الوقت",
      description:
        "إدارة الوقت بشكل فعّال لتحقيق الإنتاجية العالية في بيئة العمل.",
      mainImage: image3,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "الإدارة",
    },
    {
      title: "تصميم منتجات مبتكرة",
      description:
        "تعرف على أسرار تصميم منتجات مبتكرة تلبي احتياجات السوق الحالية.",
      mainImage: image1,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "تصميم",
    },
    {
      title: "كيف تبني ثقافة تنظيمية فعالة",
      description:
        "بناء ثقافة تنظيمية تعزز التعاون والإبداع بين فريق العمل.",
      mainImage: image2,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "الإدارة",
    },
    {
      title: "رحلة تطوير منتج ناجح",
      description:
        "استكشف المراحل الرئيسية لتطوير منتج ناجح من الفكرة إلى التنفيذ.",
      mainImage: image3,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "منتج",
    },
    {
      title: "أحدث تقنيات تطوير البرمجيات",
      description:
        "تعرف على أحدث التقنيات التي تعزز إنتاجية فرق تطوير البرمجيات.",
      mainImage: image1,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "تطوير البرمجيات",
    },
    {
      title: "تصميم واجهات مستخدم عصرية",
      description:
        "تعلم أساسيات تصميم واجهات المستخدم التي تقدم تجربة مستخدم ممتازة.",
      mainImage: image2,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: "تصميم",
    },
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      searchTerm === "" ||
      news.title.includes(searchTerm) ||
      news.description.includes(searchTerm);
    const matchesCategory =
      activeCategory === "عرض الكل" || news.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HelmetInfo titlePage={"أخبارنا"} />
      <div className="xl:w-[1152px] flex gap-[50px] flex-col relative mx-auto my-[164px] px-5 xl:px-0">
        <BreadCrumb name={"جميع الاخبار"} />

        <div className="main-container flex flex-col xl:w-[1152px] xl:flex-row gap-[122px] items-center relative mx-auto my-0">
          <div className="flex xl:w-[662px] justify-between items-start flex-wrap relative z-[6]">
            {categories.map((category) => (
              <div
                key={category}
                className={`flex pt-[8px] pr-[14px] pb-[8px] pl-[14px] gap-[8px] items-center shrink-0 ${
                  activeCategory === category
                    ? "border-solid border-b-2 border-b-[#0e4a79] text-[#0e4a79]"
                    : "text-[#667680]"
                } font-semibold relative z-[19] cursor-pointer`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="h-[24px] shrink-0 basis-auto text-[16px] leading-[24px] relative text-left whitespace-nowrap z-20">
                  {category}
                </span>
              </div>
            ))}
          </div>

          <div className="flex w-full xl:w-[368px] flex-col gap-[6px] items-start shrink-0 relative overflow-hidden">
            <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center self-stretch shrink-0 bg-[#fff] rounded-[8px] border-solid border border-[#e7e7e7] relative z-[1]">
              <div
                style={{ backgroundImage: `url(${serchIcon})` }}
                className="w-[20px] h-[20px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[2]"
              />
              <input
                placeholder="بحث عن..."
                className="w-[368px] h-[44px] shrink-0 bg-transparent text-[16px] font-normal leading-[24px] outline-none border-none absolute top-0 left-0 start-8 pl-[40px] z-[5]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <NewsList newsData={filteredNews} />
      </div>
    </>
  );
};

export default News;
