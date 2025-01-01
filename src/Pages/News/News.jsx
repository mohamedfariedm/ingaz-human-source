import React, { useState } from "react";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import { Link } from "react-router-dom";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "View all",
    "Design",
    "Product",
    "Software Development",
    "Customer Success",
    "Leadership",
    "Management",
  ];

  const newsList = [
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 1,
      title: "افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل",
      description:
        "في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.",
      date: "24 نوفمبر 2023",
      category: "Product",
    },
    {
      id: 2,
      title: "تصميم حلول إبداعية للمشاريع الصغيرة والمتوسطة",
      description:
        "تسعى شركة إنجاز لتقديم خدمات تصميم مبتكرة للشركات الصغيرة والمتوسطة لمساعدتها على تحقيق أهدافها.",
      date: "15 ديسمبر 2023",
      category: "Design",
    },
    {
      id: 3,
      title: "إطلاق منصة برمجية جديدة لتحسين العمليات",
      description:
        "شركة إنجاز تطلق منصة مبتكرة لتحسين العمليات التقنية في الشركات الكبيرة.",
      date: "10 نوفمبر 2023",
      category: "Software Development",
    },
  ];

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter news based on selected category
  const filteredNews = newsList.filter(
    (news) =>
      selectedCategory === "View all" || news.category === selectedCategory
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setSearchQuery(""); // Reset the search query
  };

  return (
    <>
      <HelmetInfo titlePage={"أخبارنا"} />
      <div className="mt-[75px]" />

      <div className="w-[90%]  flex flex-col lg:flex-row items-start bg-[#fff] mx-auto px-4 py-16">
        {/* Blog Categories Section */}
        <div className="flex lg:scale-90 flex-col gap-8 w-full lg:w-[35%] md:px-12">
          {/* Search Bar for Larger Screens */}
          <div className="hidden lg:flex items-center border border-[#e7e7e7] rounded-[10px] w-full">
            <span className="text-[#667680] px-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                  stroke="#667680"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none placeholder-[#667680]"
              placeholder="بحث عن..."
            />
          </div>

          {/* Search Input for Small Screens */}
          <div className="lg:hidden relative">
            <input
              type="text"
              value={searchQuery}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-[#e7e7e7] rounded-[10px] px-4 py-2 bg-white text-[#667680] focus:outline-none"
              placeholder="بحث عن..."
            />
            {isDropdownOpen && (
              <ul className="absolute z-10 bg-white border border-[#e7e7e7] rounded-[10px] w-full mt-2 max-h-48 overflow-y-auto">
                {filteredCategories.map((category) => (
                  <li
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#f4f4f4] text-[#667680] hover:text-[#0e4a79]"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Categories List for Larger Screens */}
          <div className="hidden lg:flex flex-col gap-4">
            <span className="text-[#0e4a79] text-[14px] font-medium">
              Blog Categories
            </span>
            {filteredCategories.map((category) => (
              <div
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`p-1 text_small_Bukra font-semibold cursor-pointer ${
                  selectedCategory === category
                    ? "text-[#0e4a79] border-l-4 border-l-[#0e4a79]"
                    : "text-[#667680]"
                } hover:text-[#0e4a79] hover:border-l-4 hover:border-l-[#0e4a79]`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* News Cards Section */}
        <div className="flex flex-wrap items-start  w-full">
          {filteredNews.map((news, index) => (
            <Link
            key={index}
            to={"/stats"}
            className="flex scale-y-95 flex-col gap-4 w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[33.3333%] p-3 overflow-hidden group relative"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 border-b-2 border-transparent">
              <div className="absolute top-[100%] -start-[100%] w-full h-1 bg-gradient-to-r from-[#0e4a79] via-[#0e4a79] to-[#0e4a79] group-hover:-translate-x-full transition-all duration-500"></div>
            </div>
            {/* Placeholder Image */}
            <div className="rounded-[16px] overflow-hidden">
              <div
                className="h-[303px] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/3d98/2391/5e2ef5f9d7297897ebe55176aac90e5a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GwvGYV1OQoxiAmfiNEpmhEqu8EDawrWp1uoGWoYAdY8CCz9xtuCN3j9T6YPWzln0SsfbBB9S712HUP6huQ6hAP3LFrM202xtHH3jPw00YmhEiDIhAJAJutxyUfLFhlMLmqhOfBkSmWz0lvttEsLTFLlBeD6x9IVWXUG1V5Y8E3RL9HyfQ8sb4lpA2KgjG4ABgPy4w5YZkOXtwDspxeF9jlE471U9By5RH9fkm5vSXm-isEQm4jWr5vuwL0o6MPoDvVWEWXXdEJfQbYhtNYBi-c6c5lkbojA40mP3P1yvOynLpHK1ue96gyweqiowcIS7pW7Ok2CQRTkiWNbW0xLGWw__)`,
                }}
              ></div>
            </div>
            {/* Card Content */}
            <div className="flex flex-col gap-2">
            <span className="text-[17px] font-semibold group-hover:text-[#667680] transition-transform duration-500 tracking-wide leading-[35px] text-[#1d1d1d] line-clamp-3">
            افتتاح فرع جديد لشركة إنجاز في المنطقة الشرقية لخدمة عملائنا بشكل أفضل
              </span>
              <span className="text-[13px] font-normal leading-[28px] text-[#667680] line-clamp-3">
              في إطار خطتها التوسعية، افتتحت شركة إنجاز فرعها الجديد في المنطقة الشرقية لتقديم خدماتها المتميزة بشكل أوسع للعملاء في المملكة.
              </span>
              <div className="flex items-center gap-2">
              <span className="text-[14px] text_small_Bukra font-semibold text-[#667680]">
              24 نوفمبر 2023
                </span>
                <span className="text-[16px] font-medium text-[#e7edf2]">•</span>
                <span className="text-[16px] font-medium text-[#0e4a79]">
                  تصنيف
                </span>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
