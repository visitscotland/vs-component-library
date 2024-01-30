import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSocialCreditLink from '../SocialCreditLink.vue';

const initialPropsData = {
    credit: 'Test credit',
    socialPostUrl: '#',
    source: 'instagram',
};

const factoryShallowMount = (propsData) => shallowMount(VsSocialCreditLink, {
    propsData: {
        ...propsData,
        ...initialPropsData,
    },
});

const factoryMount = (propsData) => mount(VsSocialCreditLink, {
    propsData: {
        ...propsData,
        ...initialPropsData,
    },
});

describe('VsSocialCreditLink', () => {
    it('should render a component with the data-test attribute `vs-social-credit-link`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-social-credit-link');
    });

    describe(':props', () => {
        it('accepts and renders a `credit` prop', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain('Test credit');
        });

        it('accepts `socialPostUrl` prop and passes it to a VsLink', () => {
            const wrapper = factoryMount();

            const link = wrapper.findComponent({
                name: 'VsLink',
            });

            expect(link.props().href).toBe('#');
        });

        it('renders an icon if the `source` prop is defined', () => {
            const wrapper = factoryShallowMount();
            const icon = wrapper.find('[data-test="vs-social-credit-link__icon"');

            expect(icon.exists()).toBe(true);
        });

        it('passes the `source` prop to the icon', () => {
            const wrapper = factoryMount();

            const icon = wrapper.findComponent({
                name: 'VsIcon',
            });

            expect(icon.props().name).toBe('instagram');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
