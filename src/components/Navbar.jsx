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

export default function Navbar({
  apCredit,
  setAPCredit,
  client_id,
  courses,
  setSatisfied,
}) {
  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleChange = async (selectedOptions) => {
    console.log(
      "Selected Options:",
      selectedOptions.map((obj) => obj.label)
    );
    const compare = [...apCredit];
    setAPCredit(selectedOptions.map((obj) => obj.label));
    const removed_item = compare.filter((value) => !apCredit.includes(value)); // removed item
    const added_item = apCredit.filter((value) => !compare.includes(value));
    if (apCredit.length > compare) {
      // added
      // fetch for added ap prereq
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: client_id,
          slot: -1,
          course: added_item[0],
          ap_courses: apCredit,
          schedule: courses,
        }),
      };

      await fetch("http://127.0.0.1:5000/prereqadd", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("FRom flask", data);
          setSatisfied(data);
        });
    } else {
      // fetch for removed prereq
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: client_id,
          slot: -1,
          course: removed_item[0],
          ap_courses: apCredit,
          schedule: courses,
        }),
      };

      await fetch("http://127.0.0.1:5000/prereqremove", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("FRom flask", data);
          setSatisfied(data);
        });
    }
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
              onChange={handleChange}
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
