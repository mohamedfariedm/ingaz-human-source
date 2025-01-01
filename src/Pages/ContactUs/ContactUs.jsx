import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import ContactForm from "./Components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
       <HelmetInfo titlePage={"تواصل معنا"} />
       <div className="mt-[85px]"></div>
<ContactForm/>
    </>
  );
};

export default ContactUs;
