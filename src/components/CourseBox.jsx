export default function CourseBox({ course }) {
  return (
    <div className="border-2 border-green-500 bg-green-100 p-0.5 m-1 flex">
      {course}
      <button className="ml-5">Remove</button>
    </div>
  );
}
