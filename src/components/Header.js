import React from "react";
import { LOGO } from "../utils/const";
import userIcon from "../img/user_Icon.png";

const Header = () => {
  return (
    <div className="flex w-screen absolute z-10 bg-gradient-to-b from-black justify-between">
      <img src={LOGO} alt="logo" className="w-72 ml-16 px-16 py-2" />
      <div className="flex mr-10  p-2 mt-5  bg-black rounded-md h-12">
        <img src={userIcon} className="w-8 h-8" />

        <button className="text-sm font-bold rounded-md text-red-700 hover:underline">
          (Sign out)
        </button>
      </div>
    </div>
  );
};

export default Header;
