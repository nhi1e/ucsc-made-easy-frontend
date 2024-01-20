import cs_requirements from "/src/data/CS_requirements.js";
import years from "../data/years";
import majors from "../data/Majors_list";
import Select from "react-select";

export default function Major() {
  const customSelect = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#fff",
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
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-ml mb-0.25">Major Requirements</div>
      </div>

      <div className="px-6 pt-1 pb-2">
        <div className="flex pb-2">
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

        {cs_requirements.map((course) => (
          <span
            key={course.value}
            className="inline-block bg-gray rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            // className={
            //   sharedState[course.value + 48] !== 1
            //     ? "inline-block bg-gray rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            //     : "inline-block bg-green rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            // }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
