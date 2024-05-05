import SectionHeading from "../../shared/SectionHeading/SectionHeading";
// import service1 from "../../../assets/images/services/1.jpg";
// import service2 from "../../../assets/images/services/2.jpg";
// import service3 from "../../../assets/images/services/3.jpg";
// import service4 from "../../../assets/images/services/4.jpg";
// import service5 from "../../../assets/images/services/5.jpg";
// import service6 from "../../../assets/images/services/6.jpg";
import Service from "./Service";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/services`)
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          services?.map((service) => (
            <Service key={service._id} service={service} />
          ))
        )}
      </div>
      <div className="text-center py-7">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </section>
  );
};

export default Services;
