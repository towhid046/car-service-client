import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <div className="p-5 rounded-xl border flex flex-col justify-between">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="space-y-2 text-center">
        <div className="flex justify-center list-none items-center">
          {rating.map((rate, i) => (
            <li className="text-xl text-yellow-500" key={i}>{rate}</li>
          ))}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xl font-bold text-red-400">${price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
