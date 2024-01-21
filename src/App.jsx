import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastProvider } from "./components/ToastContext";

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
    ["Course Info Here", "Info Here", ""], // for course info 19
  ]);

  const [apCredit, setAPCredit] = useState([]);

  return (
    <ToastProvider>
      <div className="flex bg-black-dark2 min-h-screen text-white">
        <div className="flex">
          <Right satisfied={satisfied} />
          <Left
            courses={courses}
            setCourses={setCourses}
            client_id={client_id}
            satisfied={satisfied}
            setSatisfied={setSatisfied}
            apCredit={apCredit}
            setAPCredit={setAPCredit}
          />
        </div>
      </div>
    </ToastProvider>
  );
}
