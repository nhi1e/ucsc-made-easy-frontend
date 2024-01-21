import Select from "react-select";
import AP_list from "../data/AP_list";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";

const customSelect = {
  // ... your styles
};

export default function Navbar() {
  const animatedComponents = makeAnimated();

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 divide-y ">
      <div
        onClick={handleCollapse}
        className="mt-2 divide flex hover:bg-gray transition-colors duration-200"
      >
        <span className="mr-auto">Pre-College</span>
        <img src={collapse ? expand_icon : collapse_icon} className="w-5 h-5" />
      </div>
      <div>
        {!collapse && (
          <div className="px-6 py-4">
            <Select
              className="multi"
              classNamePrefix="select"
              placeholder="Pre-college credits"
              options={AP_list}
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
