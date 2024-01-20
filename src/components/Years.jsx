import Quarters from "./Quarters";

export default function Years({ courses, setCourses }) {
  console.log("YEars", courses.courses);

  const year_indices = [0, 1, 2, 3];

  return (
    <div>
      {year_indices.map((year) => {
        return (
          <div key={year}>
            <Quarters
              year_index={year}
              courses={courses.courses}
              setCourses={courses.setCourses}
            />
          </div>
        );
      })}
    </div>
  );
}
