import { useSelector } from "react-redux";
import { State } from "../../Store/Store";
import GameMode from "../../Interfaces/GameModeInterface";
import { CapitalGame } from "../Games/CapitalGame";
import { FlagGame } from "../Games/FlagGame";
import { ShapeGame } from "../Games/ShapeGame";
import { NameGame } from "../Games/NameGame";

//styles
import "./Content.css";

export default function Content() {
  const activeGameMode: GameMode = useSelector(
    (state: State) => state.gameMode.gameMode
  );

  function gameSwitch(activeGameMode: GameMode) {
    switch (activeGameMode.name) {
      default:
      case "capital":
        return <CapitalGame />;
      case "flag":
        return <FlagGame />;
      case "shape":
        return <ShapeGame />;
      case "name":
        return <NameGame />;
    }
  }

  return <div className="content">{gameSwitch(activeGameMode)}</div>;
}
