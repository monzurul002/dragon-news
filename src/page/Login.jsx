import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero-content flex-col w-8/12 mx-auto ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-center py-2">
          Login Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="flex justify-between">
              <Link className="link link-hover">Forgot password?</Link>
              <Link to="/auth/register">
                Don't have your account?{" "}
                <span className="text-blue-500">Register</span>{" "}
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
