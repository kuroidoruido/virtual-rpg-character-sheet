import { Game } from './game.model';

export const GAMES: Game[] = [
    {
        gameId: 'cthulhu-v7',
        gameName: 'Cthulhu V7',
        sheets: [
            { sheetId: 'fr-classique', sheetName: 'FR Classique', imgAsset: 'cthulhu-v7-fr-classique/page-1.png' },
            { sheetId: 'fr-classique-2', sheetName: 'FR Classique 2', imgAsset: 'cthulhu-v7-fr-classique/page-1.png' },
        ]
    },
    {
        gameId: 'cthulhu-v7-2',
        gameName: 'Cthulhu V7 2',
        sheets: [
            { sheetId: 'fr-classique-3', sheetName: 'FR Classique 3', imgAsset: 'cthulhu-v7-fr-classique/page-1.png' },
            { sheetId: 'fr-classique-4', sheetName: 'FR Classique 4', imgAsset: 'cthulhu-v7-fr-classique/page-1.png' },
        ]
    }
]