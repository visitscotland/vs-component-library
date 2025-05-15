import { shallowMount, mount } from '@vue/test-utils';
// import axe from '@/../test/unit/helpers/axe-helper';
import designTokens from '@/assets/tokens/tokens.json';
import VsCard from '../Card.vue';

const defaultSlot = 'Default Slot';
const factoryShallowMount = (propsData) => shallowMount(VsCard, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: defaultSlot,
    },
});

describe('VsCard', () => {
    it('should render a card component', () => {
        const wrapper = factoryShallowMount();
        const card = wrapper.find('div[data-test=vs-card]');

        expect(card.exists()).toBe(true);
    });

    describe('props', () => {
        it('applies correct classes when style is elevated', () => {
            const wrapper = factoryShallowMount({
                cardStyle: 'elevated',
            });
            expect(wrapper.classes()).toContain('vs-card--elevated');
        });

        it('applies correct classes when style is outlined', () => {
            const wrapper = factoryShallowMount({
                cardStyle: 'outlined',
            });
            expect(wrapper.classes()).toContain('vs-card--outlined');
        });

        it('applies horizontal class when horizontal prop is true', () => {
            const wrapper = factoryShallowMount({
                horizontal: true,
            });
            expect(wrapper.classes()).toContain('vs-card--horizontal');
        });

        it('applies background color from design token', () => {
            const wrapper = factoryShallowMount({
                fillColor: 'vs-color-background-primary',
            });

            expect(wrapper.attributes('style')).toContain(
                `background-color: ${designTokens['vs-color-background-primary']}`,
            );
        });

        it('applies background color from hex code', () => {
            const wrapper = factoryShallowMount({
                fillColor: '#ff0000',
            });

            expect(wrapper.attributes('style')).toContain('background-color: rgb(255, 0, 0);');
        });

        it('applies centered class to body when content exists', () => {
            const wrapper = mount(VsCard, {
                slots: {
                    'vs-card-body': '<div>Body Content</div>',
                },
            });

            expect(wrapper.find('.vs-card__body').classes()).toContain('vs-card__body--centered');
        });
    });

    describe('slots', () => {
        it('renders header slot when provided', () => {
            const wrapper = mount(VsCard, {
                slots: {
                    'vs-card-header': '<div>Header Content</div>',
                },
            });

            expect(wrapper.find('.vs-card__header').exists()).toBe(true);
            expect(wrapper.find('.vs-card__header').text()).toBe('Header Content');
        });

        it('renders body slot when provided', () => {
            const wrapper = mount(VsCard, {
                slots: {
                    'vs-card-body': '<div>Body Content</div>',
                },
            });
            expect(wrapper.find('.vs-card__body').exists()).toBe(true);
            expect(wrapper.find('.vs-card__body').text()).toBe('Body Content');
        });

        it('renders footer slot when provided', () => {
            const wrapper = mount(VsCard, {
                slots: {
                    'vs-card-footer': '<div>Footer Content</div>',
                },
            });

            expect(wrapper.find('.vs-card__footer').exists()).toBe(true);
            expect(wrapper.find('.vs-card__footer').text()).toBe('Footer Content');
        });

        it('does not render slots when not provided', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('.vs-card__header').exists()).toBe(false);
            expect(wrapper.find('.vs-card__body').exists()).toBe(false);
            expect(wrapper.find('.vs-card__footer').exists()).toBe(false);
        });
    });
});
