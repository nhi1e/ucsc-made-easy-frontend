import Quarters from "./Quarters";

export default function Years({
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
}) {
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
              client_id={client_id}
              satisfied={satisfied}
              setSatisfied={setSatisfied}
              apCredit={apCredit}
            />
          </div>
        );
      })}
    </div>
  );
}
