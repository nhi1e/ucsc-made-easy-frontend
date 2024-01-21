import SelectNewCourseNew from "./SelectNewCourse";
import Years from "./Years";

export default function MainSelect({
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
}) {
  return (
    <div>
      <Years
        courses={courses}
        setCourses={setCourses}
        client_id={client_id}
        satisfied={satisfied}
        setSatisfied={setSatisfied}
        apCredit={apCredit}
      />
    </div>
  );
}
