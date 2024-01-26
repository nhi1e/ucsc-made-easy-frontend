export default function Credits({ satisfied }) {
  return (
    <div className="bg-black-dark3 max-w-sm rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4 ">
        <div className="flex justify-between mb-1">
          <div className="font-bold text-gray-dark text-ml mb-2">Credits</div>
          <span className={`text-gray-200 text-sm font-medium `}>
            {satisfied[18]} / 180
          </span>
        </div>
        {/* <div className="w-full rounded-full h-2.5 bg-gray-200"> */}
        <div className="w-full rounded-full h-2.5 bg-black-light1">
          <div
            className="w-full bg-green h-2.5 rounded-full"
            style={{ width: `${(satisfied[18] / 180) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
