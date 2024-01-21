export default function CourseBox({
  num,
  course,
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
}) {
  const handleRemove = () => {
    const new_courses = [...courses];
    new_courses[quarter_index].splice(num, 1);
    console.log(new_courses);
    setCourses(new_courses);

    // fetch backend here
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        slot: quarter_index,
        course: selectedOption.label,
        ap_courses: [], // UPDATE
        schedule: courses,
      }),
    };

    fetch("http://127.0.0.1:5000/remove", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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
