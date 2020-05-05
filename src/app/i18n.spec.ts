
import enFile from '../assets/i18n/en.json'; 
import frFile from '../assets/i18n/fr.json'; 

const enLocale = enFile as any;
const frLocale = frFile as any;

const allLocale = Object.entries({
    en: enLocale, 
    fr: frLocale,
});

function deepExtract(obj: any, base = ''): string[] {
    const keys = Object.keys(obj);
    const leafKeys: string[] = [];
    keys.forEach(key => {
        const currentPath = base + key;
        if(typeof obj[key] === 'object') {
            leafKeys.push(...deepExtract(obj[key], currentPath+'.'));
        } else {
            leafKeys.push(currentPath);
        }
    });
    return leafKeys;
}

describe('i18n locale files tests', () => {
    describe('should be sorted in alphabetical order', () => {
        allLocale.forEach(([localeName, localeTranslation]) => {
            it(localeName, () => {
                const deepKeys = deepExtract(localeTranslation);
                const sortedDeepKeys = [...deepKeys].sort();
                expect(deepKeys).toEqual(sortedDeepKeys);
            });
        });
        
    });

    describe('All locale file should contains every keys', () => {
        let allKeysSet = new Set();
        let localeKeys: {[localeName: string]: string[]} = {};

        beforeAll(() => {
            allLocale.forEach(([localeName,locales]) => {
                const extractedKeys = deepExtract(locales);
                extractedKeys.forEach(key => allKeysSet.add(key));
                localeKeys[localeName] = extractedKeys;
            });
        });
        
        allLocale.forEach(([localeName]) => {
            it(localeName, () => {
                const keys = localeKeys[localeName];
                const shouldContains = [...allKeysSet];
                keys.forEach(k => shouldContains.splice(shouldContains.indexOf(k), 1));
                if(shouldContains.length === 0) {
                    expect(true).toBeTrue();
                    return;
                }
                fail('This locale file does not contains theses keys: '+shouldContains);
            });
        });
    });
});