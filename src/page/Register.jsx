import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero-content flex-col w-8/12 mx-auto ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-center py-2">
          Login Your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="flex justify-between">
              <Link to="/auth/login">
                Already have an account?{" "}
                <span className="text-blue-500">Login</span>{" "}
              </Link>
            </div>
            <button className="btn btn-neutral mt-4"> Register </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
