import SelectNewCourseNew from "./SelectNewCourse";
import Years from "./Years";

export default function MainSelect({ courses, setCourses, client_id }) {
  return (
    <div>
      <Years courses={courses} setCourses={setCourses} client_id={client_id} />
    </div>
  );
}
