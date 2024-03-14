export default function PrereqBubble({ satisfied, colorMode }) {
  const temp_prereqs = ["ONE or TWO", "THREE or FOUR"];
  return (
    <>
      {satisfied[19][1].length > 0 ? "Prerequisites: " : null}
      <br />
      {satisfied[19][1].map((prereq, index) => (
        <span
          key={index}
          className={
            "inline-block rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 hover:scale-125 " +
            (colorMode ? "bg-gray-dark" : "bg-white-dark2")
          }
        >
          {prereq.map((p, i) => {
            if (i === prereq.length - 1) {
              return p;
            } else {
              return p + " or ";
            }
          })}
        </span>
      ))}
    </>
  );
}
