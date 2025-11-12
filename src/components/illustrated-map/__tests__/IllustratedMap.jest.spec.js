import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIllustratedMap from '../IllustratedMap.vue';

const factoryShallowMount = (propsData) => shallowMount(VsIllustratedMap, {
    propsData: {
        ...propsData,
    },
});

describe('VsIllustratedMap', () => {
    it('should render an svg element with the correct class', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('svg');
        expect(wrapper.classes('vs-illustrated-map')).toBe(true);
    });

    it('should render all region paths', () => {
        const wrapper = factoryShallowMount();
        const paths = wrapper.findAll('path');

        expect(paths).toHaveLength(16);
    });

    describe(':props', () => {
        it('should highlight specified regions', () => {
            const wrapper = factoryShallowMount({
                highlightedRegions: ['edinburgh', 'glasgow'],
            });

            const edinburghPath = wrapper.find('#region-edinburgh');
            const glasgowPath = wrapper.find('#region-glasgow');
            const fifePath = wrapper.find('#region-fife');

            expect(edinburghPath.classes('is-highlighted')).toBe(true);
            expect(glasgowPath.classes('is-highlighted')).toBe(true);
            expect(fifePath.classes('is-highlighted')).toBe(false);
        });

        it('should not highlight any regions when highlightedRegions is empty', () => {
            const wrapper = factoryShallowMount({
                highlightedRegions: [],
            });

            const paths = wrapper.findAll('path');
            paths.forEach((path) => {
                expect(path.classes('is-highlighted')).toBe(false);
            });
        });

        it('should render default aria-label', () => {
            const wrapper = factoryShallowMount();
            const svg = wrapper.find('svg');

            expect(svg.attributes('aria-label')).toBe('Illustrated map of Scotland showing regions');
        });

        it('should render custom aria-label', () => {
            const wrapper = factoryShallowMount({
                ariaLabel: 'Custom map description',
            });
            const svg = wrapper.find('svg');

            expect(svg.attributes('aria-label')).toBe('Custom map description');
        });

        it('should render default title', () => {
            const wrapper = factoryShallowMount();
            const title = wrapper.find('title');

            expect(title.text()).toBe('Map of Scotland');
        });

        it('should render custom title', () => {
            const wrapper = factoryShallowMount({
                title: 'Custom Map Title',
            });
            const title = wrapper.find('title');

            expect(title.text()).toBe('Custom Map Title');
        });

        it('should not render width attribute when not provided', () => {
            const wrapper = factoryShallowMount();
            const svg = wrapper.find('svg');

            expect(svg.attributes('width')).toBeUndefined();
        });

        it('should render width as string', () => {
            const wrapper = factoryShallowMount({
                width: '300px',
            });
            const svg = wrapper.find('svg');

            expect(svg.attributes('width')).toBe('300px');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
