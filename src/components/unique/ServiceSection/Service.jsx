import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
const Service = ({ service }) => {
  const { image, title, price } = service;
  return (
    <div className="p-5 border rounded-xl space-y-5 flex flex-col justify-between">
      <figure className="rounded-xl">
        <img className="rounded-xl" src={image} alt="" />
      </figure>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between">
          <p className="text-xl font-bold text-red-400">Price: ${price}</p>
          <FaArrowRightLong className="text-red-400 text-lg" />
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
