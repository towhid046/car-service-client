import PropTypes from "prop-types";
const SectionHeading = ({ name, title, description }) => {
  return (
    <heading className="py-8 space-y-6">
      <h4 className="text-red-500 font-bold text-xl">{name}</h4>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>{description}</p>
    </heading>
  );
};

SectionHeading.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeading;
