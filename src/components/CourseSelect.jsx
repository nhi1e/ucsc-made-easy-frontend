import { useState } from "react";
import CourseBox from "./CourseBox";
// import SelectNewCourse from "./SelectNewCourse";
import SelectNewCourseNew from "./SelectNewCourseNew";

export default function CourseSelect({ quarter_index, courses, setCourses }) {
  const sample_selected = ["CSE 20", "CSE 30", "CSE 40"];
  const sample_courses = ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"];
  const quarter_names = ["Fall", "Winter", "Spring", "Summer"];

  console.log(quarter_index, courses[quarter_index]);

  return (
    <div className="m-1">
      {quarter_names[quarter_index % 4]}
      {quarter_index}
      {/* below should rely on the state list instead, of our quarter index */}
      {courses[quarter_index].map((selected, index) => (
        <CourseBox key={index} course={selected} />
      ))}
      {/* I want below to change the list I have in this current scope */}
      <SelectNewCourseNew />
    </div>
  );
}
