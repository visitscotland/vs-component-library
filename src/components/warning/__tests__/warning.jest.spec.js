import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import VsWarning from '../Warning.vue';

const defaultSlotText = 'There is no javascript';

const factoryMount = (propsData, slots) => mount(VsWarning, {
    props: {
        ...propsData,
    },
    slots: {
        default: defaultSlotText,
        ...slots,
    },
});

describe('VsWarning', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a component with the data-test attribute `vs-warning`', () => {
        const wrapper = factoryMount();

        expect(wrapper.attributes('data-test')).toBe('vs-warning');
    });

    describe(':props', () => {
        it(':icon - should render an warning` icon by default', () => {
            const wrapper = factoryMount();
            const icon = wrapper.find('.vs-icon');

            expect(icon.classes()).toContain('fa-triangle-exclamation');
        });

        it(':icon - should render an icon with the same name as the `icon` prop', () => {
            const wrapper = factoryMount({
                icon: 'vs-icon-feedback-information',
            });
            const icon = wrapper.find('.vs-icon');

            expect(icon.classes()).toContain('fa-circle-info');
        });

        it(':size - should render a class matching the `size` prop', () => {
            const wrapper = factoryMount({
                size: 'small',
            });

            expect(wrapper.classes()).toContain('vs-warning--small');
        });

        it(':type - should show a cookie manangement button if `type` is `cookie` and the slot is populated', () => {
            const wrapper = factoryMount(
                {
                    type: 'cookie',
                },
                {
                    'button-text': 'Manage cookies',
                },
            );

            const cookieBtn = wrapper.find('.vs-button');

            expect(cookieBtn.classes('vs-warning__cookie-trigger')).toBe(true);
        });
    });

    describe(':slots', () => {
        it('should display the content of the default slot', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(defaultSlotText);
        });

        it('should display the content of the `button-text` slot', () => {
            const btnText = 'Manage cookies';
            const wrapper = factoryMount(
                {
                },
                {
                    'button-text': btnText,
                },
            );

            expect(wrapper.text()).toContain(btnText);
        });
    });
});
