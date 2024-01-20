import { useState } from "react";
import CourseSelect from "./CourseSelect";

export default function Quarters(year, courses, setCourses) {
  const quarter_names = ["Fall", "Winter", "Spring", "Summer"];

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
      <div onClick={handleCollapse} className="mt-2 ml-5 border-b-2 flex">
        {year.year}
        <img
          src={collapse ? "/arrowup.jpg" : "/arrow.jpg"}
          className="ml-10 max-w-6"
        />
      </div>
      <div className="flex ml-5">
        {!collapse &&
          quarter_names.map((name, index) => (
            <div className="max-w-400 border-2 ml-2 mt-1" key={index}>
              <CourseSelect
                quarter={name}
                courses={courses}
                setCourses={setCourses}
              />
            </div>
          ))}
      </div>
    </>
  );
}
