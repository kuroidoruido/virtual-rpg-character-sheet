import { PlaceholderConfig } from 'src/app/model/placeholder.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';

function etatDame(type: string, name: string, x: number, y: number): PlaceholderConfig {
  return { key: `${type}.etat-d-ame.${name}`, x, y, width: 2.5, styleToggle: ['cross', 'filled-circle'], type: 'checkbox' };
}

function competence(name: string, x: number, y: number, suffix = ''): PlaceholderConfig[] {
  return [
    { key: `competences${suffix}.${name}_label`, x: x, y, width: 23.8, type: 'text-input' },
    { key: `competences${suffix}.${name}_value`, x: x+26.5, y, width: 8.0, type: 'number-input' },
  ];
}

export const config: TwoPageSheetConfig = {
  gameId: 'billet-rouge',
  sheetId: 'fr',
  pageConfig: {
    pages: [ 'page-1.png', 'page-2.png' ],
    pageFormat: 'A5',
    pageOrientation: 'portrait',
    pageWidth: 100
  },
  content: {
    pageCount: 2,
    page1: [
      { key: 'characterName', x: 50, y: 14.2, width: 26, type: 'text-input' },
      { key: 'profil-quotidien-1', x: 60, y: 19.8, width: 27, type: 'text-input' },
      { key: 'profil-quotidien-2', x: 39.5, y: 23.5, width: 47.5, type: 'text-input' },
      { key: 'profil-quotidien-3', x: 39.5, y: 27.3, width: 47.5, type: 'text-input' },
      
      etatDame('vertu', 'colere-4', 25.50, 35.05),
      etatDame('vertu', 'colere-3', 31.35, 35.05),
      etatDame('vertu', 'colere-2', 37.20, 35.05),
      etatDame('vertu', 'colere-1', 43.05, 35.05),
      etatDame('vertu', 'colere-flegme-0', 48.90, 35.05),
      etatDame('vertu', 'flegme-1', 54.75, 35.05),
      etatDame('vertu', 'flegme-2', 60.60, 35.05),
      etatDame('vertu', 'flegme-3', 66.45, 35.05),
      etatDame('vertu', 'flegme-4', 72.30, 35.05),
      
      etatDame('vertu', 'peur-4', 25.50, 40.55),
      etatDame('vertu', 'peur-3', 31.35, 40.55),
      etatDame('vertu', 'peur-2', 37.20, 40.55),
      etatDame('vertu', 'peur-1', 43.05, 40.55),
      etatDame('vertu', 'peur-determination-0', 48.90, 40.55),
      etatDame('vertu', 'determination-1', 54.75, 40.55),
      etatDame('vertu', 'determination-2', 60.60, 40.55),
      etatDame('vertu', 'determination-3', 66.45, 40.55),
      etatDame('vertu', 'determination-4', 72.30, 40.55),
      
      etatDame('vertu', 'egoisme-4', 25.50, 46.05),
      etatDame('vertu', 'egoisme-3', 31.35, 46.05),
      etatDame('vertu', 'egoisme-2', 37.20, 46.05),
      etatDame('vertu', 'egoisme-1', 43.05, 46.05),
      etatDame('vertu', 'egoisme-empathie-0', 48.90, 46.05),
      etatDame('vertu', 'empathie-1', 54.75, 46.05),
      etatDame('vertu', 'empathie-2', 60.60, 46.05),
      etatDame('vertu', 'empathie-3', 66.45, 46.05),
      etatDame('vertu', 'empathie-4', 72.30, 46.05),
      
      etatDame('vertu', 'desespoir-4', 25.50, 51.55),
      etatDame('vertu', 'desespoir-3', 31.35, 51.55),
      etatDame('vertu', 'desespoir-2', 37.20, 51.55),
      etatDame('vertu', 'desespoir-1', 43.05, 51.55),
      etatDame('vertu', 'desespoir-esperance-0', 48.90, 51.55),
      etatDame('vertu', 'esperance-1', 54.75, 51.55),
      etatDame('vertu', 'esperance-2', 60.60, 51.55),
      etatDame('vertu', 'esperance-3', 66.45, 51.55),
      etatDame('vertu', 'esperance-4', 72.30, 51.55),

      { key: 'vertu.sante.blessure-grave', x: 63.8, y: 56.9, width: 2.5, style: 'cross', type: 'checkbox' },
      { key: 'vertu.sante.blessure-legere', x: 68.5, y: 56.9, width: 2.5, style: 'cross', type: 'checkbox' },
      { key: 'vertu.sante.malus', x: 74, y: 58.5, width: 10.7, type: 'number-input' },
      
      ...competence('1', 15, 60.60),
      ...competence('2', 15, 64.35),
      ...competence('3', 15, 68.10),
      ...competence('4', 15, 71.85),
      ...competence('5', 15, 75.60),
      ...competence('6', 15, 79.35),
      ...competence('7', 15, 83.10),
      ...competence('8', 15, 86.85),

      ...competence('1', 52.3, 68.10, '-vice-alterees'),
      ...competence('2', 52.3, 71.85, '-vice-alterees'),
      ...competence('3', 52.3, 75.60, '-vice-alterees'),

      { key: 'confiance.oeil-de-londres', x: 73, y: 85, width: 10.7, type: 'number-input' },
      { key: 'confiance.edimbourg', x: 73, y: 90, width: 10.7, type: 'number-input' },

    ],
    page2: [
      { key: 'vice.identite', x: 28.4, y: 14.4, width: 37, type: 'text-input' },
      { key: 'profil-criminel.1', x: 36.2, y: 18.2, width: 29, type: 'text-input' },
      { key: 'profil-criminel.2', x: 18, y: 21.9, width: 47.0, type: 'text-input' },
      { key: 'tentation.1', x: 29.8, y: 25.5, width: 35, type: 'text-input' },
      { key: 'tentation.2', x: 36.4, y: 29.2, width: 28.8, type: 'text-input' },
      { key: 'tentation.malus', x: 25.8, y: 29.5, width: 7.5, type: 'number-input' },
      
      etatDame('vice', 'colere_4', 25.50, 35.05),
      etatDame('vice', 'colere_3', 31.35, 35.05),
      etatDame('vice', 'colere_2', 37.20, 35.05),
      etatDame('vice', 'colere_1', 43.05, 35.05),
      etatDame('vice', 'colere-flegme_0', 48.90, 35.05),
      etatDame('vice', 'flegme_1', 54.75, 35.05),
      etatDame('vice', 'flegme_2', 60.60, 35.05),
      etatDame('vice', 'flegme_3', 66.45, 35.05),
      etatDame('vice', 'flegme_4', 72.30, 35.05),
      
      etatDame('vice', 'peur_4', 25.50, 40.55),
      etatDame('vice', 'peur_3', 31.35, 40.55),
      etatDame('vice', 'peur_2', 37.20, 40.55),
      etatDame('vice', 'peur_1', 43.05, 40.55),
      etatDame('vice', 'peur-determination_0', 48.90, 40.55),
      etatDame('vice', 'determination_1', 54.75, 40.55),
      etatDame('vice', 'determination_2', 60.60, 40.55),
      etatDame('vice', 'determination_3', 66.45, 40.55),
      etatDame('vice', 'determination_4', 72.30, 40.55),
      
      etatDame('vice', 'egoisme_4', 25.50, 46.05),
      etatDame('vice', 'egoisme_3', 31.35, 46.05),
      etatDame('vice', 'egoisme_2', 37.20, 46.05),
      etatDame('vice', 'egoisme_1', 43.05, 46.05),
      etatDame('vice', 'egoisme-empathie_0', 48.90, 46.05),
      etatDame('vice', 'empathie_1', 54.75, 46.05),
      etatDame('vice', 'empathie_2', 60.60, 46.05),
      etatDame('vice', 'empathie_3', 66.45, 46.05),
      etatDame('vice', 'empathie_4', 72.30, 46.05),
      
      etatDame('vice', 'desespoir_4', 25.50, 51.55),
      etatDame('vice', 'desespoir_3', 31.35, 51.55),
      etatDame('vice', 'desespoir_2', 37.20, 51.55),
      etatDame('vice', 'desespoir_1', 43.05, 51.55),
      etatDame('vice', 'desespoir-esperance_0', 48.90, 51.55),
      etatDame('vice', 'esperance_1', 54.75, 51.55),
      etatDame('vice', 'esperance_2', 60.60, 51.55),
      etatDame('vice', 'esperance_3', 66.45, 51.55),
      etatDame('vice', 'esperance_4', 72.30, 51.55),

      { key: 'vice.sante.blessure-grave', x: 29.1, y: 56.9, width: 2.5, style: 'cross', type: 'checkbox' },
      { key: 'vice.sante.blessure-legere', x: 33.9, y: 56.9, width: 2.5, style: 'cross', type: 'checkbox' },
      { key: 'vice.sante.malus', x: 39.5, y: 58.5, width: 10.7, type: 'number-input' },
      
      ...competence('1', 17.6, 68.10, '-vice'),
      ...competence('2', 17.6, 71.85, '-vice'),
      ...competence('3', 17.6, 75.60, '-vice'),
      
      { key: 'equipements', x: 15, y: 82, width: 39, height: 10, type: 'text-zone' },
      { key: 'notes', x: 56.5, y: 60, width: 39, height: 32, type: 'text-zone' },
    ]
  }
}