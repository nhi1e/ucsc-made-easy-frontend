import Select from "react-select";
import AP_list from "../data/AP_list";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";
import { useToast } from "./ToastContext";
export default function Navbar({
  apCredit,
  setAPCredit,
  client_id,
  courses,
  setSatisfied,
  colorMode,
}) {
  const customSelect = {
    control: (provided, state) => ({
      ...provided,
      background: "#101725",
      borderColor: "#101725",
      borderRadius: "7px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
      fontSize: "14px",
      // fontWeight: "bold",
    }),

    multiValue: (provided) => ({
      ...provided,
      borderRadius: "14px", // Set your desired border radius for chips
      backgroundColor: "#2D374C",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#f2f2f2", //whats shown in the box
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#ffffff", //FIXME
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      color: "#f2f2f2", //when typing
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

  const { showToast } = useToast();

  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleChange = (selectedOptions) => {
    const added_item = selectedOptions.filter(
      (value) => !apCredit.includes(value)
    ); // removed item
    const removed_item = apCredit.filter(
      (value) => !selectedOptions.includes(value)
    );
    // NEED TO PROCESS APS IN HTTP REQUEST PROPERLY
    if (apCredit.length < selectedOptions.length) {
      // added
      // fetch for added ap prereq
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: client_id,
          slot: -1,
          course: added_item[0].label,
          ap_courses: selectedOptions.map((val) => val.label),
          schedule: courses,
        }),
      };

      fetch("http://127.0.0.1:5000/prereqadd", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setSatisfied(data);
          for (let i = 0; i < data.length - 4; i++) {
            if (data[i].includes(1)) {
              // toast("You have unsatisfied prerequisites", {
              //   position: "bottom-center",
              //   autoClose: 5000,
              // });
              showToast("You have unsatisfied prerequisites");
              break;
            }
          }
        });
    } else {
      // fetch for removed prereq
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: client_id,
          slot: -1,
          course: removed_item[0].label,
          ap_courses: selectedOptions.map((val) => val.label),
          schedule: courses,
        }),
      };

      fetch("http://127.0.0.1:5000/prereqremove", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setSatisfied(data);
          for (let i = 0; i < data.length - 4; i++) {
            if (data[i].includes(1)) {
              // toast("You have unsatisfied prerequisites", {
              //   position: "bottom-center",
              //   autoClose: 5000,
              // });
              showToast("You have unsatisfied prerequisites");
              break;
            }
          }
        });
    }
    setAPCredit(selectedOptions);
  };

  return (
    // <div className="mt-6 mr-9 ml-9 grid grid-cols-1 divide-y divide-black-light1">
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 ">
      <div
        onClick={handleCollapse}
        className="mt-2 divide flex hover:bg-black-light2 transition-colors duration-200"
      >
        <span
          className={
            "transition-all duration-300 mr-auto text-xl mb-1 " +
            (colorMode ? "text-gray-dark" : "tex-black-light2")
          }
        >
          PRE-COLLEGE
        </span>
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
              defaultValue={apCredit} // default value is an array like [ {value: 5, label: "Ap calc"}, ... ]
            />
          </div>
        )}
      </div>
    </div>
  );
}
