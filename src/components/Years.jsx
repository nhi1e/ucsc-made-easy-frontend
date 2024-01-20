import Quarters from "./Quarters";

export default function Years({ courses, setCourses }) {
  const year_indices = [0, 1, 2, 3];

  return (
    <div>
      {year_indices.map((year) => {
        return (
          <div key={year}>
            <Quarters
              year_index={year}
              courses={courses}
              setCourses={setCourses}
            />
          </div>
        );
      })}
    </div>
  );
}
