import moon_icon from "/icons/moon.svg";

export default function DarkModeButton() {
  return (
    <div className="bg-gray-light py-2 rounded-xl flex items-center">
      <div className="className=text-white bg-gray hover:bg-gray-dark font-medium rounded-2xl text-xs px-2 py-1 focus:outline-none">
        <a
          href=""
          target="_blank"
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none flex items-center" // Combined styles for link and flex container
        >
          <img
            src={moon_icon}
            alt="linkw"
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "5px",
              marginRight: "3px",
            }}
          />
        </a>
      </div>
    </div>
  );
}
