import link_icon from "/public/icons/link.svg";
export default function Info() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-ml mb-0.25">Selected Course</div>
      </div>
      <div className="px-6 pt-1 pb-2">
        <p className="text-gray-700 text-sm pb-2">
          Prerequisites: prereq info here
        </p>
        <div className="bg-gray-light justify-end py-2 rounded-2xl flex items-center">
          <div className="className=text-white bg-gray hover:bg-gray-dark font-medium rounded-xl text-xs px-2 py-1 focus:outline-none">
            <a
              href="https://catalog.ucsc.edu/en/current/general-catalog/academic-units/baskin-engineering/computer-science-and-engineering/computer-science-bs/"
              target="_blank"
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
