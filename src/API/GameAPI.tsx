import { API_URL } from "../Utils/APIUtils";

export const getGameData = async () => {
  const data = await fetch(API_URL).then((response) => response.json());

  return data;
};
