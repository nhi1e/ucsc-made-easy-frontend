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
    <div className="mt-6 mr-9 ml-9 grid grid-cols-1 divide-y divide-gray">
      <div
        onClick={handleCollapse}
        className="mt-2 divide flex hover:bg-gray transition-colors duration-200"
      >
        <span className="mr-auto text-xl text-gray-dark">
          {year_names[year_index]}
        </span>
        <img src={collapse ? expand_icon : collapse_icon} className="w-5 h-5" />
      </div>
      <div className="flex justify-between">
        {!collapse &&
          quarter_indices.map((q) => (
            <div
              className="px-2 py-2 max-w-400 w-60 border-4 border-gray mt-1 rounded-lg"
              key={q}
            >
              <CourseSelect
                quarter_index={4 * year_index + q}
                courses={courses}
                setCourses={setCourses}
                client_id={client_id}
                satisfied={satisfied}
                setSatisfied={setSatisfied}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
