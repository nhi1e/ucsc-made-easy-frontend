import cs_requirements from "/src/data/CS_requirements.js";
import years from "../data/years";
import majors from "../data/Majors_list";
import Select from "react-select";

export default function Major({ satisfied, colorMode }) {
  const customSelect = {
    control: (provided, state) => ({
      ...provided,
      // background: "#C8CCD5",
      background: colorMode ? "#C8CCD5" : "#C6D0E2",
      borderColor: colorMode ? "#C8CCD5" : "#C6D0E2",
      borderRadius: "20px",
      maxHeight: "10px",
      height: "10px",
      boxShadow: state.isFocused ? null : null,
    }),

    // dropdownIndicator: (base) => ({
    //   ...base,
    //   borderColor: "#1A202C",
    // }),

    singleValue: (base) => ({
      ...base,
      color: "#1A202C", //whats shown in the box
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
      fontSize: "13px",
      fontWeight: "bold",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      color: "#1A202C", //when typing
      // width: "80px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
    }),
    menuPortal: (base) => ({
      ...base,
      fontSize: "3px",
    }),
    // option: (provided) => ({
    //   //the dropdown
    //   ...provided,
    //   background: "#4C5464",
    //   color: "#ABB1BF",
    // }),
  };

  return (
    <div
      className={
        "transition-all duration-300 mb-4 max-w-sm rounded-lg overflow-hidden shadow-md " +
        (colorMode ? "bg-black-dark3" : "bg-blue-lighter")
      }
    >
      <div className="px-6 py-4">
        <div
          className={
            "transition-all duration-300 font-bold text-ml mb-0.25 " +
            (colorMode ? "text-gray-dark" : "text-dark")
          }
        >
          Major Requirements
        </div>
      </div>

      <div className="px-6 pb-2">
        <div className="flex justify-between pb-2">
          <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder="Your major"
            defaultValue={majors[20]}
            options={majors}
            styles={{ ...customSelect }}
          />
          <Select
            className="basic-single"
            classNamePrefix="select"
            placeholder="Entry year"
            defaultValue={years[0]}
            options={years}
            styles={customSelect}
          />
        </div>

        {cs_requirements.map((course, index) => (
          <span
            key={course.value}
            // bg-green not working
            // className={
            //   satisfied[16][index] !== 1
            //     ? "inline-block bg-black-light1 rounded-full px-2 py-1 text-xs font-semibold text-black-dark2 mr-1 mb-1 hover:scale-125"
            //     : // ? "inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-black-dark3 mr-1 mb-1 hover:scale-125"

            //       "inline-block bg-green rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            // }
            className={
              "inline-block rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 hover:scale-125 " +
              (colorMode
                ? satisfied[16][index] === 1
                  ? "bg-green"
                  : "bg-gray-dark"
                : satisfied[16][index] === 1
                  ? "bg-green-light"
                  : "bg-blue-dark")
            }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
