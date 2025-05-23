import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCardGroup from '../CardGroup.vue';

const defaultSlot = '<div class="vs-card">Card content</div>';

const factoryShallowMount = (propsData) => shallowMount(VsCardGroup, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: defaultSlot,
    },
});

describe('VsCardGroup', () => {
    it('should render a card group component', () => {
        const wrapper = factoryShallowMount();
        const cardGroup = wrapper.find('div[data-test=vs-card-group]');

        expect(cardGroup.exists()).toBe(true);
        expect(wrapper.classes()).toContain('vs-card-group');
    });

    describe('props', () => {
        it('should apply is-grid class by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes()).toContain('is-grid');
        });

        it('should apply correct CSS variable for cardsPerRow', () => {
            const wrapper = factoryShallowMount({
                cardsPerRow: 4,
            });
            expect(wrapper.attributes('style')).toContain('--cards-in-row: 4');
        });

        it('should apply default cardsPerRow of 3', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.attributes('style')).toContain('--cards-in-row: 3');
        });

        it('should apply is-scroll-snap class when scrollSnap is true', () => {
            const wrapper = factoryShallowMount({
                scrollSnap: true,
            });
            expect(wrapper.classes()).toContain('is-scroll-snap');
        });

        it('should not apply is-scroll-snap class when scrollSnap is false', () => {
            const wrapper = factoryShallowMount({
                scrollSnap: false,
            });
            expect(wrapper.classes()).not.toContain('is-scroll-snap');
        });

        it('should generate correct cardGroupClasses based on props', () => {
            const wrapper = factoryShallowMount({
                scrollSnap: true,
            });

            expect(wrapper.classes()).toContain('vs-card-group');
            expect(wrapper.classes()).toContain('is-grid');
            expect(wrapper.classes()).toContain('is-scroll-snap');
        });
    });

    describe('slots', () => {
        it('should render default slot content', () => {
            const wrapper = shallowMount(VsCardGroup, {
                slots: {
                    default: '<div class="test-card">Test Card</div>',
                },
            });
            expect(wrapper.find('.test-card').exists()).toBe(true);
            expect(wrapper.find('.test-card').text()).toBe('Test Card');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
