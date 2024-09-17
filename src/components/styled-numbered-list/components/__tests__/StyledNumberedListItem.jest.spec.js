import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledNumberedListItem from '../StyledNumberedListItem.vue';

const defaultSlotText = 'Styled numbered list item default';
const itemHeadingSlotText = 'Styled numbered list item heading';

const factoryMount = () => mount(VsStyledNumberedListItem, {
    slots: {
        default: defaultSlotText,
        'item-heading': itemHeadingSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsStyledNumberedListItem', () => {
    it('should render a component with the data-test attribute `vs-styled-numbered-list__item`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-styled-numbered-list__item');
    });

    describe(':slots', () => {
        it('renders content inserted in a default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });

        it('renders content inserted in a item heading slot', () => {
            expect(wrapper.text()).toContain(itemHeadingSlotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const html = wrapper.html();

            const results = await axe(html, {
                rules: {
                    // must have a parent with ul/ol element
                    listitem: {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });
});
