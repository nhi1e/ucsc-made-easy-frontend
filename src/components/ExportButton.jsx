import export_dark from "/icons/export-dark.svg";
import export_light from "/icons/export-light.svg";
import { jsPDF, AcroFormTextField } from "jspdf";
import cs_requirements from "../data/CS_requirements.js";
import ge from "../data/GE.js";

export default function ExportButton({
  satisfied,
  courses,
  apCredit,
  colorMode,
}) {
  const iconSource = colorMode ? export_dark : export_light;

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(8);
    doc.text("Email: ", 4, 4);
    doc.text("Student ID: ", 4, 9);
    doc.setFillColor(236, 236, 235);

    doc.rect(13, 0, 40, 5, "F");
    var textField = new AcroFormTextField();
    textField.Rect = [13, 0, 40, 5];
    textField.multiline = false;
    textField.fontSize = 11;
    textField.maxFontSize = 11;
    textField.fieldName = "EmailBox";
    doc.addField(textField);

    doc.rect(19, 6, 33, 5, "F");
    var emailField = new AcroFormTextField();
    emailField.Rect = [19, 6, 33, 5];
    emailField.multiline = false;
    emailField.fontSize = 11;
    emailField.maxFontSize = 11;
    emailField.fieldName = "IDBox";
    doc.addField(emailField);

    doc.setFontSize(11);
    doc.text("Major Requirements", 5, 15); // can update to be variable major in the future
    let y = 20;
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
    y = 0;
    if (apCredit.length > 0) {
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
      y = y + 5;
      doc.line(55, y, 297, y);
    }
    doc.line(113, y, 113, y + 200);
    doc.line(168, y, 168, y + 200);
    doc.line(222, y, 222, y + 200);
    doc.setTextColor(0, 0, 0);

    y = y + 7;
    const quarters = ["Fall", "Winter", "Spring", "Summer"];
    let x = 60;
    for (let i = 0; i < 16; i++) {
      if (i != 0 && i % 4 == 0) {
        x = 60;
        y = y + 40;
        doc.line(55, y, 300, y);
        y = y + 4;
      }
      doc.text(quarters[i % 4], x, y);
      let local_y = y + 7;
      for (let j = 0; j < courses[i].length; j++) {
        doc.text(courses[i][j], x, local_y);
        local_y = local_y + 5;
      }
      x = x + 55;
    }
    doc.text("Credits: " + satisfied[18].toString(), 273, 208);

    doc.save("4 Year Plan.pdf");
  };

  return (
    <div className=" py-2 rounded-xl flex items-center" onClick={generatePDF}>
      <div
        className={
          "font-medium rounded-2xl text-xs px-2 py-1 focus:outline-none " +
          (colorMode
            ? "bg-black-dark3 hover:bg-black-dark1 text-white"
            : "bg-white-dark1  hover:bg-gray text-black-dark3")
        }
      >
        <a
          // href=""
          // target="_blank"
          className="rounded-2xl font-medium text-xs px-0 p-2 focus:outline-none mr-2 flex items-center" // Combined styles for link and flex container
        >
          <img
            src={iconSource}
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
