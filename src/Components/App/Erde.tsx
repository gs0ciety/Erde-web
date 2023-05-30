import { useDispatch } from "react-redux";
import Content from "../Content/Content";
import NavBar from "../Navbar/Navbar";
import { useEffect } from "react";
import { newGame } from "../../Slices/GameGeneratorSlice";
import { getGameData } from "../../API/GameAPI";

function Erde() {
  const dispatch = useDispatch();

  useEffect(() => {
    const gameData = async () =>
      await getGameData().then((gameData) => {
        dispatch(newGame(gameData));
      });

    gameData();
  }, [dispatch]);

  return (
    <div className="erde">
      <NavBar />
      <Content />
    </div>
  );
}

export default Erde;
