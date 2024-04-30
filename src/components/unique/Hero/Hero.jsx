import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import slide1 from "../../../assets/images/banner/1.jpg";
import slide2 from "../../../assets/images/banner/2.jpg";
import slide3 from "../../../assets/images/banner/3.jpg";
import slide4 from "../../../assets/images/banner/4.jpg";
import slide5 from "../../../assets/images/banner/5.jpg";
import slide6 from "../../../assets/images/banner/6.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      id: 2,
      image: slide2,
      title: "Affordable Price For Car Servicing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: slide3,
      title: "Affordable Price For Car Servicing",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      id: 4,
      image: slide4,
      title: "Affordable Price For Car Servicing",
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero',
    },
    {
      id: 5,
      image: slide5,
      title: "Affordable Price For Car Servicing",
      description:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    },
    {
      id: 6,
      image: slide6,
      title: "Affordable Price For Car Servicing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <section>
      <Swiper
        navigation={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="bg-cover bg-no-repeat  rounded-lg"
          >
            <div className="flex flex-col lg:justify-start justify-center  lg:max-w-lg py-24 space-y-6 text-white bg-gradient-to-r from-[rgb(21,21,21)] to-[#01010101] lg:pl-20 px-8 lg:text-left text-center rounded-lg">
              <h2 className="md:text-5xl text-3xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
              <div className="flex items-center gap-5 lg:justify-start justify-center">
                <button className="btn btn-error">Discover More</button>
                <button className="btn btn-outline text-white">Latest project</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
