import { Game } from './model/game.model';

export const GAMES: Game[] = [
    {
        gameId: 'billet-rouge',
        gameName: 'Billet Rouge',
        sheets: [
            { sheetId: 'fr', sheetName: 'Billet Rouge FR', moduleName: 'BilletRougeFrModule', imgAsset: 'page-1.png' },
        ],
    },
    {
        gameId: 'cats-la-mascarade',
        gameName: 'Cats! La Mascarade',
        sheets: [
            { sheetId: 'fr-v1-bastet', sheetName: 'FR v1 Bastet', moduleName: 'FrV1BastetModule', imgAsset: 'bastet-1.png' },
            { sheetId: 'fr-v1-chat', sheetName: 'FR v1 Chat', moduleName: 'FrV1ChatModule', imgAsset: 'chat-1.png' },
            { sheetId: 'fr-v1-chat2', sheetName: 'FR v1 Chat (nouvelle version)', moduleName: 'FrV1Chat2Module', imgAsset: 'chat2-1.png' },
            { sheetId: 'fr-v1-humain', sheetName: 'FR v1 Humain', moduleName: 'FrV1HumainModule', imgAsset: 'humain-1.png' },
        ],
    },
    {
        gameId: 'cthulhu-v7',
        gameName: 'Cthulhu V7 (Sans Détours)',
        sheets: [
            { sheetId: 'fr-classique', sheetName: 'FR Classique', moduleName: 'CthulhuV7FrClassiqueModule', imgAsset: 'page-1.png' },
        ],
    },
    {
        gameId: 'nains-et-jardins',
        gameName: 'Nains & Jardins',
        sheets: [
            { sheetId: 'fr', sheetName: 'FR', moduleName: 'NainsEtJardinFrModule', imgAsset: 'page-1.png' },
        ],
    },
];