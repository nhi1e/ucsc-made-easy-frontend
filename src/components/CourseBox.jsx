import { useEffect } from "react";
import close_icon from "/icons/close.svg";
import { useToast } from "./ToastContext";

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
  colorMode,
}) {
  const { showToast } = useToast();

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
        ap_courses: apCredit.map((val) => val.label), // UPDATE
        schedule: courses,
      }),
    };

    fetch(
      "https://ucsc-made-easy-backend-shy-wave-1904.fly.dev/remove",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
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
        course: course,
        ap_courses: apCredit.map((val) => val.label),
        schedule: courses,
      }),
    };

    fetch(
      "https://ucsc-made-easy-backend-shy-wave-1904.fly.dev/getinfo",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setSatisfied(data);
      });
    console.log("Clicked div");
  };

  return (
    <div
      // replace " border-4" with our color
      className={
        "justify-between rounded-lg p-1 m-1 flex " +
        (colorMode
          ? satisfied[quarter_index][num] === 1
            ? "border-2 border-red bg-black-light2 text-gray-400 hover:bg-black-light1"
            : "bg-black-light2 text-gray-400 hover:bg-black-light1"
          : satisfied[quarter_index][num] === 1
            ? "border-2 border-red bg-white-dark4 text-gray-200 hover:bg-white-dark3 shadow-inner	"
            : "bg-white-dark4 text-gray-200 hover:bg-white-dark3 shadow-[inset_0_2px_3px_rgba(0,0,0,0.3)]")
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
