import { config, shallowMount } from '@vue/test-utils';
import VsToggleButton from '../ToggleButton.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context');

const toggleIdValue = 'toggle-id';
const defaultSlotText = 'Click here to toggle caption';

const factoryLegacy = (propsData) => shallowMount(VsToggleButton, {
    propsData: {
        toggleId: toggleIdValue,
        ...propsData,
    },
    slots: {
        default: defaultSlotText,
    },
});

const factoryNew = (propsData) => shallowMount(VsToggleButton, {
    propsData: {
        icon: 'fa-heart',
        ...propsData,
    },
});

describe('VsToggleButton', () => {
    /* -----------------------------
    LEGACY IMPLEMENTATION
    ------------------------------ */

    describe('(legacy)', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = factoryLegacy();
        });

        it('should render a component with the data-test attribute `vs-toggle-btn`', () => {
            const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');
            expect(toggleCaptionBtn.attributes('data-test')).toBe('vs-toggle-btn');
        });

        describe(':props', () => {
            it('should set correct ID for aria controls with `toggleId` prop', () => {
                const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

                expect(toggleCaptionBtn.attributes('aria-controls')).toBe(toggleIdValue);
            });
        });

        describe(':slots', () => {
            it('renders info icon in the `toggle-icon` slot', () => {
                expect(wrapper.find('[data-test="vs-toggle-btn"]').attributes('aria-expanded')).toContain('false');
                expect(wrapper.find('vs-icon-stub').attributes('icon')).toContain('circle-info');
            });

            it('renders content in the `default` slot', () => {
                expect(wrapper.html()).toContain(defaultSlotText);
            });
        });

        describe(':methods', () => {
            it('emits `toggleAction` when clicked', async() => {
                const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

                await toggleCaptionBtn.trigger('click');

                expect(wrapper.emitted().toggleAction).toBeTruthy();
            });

            it('updates icon and aria-expanded when toggled', async() => {
                const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

                await toggleCaptionBtn.trigger('click');

                expect(toggleCaptionBtn.attributes('aria-expanded')).toContain('true');
                expect(wrapper.find('vs-icon-stub').attributes('icon')).toContain('circle-xmark');
            });
        });
    });

    /* -----------------------------
    NEW IMPLEMENTATION
    ------------------------------ */

    describe('(new implementation)', () => {
        describe('rendering', () => {
            it('renders a bootstrap button', () => {
                const wrapper = factoryNew();

                expect(wrapper.find('b-button-stub').exists()).toBe(true);
            });

            it('renders the provided icon', () => {
                const wrapper = factoryNew({
                    icon: 'fa-heart',
                });

                expect(wrapper.find('vs-icon-stub').attributes('icon')).toBe('fa-heart');
            });
        });

        describe(':props', () => {
            it('applies the correct button variant', () => {
                const wrapper = factoryNew({
                    variant: 'overlay',
                });

                expect(wrapper.find('b-button-stub').attributes('variant')).toBe('overlay');
            });

            it('renders accessible label when provided', () => {
                const wrapper = factoryNew({
                    label: 'Like item',
                });

                expect(wrapper.find('.visually-hidden').text()).toBe('Like item');
            });
        });

        describe('toggle behaviour', () => {
            it('switches icon when pressed', async() => {
                const wrapper = factoryNew({
                    icon: 'fa-heart',
                    pressedIcon: 'fa-heart-solid',
                });

                await wrapper.find('b-button-stub').trigger('click');

                expect(wrapper.find('vs-icon-stub').attributes('icon')).toBe('fa-heart-solid');
            });

            it('emits click event', async() => {
                const wrapper = factoryNew();

                await wrapper.find('b-button-stub').trigger('click');

                expect(wrapper.emitted().click).toHaveLength(1);
            });
        });

        describe('controlled mode', () => {
            it('uses modelValue when provided', async() => {
                const wrapper = factoryNew({
                    icon: 'fa-heart',
                    pressedIcon: 'fa-heart-solid',
                    modelValue: true,
                });

                expect(wrapper.find('vs-icon-stub').attributes('icon')).toBe('fa-heart-solid');
            });

            it('emits update:modelValue when clicked', async() => {
                const wrapper = factoryNew({
                    icon: 'fa-heart',
                    pressedIcon: 'fa-heart-solid',
                    modelValue: false,
                });

                await wrapper.find('b-button-stub').trigger('click');

                expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
            });
        });

        describe(':accessibility', () => {
            it('sets aria-label to the label prop', () => {
                const wrapper = factoryNew({
                    label: 'Like item',
                });

                expect(wrapper.find('b-button-stub').attributes('aria-label')).toBe('Like item');
            });

            it('sets aria-label to pressedLabel when pressed', async() => {
                const wrapper = factoryNew({
                    icon: 'fa-heart',
                    pressedIcon: 'fa-heart-solid',
                    label: 'Like item',
                    pressedLabel: 'Unlike item',
                });

                await wrapper.find('b-button-stub').trigger('click');

                expect(wrapper.find('b-button-stub').attributes('aria-label')).toBe('Unlike item');
            });
        });
    });
});
