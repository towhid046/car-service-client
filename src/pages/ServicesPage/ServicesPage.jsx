import Services from './../../components/unique/ServiceSection/Services';
import ScrollToTopOnMount from './../../components/shared/ScrollToTopOnMount/ScrollToTopOnMount';

const ServicesPage = () => {
    return (
        <section>
            <ScrollToTopOnMount/>
            <Services/>
        </section>
    );
};

export default ServicesPage;