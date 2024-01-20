import MainSelect from "./MainSelect";
import Navbar from "./Navbar";

export default function Left({ courses, setCourses }) {
  console.log("LEft", courses);

  return (
    <div className="flex-none w-3/4">
      <Navbar />
      <MainSelect courses={courses} setCourses={setCourses} />
    </div>
  );
}
