export default function NameGame(gameData) {
  const data = gameData;

  return (
    <div>
      <h1>{data && data.question.name}</h1>
      <div>
        {data?.options.map((country) => (
          <p>{country.name}</p>
        ))}
      </div>
    </div>
  );
}
