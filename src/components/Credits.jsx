export default function Credits({ satisfied, colorMode }) {
  return (
    <div
      className={
        "transition-all duration-300 mb-4 max-w-sm rounded-lg overflow-hidden shadow-md " +
        (colorMode ? "bg-black-dark3" : "bg-white-dark1")
      }
    >
      <div className="px-6 py-4 ">
        <div className="flex justify-between mb-1">
          <div
            className={
              "transition-all duration-300 font-bold text-ml mb-0.25 " +
              (colorMode ? "text-gray-dark" : "text-dark")
            }
          >
            Credits
          </div>
          <span
            className={
              "text-sm font-medium " +
              (colorMode ? "text-gray-200" : "text-dark")
            }
          >
            {satisfied[18]} / 180
          </span>
        </div>
        {/* <div className="w-full rounded-full h-2.5 bg-gray-200"> */}
        <div
          className={
            "transition-all duration-300 w-full rounded-full h-2.5 " +
            (colorMode ? "bg-black-light1" : "bg-white-dark3")
          }
        >
          <div
            className={
              "transition-all duration-300 w-full rounded-full h-2.5 " +
              (colorMode ? "bg-green" : "bg-green-pastel_dark")
            }
            style={{ width: `${Math.min(100, (satisfied[18] / 180) * 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
