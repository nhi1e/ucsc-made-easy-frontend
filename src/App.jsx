import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([
    ["CSE 20", "cse 30"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  console.log(courses);

  return (
    <>
      <div className="flex">
        <Left courses={courses} setCourses={setCourses} />
        <Right />
      </div>
    </>
  );
}
