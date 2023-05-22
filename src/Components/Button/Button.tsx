import "./Button.css";

export const Button: React.FC<{
  imgUrl: string;
  className: string;
  onClick: () => void;
}> = ({ imgUrl, className, onClick }) => {
  const url = process.env.PUBLIC_URL + imgUrl;

  return (
    <img
      className={className}
      alt="game selector btn"
      src={url}
      onClick={onClick}
    ></img>
  );
};
