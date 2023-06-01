import { useDispatch } from "react-redux";
import { newGame } from "../../Slices/GameGeneratorSlice";
import Content from "../Content/Content";
import NavBar from "../Navbar/Navbar";
import { useEffect } from "react";
import { fetchGameData } from "../../API/GameAPI";

function Erde() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateGameData = async () =>
      await fetchGameData().then((gameData) => {
        dispatch(newGame(gameData));
      });

    updateGameData();
  }, [dispatch]);

  return (
    <div className="erde">
      <NavBar />
      <Content />
    </div>
  );
}

export default Erde;
