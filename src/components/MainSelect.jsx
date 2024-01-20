import SelectNewCourseNew from "./SelectNewCourseNew";
import Years from "./Years";

export default function MainSelect(courses, setCourses) {
  return (
    <div>
      <Years courses={courses} setCourses={setCourses} />
    </div>
  );
}
