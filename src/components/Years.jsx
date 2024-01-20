import Quarters from "./Quarters";

export default function Years(courses, setCourses) {
  const year_names = ["Year 1", "Year 2", "Year 3", "Year 4"];

  return (
    <div>
      {year_names.map((year, index) => {
        return (
          <div key={index}>
            <Quarters year={year} courses={courses} setCourses={setCourses} />
          </div>
        );
      })}
    </div>
  );
}
