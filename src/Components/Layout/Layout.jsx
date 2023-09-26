import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-[1300px]  mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
