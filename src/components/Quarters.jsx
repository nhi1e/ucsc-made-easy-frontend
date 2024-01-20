import { useState } from "react";
import CourseSelect from "./CourseSelect";

export default function Quarters({ year_index, courses, setCourses }) {
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
    <>
      <div
        onClick={handleCollapse}
        className="mt-2 ml-5 border-b-2 flex hover:bg-gray transition-colors duration-200"
      >
        {year_names[year_index]}
        <img
          src={collapse ? "/arrowup.jpg" : "/arrow.jpg"}
          className="ml-10 max-w-6"
        />
      </div>
      <div className="flex ml-5">
        {!collapse &&
          quarter_indices.map((q) => (
            <div className="max-w-400 w-60 border-2 ml-2 mt-1" key={q}>
              <CourseSelect
                quarter_index={4 * year_index + q}
                courses={courses}
                setCourses={setCourses}
              />
            </div>
          ))}
      </div>
    </>
  );
}
