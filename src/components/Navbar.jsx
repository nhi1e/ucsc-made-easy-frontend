import Select from "react-select";
import AP_list from "../data/AP_list";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const customSelect = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "#fff",
    boxShadow: state.isFocused ? null : null,
  }),

  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#e5e7eb",
    borderRadius: "13px",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    // height: "30px",
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
export default function Navbar() {
  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    if (collapse === false) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  return (
    <div className="mt-6">
      <div
        onClick={handleCollapse}
        className="mt-2 ml-5 border-b-2 flex hover:bg-gray transition-colors duration-200"
      >
        Pre-College
        <img
          src={collapse ? "public/arrow.jpg" : "public/arrow.jpg"}
          className="ml-10 max-w-6"
        />
      </div>

      <div>
        {!collapse && (
          <div className="px-6 py-4">
            <Select
              className="multi"
              classNamePrefix="select"
              placeholder="Pre-college credits"
              options={AP_list}
              styles={customSelect}
              components={animatedComponents}
              isMulti
              closeMenuOnSelect={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
