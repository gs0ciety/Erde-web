import { useSelector } from "react-redux";
import "./Content.css";
import { State } from "../../Store/Store";
import GameMode from "../../Interfaces/GameModeInterface";

export default function Content() {
  const activeGameMode = useSelector((state: State) => state.gameMode);

  function gameSwitch(activeGameMode: GameMode) {
    switch (activeGameMode.name) {
      default:
      case "shape":
        return activeGameMode.name;
      case "flag":
        return activeGameMode.name;
      case "name":
        return activeGameMode.name;
    }
  }

  return (
    <div className="content">
      <h1>{gameSwitch(activeGameMode)}</h1>
    </div>
  );
}
