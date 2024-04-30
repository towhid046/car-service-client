import AboutUs from '../../components/unique/AboutUs/AboutUs';
import Services from '../../components/unique/ServiceSection/Services';
import Hero from './../../components/unique/Hero/Hero';
import ContactSection from './../../components/unique/ContactSection/ContactSection';
import Products from './../../components/unique/ProductSection/Products';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <Services/>
            <ContactSection/>
            <Products/>
        </div>
    );
};

export default HomePage;