import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledList from '../StyledList.vue';

const defaultSlotText = 'Styled list default';
const sourceSlotText = 'Styled list source';

const factoryMount = (propsData) => mount(VsStyledList, {
    props: {
        ...propsData,
    },
    slots: {
        default: `<li>${defaultSlotText}</li>`,
        'list-source': sourceSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsStyledList', () => {
    it('should render a component with the data-test attribute `vs-styled-list`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-styled-list');
    });

    describe(':props', () => {
        it(':variant - should render with class `vs-styled-list--icon` when prop not set', () => {
            expect(wrapper.find('.vs-styled-list--icon').exists()).toBe(true);
        });

        it(':variant - should render with class `vs-styled-list--icon` when `icon`', () => {
            wrapper = factoryMount({
                variant: 'icon',
            });

            expect(wrapper.find('.vs-styled-list--icon').exists()).toBe(true);
        });

        it(':variant - should render with class `vs-styled-list--image` when `image`', () => {
            wrapper = factoryMount({
                variant: 'image',
            });

            expect(wrapper.find('.vs-styled-list--image').exists()).toBe(true);
        });

        it(':variant - should render with class `vs-styled-list--numbered` when `numbered`', () => {
            wrapper = factoryMount({
                variant: 'numbered',
            });

            expect(wrapper.find('.vs-styled-list--numbered').exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });

        it('renders content inserted in a list-source slot', async() => {
            expect(wrapper.text()).toContain(sourceSlotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
