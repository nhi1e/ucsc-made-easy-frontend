import Select from "react-select";
import AP_list from "../data/AP_list";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";

const customSelect = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#e5e7eb",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
    fontSize: "14px",
  }),

  multiValue: (provided, state) => ({
    ...provided,
    borderRadius: "14px", // Set your desired border radius for chips
    backgroundColor: "#e5e7eb",
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

export default function Navbar({ apCredit, setAPCredit }) {
  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 divide-y divide-gray">
      <div
        onClick={handleCollapse}
        className="mt-2 divide flex hover:bg-gray transition-colors duration-200"
      >
        <span className="mr-auto">Pre-College</span>
        <img src={collapse ? expand_icon : collapse_icon} className="w-5 h-5" />
      </div>
      <div>
        {!collapse && (
          <div className="mt-3 pb-2">
            <Select
              className="multi"
              classNamePrefix="select"
              placeholder="Select..."
              options={AP_list}
              components={animatedComponents}
              isMulti
              closeMenuOnSelect={false}
              styles={customSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
}
