import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold  ">Find Us On</h2>
      <div className="join join-vertical ">
        <button className="btn px-5 py-2 border my-1 rounded-xl">
          <FaFacebook className="inline text-xl mr-3" /> Facebook
        </button>
        <button className="btn px-5 py-2 border my-1 rounded-xl">
          <FaXTwitter className="inline text-xl mr-3" /> Twitter
        </button>
        <button className="btn px-5 py-2 border my-1 rounded-xl">
          <SiGithub className="inline text-xl mr-3" /> GitHub
        </button>
      </div>
    </div>
  );
};

export default FindUs;
