import { useEffect } from "react";
import close_icon from "/icons/close.svg";

export default function CourseBox({
  num,
  course,
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
}) {
  const handleRemove = () => {
    const new_courses = [...courses];
    const deleted_course = new_courses[quarter_index][num];
    console.log(deleted_course);
    new_courses[quarter_index].splice(num, 1);
    setCourses(new_courses);

    // fetch backend here
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        slot: quarter_index,
        course: deleted_course,
        ap_courses: apCredit, // UPDATE
        schedule: courses,
      }),
    };

    fetch("http://127.0.0.1:5000/remove", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("FRom flask", data);
        setSatisfied(data);
      });
  };

  // not sure if this is necessary
  useEffect(() => {}, [satisfied]);

  const fetchCourseInfo = () => {
    // new route to fetch new course info
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        course: course,
        ap_courses: apCredit,
        schedule: courses,
      }),
    };

    fetch("http://127.0.0.1:5000/getinfo", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("FRom flask", data);
        setSatisfied(data);
      });
    console.log("Clicked div");
  };

  return (
    <div
      // replace " border-4" with our color
      className={
        "justify-between rounded-lg  p-1 m-1 flex bg-black-light2 text-gray-400 hover:bg-black-light1 hover:cursor-pointer transition-colors " +
        (satisfied[quarter_index][num] === 1 ? "border-2 border-red" : "")
      }
      onClick={fetchCourseInfo}
    >
      <div className="text-gray">{course}</div>
      <button onClick={handleRemove} className="ml-5">
        <img src={close_icon} className="w-5 h-5" />
      </button>
    </div>
  );
}
