import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="p-5 border rounded-xl space-y-5 flex flex-col justify-between">
      <figure className="rounded-xl">
        <img className="rounded-xl" src={img} alt="" />
      </figure>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between">
          <p className="text-xl font-bold text-red-400">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRightLong className="text-red-400 text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
