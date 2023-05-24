import { API_URL } from "../Utils/APIUtils";

export const getGameData = async () => {
  return await fetch(API_URL).then((response) => response.json());
};
