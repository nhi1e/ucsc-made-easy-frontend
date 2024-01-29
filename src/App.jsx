import Right from "./components/Right";
import Left from "./components/Left";
import { useEffect, useState } from "react";
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
}

export default function App() {
  const [courses, setCourses] = useState(courses_format);
  const [satisfied, setSatisfied] = useState(satisfied_format);
  const [apCredit, setAPCredit] = useState(ap_format);
  const [colorMode, setColorMode] = useState(true); // true is dark, false is light
  // see below in the first div how to render different styles depending on the mode
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
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
          setCourses(data.schedule);
          setSatisfied(data.prereq);
          setAPCredit(data.ap_courses);
          setLoading(false);
        });
    };
    dataFetch();
  }, []);

  if (loading) {
    return <></>; // could add some cute loading slug here
  } else {
    return (
      <ToastProvider>
        <div
          className={
            "transition-all duration-300 w-full min-h-screen text-white select-none " +
            (colorMode ? "bg-black-dark2" : "bg-white")
          }
        >
          <div className="flex">
            <Right
              satisfied={satisfied}
              courses={courses}
              apCredit={apCredit}
              colorMode={colorMode}
              setColorMode={setColorMode}
            />
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
}
