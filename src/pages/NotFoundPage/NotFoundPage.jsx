import notFoundImg from "../../assets/images/not_found/not-found.svg";
import Navbar from "./../../Layout/Navbar";
const NotFoundPage = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center">
        <img src={notFoundImg} alt="" />
      </div>
    </section>
  );
};

export default NotFoundPage;
