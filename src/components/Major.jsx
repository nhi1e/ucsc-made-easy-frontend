import cs_requirements from "/src/data/CS_requirements.js";
import years from "../data/years";
import majors from "../data/Majors_list";
import Select from "react-select";

export default function Major({ satisfied }) {
  const customSelect = {
    control: (provided, state) => ({
      ...provided,
      background: "#ABB1BF",
      borderColor: "#ABB1BF",
      borderRadius: "20px",
      maxHeight: "30px",
      height: "30px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
      fontSize: "14px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
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
  };

  return (
    <div className="bg-black-dark1 mb-4 max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-gray-dark text-ml mb-0.25">
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
            className={
              satisfied[16][index] !== 1
                ? "inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-black-dark3 mr-1 mb-1 hover:scale-125"
                : "inline-block bg-green rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
