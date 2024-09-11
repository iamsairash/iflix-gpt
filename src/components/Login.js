import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/const";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  checkValidationLogin,
  checkValidationSignUp,
} from "../utils/checkValidation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErronMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const cpassword = useRef(null);

  const handleButtonClick = () => {
    //validate
    const validateMsg = isSignInForm
      ? checkValidationLogin(email.current.value, password.current.value)
      : checkValidationSignUp(
          name.current.value,
          email.current.value,
          password.current.value,
          cpassword.current.value
        );

    setErronMsg(validateMsg);
    if (validateMsg) return;

    //sign up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErronMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //sigin in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse")
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErronMsg(errorCode +" - "+ errorMessage)
        });
    }
  };

  const toggleSignIn = () => {
    setErronMsg(null);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <img src={BG_IMG} alt="bg_img" className="absolute" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-85 rounded-md absolute text-white p-12 w-3/12 my-24 mx-auto right-0 left-0"
      >
        <span className="text-red-600 text-lg mb-6">{errorMsg}</span>
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sing In" : "Sing Up"}
        </h1>

        {isSignInForm ? (
          <></>
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone"
          className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
        />
        {isSignInForm ? (
          <>
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
          </>
        ) : (
          <>
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
            <input
              ref={cpassword}
              type="password"
              placeholder="Confirm password"
              className="p-2 my-2 rounded-md bg-gray-700 w-full bg-opacity-85"
            />
          </>
        )}
        <button
          className="bg-red-700 my-2 h-10 rounded-md w-full"
          onClick={handleButtonClick}
        >
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
