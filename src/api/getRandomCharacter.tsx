import { ICharacter } from "../components/result/types";
import { IGetRandomCharacter } from "./types";

const URL = "https://hp-api.onrender.com/api/characters";

export const getRandomCharacter = async () => {
  try {
    const response = await fetch(URL);
    const characters = await response.json();

    const getRandomIndex = Math.floor(Math.random() * characters.length);

    const randomCharacter: IGetRandomCharacter = characters[getRandomIndex];
    console.log("randomCharacter: ", randomCharacter);
    const newRandomCharacter: ICharacter = {
      ...randomCharacter,
      attempts: 1,
      guessed: false,
    };

    return newRandomCharacter;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};
