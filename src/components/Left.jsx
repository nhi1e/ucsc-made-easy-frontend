import MainSelect from "./MainSelect";

export default function Left(courses, setCourses) {
  return (
    <div className="flex-none w-3/4">
      <MainSelect courses={courses} setCourses={setCourses} />
    </div>
  );
}
