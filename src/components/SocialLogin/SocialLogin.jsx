import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Login With</h2>
      <button className="btn px-5 py-2 border my-1 rounded-xl">
        <FcGoogle className="inline text-xl mr-3" /> Login With Google
      </button>{" "}
      <br />
      <button className="btn px-5 py-2 border my-1 rounded-xl">
        <SiGithub className="inline text-xl mr-3" /> Login With GitHub
      </button>{" "}
    </div>
  );
};

export default SocialLogin;
