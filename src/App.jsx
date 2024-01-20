import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";

export default function App() {
  const [courses, setCourses] = useState([]);

  return (
    <>
      <div className="flex">
        <Left courses={courses} setCourses={setCourses} />
        <Right />
      </div>
    </>
  );
}
