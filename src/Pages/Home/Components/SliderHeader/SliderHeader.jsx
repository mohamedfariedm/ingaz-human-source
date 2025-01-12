import ArrowDown from "Components/ArrowDown/ArrowDown";
import "./SliderHeader.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import instagram from "../../../../assets/footer/instagram.svg";
import linkedin from "../../../../assets/footer/linkedin-02.svg";
import twitter from "../../../../assets/footer/new-twitter.svg";
import snap from "../../../../assets/footer/snapchat.svg";
import whatsapp from "../../../../assets/footer/whatsapp.svg";
import { useTranslation } from "react-i18next";
const SliderHeader = () => {
  const { t } = useTranslation("SliderHeader"); // Load SliderHeader namespace

  // Array of social media icons and their alt text
  const socialIcons = [
    { src: snap, alt: "Snapchat" },
    { src: twitter, alt: "Twitter" },
    { src: whatsapp, alt: "WhatsApp" },
    { src: linkedin, alt: "LinkedIn" },
    { src: instagram, alt: "Instagram" },
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
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
      );
  
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect(); // Cleanup
    }, []);
  return (
    <>
    <div id="home"></div>
      <div className="banner-main-area--1 h-[150vh]">
        <div className="banner-one section-padding bg-image h-[150vh] lg:h-[150vh]  ">
          <div className="video-bg overlay-bg animate-section opacity-0 transition-opacity duration-1000">
            <video
              autoPlay
              className="video-src"
              loop
              muted
              // @ts-ignore
              playsInline=""
              preload="auto"
            >
              <source src="https://s3-figma-videos-production-sig.figma.com/video/1252915703189651761/TEAM/81fe/069d/-e6cc-4aa2-9003-241779d178c5?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pszZO8hO1485GmNc2Hjznt0oD1uPzym073UV-xXnl8k3PWBd~vkp6l1N-jpPWdgs0M6C8c28a9znMhTr5G1~0GJQlsHwq2BVpy~7HtINHR-LOaqezG1moBhNqa~JH-bePWXIMMBK69HdMYWRmrZakq8JKkyurOBw3ofsNJAHzufTzrYdvbtf3upwSBFv8iKNKoFpK-r4VOkREsNWj~3EenNTPjNbAi6Uu1gc~8GUIaMuH~KvFm-CTzFbCH4NKA~4YvSVhZJJBB037tghe2Fsde7WfjE4E3lRIDm5mjHwLel-Kxy5WJ9OXqBm7sjs96Y7INIaULYRx2rBLbl3uJOY6g__" type="video/mp4" />
            </video>
          </div>
        <div className=" absolute bottom-0 start-0 w-full z-[1] text-center text-white ">
        <div className="flex flex-col gap-11 justify-center items-center mt-16">
          <h1 className="text-[48px] font-semibold leading-tight">
{t("title")}
          </h1>
          <p className="text-[16px] font-normal">
{t("description")}
          </p>
        </div>
        <Link to={"/aboutus"}  className=" mt-12 flex w-[135px] group pt-[12px] pr-[49px] pb-[12px] pl-[49px] gap-[8px] justify-center items-center flex-nowrap bg-[#f1f8fd] hover:bg-primary rounded-[999px] relative overflow-hidden mx-auto my-0 hover:scale-[85%] transition-transform duration-700 cursor-pointer">
      <div className="w-[37px] h-[25px] shrink-0  text-[14px] flex justify-center items-center font-normal leading-[25px] text-[#0e4a79] group-hover:text-white border-none relative whitespace-nowrap pointer" >
       <span className="relative group-hover:translate-x-3 transition-all duration-700">

{t("more")}
       </span>
        <div className="w-[20px] h-[20px] absolute -left-[80px]  transition-all duration-700 group-hover:-left-5">
      <svg
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#0E4A79] group-hover:stroke-white -rotate-45"
      >
        <path
          d="M14.666 14.667L23.9993 24.0003"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2787 8.11037L12.9344 8.26089C15.6169 8.50476 16.9581 8.62669 17.2737 9.49851C17.5895 10.3703 16.6371 11.3226 14.7324 13.2273L13.2273 14.7324C11.3226 16.6371 10.3703 17.5895 9.49851 17.2737C8.62669 16.9581 8.50476 15.6169 8.26089 12.9344L8.11037 11.2787C7.96355 9.66355 7.89013 8.85597 8.37305 8.37305C8.85597 7.89013 9.66355 7.96355 11.2787 8.11037Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
        </div>
    </Link>
        <div className="flex justify-center items-center ">
        <div className="flex w-[345px] justify-between items-center flex-nowrap relative z-[6] mt-[94px] mr-0 mb-0  pb-10">
    {/* Follow Us Text */}
    <span className="h-[25px] shrink-0 basis-auto  text-[14px] font-medium leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[14]">
{t("follow_us")}
  </span>


  {/* Additional Content */}
  <div className="w-[80px] border relative z-[13]" />

  {/* Icons Section */}
  <div className="flex w-[164px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[7] ">
  {socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="w-[20px] h-[20px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-full h-full object-cover brightness-[500]"
            />
          </a>
        ))}
  </div>
</div>

        </div>

      </div>
        </div>
      </div>
    </>
  );
};

export default SliderHeader;
