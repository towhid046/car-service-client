import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Root = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
