import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
const Root = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Root;
