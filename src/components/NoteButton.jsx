import React, { useState } from "react";
import note_dark from "/icons/note-dark.svg";
import note_light from "/icons/note-light.svg";
export default function NoteButton({ colorMode }) {
  const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleSaveChanges = () => {
    // Add logic here to save changes, you can use state or other mechanisms
    setShowInput(false);
  };
  const iconSource = colorMode ? note_dark : note_light;

  return (
    <div className="py-2 rounded-xl flex items-center">
      {showInput ? (
        <div className="mb-6">
          <label
            htmlFor="note-input"
            className="block mb-2 text-md font-bold text-gray-100"
          >
            Note
          </label>
          <input
            type="text"
            id="note-input"
            className="block w-full p-4 text-gray-100 border border-black-dark2 rounded-lg bg-black-dark1 sm:text-md focus:ring-black-dark2 focus:border-black-dark2 "
          />
          <button
            className="mt-2 text-xs bg-black-light2 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-black-dark2"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div
          className={
            "font-medium rounded-2xl text-xs px-2 py-1 focus:outline-none " +
            (colorMode
              ? "bg-black-dark3 hover:bg-black-dark1 text-white"
              : "bg-white-dark1  hover:bg-gray text-black-dark3")
          }
        >
          <a
            className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none mr-2 flex items-center"
            onClick={handleButtonClick}
          >
            <img
              src={iconSource}
              alt="linkw"
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "5px",
                marginRight: "10px",
              }}
            />
            Note
          </a>
        </div>
      )}
    </div>
  );
}
