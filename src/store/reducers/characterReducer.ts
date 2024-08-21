import { ICharacter } from "./../../components/result/types";

export interface ICharacterList {
  character: ICharacter;
  charactersList: ICharacter[];
  isRetry: boolean;
}
export enum characterActionType {
  ADD_ANSWER = "ADD_ANSWER",
  SELECT_CHARACTER = "SELECT_CHARACTER",
  RESET = "RESET",
  SET_RETRY = "SET_RETRY",
}
const initState: ICharacterList = {
  character: {
    attempts: 0,
    guessed: false,
    actor: "",
    alive: false,
    alternate_actors: [],
    alternate_names: [],
    ancestry: "",
    dateOfBirth: null,
    eyeColour: "",
    gender: "",
    hairColour: "",
    hogwartsStaff: false,
    hogwartsStudent: false,
    house: "",
    id: "",
    image: "",
    name: "",
    patronus: "",
    species: "",
    wand: {
      core: "",
      length: 0,
      wood: "",
    },
    wizard: false,
  },
  charactersList: [],
  isRetry: false,
};
export const characterReducer = (
  state = initState,
  action: any
): ICharacterList => {
  switch (action.type) {
    case characterActionType.ADD_ANSWER: {
      return {
        ...state,
        character: action.payload,
        charactersList: [...state.charactersList, action.payload],
        isRetry: false,
      };
    }
    case characterActionType.SELECT_CHARACTER: {
      return {
        ...state,
        character: action.payload,
        isRetry: false,
      };
    }
    case characterActionType.SET_RETRY: {
      return {
        ...state,
        character: {
          ...action.payload,
          attempts: action.payload.attempts + 1,
        },
        charactersList: state.charactersList.filter(
          (item) => item.id !== action.payload.id
        ),
        isRetry: true,
      };
    }
    case characterActionType.RESET: {
      return {
        ...state,
        charactersList: [],
        isRetry: false,
      };
    }
    default:
      return state;
  }
};
