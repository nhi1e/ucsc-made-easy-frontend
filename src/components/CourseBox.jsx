export default function CourseBox({
  num,
  course,
  quarter_index,
  courses,
  setCourses,
}) {
  const handleRemove = () => {
    const new_courses = [...courses];
    new_courses[quarter_index].splice(num, 1);
    console.log(new_courses);
    setCourses(new_courses);
  };

  return (
    <div className="border-2 border-green-500 bg-green-100 p-0.5 m-1 flex">
      {course}
      <button onClick={handleRemove} className="ml-5">
        Remove
      </button>
    </div>
  );
}
