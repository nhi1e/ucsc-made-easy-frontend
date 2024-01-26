import export_icon from "/icons/export.svg";
import { jsPDF } from "jspdf";

export default function ExportButton() {
  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.text("Hello world!", 10, 10);
    doc.text("Meow", 5, 20);
    doc.save("4 Year Plan.pdf");
  };

  return (
    <div className=" py-2 rounded-xl flex items-center" onClick={generatePDF}>
      <div className="bg-black-dark3 text-white  hover:bg-black-dark1 font-medium rounded-2xl text-xs px-2 py-1 focus:outline-none">
        <a
          // href=""
          // target="_blank"
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none mr-2 flex items-center" // Combined styles for link and flex container
        >
          <img
            src={export_icon}
            alt="linkw"
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "5px",
              marginRight: "10px",
            }}
          />
          Export Plan
        </a>
      </div>
    </div>
  );
}
