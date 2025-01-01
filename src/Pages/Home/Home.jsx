import HeaderCard from "./Components/HeaderCard/HeaderCard";
import ImagesCard from "./Components/ImagesCard/ImagesCard";
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
const Home = () => {
  return (
    <>
       <HelmetInfo titlePage={"الصفحة الرئيسية"} />
       <header className="">
        <SliderHeader />
      </header>
      <News />
      {/*
        <HeaderCard />
        <ImagesCard />
        <CardsBooks />
        <CardsCollections />
        <ExploreCountries />
        <ImagesCardSlide />
        <BannerHome /> 
        <CustomersReviews />
        <ContactInformations /> */}
    </>
  );
};

export default Home;
