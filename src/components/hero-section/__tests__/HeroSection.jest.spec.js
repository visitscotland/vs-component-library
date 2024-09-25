import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsHeroSection from '../HeroSection.vue';

const factoryShallowMount = (propsData) => shallowMount(VsHeroSection, {
    propsData: {
        ...propsData,
    },
});

// - should contain a single h1
// - should not contain any other headings
// - should contain exactly 1 <p> tag
// - image should have alt text via aria-label (?)

describe('VsHeroSection', () => {
    it('should render an h1', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('h1').toBe(true));
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
