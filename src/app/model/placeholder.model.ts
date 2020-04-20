import { CharacterData, CharacterDataValue } from './character-data.model';

type Percent = number;

export type PlaceholderType = 
    | 'text-input'
    | 'text-zone' 
    | 'number-input' 
    | 'number-computed' 
    | 'checkbox'
    | 'checkbox-group';

interface BasePlaceholderConfig {
    type: PlaceholderType;
    key: string;
    x: number;
    y: number;
    width: Percent;
    fontSize?: Percent;
}

export interface TextInputPlaceholderConfig extends BasePlaceholderConfig {
    type: 'text-input';
}

export interface TextZonePlaceholderConfig extends BasePlaceholderConfig {
    type: 'text-zone';
    height: Percent;
}

export interface NumberInputPlaceholderConfig extends BasePlaceholderConfig {
    type: 'number-input';
}

export type NumberComputeFunction = (characterData: CharacterData) => CharacterDataValue;
export interface NumberComputedPlaceholderConfig extends BasePlaceholderConfig {
    type: 'number-computed';
    compute: NumberComputeFunction;
}

export interface CheckboxPlaceholderConfig extends BasePlaceholderConfig {
    type: 'checkbox';
}

type CheckboxGroupStyle = 'square' | 'circle' | 'filled-square' | 'filled-circle';

export interface CheckboxGroupPlaceholderConfig extends BasePlaceholderConfig {
    type: 'checkbox-group';
    group: string;
    style?: CheckboxGroupStyle;
}

export type PlaceholderConfig = 
    | TextInputPlaceholderConfig 
    | TextZonePlaceholderConfig
    | NumberInputPlaceholderConfig
    | NumberComputedPlaceholderConfig
    | CheckboxPlaceholderConfig
    | CheckboxGroupPlaceholderConfig;