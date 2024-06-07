import { useSelector } from "react-redux";
import "./Snackbar.css";
import { State } from "../../Store/Store";
import { snackbarMsg } from "../../Utils/ResultData";

export const Snackbar: React.FC = () => {
  const victoryStatus = useSelector(
    (state: State) => state.victoryStatus.victoryStatus
  );

  return (
    <div className="snackbar-wrapper">
      <div
        className={
          victoryStatus.isCorrect ? "snackbar-correct" : "snackbar-incorrect"
        }
      >
        <span className="snackbar-message">
          {victoryStatus.isCorrect ? snackbarMsg.correct : snackbarMsg.error}
        </span>
      </div>
    </div>
  );
};
