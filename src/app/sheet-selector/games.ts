import { Game } from './game.model';

export const GAMES: Game[] = [
    {
        gameId: 'cats-la-mascarade',
        gameName: 'Cats! La Mascarade',
        sheets: [
            { sheetId: 'fr-v1-bastet', sheetName: 'FR v1 Bastet', imgAsset: 'bastet-1.png' },
            { sheetId: 'fr-v1-chat', sheetName: 'FR v1 Chat', imgAsset: 'chat-1.png' },
            { sheetId: 'fr-v1-chat2', sheetName: 'FR v1 Chat (nouvelle version)', imgAsset: 'chat2-1.png' },
            { sheetId: 'fr-v1-humain', sheetName: 'FR v1 Humain', imgAsset: 'humain-1.png' },
        ],
    },
    {
        gameId: 'cthulhu-v7',
        gameName: 'Cthulhu V7',
        sheets: [
            { sheetId: 'fr-classique', sheetName: 'FR Classique', imgAsset: 'page-1.png' },
        ],
    },
    {
        gameId: 'nains-et-jardins',
        gameName: 'Nains & Jardins',
        sheets: [
            { sheetId: 'fr', sheetName: 'FR', imgAsset: 'page-1.png' },
        ],
    },
];