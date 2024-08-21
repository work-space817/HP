export interface IGetRandomCharacter {
  actor: string;
  alive: boolean;
  alternate_actors: [];
  alternate_names: [];
  ancestry: string;
  dateOfBirth: null;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  id: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: { core: string; length: number; wood: string };
  wizard: boolean;
}
