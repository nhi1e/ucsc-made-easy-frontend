import link_icon from "/icons/link.svg";
export default function Info({ satisfied, colorMode }) {
  // to conditionally make the link work

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
          {satisfied[19][0]}
        </div>
      </div>
      <div className="px-6  pb-2">
        <p
          className={
            "transition-all duration-300 text-gray-700 text-sm pb-2 " + // is the text-gray-700 necessary
            (colorMode ? "text-gray-dark" : "text-dark")
          }
        >
          Prerequisites: {satisfied[19][1]}
        </p>
        <div className="bg-gray-light justify-end py-2 rounded-2xl flex items-center">
          <div
            className={
              "transition-all duration-300 font-medium rounded-xl text-xs px-2 py-1 focus:outline-none " +
              (colorMode
                ? "bg-black-light1 hover:bg-black-light2"
                : "bg-white-dark2 hover:bg-white-dark1")
            }
          >
            <a
              href={satisfied[19][2]}
              target={satisfied[19][2] === "" ? "_self" : "_blank"}
              className="font-medium text-xs text-black-dark3 px-0 py-0.5 focus:outline-none mr-2 flex items-center" // Combined styles for link and flex container
            >
              <img
                src={link_icon}
                alt="linkw"
                style={{
                  width: "15px",
                  height: "15px",
                  marginLeft: "5px",
                  marginRight: "3px",
                }} // Added margin-left for spacing
              />
              Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
