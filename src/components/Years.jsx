import Quarters from "./Quarters";

export default function Years() {
  const year_names = ["Year 1", "Year 2", "Year 3", "Year 4"];

  return (
    <div>
      {year_names.map((year) => {
        return (
          <>
            <Quarters year={year} />
          </>
        );
      })}
    </div>
  );
}
