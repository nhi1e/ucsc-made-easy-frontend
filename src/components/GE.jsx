import ge from "/src/data/GE.js";

export default function GE({ satisfied, colorMode }) {
  return (
    <div
      className={
        "transition-all duration-300 mb-4 max-w-sm rounded-lg overflow-hidden shadow-md " +
        (colorMode ? "bg-black-dark3" : "bg-white-dark1")
      }
    >
      <div className="px-6 py-4">
        <div
          className={
            "transition-all duration-300 font-bold text-ml mb-0.25 " +
            (colorMode ? "text-gray-dark" : "text-dark")
          }
        >
          GEs
        </div>
      </div>
      <div className="px-6 pb-2">
        {ge.map((course, index) => (
          <span
            key={course.value}
            className={
              "inline-block rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 hover:scale-125 " +
              (colorMode
                ? satisfied[17][index] === 1
                  ? "bg-green"
                  : "bg-gray-dark"
                : satisfied[17][index] === 1
                  ? "bg-green-pastel_dark"
                  : "bg-white-dark2")
            }
            // className={
            //   "inline-block rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 hover:scale-125 " +
            //   (satisfied[17][index] === 1
            //     ? "bg-green text-gray-700"
            //     : colorMode
            //       ? "bg-black-light1 text-black-dark2"
            //       : "bg-white text-gray")
            // }
          >
            {course.label}
          </span>
        ))}
      </div>
    </div>
  );
}
