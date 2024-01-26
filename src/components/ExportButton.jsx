import export_icon from "/icons/export.svg";
import { jsPDF } from "jspdf";
import cs_requirements from "../data/CS_requirements.js";
import ge from "../data/GE.js";

export default function ExportButton({ satisfied, courses, apCredit }) {
  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(11);
    doc.text("Major Requirements", 5, 5); // can update to be variable major in the future
    let y = 10;
    for (let i = 0; i < cs_requirements.length; i++) {
      if (satisfied[16][i] == 1) {
        doc.setTextColor(60, 195, 81);
      } else {
        doc.setTextColor(244, 11, 27);
      }
      doc.text(cs_requirements[i].label, 5, y);
      y = y + 5;
    }
    doc.line(0, y, 55, y);

    y = y + 7;
    doc.setTextColor(0, 0, 0);
    doc.text("GE Requirements", 5, y);
    y = y + 5;
    for (let i = 0; i < ge.length; i++) {
      if (satisfied[17][i] == 1) {
        doc.setTextColor(60, 195, 81);
      } else {
        doc.setTextColor(244, 11, 27);
      }
      doc.text(ge[i].label, 5, y);
      y = y + 5;
    }
    doc.line(55, 0, 55, 210);

    doc.setTextColor(0, 0, 0);
    doc.text("Prior Credits", 60, 5);
    y = 10;
    let x = 60;
    for (let i = 0; i < apCredit.length; i++) {
      if (i % 2 == 0) {
        doc.setTextColor(89, 98, 124);
      } else {
        doc.setTextColor(124, 114, 89);
      }
      if (x + doc.getStringUnitWidth(apCredit[i].label) * 4.3 > 297) {
        x = 60;
        y = y + 5;
        doc.text(apCredit[i].label, x, y);
        x = x + doc.getStringUnitWidth(apCredit[i].label) * 4.6;
      } else {
        doc.text(apCredit[i].label, x, y);
        x = x + doc.getStringUnitWidth(apCredit[i].label) * 4.6;
      }
    }
    doc.line(55, y + 5, 297, y + 5);

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
