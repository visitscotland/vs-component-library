import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
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

        it('applies correct classes when style is overlay', () => {
            const wrapper = factoryShallowMount({
                cardStyle: 'overlay',
            });
            expect(wrapper.classes()).toContain('vs-card--overlay');
        });

        it('applies horizontal class when horizontal prop is true', () => {
            const wrapper = factoryShallowMount({
                horizontal: true,
            });
            expect(wrapper.classes()).toContain('vs-card--horizontal');
        });

        it('applies accent bar class when accentBar prop is true', () => {
            const wrapper = factoryShallowMount({
                accentBar: true,
            });
            expect(wrapper.classes()).toContain('vs-card--accent-bar');
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

        it('renders image slot when provided and card style is overlay', () => {
            const wrapper = mount(VsCard, {
                propsData: {
                    cardStyle: 'overlay',
                },
                slots: {
                    'vs-card-image': '<img src="test.jpg" alt="test" />',
                },
            });

            expect(wrapper.find('.vs-card__image').exists()).toBe(true);
            expect(wrapper.find('.vs-card__image img').exists()).toBe(true);
        });

        it('does not render image slot when card style is not overlay', () => {
            const wrapper = mount(VsCard, {
                propsData: {
                    cardStyle: 'elevated',
                },
                slots: {
                    'vs-card-image': '<img src="test.jpg" alt="test" />',
                },
            });

            expect(wrapper.find('.vs-card__image').exists()).toBe(false);
        });

        it('always renders body slot container', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('.vs-card__body').exists()).toBe(true);
        });

        it('does not render header and footer slots when not provided', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('.vs-card__header').exists()).toBe(false);
            expect(wrapper.find('.vs-card__footer').exists()).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
