import { useState } from "react";
import CourseSelect from "./CourseSelect";
import expand_icon from "/icons/expand.svg";
import collapse_icon from "/icons/collapse.svg";

export default function Quarters({
  year_index,
  courses,
  setCourses,
  client_id,
}) {
  const year_names = ["Year 1", "Year 2", "Year 3", "Year 4"];
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
        <span className="mr-auto">{year_names[year_index]}</span>
        <img src={collapse ? expand_icon : collapse_icon} className="w-5 h-5" />
      </div>
      <div className="flex ml-5">
        {!collapse &&
          quarter_indices.map((q) => (
            <div className="max-w-400 w-60 border-2 ml-2 mt-1" key={q}>
              <CourseSelect
                quarter_index={4 * year_index + q}
                courses={courses}
                setCourses={setCourses}
                client_id={client_id}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
