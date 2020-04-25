import { CharacterData, CharacterDataValue } from './character-data.model';

type Percent = number;
type Degree = number;

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
    rotate?: Degree;
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

type CheckboxStyle = 'cross' | 'tick' | 'square' | 'circle' | 'filled-square' | 'filled-circle';

export interface CheckboxPlaceholderConfig extends BasePlaceholderConfig {
    type: 'checkbox';
    style?: CheckboxStyle;
}

export interface CheckboxGroupPlaceholderConfig extends BasePlaceholderConfig {
    type: 'checkbox-group';
    style?: CheckboxStyle;
    group: string;
}

export type PlaceholderConfig = 
    | TextInputPlaceholderConfig 
    | TextZonePlaceholderConfig
    | NumberInputPlaceholderConfig
    | NumberComputedPlaceholderConfig
    | CheckboxPlaceholderConfig
    | CheckboxGroupPlaceholderConfig;