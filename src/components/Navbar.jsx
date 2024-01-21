import Select from "react-select";
import AP_list from "../data/AP_list";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";
import { useToast } from "./ToastContext";

const customSelect = {
  control: (provided, state) => ({
    ...provided,
    background: "#212A3E",
    borderColor: "#212A3E",
    borderRadius: "30px",
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
    backgroundColor: "#ABB1BF",
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
  const { showToast } = useToast();

  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleChange = (selectedOptions) => {
    const selectedLabels = selectedOptions.map((obj) => obj.label);
    const added_item = selectedLabels.filter(
      (value) => !apCredit.includes(value)
    ); // removed item
    const removed_item = apCredit.filter(
      (value) => !selectedLabels.includes(value)
    );
    // console.log("Ap credit: ", apCredit);
    // console.log("Selected options: ", selectedLabels);
    // console.log("Added item?: ", added_item[0]);
    // console.log("Removed item?: ", removed_item[0]);
    if (apCredit.length < selectedLabels.length) {
      // added
      // fetch for added ap prereq
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: client_id,
          slot: -1,
          course: added_item[0],
          ap_courses: selectedLabels,
          schedule: courses,
        }),
      };

      fetch("http://127.0.0.1:5000/prereqadd", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("FRom flask", data);
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
          course: removed_item[0],
          ap_courses: selectedLabels,
          schedule: courses,
        }),
      };

      fetch("http://127.0.0.1:5000/prereqremove", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("FRom flask", data);
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
    setAPCredit(selectedLabels);
  };

  return (
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 divide-y divide-black-light1">
      <div
        onClick={handleCollapse}
        className="mt-2 divide flex hover:bg-black-light2 transition-colors duration-200"
      >
        <span className="mr-auto text-gray-dark">PRE-COLLEGE</span>
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
