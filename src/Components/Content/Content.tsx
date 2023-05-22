import "./Content.css";

import { useEffect, useState } from "react";

export default function Content() {
  const [data, setData] = useState("");

  const API_URL = "https://www.gsociety.com.ar/backend/api/game";

  const alt_API_URL = "https://jsonplaceholder.typicode.com/todos/1";

  const getData = async () => {
    const response = await fetch(alt_API_URL);

    const jsonResponse = await response.json();

    const stringResponse = JSON.stringify(jsonResponse);

    setData(stringResponse);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="content">
      <p>{data}</p>
      <button onClick={() => getData()}>PRESS ME</button>
    </div>
  );
}
