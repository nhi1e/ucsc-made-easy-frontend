import ge from "/src/data/GE.js";

export default function GE({ satisfied }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-ml mb-0.25">GEs</div>
      </div>
      <div className="px-6 pt-1 pb-2">
        {ge.map((course, index) => (
          <span
            key={course.value}
            className={
              satisfied[17][index] !== 1
                ? "inline-block bg-gray rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
                : "inline-block bg-green rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
