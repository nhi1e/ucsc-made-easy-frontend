import link_icon from "/icons/link.svg";
export default function Info({ satisfied }) {
  // to conditionally make the link work

  return (
    <div className=" bg-black-dark1 mb-4 max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-gray-dark text-ml mb-0.25">
          {satisfied[19][0]}
        </div>
      </div>
      <div className="px-6  pb-2">
        <p className="text-gray-700 text-gray-dark text-sm pb-2">
          Prerequisites: {satisfied[19][1]}
        </p>
        <div className="bg-gray-light justify-end py-2 rounded-2xl flex items-center">
          <div className="className=text-white bg-gray-200 hover:bg-gray font-medium rounded-xl text-xs px-2 py-1 focus:outline-none">
            <a
              href={satisfied[19][2]}
              target={satisfied[19][2] === "" ? "_self" : "_blank"}
              className="font-medium text-xs px-0 py-0.5 focus:outline-none mr-2 flex items-center" // Combined styles for link and flex container
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
