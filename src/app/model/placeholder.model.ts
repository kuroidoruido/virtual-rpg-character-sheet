type Percent = number;

export type PlaceholderType = 
    | 'text-input'
    | 'text-zone' 
    | 'number-input' 
    | 'number-computed' 
    | 'checkbox';

interface BasePlaceholderConfig {
    type: PlaceholderType;
    key: string;
    x: number;
    y: number;
    width: Percent;
    fontSize?: Percent;
}

export interface TextInputPlaceholderConfig extends BasePlaceholderConfig {
    value: string;
    type: 'text-input';
}

export interface TextZonePlaceholderConfig extends BasePlaceholderConfig {
    value: string;
    type: 'text-zone';
    height: Percent;
}

export interface NumberInputPlaceholderConfig extends BasePlaceholderConfig {
    type: 'number-input';
    value: number;
}

export interface NumberComputedPlaceholderConfig extends BasePlaceholderConfig {
    type: 'number-computed';
    value: number;
    compute: (config: PlaceholderConfig) => number;
}

export interface CheckboxPlaceholderConfig extends BasePlaceholderConfig {
    type: 'checkbox';
    value: boolean;
}

export type PlaceholderConfig = 
    | TextInputPlaceholderConfig 
    | TextZonePlaceholderConfig
    | NumberInputPlaceholderConfig
    | NumberComputedPlaceholderConfig
    | CheckboxPlaceholderConfig;