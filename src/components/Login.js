import React, { useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/const";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img src={BG_IMG} alt="bg_img" className="absolute" />
      <form className="bg-black bg-opacity-85 rounded-md absolute text-white p-12 w-3/12 my-24 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sing In" : "Sing Up"}
        </h1>
        {isSignInForm ? (
          <></>
        ) : (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone"
          className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
        />
        {isSignInForm ? (
          <>
            <input
              type="password"
              placeholder="password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
          </>
        )}
        <button className="bg-red-700 my-2 h-10 rounded-md w-full">
          {isSignInForm ? "Sing In" : "Sing Up"}
        </button>
        <div>
          {isSignInForm ? (
            <>
              <div className="flex justify-center">
                <span className="mx-auto font-semibold text-2xl my-2">OR</span>
              </div>
              <button className="w-full my-2 bg-gray-700 text-xl font-bold h-10 rounded-md">
                Sign In with Code
              </button>
              <div className="flex justify-center">
                <span className="mx-auto font-semibold text-lg my-2 hover:underline hover:text-gray-400 mb-4">
                  <Link to="">Forget password?</Link>
                </span>
              </div>
              <input type="checkbox" />
              <label> Remember me</label>
            </>
          ) : (
            <></>
          )}
        </div>

        <p className="my-4 text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <Link
            to=""
            className="hover:underline text-white"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
