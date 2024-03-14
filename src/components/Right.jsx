import Info from "./Info.jsx";
import Major from "./Major.jsx";
import GE from "./GE.jsx";
import Credits from "./Credits.jsx";
import ExportButton from "./ExportButton.jsx";
import DarkModeButton from "./DarkModeButton.jsx";
import NoteButton from "./NoteButton.jsx";

export default function Right({
  satisfied,
  courses,
  apCredit,
  colorMode,
  setColorMode,
}) {
  return (
    <div className="flex-grow flex flex-col justify-between overflow-y-scroll select-none">
      <div>
        <h1 className="text-3xl font-bold mt-4 pb-4 ml-6 flex-shrink-0">
          {/* <span className="text-blue">u</span>
          <span className="text-yellow">cs</span>
          <span className="text-blue">c, made easy</span> */}
          <span className={colorMode ? "text-blue" : "text-blue"}>u</span>
          <span className="text-yellow">cs</span>
          <span className={colorMode ? "text-blue" : "text-blue"}>
            c, made easy
          </span>
        </h1>
        <Info satisfied={satisfied} colorMode={colorMode} />
        <Major satisfied={satisfied} colorMode={colorMode} />
        <GE satisfied={satisfied} colorMode={colorMode} />
        <Credits satisfied={satisfied} colorMode={colorMode} />
        <div className="flex pl-5 pt-2 pr-5 space-x-4 justify-center">
          {/* <NoteButton colorMode={colorMode} /> */}
          <ExportButton
            satisfied={satisfied}
            apCredit={apCredit}
            courses={courses}
            colorMode={colorMode}
          />
          <DarkModeButton colorMode={colorMode} setColorMode={setColorMode} />
        </div>
      </div>
    </div>
  );
}
