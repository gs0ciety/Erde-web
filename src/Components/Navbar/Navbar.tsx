import { useDispatch } from "react-redux";
import { GameMode } from "../../Utils/GameMode";
import "./Navbar.css";
import { changeGameMode } from "../../Slices/GameModeSlice";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      {GameMode.map((gameMode) => {
        return (
          <button
            key={gameMode.id}
            onClick={() => {
              dispatch(changeGameMode(gameMode));
            }}
          >
            {gameMode.name}
          </button>
        );
      })}
    </div>
  );
}
