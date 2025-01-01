import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BannerHome.css";
import Victor from "assets/vectormap.svg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const BannerHome = () => {
  const countries = [
    {
      title: "باكستان",
      description: "سرعة وصول مع عمالة مدربة وكفاءات عالية مختارة بعناية",
      topIcon: "https://s3-alpha-sig.figma.com/img/8d14/17d8/380cb3ab9935985e38e0e9be8bdd135c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSBBLLW-frUqy2p1tCakLGdjupJxqcBoytKQ6yl1TkjcXhcMfVBB0gTjOlSnDFULr0UAtf1v-7AfaoiqxI9V55UE7u3sgDDYrJbTMIZadMDD5xkK14n0UKVDFkKHuPlsCykYwoEu5o~mAAGM4h3oRInjyl11cWgScjo0mpwz1yE7tDdVesWXMv4n~Q6ylOV5VkiTBTbZA~UNuqI8hw8aVt7CzJ0p7ksnf92RFihQChuMGML9fs83XVvh3BpJN0SCgIRShLrZfvofHGanPN96YOx9mhU-9riVBXVNjaXttlDFqHU2XaOxCgUOS-sUzzBRI3fzzLllQBRiumTbdprbQA__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title:"الهند",
      description: "خدمات مميزة تلبي جميع احتياجاتكم بسرعة وأمان",
      topIcon: "https://s3-alpha-sig.figma.com/img/51a2/3cda/ef814bc043b26dc4ae5b93a987956d96?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C921THrI-DJlek6FcSMqeBymydFeCdl1hsDLJlNBO4jtKukO1MMvbJZ8CErBiNkfBsnaQiuV7qW5PW8CQbJ6jSALfCooDoUAUPuvIKKA7jg3dOyfyIxlAgJj369vh3kvxZLDiWWbpmg0~4L2VYHKqDBrcEIYPRNpJcIZkgDR-enw-HregAK16wSzPhdAPCTDkXCrq5nusijcvuW4KbPVwhtN~TE1ZzH4e793OALwydF0Kb-aWlrf7ZiNNEQw19sZ~T1guYWt9SxT-Sk0uROli7wixnl-kFm9B9x~7hd9CzCreFJY4xHXbCVQd7ybjKrcXGHHdtK1Ir2ugcMloP64jA__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "بنجلادش",
      description: "استقدام الكفاءات الأعلى تأهيلًا لأعمالكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/3c29/3502/6a81c309a7ef60ae900495d5ccabfd58?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJ5idly3XYtD4qclFdyV0g7vHGKMvKsHM8nK8nJf8EaXuX2zz7JfO0v~ZNr3GgbONSbBwZdtAwBWETTBL5Qxu479i-oACUzLyL4EY61T9zFLjckh1lzE7YNRpXv39QMtXLoGggtfK7cTYgrkeNZx2bvB1-ZyHI2IviS7pZ24FdelZtqb92un3N-xtX7nrFDk3MzfWU8i9YMc8DWBJwcZMi-kHj-dZz~A4I~pC3ha7WdQWhw7L1F5H17RSjobcNQ8aRwCBTi9bq9i8FC5DrB3629berD6aY6KYwfUA1QDEL40KqzHJUX~Vz14bhP4rSqcZD0wfu~dQOEa5UehobTJng__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "غانا",
      description: "خدماتنا تغطي جميع متطلباتكم بأعلى جودة",
      topIcon: "https://s3-alpha-sig.figma.com/img/5f80/4bb4/7593e6e3cec1c953ebab8d4c10d703db?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geiFCADLnAGYLhZaumtQSHzMhrdKS0G5iMZXTO0oeE3oldB7Mlnjo9Gu3gvA2pDifY316Jsk7rQNoAzlSAUKXRThqv4S3SzwpRHQK-GndZYYUr9emlek9rG33j2DF1JBZn9ZRfSOKKVLkB-5FRnPWg01Frz6yuN26mu-BReIBHl88dls3FWmYr5M9giw7-bkoJOCcNljon7EHOPySBeOKJmVC0Rz9CLtdha1tUrnQMEdjo146S~o~epEcLG-kgZUGuIjATHxfr1yXdx-EuAHg~olnDgQNivJubwaB6S~EoWsxgQVqHsm-ExQkLtPWsEvUcD1Q6UegE8LX9ZMHuGdMw__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "تنزانيا",
      description: "دقة في التوصيل وكفاءات مدربة لتلبية احتياجاتكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/1ec7/adfd/d2115a695341ae0ac2c430850e5bf072?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5IUns5YgLHlwWZYfsej7vuyaSpLMgQI4oMTeCChPEfIF~bEsCCgJTzPWdEPAJTePx~TLG-S2uov300tx5jCsS6En~qYvDBaai-16xSQ-DlXKnymj9HOUWBTl3qXJuwkyalgMWGk1EK0fr9BLG8ROljqBw7ks1QFxxRNAXNiB5vZT586xjD12Xt~GM0g5fYf5LQ8Sjt6b2pAjFPj94GN~sWN-NW9YKpOK4cUd070GUB2nCL2gcescCCwr6wzR1ThdUmQ5x-eYsaU~5tbtgP0bGlNWFv~4fdKfQXTvgAtHxxs7NbSgL9T4oPpRfBCQF2Ofb6PQF3I95LxWOxTHFvRmQ__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: " أوغندا",
      description: "تجربة مميزة لتوفير العمالة الأكثر كفاءة",
      topIcon: "https://s3-alpha-sig.figma.com/img/7e43/ae11/f4ca286a165b6483be7d1a82f4173374?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLa4mTvqEo9j91l5jT-dQGfrDZl8Jb-BTHk2WbUgF2pW7WJ5iXAIH9b~IeEHW3iu4dOvhtOirm7sDSAW2jlKaiNglun6yV2rhQLwZpsRs7XpOhsrbra4VfvtJpVkdNz8X7C7L~haFk3q1OpBhcJyDq9NjhDYgtrW8YCB-Di3ag9y9O-kZuxt6rt56fyEPP2SuK1TtQywOQ2x6XuxkwpBLJ0llJu6YQzI6ybBKtt08eJLDSB5dKWMDtWlNeN0XDqmfC4YohJXH8rgT~hIt6xnAPOKqC7GaHOrsDd3Q97eSW4fWC70hkUjSiNQh2svpk2TNUbbh4Ljndv~0vPsmphM8A__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "إثيوبيا",
      description: "خدمات سريعة وموثوقة تناسب احتياجات الجميع",
      topIcon: "https://s3-alpha-sig.figma.com/img/2d86/dac2/4d67da8aa69b9665089ea3a261c1c443?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5AZvgvPuzCanpT1igxdVUqxCE7FdpOLvOqPOpC4JLg5boJfzGNzHsUDYz4a0f65Uh2rnD1GA95hh4y3lkMouPFraABdA6eK9xWEOKmjUcN6kYeuJjD6ouPdH8i1OF48PP8nE8gUPYOBlzb7awgc3jhFCPm8iaM8vsJpSzui5GlZFb1nijUuk-HCmpzzA5Gkfgl6MeWoVQYmIQJkptZxjGJ78s5JGOuJn9iFmNV0DdDlu8~lgO-TBR0ovw65-9raTPc~jgPnxAzEt~sPfoy99-GF9zac0CNRiT-tnJZTsaxY6d1DZpBnLxZZ8-psFq6bl5FgwHe1yey9V8YvzczZAw__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "كينيا",
      description: "كفاءات مدربة لتلبية جميع متطلباتكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/129c/678f/b14bdf3e7abcd0ead2ddd47573fce0bb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvRVNlrTtXD8csrI3sUnAMrTsgQK0oNSUwY84kqSvONPRFrVQogMTkSiTSH~47xvc5nU3MIidB267bLp1LbcSvkPL66yqByXHYIPRa2ck6PEUMl2briH8F5~YXcSVsDvpxyKj9nZ4PgXlXz6cAdWILIpTgr43ktFA86GgV01sfJkd9bF4TjWlkENnRfjlJWXzN2mdrSd8HStTRlMYwES9jcHBQ9Btw4L1g3rpQH1pE82r5xkA4BDl3H7FtoNz34HoB21F022W~BZZ2nL3U~sp~YuGkHvc5c0LsVpmibWkhxF58THLQuZSqpaVrGddMJTV5mGfUOubtT3lX2Kid1hKQ__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "سيريلانكا",
      description: "اختيار الكفاءات الأنسب لنجاح أعمالكم",
      topIcon: "https://s3-alpha-sig.figma.com/img/175f/09aa/bd43318c6afeff5e7062c3bf4ab53e61?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8TKRSxacVuM3nGLVsBUkoDWAV4KW7sWk1uA2ji~vSY1Ymi9D0lvfLjqAb4fwL9dWczsUxRyXtbRM5G7JnQXpEvB2HyefuvD0PaiAbLDRlFU2jtCmOA8lcw2Ak4Ud5oxKMN6YhYV33zJt7wqvRmnq1STtZJnwA1kAmG54aNSqYV5INDagbvIeHbKNgENQK98Xyu2Nziz0pa5XQF9b0Dxb2n-L0XPttbJIeGsx7yh3eHKWbyK-e3TKRGMuGY4w5Kn3mfMnhldxrhoNDQ6pjSaERB7YRK8UT3YPKya2ube5eMJDvuhimGKwMj0czclnLrQnHd6R9z5fim8VsXjE5ujrQ__",
      backgroundImage: "https://placehold.co/335x216",
    },
    {
      title: "الفلبين",
      description: "حلول استقدام شاملة بأعلى معايير الجودة",
      topIcon: "https://s3-alpha-sig.figma.com/img/9440/39c0/86cfe0f1e4fe9629d720a8cf10137f12?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQTdyw8C1phDSBRKpzQsmEs29NtrjzAo418amn0r-CoknWbBi63HzIhQcWodcLz0XCg~R8o9hAwC21cXGsdFZtSwcgcq39uAYcUqUuwUl0JkL1Gl-SfcA9hbImjQ3gBHIrpGfG5tQ1fDE3LQjhz0Sl88RplBYSKS0PFTnAP-xv3xDWXggZ1U2hqHjP3XYwxRd23wWLGYlSQXp52~QZVcCJpw4pP76nsoaP20QhvWf0JaqXzm8h2BDJY31I-sksqKGRzsQEi-~l6P~OlYT331WQNaXJOP09UwJq0zfoh7ErFs6iJT5rQ6DcVjTOe2WURpIo2~O9~264OfqCtBEaBNDw__",
      backgroundImage: "https://placehold.co/335x216",
    },
  ];

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
          { threshold: 0.2 }
        );
    
        const sections = document.querySelectorAll(".animate-section");
        sections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect();
      }, []);

  return (
    <>
    <div id="begin"></div>
    <div className="main-container w-full bg-[#fbfbfb] py-20 relative mx-auto my-0">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-[27px] font-bold text_bold_Bukra leading-[54.6px] text-[#0e4a79] text-center pb-16 animate-section opacity-0 transition-opacity duration-1000">
          مناطق الاستقدام و أرقام المترجمين
        </h1>
        <div className="relative w-full mt-10 z-2 ">
        <div
            style={{ backgroundImage: `url(${Victor})` }}
            className="w-full h-full bg-repeat xl:h-[764px] xl:bg-cover xl:bg-no-repeat absolute top-0 left-0"
          />
          <div className="flex  flex-wrap gap-y-14 gap-x-4 justify-center animate-section opacity-0 transition-opacity duration-1000">
            {countries.map((country, index) => (
              <div
                key={index}
                className="relative z-10 w-full h-[216px] sm:w-[300px] border rounded-[16px] hover:bg-white flex flex-col items-center justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,0,.3)_30%,rgba(0,128,0,.3)_30%,transparent_25%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] hover:shadow-lg transition-[background-position_2s_ease-in-out] hover:bg-[position:100%_100%,100%_0] hover:duration-[1000ms]"
              >
                {/* Top Icon */}
                <div
                  className="w-[82px] h-[48px] bg-cover bg-no-repeat absolute rounded-[12px] mt-4"
                  style={{
                    backgroundImage: `url(${country.topIcon})`,
                    top: "-25%",
                  }}
                />

                {/* Content */}
                <div className="flex flex-col items-center gap-2 mt-4 px-4">
                  <span className="text-[20px] font-bold text-[#000] text-center">
                    {country.title}
                  </span>
                  <span className="text-[12px] text-[#667680] text-center ">
                    {country.description}
                  </span>
                </div>

                {/* Button */}
                <button className="mt-4 w-[186px] h-[48px] border border-[#0e4a79] text-[#0e4a79] rounded-full text-[16px] font-normal flex items-center justify-center relative overflow-hidden group">
                  <span className="flex items-center absolute translate-x-[100px] transition-transform duration-500 ease-in-out group-hover:translate-x-[35px]">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className="relative z-10 text-[.8rem] text_small_Bukra">تواصل</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default BannerHome;
