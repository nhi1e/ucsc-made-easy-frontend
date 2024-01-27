import ge from "/src/data/GE.js";

export default function GE({ satisfied, colorMode }) {
  return (
    <div className="bg-black-dark3 max-w-sm mb-4 rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-gray-dark text-ml mb-0.25">GEs</div>
      </div>
      <div className="px-6 pb-2">
        {ge.map((course, index) => (
          <span
            key={course.value}
            className={
              satisfied[17][index] !== 1
                ? // ? "inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
                  "inline-block bg-black-light1 rounded-full px-2 py-1 text-xs font-semibold text-black-dark2 mr-1 mb-1 hover:scale-125"
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
