import { useState } from "react";
import CourseBox from "./CourseBox";
// import SelectNewCourse from "./SelectNewCourse";
import SelectNewCourseNew from "./SelectNewCourseNew";

export default function CourseSelect(quarter, courses, setCourses) {
  const sample_selected = ["CSE 20", "CSE 30", "CSE 40"];
  const sample_courses = ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"];
  const [results, setResults] = useState(sample_courses);

  // const handleChange = (e) => {
  //   const { target } = e;
  //   if (!target.value.trim()) return setResults([]);
  //   if (target === "") {
  //     setResults(sample_courses);
  //     return;
  //   }

  //   const filteredValue = sample_courses.filter((course) =>
  //     course.toLowerCase().startsWith(target.value)
  //   );
  //   setResults(filteredValue);
  // };

  // const handleClose = () => {
  //   setResults(sample_courses);
  // };

  return (
    <div className="m-1">
      {quarter.quarter}
      {sample_selected.map((selected, index) => (
        <CourseBox key={index} course={selected} />
      ))}
      {/* I want below to change the list I have in this current scope */}
      <SelectNewCourseNew
      // results={results}
      // onChange={handleChange}
      // onClose={handleClose}
      />
    </div>
  );
}
