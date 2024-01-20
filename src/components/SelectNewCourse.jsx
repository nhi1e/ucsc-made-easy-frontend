import Select, { createFilter } from "react-select";
import CustomOption from "./CustomOption";
import real_courses from "../data/real_course_list";

export default function SelectNewCourse({
  quarter_index,
  courses,
  setCourses,
}) {
  return (
    <>
      <Select
        classNamePrefix="react-select"
        key={quarter_index}
        value={""}
        isClearable={true}
        filterOption={createFilter({ ignoreAccents: false })}
        options={real_courses}
        onChange={(selectedOption) => {
          console.log(selectedOption.label);
          const new_courses = [...courses];
          new_courses[quarter_index].push(selectedOption.label);
          console.log(new_courses);
          setCourses(new_courses);
        }}
        captureMenuScroll={false}
        components={{
          Option: CustomOption,
        }}
      />
    </>
  );
}
