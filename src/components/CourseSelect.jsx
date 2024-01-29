import CourseBox from "./CourseBox";
import SelectNewCourse from "./SelectNewCourse";

export default function CourseSelect({
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
  colorMode,
}) {
  const quarter_names = ["Fall", "Winter", "Spring", "Summer"];
  const titleColors = [
    "text-orange-pastel",
    "text-blue-pastel",
    "text-yellow-pastel",
    "text-green-pastel",
  ];
  return (
    <div className="m-1 ">
      <div className={`m-1 ${titleColors[quarter_index % 4]}`}>
        {quarter_names[quarter_index % 4]}
      </div>
      {/* below should rely on the state list instead, of our quarter index */}
      {courses[quarter_index].map((selected, index) => (
        <CourseBox
          key={index}
          num={index}
          course={selected}
          quarter_index={quarter_index}
          courses={courses}
          setCourses={setCourses}
          client_id={client_id}
          satisfied={satisfied}
          setSatisfied={setSatisfied}
          apCredit={apCredit}
          colorMode={colorMode}
        />
      ))}
      {/* I want below to change the list I have in this current scope */}
      <SelectNewCourse
        quarter_index={quarter_index}
        courses={courses}
        setCourses={setCourses}
        client_id={client_id}
        satisfied={satisfied}
        setSatisfied={setSatisfied}
        apCredit={apCredit}
        colorMode={colorMode}
      />
    </div>
  );
}
