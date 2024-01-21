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

  useEffect(() => {}, [satisfied]);

  return (
    <div
      // replace " border-4" with our color
      className={
        "justify-between rounded-lg  p-1 m-1 flex bg-black-light2 text-gray-400 " +
        (satisfied[quarter_index][num] === 0 ? "" : "border-2 border-red")
      }
    >
      <div className="text-gray">{course}</div>
      <button onClick={handleRemove} className="ml-5">
        <img src={close_icon} className="w-5 h-5" />
      </button>
    </div>
  );
}
