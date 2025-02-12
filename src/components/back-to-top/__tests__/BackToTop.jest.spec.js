import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsBackToTop from '../BackToTop.vue';

const buttonText = 'Back to top';

const factoryMount = (propsData) => mount(VsBackToTop, {
    propsData: {
        'button-text': buttonText,
        ...propsData,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsBackToTop', () => {
    it('should render a component with the data-test attribute `vs-back-to-top`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-back-to-top');
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
