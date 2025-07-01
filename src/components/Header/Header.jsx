import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2 className="my-2 font-semibold text-gray-600 ">
        {" "}
        Journalism Without Fear of Favour{" "}
      </h2>
      <p className="text-gray-500 font-semibold">
        {moment().format("MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
