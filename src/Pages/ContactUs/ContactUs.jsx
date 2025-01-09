import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import ContactForm from "./Components/ContactForm/ContactForm";
import LeftPart from "./Components/LeftPart/LeftPart";
const ContactUs = () => {
  return (
    <>
       <HelmetInfo titlePage={"تواصل معنا"} />
       <div className="xl:w-[1152px] flex gap-[50px] flex-col relative mx-auto mt-[164px] mb-[70px] px-5 xl:px-0">
       <BreadCrumb name={"تواصل معنا"} />
  <div className="flex flex-col xl:flex-row xl:w-[1148px] gap-[64px]  items-center xl:flex-nowrap relative z-[5] mt-[45px] mr-0 mb-0 ml-0">
<ContactForm/>
<LeftPart/>


  </div>
</div>

    </>
  );
};

export default ContactUs;
