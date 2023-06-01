import { useDispatch } from "react-redux";
import { API_URL } from "../Utils/APIUtils";
import { newGame } from "../Slices/GameGeneratorSlice";

export const fetchGameData = async () => {
  return await fetch(API_URL).then((response) => response.json());
};
