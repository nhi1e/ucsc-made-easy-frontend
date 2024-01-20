import { useState } from "react";
import CourseBox from "./CourseBox";
import SelectNewCourse from "./SelectNewCourse";

export default function CourseSelect({ quarter_index, courses, setCourses }) {
  const quarter_names = ["Fall", "Winter", "Spring", "Summer"];

  console.log(quarter_index, courses[quarter_index], "HERE");

  return (
    <div className="m-1">
      {quarter_names[quarter_index % 4]}
      {/* below should rely on the state list instead, of our quarter index */}
      {courses[quarter_index].map((selected, index) => (
        <CourseBox
          key={index}
          num={index}
          course={selected}
          quarter_index={quarter_index}
          courses={courses}
          setCourses={setCourses}
        />
      ))}
      {/* I want below to change the list I have in this current scope */}
      <SelectNewCourse
        quarter_index={quarter_index}
        courses={courses}
        setCourses={setCourses}
      />
    </div>
  );
}
