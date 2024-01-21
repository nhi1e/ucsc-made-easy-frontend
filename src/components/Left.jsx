import MainSelect from "./MainSelect";
import Navbar from "./Navbar";

export default function Left({
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
}) {
  return (
    <div className="flex-none w-3/4">
      <Navbar />
      <MainSelect
        courses={courses}
        setCourses={setCourses}
        client_id={client_id}
        satisfied={satisfied}
        setSatisfied={setSatisfied}
      />
    </div>
  );
}
