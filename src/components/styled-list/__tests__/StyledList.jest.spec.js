import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledList from '../StyledList.vue';

const introSlotText = 'Styled list intro';
const titleProp = 'Styled list title';

const factoryMount = (propsData) => mount(VsStyledList, {
    props: {
        ...propsData,
        title: titleProp,
    },
    slots: {
        intro: introSlotText,
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
        it(':anchorLink - renders h2 heading with id that has anchorLink value ', () => {
            const anchorLinkProp = 'anchor-link';
            wrapper = factoryMount({
                anchorLink: anchorLinkProp,
            });

            expect(wrapper.find(`h2#${anchorLinkProp}`).exists()).toBe(true);
        });

        it(':source - renders paragraph containing source value', () => {
            const sourceProp = 'Source: Scotland Visitor Survey, 2023';
            wrapper = factoryMount({
                source: sourceProp,
            });

            const styleList = wrapper.find('.vs-styled-list__source');

            expect(styleList.text()).toContain(sourceProp);
        });

        it(':title - should render with H2 element containing the title value', () => {
            expect(wrapper.text()).toContain(titleProp);
        });

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
        it('renders content inserted in a intro slot', () => {
            expect(wrapper.text()).toContain(introSlotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
