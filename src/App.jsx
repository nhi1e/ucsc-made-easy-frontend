import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

let client_id = localStorage.getItem("client_id");
if (client_id === null) {
  client_id = uuidv4();
  if (typeof Storage !== "undefined") {
    localStorage.setItem("client_id", client_id);
  }
}

export default function App() {
  const [courses, setCourses] = useState([
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
    [],
  ]);

  return (
    <>
      <div className="flex">
        <Left courses={courses} setCourses={setCourses} />
        <Right />
      </div>
    </>
  );
}
