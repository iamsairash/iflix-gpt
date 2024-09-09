import React from "react";
import { LOGO } from "../utils/const";

const Header = () => {
  return (
    <div className="flex absolute z-10">
      <img
        src={LOGO}
        alt="logo"
        className="w-72 ml-16 px-16 py-2 bg-gradient-to-b from-black"
      />
    </div>
  );
};

export default Header;
