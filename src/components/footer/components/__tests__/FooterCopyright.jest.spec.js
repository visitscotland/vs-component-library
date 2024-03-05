import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFooterCopyright from '../FooterCopyright.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context');

const slotContent = 'Some copyright info';

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            href: 'https://google.com',
            linkAltText: 'A link to google',
        },
        slots: {
            copyright: slotContent,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsFooterCopyright,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsFooterCopyright,
    mountOptions(propsData),
);

describe('VsFooterCopyright', () => {
    it('should render a component with the data-test attribute `vs-footer-copyright`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-footer-copyright');
    });

    describe(':props', () => {
        it('should pass the `href` property to the logo', async() => {
            const wrapper = factoryMount();
            const vsLink = wrapper.find('[data-test="vs-footer-copyright-logo"');

            expect(vsLink.attributes().href).toBe('https://google.com');
        });

        it('should pass the `link-alt-text` property to the logo', async() => {
            const wrapper = factoryMount();
            const vsLink = wrapper.find('[data-test="link-alt-text"');

            expect(vsLink.text()).toContain('A link to google');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the `copyright` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
