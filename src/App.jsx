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

  const [satisfied, setSatisfied] = useState([
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
    [], // for major stuff
    [], // for ge stuff
    0, // for credits?
  ]);

  return (
    <>
      <div className="flex">
        <Right />
        <Left
          courses={courses}
          setCourses={setCourses}
          client_id={client_id}
          satisfied={satisfied}
          setSatisfied={setSatisfied}
        />
      </div>
    </>
  );
}
