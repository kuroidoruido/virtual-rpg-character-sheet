import { SheetConfig, SheetContent } from "src/app/model/sheet-config.model";
import { GAMES } from 'src/app/games';
import { PlaceholderConfig } from 'src/app/model/placeholder.model';
import { getNsPrefix } from '@angular/compiler';

describe('Sheet config tests', () => {
    GAMES.forEach(game => {
        describe(game.gameId, () => {
            game.sheets.forEach(sheet => {
                try {
                    const {config} = require(`src/app/sheet/${game.gameId}/${sheet.sheetId}/config.ts`);
                    generateSheetTest(config);
                } catch {
                    console.error(`Cannot read config of ${game.gameId}/${sheet.sheetId}`);
                }
            });
        });
    });
});

function generateSheetTest(config: SheetConfig) {
    describe(config.sheetId, () => {
        [
            ensureCharacterNameKeyIsDefined,
            ensureAllPagesContainsPlaceholders,
            ensureUniqueKeys,
        ].forEach(fn => it(fn.name, () => fn(config)));
    });
}

function combinePages(config: SheetConfig): PlaceholderConfig[] {
    if(config.content.pageCount === 1) {
        return config.content.page1;
    } else if(config.content.pageCount === 2) {
        return [...config.content.page1, ...config.content.page2];
    }
}

function ensureCharacterNameKeyIsDefined(config: SheetConfig) {
    for(const placeholder of combinePages(config)) {
        if(placeholder.key === 'characterName' && placeholder.type === 'text-input') {
            expect(true).toBeTrue();
            return;
        }
    }
    fail('All sheet config should include a placeholde of type text-input with "characterName" as key.');
}

function ensureAllPagesContainsPlaceholders(config: SheetConfig) {
    if(config.content.pageCount === 1) {
        expect(config.content.page1.length).toBeGreaterThan(1);
    } else if(config.content.pageCount === 2) {
        expect(config.content.page1.length).toBeGreaterThan(1);
        expect(config.content.page2.length).toBeGreaterThan(1);
    }
}

function ensureUniqueKeys(config: SheetConfig) {
    const keys = combinePages(config).map(p => p.key);
    const uniqueKeys = [...new Set(keys)];
    
    if(keys.length === uniqueKeys.length) {
        // mark the test as green
        expect(true).toBeTrue();
        return;
    }
    const sortedKeys = keys.sort();
    const errorKeys = new Set<string>([]);
    for(let i = 0; i<sortedKeys.length - 1; i++) {
        const current = sortedKeys[i];
        const next = sortedKeys[i+1];
        console.log('try', current, next, current === next);
        if (current === next) {
            errorKeys.add(next);
            i++;
        }
    }
    fail('All keys should be unique. Check on these duplicated keys: '+JSON.stringify([...errorKeys]));
}