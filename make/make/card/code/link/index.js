import card from '../../../../make/card.js';
import tool from '../../../../make/tool.js';
export function load_codeCard_link(load, property = 'loads') {
    const red = card.pushRed(load, card.createRedGather(load, property));
    const blue = card.pushBlue(load, property, {
        type: Mesh.Input,
    });
    const colorInput = card.withColors(load, { blue, red });
    card.assumeNest(colorInput).forEach((nest, index) => {
        tool.loadTask(load.base, () => {
            card.load_codeCard_link_nestedChildren(card.withLink(colorInput, nest, index));
        });
    });
}
export function load_codeCard_link_base(load) { }
export function load_codeCard_link_nestedChildren(load) {
    const type = card.getLinkHint(load);
    switch (type) {
        case LinkHint.StaticTerm: {
            const index = card.loadLinkIndex(load);
            if (index === 0) {
                const string = card.assumeTermString(load);
                const term = card.createBlueString(string);
                card.pushRed(load, card.createRedValue(load, 'name', term));
                card.attachBlue(load, 'name', term);
                return;
            }
            const term = card.assumeTermString(load);
            switch (term) {
                case 'like':
                    card.load_codeCard_like(load);
                    break;
                case 'list':
                    card.load_codeCard_like_list(load);
                    break;
                case 'mesh':
                    card.load_codeCard_like_mesh(load);
                    break;
                case 'time':
                    card.load_codeCard_time(load);
                    break;
                case 'hide':
                    card.load_codeCard_hide(load);
                    break;
                case 'link':
                    card.load_codeCard_link(load);
                    break;
                case 'void':
                    card.load_codeCard_void(load);
                    break;
                case 'take':
                    card.load_codeCard_link_take(load);
                    break;
                case 'base':
                    card.load_codeCard_link_base(load);
                    break;
                case 'note':
                    card.load_codeCard_note(load);
                    break;
                default:
                    card.throwError(card.generateUnhandledTermCaseError(load));
            }
            break;
        }
        default:
            card.throwError(card.generateUnhandledNestCaseError(load, type));
    }
}
//# sourceMappingURL=index.js.map