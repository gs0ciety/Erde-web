import { useSelector } from "react-redux";
import { getGameData } from "../../API/GameAPI";
import "./Content.css";

import { useEffect, useState } from "react";
import { State } from "../../Store/Store";

export default function Content() {
  const [data, setData] = useState();

  const gameMode = useSelector((state: State) => state.gameMode);

  const fetchData = async () => {
    setData(await getGameData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <h1>{gameMode.name}</h1>
      <button onClick={() => fetchData()}>PRESS ME</button>
    </div>
  );
}
