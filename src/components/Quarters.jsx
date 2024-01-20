import CourseSelect from "./CourseSelect";

export default function Quarters() {
  const quarter_names = ["Fall", "Winter", "Spring", "Summer"];

  return (
    <div className="flex m-5">
      {quarter_names.map((name) => (
        <div className="max-w-400">
          <CourseSelect quarter={name} />
        </div>
      ))}
    </div>
  );
}
