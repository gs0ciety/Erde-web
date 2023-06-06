import { useSelector } from "react-redux";
import "./Snackbar.css";
import { State } from "../../Store/Store";
import { snackbarMsg } from "../../Utils/ResultData";

export const Snackbar: React.FC = () => {
  const victoryStatus = useSelector(
    (state: State) => state.victoryStatus.victoryStatus
  );

  return (
    <div id={victoryStatus.showSnackbar ? "show" : "hide"} className="wrapper">
      <span>
        {victoryStatus.isCorrect ? snackbarMsg.correct : snackbarMsg.error}
      </span>
    </div>
  );
};
