import React, { useState } from "react";
import moon_icon from "/icons/moon.svg";
import sun_icon from "/icons/sun.svg";

export default function DarkModeButton({ colorMode, setColorMode }) {
  const handleClick = () => {
    if (colorMode === true) {
      setColorMode(false);
    } else {
      setColorMode(true);
    }
  };
  const iconSource = colorMode ? sun_icon : moon_icon;

  return (
    <div onClick={handleClick} className="py-2 rounded-xl flex items-center">
      <div
        className={
          "rounded-2xl text-xs px-2 py-1 focus:outline-none " +
          (colorMode
            ? "bg-black-dark3 hover:bg-black-dark1"
            : "bg-gray-100  hover:bg-gray")
        }
      >
        <a
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none flex items-center" // Combined styles for link and flex container
        >
          <img
            src={iconSource}
            alt="linkw"
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "5px",
              marginRight: "3px",
            }}
          />
        </a>
      </div>
    </div>
  );
}
