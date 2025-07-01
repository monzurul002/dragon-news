import { Link } from "react-router";
import logo from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between py-2 items-center">
      <div></div>
      <div className="nav space-x-5 text-xl ">
        <Link to="/home">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="flex px-1 gap-1">
        <img src={logo} alt="" />
        <button className="btn bg-gray-500 text-white px-3 rounded-md py-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
