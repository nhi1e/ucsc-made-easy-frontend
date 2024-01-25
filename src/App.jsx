import Right from "./components/Right";
import Left from "./components/Left";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastProvider } from "./components/ToastContext";

var courses_format = [
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
];
var satisfied_format = [
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
  [], // for major reqs 16
  [], // for ge reqs 17
  0, // for credits 18
  ["Course Info Here", "Info Here", ""], // for course info 19
];
var ap_format = [];
let client_id = localStorage.getItem("client_id");
if (client_id === null) {
  client_id = uuidv4();
  if (typeof Storage !== "undefined") {
    localStorage.setItem("client_id", client_id);
  }
} else {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: client_id,
    }),
  };
  await fetch("http://127.0.0.1:5000/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("FRom flask", data);
      courses_format = data.schedule;
      satisfied_format = data.prereq;
      ap_format = data.ap_courses;
    });
}

export default function App() {
  const [courses, setCourses] = useState(courses_format);

  const [satisfied, setSatisfied] = useState(satisfied_format);

  // Example of how apCredit should look
  // const [apCredit, setAPCredit] = useState([
  //   { value: 7, label: "AP Art Studio Drawing with score 3, 4" },
  // ]);
  const [apCredit, setAPCredit] = useState(ap_format);

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
