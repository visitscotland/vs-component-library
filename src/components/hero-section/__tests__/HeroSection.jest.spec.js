import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';

import VsHeroSection from '../HeroSection.vue';

const factoryShallowMount = (propsData) => shallowMount(VsHeroSection, {
    propsData: {
        ...propsData,
    },
});

// - DONE - should have a data-test attribute
// - should contain a single h1
// - should not contain any other headings
// - should contain exactly 1 <p> tag

describe('VsHeroSection', () => {
    it('should have a data-test attribute', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-hero-section');
    });

    it('should render a single level 1 heading', () => {
        const wrapper = factoryShallowMount();
        const h1 = wrapper.find('h1');
        const headings = wrapper.find('h1,h2');

        expect(h1.exists().toBe(true));

        expect(headings.length.toBe(1));
        expect(headings[0].length.toBe('h1'));
    });

    it('should render a single <p> tag', () => {
        const wrapper = factoryShallowMount();
        const paragraphs = wrapper.findAll('p').at(0);

        expect(paragraphs.length.toBe(1));
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
