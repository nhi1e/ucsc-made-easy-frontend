import MainSelect from "./MainSelect";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";

export default function Left({
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
  setAPCredit,
}) {
  return (
    <div className="flex-none w-3/4">
      <Navbar
        apCredit={apCredit}
        setAPCredit={setAPCredit}
        client_id={client_id}
        courses={courses}
        setSatisfied={setSatisfied}
      />
      <MainSelect
        courses={courses}
        setCourses={setCourses}
        client_id={client_id}
        satisfied={satisfied}
        setSatisfied={setSatisfied}
        apCredit={apCredit}
      />
      <ToastContainer />
    </div>
  );
}
