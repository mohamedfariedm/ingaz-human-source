import ImagesCard from "./Components/PartnersSection/PartnersSection";
import CardsBooks from "./Components/WhyCardsBooks/CardsBooks";
import CardsCollections from "./Components/CardsCollections/CardsCollections";
import ExploreCountries from "./Components/ExploreCountries/ExploreCountries";
import CustomersReviews from "./Components/CustomersReviews/CustomersReviews";
import BannerHome from "./Components/BannerHome/BannerHome";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import SliderHeader from "Pages/BiographyPage/Components/SliderHeader/SliderHeader";
import ImagesCardSlide from "./Components/ImagesCardSlide/ImagesCardSlide";
import ContactInformations from "./Components/ContactInformations/ContactInformations";
import News from "./Components/News/News";
import AccreditationSection from "./Components/AccreditationSection/AccreditationSection";
import PartnersSection from "./Components/PartnersSection/PartnersSection";
import StatisticsSection from "./Components/StatisticsSection/StatisticsSection";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
const Home = () => {
  return (
    <>
       <HelmetInfo titlePage={"الصفحة الرئيسية"} />
       <header className="">
        <SliderHeader />
      </header>
      <About/>
      <Services/>
      <StatisticsSection/>
      <PartnersSection />
      <CustomersReviews />
      <AccreditationSection />
      <News />
      {/*
      <ImagesCardSlide />
      <CardsBooks />
      <CardsCollections />
      <BannerHome /> 
        <ExploreCountries />
        <ContactInformations /> */}
    </>
  );
};

export default Home;
