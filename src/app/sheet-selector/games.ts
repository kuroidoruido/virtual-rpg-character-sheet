import { Game } from './game.model';

export const GAMES: Game[] = [
    {
        gameId: 'cthulhu-v7',
        gameName: 'Cthulhu V7',
        sheets: [
            { sheetId: 'fr-classique', sheetName: 'FR Classique', imgAsset: 'page-1.png' },
        ]
    },
    {
        gameId: 'nains-et-jardins',
        gameName: 'Nains & Jardins',
        sheets: [
            { sheetId: 'fr', sheetName: 'FR', imgAsset: 'page-1.png' },
        ]
    }
]