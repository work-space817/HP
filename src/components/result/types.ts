import { IGetRandomCharacter } from "../../api/types";

export interface ICharacter extends IGetRandomCharacter {
  attempts: number;
  guessed: boolean;
}
