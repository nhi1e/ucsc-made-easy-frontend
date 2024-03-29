import { useState } from "react";
import CourseSelect from "./CourseSelect";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";

export default function Quarters({
  year_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
  colorMode,
}) {
  const year_names = ["YEAR 1", "YEAR 2", "YEAR 3", "YEAR 4"];
  const quarter_indices = [0, 1, 2, 3];

  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    if (collapse === false) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  return (
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 ">
      <div
        onClick={handleCollapse}
        className={
          "mt-0.8 divide flex hover:bg-black-light2 transition-colors duration-200 " +
          (colorMode ? "hover:bg-black-light2" : "hover:bg-white-dark1")
        }
      >
        <span
          className={
            "transition-all duration-300 mr-auto text-xl mb-1 " +
            (colorMode ? "text-gray-dark" : "text-black-light2")
          }
        >
          {year_names[year_index]}
        </span>
        <img src={collapse ? expand_icon : collapse_icon} className="w-5 h-5" />
      </div>
      <div className="flex justify-between">
        {!collapse &&
          quarter_indices.map((q) => (
            <div
              // className={`px-2 py-2 max-w-400 w-60 border-1 mt-1 rounded-lg ${boxBorderColors[q]} ${boxColors[q]}`}
              // className="px-2 py-2 max-w-400 w-60 border-1 mt-1 rounded-lg bg-black-dark3 "
              className={
                "transition-all duration-300 px-2 py-2 max-w-400 w-60 border-1 mt-1 rounded-lg " +
                (colorMode ? "bg-black-dark3" : "bg-white-dark1 shadow-lg")
              }
              key={q}
            >
              <CourseSelect
                quarter_index={4 * year_index + q}
                courses={courses}
                setCourses={setCourses}
                client_id={client_id}
                satisfied={satisfied}
                setSatisfied={setSatisfied}
                apCredit={apCredit}
                colorMode={colorMode}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
