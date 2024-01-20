import Info from "./Info.jsx";
import Major from "./Major.jsx";
import GE from "./GE.jsx";
import Credits from "./Credits.jsx";
import ExportButton from "./ExportButton.jsx";
import DarkModeButton from "./DarkModeButton.jsx";

export default function Right() {
  return (
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <Info></Info>
        <Major></Major>
        <GE></GE>
        <Credits></Credits>
        <div className="flex justify-end pt-5 pr-5 space-x-4">
          <ExportButton></ExportButton>
          <DarkModeButton></DarkModeButton>
        </div>
      </div>
    </div>
  );
}
