
import personImg from '../../../assets/images/about_us/person.jpg'
import partsImg from '../../../assets/images/about_us/parts.jpg'
import SectionHeading from './../../shared/SectionHeading/SectionHeading';
const AboutUs = () => {
    return (
        <section className='py-12 flex justify-between gap-20 lg:flex-row flex-col '>
            <div className='flex-1 relative'>
                <img src={personImg} alt="Person Image" />
                <img className='lg:absolute lg:mt-0 mt-6 border-white border-2 lg:w-96 -bottom-8 -right-8' src={partsImg} alt="Parts Image" />
            </div>
            <div className='flex-1 space-y-6'>
                <SectionHeading
                name='About Us'
                title='We are qualified & of experience in this field'
                description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`}
                />
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-error'>Get More Info</button>
            </div>
        </section>
    );
};

export default AboutUs;