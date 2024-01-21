import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moon_icon from "/icons/moon.svg";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    // Toggle dark mode state
    setDarkMode(!darkMode);

    // Show toast notification
    toast.dark("Dark mode toggled!", {
      position: "bottom-center",
      autoClose: 3000, // Adjust the duration as needed
    });
  };

  return (
    <div className="py-2 rounded-xl flex items-center">
      <div
        className="bg-black-dark3 hover:bg-black-dark1 rounded-2xl text-xs px-2 py-1 focus:outline-none"
        onClick={handleDarkModeClick}
      >
        <a
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none flex items-center" // Combined styles for link and flex container
        >
          <img
            src={moon_icon}
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
