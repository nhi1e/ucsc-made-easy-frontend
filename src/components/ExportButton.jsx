import export_icon from "/src/icons/export.svg";

export default function ExportButton() {
  return (
    <div className="bg-gray-light py-2 rounded-xl flex items-center">
      <div className="className=text-white bg-gray hover:bg-gray-dark font-medium rounded-2xl text-xs px-2 py-1 focus:outline-none">
        <a
          href=""
          target="_blank"
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none mr-2 flex items-center" // Combined styles for link and flex container
        >
          <img
            src={export_icon}
            alt="linkw"
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          />
          Export Plan
        </a>
      </div>
    </div>
  );
}
