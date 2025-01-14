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
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation("News"); // Load translations from the news namespace

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(t("all_categories", { defaultValue: "عرض الكل" }));

  const categories = [
    t("all_categories", { defaultValue: "عرض الكل" }),
    t("management", { defaultValue: "الإدارة" }),
    t("leadership", { defaultValue: "القيادة" }),
    t("customer_success", { defaultValue: "نجاح العملاء" }),
    t("software_development", { defaultValue: "تطوير البرمجيات" }),
    t("product", { defaultValue: "منتج" }),
    t("design", { defaultValue: "تصميم" }),
  ];

  const newsData = [
    {
      title: t("news_item_1.title"),
      description: t("news_item_1.description"),
      mainImage: image3,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: t("software_development"),
    },
    {
      title: t("news_item_2.title"),
      description: t("news_item_2.description"),
      mainImage: image1,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: t("leadership"),
    },
    {
      title: t("news_item_3.title"),
      description: t("news_item_3.description"),
      mainImage: image2,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: t("customer_success"),
    },
    {
      title: t("news_item_4.title", { defaultValue: "Best Time Management Methods" }),
      description: t("news_item_4.description", {
        defaultValue: "Effectively manage your time to achieve high productivity in the workplace.",
      }),
      mainImage: image3,
      secondaryImage: backgroundImage,
      actionIcon: arrow,
      category: t("management"),
    },
    // Add more items as needed...
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      searchTerm === "" ||
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === t("all_categories") || news.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HelmetInfo titlePage={"أخبارنا"} />
      <div className="xl:w-[1152px] flex gap-[50px] flex-col relative mx-auto my-[164px] px-5 xl:px-0">
        <BreadCrumb name={t("all_news")} />

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
                <span className="h-[24px] shrink-0 basis-auto rtl:text-[16px] ltr:text-[14px] leading-[24px] relative text-left whitespace-nowrap z-20">
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
                placeholder={t("search_placeholder", { defaultValue: "بحث عن..." })}
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
