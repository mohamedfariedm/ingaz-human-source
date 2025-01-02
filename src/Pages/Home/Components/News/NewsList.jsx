import React from "react";
import NewsCard from "./NewsCard";
import backgroundImage from "../../../../assets/news/Subtract.svg";
import image1 from "../../../../assets/news/1.svg";
import arrow from "../../../../assets/news/arrow-up-left.svg";
import image2 from "../../../../assets/news/2.svg";
import image3 from "../../../../assets/news/3.svg";
const NewsList = () => {
  const newsData = [
    {
      title: "لماذا إنجاز هو خيارك الأفضل للموارد البشرية؟",
      description:
        "مع \"إنجاز\"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب.",
      mainImage: image3, // Replace with actual image
      secondaryImage: backgroundImage, // Replace with actual image
      actionIcon: arrow, // Replace with actual icon
    },
    {
      title: "لماذا إنجاز هو خيارك الأفضل للموارد البشرية؟",
      description:
        "مع \"إنجاز\"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب.",
      mainImage: image1, // Replace with actual image
      secondaryImage: backgroundImage, // Replace with actual image
      actionIcon: arrow, // Replace with actual icon
    },
    {
      title: "لماذا إنجاز هو خيارك الأفضل للموارد البشرية؟",
      description:
        "مع \"إنجاز\"، تحصل على شريك يقدم حلولًا متكاملة للموارد البشرية بخبرة معتمدة ومرونة عالية. خدماتنا تشمل التوظيف، التدريب.",
      mainImage: image2, // Replace with actual image
      secondaryImage: backgroundImage, // Replace with actual image
      actionIcon: arrow, // Replace with actual icon
    },
    // Add more news items here
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          mainImage={news.mainImage}
          actionIcon={news.actionIcon}
          onClick={() => console.log("View more clicked for", news.title)}
        />
      ))}
    </div>
  );
};

export default NewsList;