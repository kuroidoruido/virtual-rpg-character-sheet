
export type CharacterDataValue = string | number | boolean;

export interface CharacterData {
    values: {
        characterName: string; 
        [key: string]: CharacterDataValue;
     };
}