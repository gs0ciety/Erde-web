import { API_URL } from "../Utils/APIUtils";

export const fetchGameData = async () => {
  return await fetch(API_URL).then((response) => response.json());
};
