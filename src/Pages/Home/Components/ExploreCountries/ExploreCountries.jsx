import { useEffect } from "react";
import "./Explore.css"

const ExploreCountries = () => {
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

    return () => observer.disconnect();
  }, []);
  return (
    <>
    <div id="partners" ></div>
    <div className="bg-[#fbfbfb] ">
      <div className="w-full h-auto bg-[#fbfbfb] flex flex-col gap-6 items-center pt-5 pb-24 md:py-24  px-4 ">
      {/* Title Section */}
      <div className="text-center">
        <span className="text-[23px] text_bold_Bukra leading-[45.5px] text-[#0e4a79] block animate-section opacity-0 transition-opacity duration-1000">
          شــــركـــاء الــنــجـاح
        </span>
      </div>

      {/* Partners Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1264px] xl:scale-[85%] animate-section opacity-0 transition-opacity duration-1000">
        {/* Partner Card */}
        {[
          "https://s3-alpha-sig.figma.com/img/5f86/0cdf/d7abede6d5a7e67a8cbbc9f6602154f7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p6hLcpqD9rzMaKl5n8W3y5-ffEu7ugrJFHlkpA85MeM365xLeQWaa4LgecntpXKUDfEJwCzOWTvH8RExLceKG82k9kaA~xcl910TC1LwoEPbB~H8UnHZR4P9kxyG40L6eV2hCJa3hr9r4fw87qsJt7S~aqguWWxDcBV3kltDFHFIroZTU51jjFAhsxb~38UmcL7kjmIZbsLSgZnO-PzA8gdq3-XAe-IUV5F-ax7Enw~DodmkxWKfbBGCPTpJNKAw4LXno64ZUxy6ueWSFCk-fDK4O9avRTE1ly8DFwJb4dUkqwNcNCysfmHOXQD3yB4RLE4TAXi8-JejS-oU9eV6Iw__",
"https://s3-alpha-sig.figma.com/img/017c/cae8/906cd77f85c99ea259693719851db601?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOMv6ivhLEcajAEs0AkxlkUJ29AKJ9NZYpBfzr7fLj1ExeZ6a0jYbYbXE18LzfBpphkKp4JQVeGdmCdqzRXGq9rbW9Gr8HrFw4Y9u6x6ZJXmfXF6xYWjbyzf3fPjcpmDfJKJsgPWQNyOFucFHyaEgct4Ll3e1xWR0~b4oHQUMxGtjiwvtQPoyIYiZI7AIShWnNC-DNGVx-He0PQ3SIeQ2cw5OShHW3V1n2w8D7PxnYraKjvfVIfWveGuuJgyuYhxmSEYRoV~v1qB6GJ5bZkZphcIgH4ns2l7pWWkjSNQEfcBOKkii7gij7DgoluEV~tez0zIlXvnN-WoCMn~o4IkSg__",
"https://s3-alpha-sig.figma.com/img/94be/8fb3/02f98ef2f413b2dbb58a5e1dc8ebe2fc?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVdNOg8QscnktHhN62mKDOvVP~tOxECNJRkKHOKz22Fvxu-M4bItSTMAgSYcl8zAJMS3gKwLZiD-7Z96f4lMvmxB6hq8xJ3WjP3zvGpqqjTk-QFcf~VKg0~ruST0UUme-I7Tro4qIMdcP4q3h4znXv0v8bL55s3vByXaONtIO31tC8YfKgr69nPn3lEjZWZnAur9UuCL8Ykv62L6ml5YJ-q0ugQMN6BjQu1E3mP4U-AytTSQgvoouWDV2LBaMnR7cv9D73x0Uf7YRTHED52wkShWib9LiG7NCh-9cN~6w3M-A~iBa0YY4VyjSS7wVYe5HrW7T7osWBO6v7CPE1QdfQ__",
"https://s3-alpha-sig.figma.com/img/a428/abca/637c1853c4a7557c767c9d7f723fb65c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRM8g4~1T2oVlfEqDXtU3m16naVZVNg7bjt7FkrXbZCptRBYrDPQQuN1ykxGI4aCfB6BNhpKtMBGl~QzIT5wvF9e8crIjQZw6P~8RNrbAoKNBlQc6aTCUPUJMRAXKwu71gAUMGRWAW6PksuwUV-El7AJV3P37f4~btRSqFQv-Hgj9V1TALl23kYEIE8qJ5-CrrbwNAuGxv1W8P6ke5HEB5MXKnFFY5Ziqi6dwCx53LMGuKCncBOGudo5zX6npiHkFVsZG~ClEElvBQ3awR6CVv7pnRDlK2J59q9WGkn10mV16T3fo2QF-rxN5Te2o-eBsIsxaVz4mGHTOYXKjbygYw__",
"https://s3-alpha-sig.figma.com/img/1606/57dc/74158dfe9ab33cd8c5a9febc6c00afd1?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IP0tqBArZ0cp37BNEJl5IUk6qlQbHop-WOMHdlgUSk4mi372cFQepOq0vx3A7KP7qQ~Epnj37bFzX7sQREvCZNbQejzwt4bqJ8kanPX8a0KyEXNzop8ImpDIJ608DWUc5IKlrMu4IAzEtQDF3xas4op6vdTDyrnaspySzodIlwuMoVCWueUXh9f0xD1TFNig0v2uSD8liY8VbeDZyWTssMFUJYPvIu8Vb2HF2s09jLTb3xRi4Ndt8T3CxoVE-X690Wi4kGyIF7HDJ5y7RQChrEXmZcNAx5bWTMDvMd-4fq1Ys5qo4ZXgqQCrm7Ytb7eOTF-GLNMJvNUG1eCWbLbc1w__",
"https://s3-alpha-sig.figma.com/img/150f/8e54/44038d1e1689ef29aefc699afa8b2bd2?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DVMQ7QLSRO3sh7tC6K3P2FTaAua2dlw5sc8H7ssy0SXXFen7KApr5SmnhmFUW8BZg6BINh-e5WXUiek9pbt7cdaCVsaK9bx45Eo0z3qUD5~4zQ1vgWpr7Akip~SBER4pP2hKQB9JbbhSJX989~Ub-QZq6TyrTYtHc-2F23xWoHjHjvBr6Bw-3xPQv9PhwznNafcF6DvA9DJiz-hjVXOmluwZ7jt2V~j28c0Ic21mDnP~IT6GG0jorlVG-TOIjX78nhkHwgFJY7XMKeMcsHYMhY-lzcWfWWyy~OC9Qu~Fys5vI49-f5do17gqt7fgBg4p9TYYMnJz6RUiWrP-rzXZuA__",
"https://s3-alpha-sig.figma.com/img/da3c/078e/9f475f76dd40d69313e56bdd79c24343?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMoDUsJG~AVyNmdiPICHbz5h4RibiJl1joz~9bD~wXAZNwWDjGDGXt7~n~gHNhWWU-dQJOQ62eBVJaiq35go3c1TyFQj7Ln4nPKqRIudzBjKmFL8xAj2PpBF3T8mQEBPSK8YmLDDb26Y-llueM8gLZNwVic3NTkUmYdEUduQgQMUstWnKUvb~609X5JUHpUHkYSnYpcTs5qH4N-JN4VccpvM5J3sdMoR16-08YNyQ9PPIs5rIcn3vyj5y4zcbtfjkrPPh5FAZQ5xxwxqgkBeRhQril48jq5FLkm7rvLkwnqeg0rlC3uSsAoezeUJB90qdpu4nmfxCEFkg5LybXNYCw__",
"https://s3-alpha-sig.figma.com/img/6473/a269/f77e4c1927ab26066494c4268b8cb855?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFBgbHP4GXbCSHRomQGAsXPoFBvJ2PAUw8wzoXY15k22Lp7KOADTFCXqo4srB3H4ojFeMrIc2Cr7nE0VWdiE08Xtcq9ZFoUmB40YUXHEmBX4saV~4KG64DwBeHXp1R2Ftb6tMrAH3wo0n9U5CIf2x~VPjS4xd3Hg5FJLo-Jfmt1uvXUswnu22yGs2aNBHlMftrJwHyeukevTGtGNqLvM1OIiKKnKsZ6rQv5yHM7jKrJoUqLcfBKJbCAdsMDGWMQiSOMMuNMYFHpT5OsEOw9qfT12brbWiDDIsKFUYEhuDbOZcqk9p5B09uibEITvW7pvd96e8JlkvsxNzOVS68jw8A__"
        ].map((image, index) => (
          <div
            key={index}
            className="card flex flex-col items-center p-6 gap-16  overflow-hidden border-2 hover:border-0 border-[#e7edf2] "
          >
            <div
              className="w-[174px] h-[77px] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(${image})`,
                scale:"3"
              }}
            ></div>
          </div>
        ))}
      </div>

      </div>
    </div>
    
    </>
  );
};

export default ExploreCountries;
