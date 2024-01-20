export default function Credits() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4 ">
        <div className="flex justify-between mb-1">
          <div className="font-bold text-ml mb-2">Credits</div>
          {/* <span className={`text-sm font-medium  ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>{sharedState[83]} / 180</span> */}
        </div>
        <div className="w-full rounded-full h-2.5">
          <div
            className="bg-green h-2.5 rounded-full bg-gray-dark "
            // style={{ width: `${Math.min(Credits, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
