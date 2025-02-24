import { config, shallowMount } from '@vue/test-utils';
import VsToggleButton from '../ToggleButton.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context');

const toggleIdValue = 'toggle-id';
const defaultSlotText = 'Click here to toggle caption';

const factoryShallowMount = (propsData) => shallowMount(VsToggleButton, {
    propsData: {
        toggleId: toggleIdValue,
        ...propsData,
    },
    slots: {
        default: defaultSlotText,
    },
});

describe('VsToggleButton', () => {
    it('should render a component with the data-test attribute `vs-toggle-btn`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-toggle-btn');
    });

    describe(':props', () => {
        it('should set correct ID for aria controls with `toggleId` prop', () => {
            const wrapper = factoryShallowMount();
            const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

            expect(toggleCaptionBtn.attributes('aria-controls')).toBe(toggleIdValue);
        });
    });

    describe(':slots', () => {
        it('renders info icon in the `toggle-icon` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.find('[data-test="vs-toggle-btn"]').attributes('aria-expanded')).toContain('false');
            expect(wrapper.find('vs-icon-stub').attributes('icon')).toContain('circle-info');
        });

        it('renders content in the `default` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.html()).toContain(defaultSlotText);
        });
    });

    describe(':methods', () => {
        it('emits `toggleImage` when clicked', async() => {
            const wrapper = factoryShallowMount();
            const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

            toggleCaptionBtn.trigger('click');
            await wrapper.vm.$nextTick();

            expect(wrapper.emitted().toggleAction).toBeTruthy();
        });

        it(':toggleCaption - icon is updated when the caption is toggled on', async() => {
            const wrapper = factoryShallowMount();
            const toggleCaptionBtn = wrapper.find('[data-test="vs-toggle-btn"]');

            toggleCaptionBtn.trigger('click');
            await wrapper.vm.$nextTick();

            expect(toggleCaptionBtn.attributes('aria-expanded')).toContain('true');
            expect(wrapper.find('vs-icon-stub').attributes('icon')).toContain('circle-xmark');
        });
    });
});
