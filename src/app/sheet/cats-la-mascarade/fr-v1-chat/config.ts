import { CharacterData } from 'src/app/model/character-data.model';
import { NumberComputeFunction, PlaceholderConfig } from 'src/app/model/placeholder.model';
import { TwoPageSheetConfig } from 'src/app/model/sheet-config.model';

function tryNumber(value: any): number {
  if(value === undefined) {
    return 0;
  }
  const n = parseInt(value);
  if(isNaN(n)) {
    return 0;
  }
  return n;
}

function extractAttributes(characterData: CharacterData) {
  return {
    physique: {
      griffe: tryNumber(characterData.values['physique.griffe']),
      poil: tryNumber(characterData.values['physique.poil']),
      queue: tryNumber(characterData.values['physique.queue']),
      oeil: tryNumber(characterData.values['physique.oeil']),
    },
    mental: {
      ronron: tryNumber(characterData.values['mental.ronron']),
      caresse: tryNumber(characterData.values['mental.caresse']),
      vibrisse: tryNumber(characterData.values['mental.vibrisse']),
      coussinet: tryNumber(characterData.values['mental.coussinet']),
    },
    chance: tryNumber(characterData.values['chance']),
  } as const;
}

type Skills = ReturnType<typeof extractAttributes>;

function base(compute: (skills: Skills) => number): NumberComputeFunction {
  return (characterData: CharacterData) => compute(extractAttributes(characterData));
}

function total(skillName: string, baseCompute: NumberComputeFunction, minRank): NumberComputeFunction {
  return (characterData: CharacterData) => {
    const rang = tryNumber(characterData.values[`skill.${skillName}_rang`]) || 0;
    if(rang < minRank) {
      return 'x';
    }
    const base = tryNumber(baseCompute(characterData)) || 0;
    const bonus = tryNumber(characterData.values[`skill.${skillName}_bonus`]) || 0;
    const malus = tryNumber(characterData.values[`skill.${skillName}_malus`]) || 0;
    return base + rang + bonus + malus;
  };
}

function half(n: number | undefined): number {
  if(n === undefined) {
    return 0;
  }
  if(isNaN(n)) {
    return 0;
  }
  return Math.floor(n/2);
}

function skill(skillName: string, y: number, baseCompute: (skills: Skills) => number, minRank = 0): PlaceholderConfig[] {
  const computeBase = base(baseCompute);
  return [
    { key: `competences.${skillName}_base`, x: 43.2, y, width: 3, fontSize: 0.8, compute: computeBase, type: 'number-computed'},
    { key: `competences.${skillName}_rang`, x: 50, y, width: 3, fontSize: 0.5, type: 'number-input'},
    { key: `competences.${skillName}_bonus`, x: 57.3, y, width: 3, fontSize: 0.5, type: 'number-input'},
    { key: `competences.${skillName}_malus`, x: 64.3, y, width: 3, fontSize: 0.5, type: 'number-input'},
    { key: `competences.${skillName}_total`, x: 71.7, y, width: 3, fontSize: 0.8, compute: total(skillName, computeBase, minRank), type: 'number-computed'},
  ];
}

function talentsPsychique(n: number, y: number): PlaceholderConfig[] {
  return [
    { key: `talents-psychique.${n}_nom`, x: 8, y: y+2, width: 19, type: 'text-input'},
    { key: `talents-psychique.${n}_rang-max`, x: 31, y: y+2, width: 3, type: 'number-input'},
    { key: `talents-psychique.${n}_description`, x: 37, y, width: 54, height: 6, fontSize: 0.6, type: 'text-zone'},
  ];
}

