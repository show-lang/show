export function load_deckCard_deck_test(load) {
    code.assumeNest(load).forEach((nest, index) => {
        code.addTask(load.base, () => {
            code.load_deckCard_deck_test_nestedChildren(code.withLink(load, nest, index));
        });
    });
}
export function load_deckCard_deck_test_nestedChildren(load) {
    const index = code.assumeLinkIndex(load);
    if (index === 0) {
        const type = code.getLinkHint(load);
        switch (type) {
            case LinkHint.StaticText: {
                const string = code.assumeText(load);
                const path = code.resolveModulePath(load, string);
                const blueString = code.createBlueString(path);
                code.pushRed(load, code.createRedValue(load, 'test', blueString));
                code.attachBlue(load, 'test', blueString);
                code.addTask(load.base, () => {
                    code.handle_codeCard(load.base, path);
                });
                break;
            }
            case LinkHint.DynamicText: {
                const textNode = code.assumeLink(load, Link.Text);
                code.pushRed(load, code.createRedValue(load, 'test', textNode));
                code.attachBlue(load, 'test', code.createBlueText(load, textNode));
                code.bindText(load, () => {
                    const string = code.assumeText(load);
                    const path = code.resolveModulePath(load, string);
                    code.attachBlue(load, 'test', code.createBlueString(path));
                });
            }
            default:
                code.throwError(code.generateUnhandledNestCaseError(load, type));
        }
    }
    else {
        throw new Error('Too many loads.');
    }
}
//# sourceMappingURL=index.js.map