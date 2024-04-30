import AboutUs from "../../components/unique/AboutUs/AboutUs";
import Services from "../../components/unique/ServiceSection/Services";
import Hero from "./../../components/unique/Hero/Hero";
import ContactSection from "./../../components/unique/ContactSection/ContactSection";
import Products from "./../../components/unique/ProductSection/Products";
import Members from "./../../components/unique/TeamSection/Members";
import Chooses from "./../../components/unique/ChooseSection/Chooses";
import Reviews from './../../components/unique/Testimonial/Reviews';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <ContactSection />
      <Products />
      <Members />
      <Chooses />
      <Reviews/>
    </div>
  );
};

export default HomePage;