export const config: TwoPageSheetConfig = {
  gameId: 'cats-la-mascarade',
  sheetId: 'fr-v1-chat',
  pageConfig: {
    pages: [ 'chat-1.png', 'chat-2.png' ],
    pageFormat: 'A4',
    pageOrientation: 'portrait',
    pageWidth: 100
  },
  content: {
    pageCount: 2,
    page1: [
        { key: 'characterName', x: 13, y: 20.7, width: 18, type: 'text-input'},
        { key: 'description', x: 45.5, y: 20.7, width: 28.0, type: 'text-input'},
        { key: 'reputation', x: 86, y: 20.7, width: 6, type: 'number-input'},
        { key: 'lignee', x: 14.5, y: 22.5, width: 16.5, type: 'text-input'},
        { key: 'faction', x: 40, y: 22.5, width: 24.0, type: 'text-input'},
        { key: 'conseil', x: 74, y: 22.5, width: 18, type: 'text-input'},
        
        { key: 'physique.griffe', x: 11.3, y: 33.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'physique.poil', x: 18.3, y: 29.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'physique.queue', x: 26.5, y: 29.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'physique.oeil', x: 33.5, y: 33.7, width: 4, fontSize: 2.5, type: 'number-input'},

        { key: 'mental.ronron', x: 60.5, y: 33.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'mental.caresse', x: 67.8, y: 29.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'mental.vibrisse', x: 76, y: 29.2, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'mental.coussinet', x: 83.0, y: 33.7, width: 4, fontSize: 2.5, type: 'number-input'},
        
        { key: 'chance', x: 48, y: 39.7, width: 4, fontSize: 2.5, type: 'number-input'},
        { key: 'qualites', x: 7, y: 45.6, width: 33.4, height: 5.3, type: 'text-zone'},
        { key: 'defaults', x: 58.6, y: 45.6, width: 33.4, height: 5.3, type: 'text-zone'},

        { key: 'informations-personnelles', x: 7.3, y: 53.6, width: 84.8, height: 8.2, type: 'text-zone'},

        ...skill('archeologie', 66.00, skills => skills.mental.ronron, 1),
        ...skill('chasse', 67.47, skills => half(skills.physique.queue+skills.mental.vibrisse)),
        ...skill('culture-generale', 68.94, skills => skills.mental.ronron),
        ...skill('combat-griffu', 70.41, skills => half(skills.physique.queue+skills.physique.oeil)),
        ...skill('connaissance-de-la-rue', 71.88, skills => half(skills.mental.ronron+skills.mental.coussinet)),
        ...skill('discretion', 73.35, skills => skills.physique.queue),
        ...skill('escalade', 74.82, skills => half(skills.physique.queue+skills.physique.griffe)),
        ...skill('irriter-les-humains', 76.29, skills => half(skills.mental.caresse+skills.mental.vibrisse)),
        ...skill('jouer-des-tours-pendables', 77.76, skills => half(skills.mental.caresse+skills.mental.vibrisse)),
        ...skill('langage-humain', 79.23, skills => skills.mental.ronron, 1),
        ...skill('leadership', 80.70, skills => skills.mental.caresse),
        ...skill('orientation', 82.17, skills => skills.mental.vibrisse),
        ...skill('persuation', 83.64, skills => half(skills.mental.caresse+skills.mental.coussinet)),
        ...skill('psychologie-humaine', 85.11, skills => skills.mental.ronron),
        ...skill('reclamer-a-manger', 86.58, skills => skills.mental.caresse),
        ...skill('reclamer-des-caresses', 88.05, skills => skills.mental.caresse),
        ...skill('saut', 89.52, skills => skills.physique.queue),
        ...skill('seduire', 90.99, skills => skills.mental.coussinet),
        ...skill('survie', 92.46, skills => half(skills.mental.ronron+skills.mental.vibrisse)),
        ...skill('trouver-un-objet-cache', 93.93, skills => half(skills.mental.caresse+skills.mental.vibrisse)),
        ...skill('us-et-coutumes-humaines', 95.40, skills => skills.mental.ronron),

        { key: 'critiques', x: 78.3, y: 64.3, width: 14.1, height: 32, type: 'text-zone'},
      ],
    page2: [
      ...talentsPsychique(1, 25),
      ...talentsPsychique(2, 31.4),
      ...talentsPsychique(3, 37.8),
      ...talentsPsychique(4, 44.2),
      ...talentsPsychique(5, 50.6),
      ...talentsPsychique(6, 57.0),

      { key: 'niveaux-de-talents-utilises.1-01', x: 15.75, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-02', x: 23.03, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-03', x: 30.31, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-04', x: 37.59, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-05', x: 44.87, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-06', x: 52.15, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-07', x: 59.43, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-08', x: 66.71, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-09', x: 73.99, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.1-10', x: 81.27, y: 68.30, width: 2.5, style: 'cross', type: 'checkbox'},

      { key: 'niveaux-de-talents-utilises.2-01', x: 15.75, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-02', x: 23.03, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-03', x: 30.31, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-04', x: 37.59, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-05', x: 44.87, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-06', x: 52.15, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-07', x: 59.43, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-08', x: 66.71, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-09', x: 73.99, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.2-10', x: 81.27, y: 70.05, width: 2.5, style: 'cross', type: 'checkbox'},

      { key: 'niveaux-de-talents-utilises.3-01', x: 15.75, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-02', x: 23.03, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-03', x: 30.31, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-04', x: 37.59, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-05', x: 44.87, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-06', x: 52.15, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-07', x: 59.43, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-08', x: 66.71, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-09', x: 73.99, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.3-10', x: 81.27, y: 71.80, width: 2.5, style: 'cross', type: 'checkbox'},

      { key: 'niveaux-de-talents-utilises.4-01', x: 15.75, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-02', x: 23.03, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-03', x: 30.31, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-04', x: 37.59, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-05', x: 44.87, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-06', x: 52.15, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-07', x: 59.43, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-08', x: 66.71, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-09', x: 73.99, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'niveaux-de-talents-utilises.4-10', x: 81.27, y: 73.60, width: 2.5, style: 'cross', type: 'checkbox'},

      { key: 'neuf-vies.01', x: 32.00, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.02', x: 38.30, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.03', x: 44.60, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.04', x: 50.90, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.05', x: 57.20, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.06', x: 63.50, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.07', x: 69.80, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.08', x: 76.10, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
      { key: 'neuf-vies.09', x: 82.40, y: 94.5, width: 2.5, style: 'cross', type: 'checkbox'},
    ],
  },
};