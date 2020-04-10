
export type CharacterDataValue = string | number | boolean;

export interface CharacterData {
    values: { [key: string]: CharacterDataValue };
}