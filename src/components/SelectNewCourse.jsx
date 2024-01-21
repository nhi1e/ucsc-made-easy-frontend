import Select, { createFilter } from "react-select";
import CustomOption from "./CustomOption";
import real_courses from "../data/real_course_list";

export default function SelectNewCourse({
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
}) {
  const handleChange = (selectedOption) => {
    console.log(selectedOption.label);
    const new_courses = [...courses];
    new_courses[quarter_index].push(selectedOption.label);
    console.log(new_courses);
    setCourses(new_courses);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        slot: quarter_index,
        course: selectedOption.label,
        ap_courses: [], // UPDATE
        schedule: courses,
      }),
    };

    fetch("http://127.0.0.1:5000/add", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // backedn add call here
  };

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
          handleChange(selectedOption);
        }}
        captureMenuScroll={false}
        components={{
          Option: CustomOption,
        }}
      />
    </>
  );
}
