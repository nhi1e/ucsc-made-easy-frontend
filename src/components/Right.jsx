import Info from "./Info.jsx";
import Major from "./Major.jsx";
import GE from "./GE.jsx";
import Credits from "./Credits.jsx";
import ExportButton from "./ExportButton.jsx";
import DarkModeButton from "./DarkModeButton.jsx";

export default function Right({ satisfied }) {
  return (
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mt-4 pb-4 ml-6 flex-shrink-0">
          <span className="text-blue">u</span>
          <span className="text-yellow">cs</span>
          <span className="text-blue">c, made easy</span>
        </h1>
        <Info satisfied={satisfied} />
        <Major satisfied={satisfied} />
        <GE satisfied={satisfied} />
        <Credits satisfied={satisfied} />
        <div className="flex pl-5 pt-2 pr-5 space-x-4">
          <ExportButton></ExportButton>
          <DarkModeButton></DarkModeButton>
        </div>
      </div>
    </div>
  );
}
