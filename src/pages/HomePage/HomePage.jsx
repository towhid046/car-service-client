import AboutUs from '../../components/unique/AboutUs/AboutUs';
import Services from '../../components/unique/ServiceSection/Services';
import Hero from './../../components/unique/Hero/Hero';
import ContactSection from './../../components/unique/ContactSection/ContactSection';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <Services/>
            <ContactSection/>
        </div>
    );
};

export default HomePage;