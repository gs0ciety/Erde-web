import { useDispatch } from "react-redux";
import { GameModeData } from "../../Utils/GameMode";
import "./Navbar.css";
import { changeGameMode } from "../../Slices/GameModeSlice";
import { newGame } from "../../Slices/GameGeneratorSlice";
import GameMode from "../../Interfaces/GameModeInterface";
import { fetchGameData } from "../../API/GameAPI";

export default function NavBar() {
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
          <button
            key={gameMode.id}
            onClick={() => {
              fetchNewGameAndChangeGameMode(gameMode);
            }}
          >
            {gameMode.name}
          </button>
        );
      })}
    </div>
  );
}
