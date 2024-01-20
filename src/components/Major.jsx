import cs_requirements from "/src/data/CS_requirements.js";

export default function Major() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-ml mb-0.25">Major Requirements</div>
      </div>

      <div className="px-6 pt-1 pb-2">
        {cs_requirements.map((course) => (
          <span
            key={course.value}
            className="inline-block bg-gray rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            // className={
            //   sharedState[course.value + 48] !== 1
            //     ? "inline-block bg-gray rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            //     : "inline-block bg-green rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1 hover:scale-125"
            // }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
