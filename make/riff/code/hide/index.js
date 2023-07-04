import { Link, LinkHint, code } from '../../../index.js';
export function process_codeCard_hide(input) {
    code.assumeLink(input, Link.Tree).nest.forEach((nest, index) => {
        process_codeCard_hide_nestedChildren(code.withLink(input, nest, index));
    });
}
export function process_codeCard_hide_nestedChildren(input) {
    const type = code.getLinkHint(input);
    switch (type) {
        case LinkHint.StaticTerm:
            break;
        default:
            code.throwError(code.generateUnhandledNestCaseError(input, type));
    }
}
//# sourceMappingURL=index.js.map