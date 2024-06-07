import { useDispatch, useSelector } from "react-redux";
import { GameModeData } from "../../Utils/GameMode";
import { changeGameMode } from "../../Slices/GameModeSlice";
import { newGame } from "../../Slices/GameGeneratorSlice";
import GameMode from "../../Interfaces/GameModeInterface";
import { fetchGameData } from "../../API/GameAPI";

//styles
import "./Navbar.css";
import { State } from "../../Store/Store";

export default function NavBar() {
  const activeGameMode = useSelector((state: State) => state.gameMode.gameMode);

  const dispatch = useDispatch();

  const gameData = async () =>
    await fetchGameData().then((gameData) => {
      dispatch(newGame(gameData));
    });

  const fetchNewGameAndChangeGameMode = (gameMode: GameMode) => {
    gameData();
    dispatch(changeGameMode(gameMode));
  };

  return (
    <div className="navbar">
      {GameModeData.map((gameMode) => {
        return (
          <img
            key={gameMode.id}
            src={gameMode.imgUrl}
            className={
              gameMode.name === activeGameMode.name
                ? `btn-navbar isActive ${gameMode.name}`
                : `btn-navbar ${gameMode.name}`
            }
            onClick={() => {
              fetchNewGameAndChangeGameMode(gameMode);
            }}
          />
        );
      })}
    </div>
  );
}
