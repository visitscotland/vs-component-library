import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFooterNavListItem from '../FooterNavListItem.vue';

const slotContent = 'Some slot content';

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            href: 'https://google.com',
            type: 'external',
            linkText: 'This is a link',
        },
        slots: {
            default: slotContent,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsFooterNavListItem,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsFooterNavListItem,
    mountOptions(propsData),
);

describe('VsFooterNavListItem', () => {
    it('should render a component with the data-test attribute `vs-footer-nav-list-item`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-footer-nav-list-item');
    });

    describe(':props', () => {
        it('should accept and render a `linkText` property', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain('This is a link');
        });

        it('should pass the `href` property to the child link', () => {
            const wrapper = factoryMount();
            const vsLink = wrapper.find('[data-test="vs-footer-nav-list-item__link"');

            expect(vsLink.attributes().href).toBe('https://google.com');
        });

        it('should pass the `link-alt-text` property to the child link', () => {
            const wrapper = factoryShallowMount();
            const vsLink = wrapper.find('[data-test="vs-footer-nav-list-item__link"');

            expect(vsLink.attributes().type).toBe('external');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            const html = wrapper.html();

            const results = await axe(html, {
                rules: {
                    // must have a parent with an aria-role="menu"
                    'aria-required-parent': {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });
});
