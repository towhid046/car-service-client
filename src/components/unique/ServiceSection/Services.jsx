import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import service1 from "../../../assets/images/services/1.jpg";
import service2 from "../../../assets/images/services/2.jpg";
import service3 from "../../../assets/images/services/3.jpg";
import service4 from "../../../assets/images/services/4.jpg";
import service5 from "../../../assets/images/services/5.jpg";
import service6 from "../../../assets/images/services/6.jpg";
import Service from "./Service";

const services = [
  {
    id: 1,
    image: service1,
    title: "Auto Car Repair",
    price: 100,
  },
  {
    id: 2,
    image: service2,
    title: "Oil Change",
    price: 50,
  },
  {
    id: 3,
    image: service3,
    title: "Tire Rotation",
    price: 30,
  },
  {
    id: 4,
    image: service4,
    title: "Brake Inspection",
    price: 80,
  },
  {
    id: 5,
    image: service5,
    title: "Car Wash",
    price: 20,
  },
  {
    id: 6,
    image: service6,
    title: "Engine Tune-up",
    price: 120,
  },
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="text-center">
      <SectionHeading
        name="Service"
        title="Our Service Area"
        description={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
      />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center py-7">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </section>
  );
};

export default Services;