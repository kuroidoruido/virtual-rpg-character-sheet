
export interface Game {
    gameId: string;
    gameName: string;

    sheets: Sheet[];
}

export interface Sheet {
    sheetId: string;
    sheetName: string;
    moduleName: string;
    imgAsset: string;
}


export interface GameWithUserInfos extends Game {
    sheets: SheetWithUserInfos[];
}

export interface SheetWithUserInfos extends Sheet {
    characters: Character[];
}

export interface Character {
    name: string;
}