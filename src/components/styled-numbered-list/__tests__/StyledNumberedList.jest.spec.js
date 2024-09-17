import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledNumberedList from '../StyledNumberedList.vue';

const titleSlotText = 'Styled numbered list title';
const introSlotText = 'Styled numbered list intro';

const factoryMount = () => mount(VsStyledNumberedList, {
    slots: {
        title: titleSlotText,
        intro: introSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsStyledNumberedList', () => {
    it('should render a component with the data-test attribute `vs-styled-numbered-list`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-styled-numbered-list');
    });

    describe(':slots', () => {
        it('renders content inserted in a title slot', () => {
            expect(wrapper.text()).toContain(titleSlotText);
        });

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
