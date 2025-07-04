import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] w-full h-screen">
      <header className="w-11/12 mx-auto ">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
