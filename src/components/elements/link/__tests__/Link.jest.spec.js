import { shallowMount } from '@vue/test-utils';
import VsLink from '../Link.vue';
import VsIcon from '../../icon/Icon.vue';

const slotContent = 'Link text';

const factoryShallowMount = (propsData) => shallowMount(VsLink, {
    propsData,
    slots: {
        default: slotContent,
    },
});

describe('VsLink', () => {
    it('should render an anchor with class vs-link', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.classes()).toContain('vs-link');
        expect(wrapper.element.tagName).toBe('A');
    });

    describe(':slots', () => {
        it(':default - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toBe(slotContent);
        });
    });

    describe(':props', () => {
        it(':variant - should render the primary variant by default', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.classes()).toContain('vs-link--variant-primary');
        });

        it(':variant - should render the on-dark variant', () => {
            const wrapper = factoryShallowMount({
                variant: 'on-dark',
            });

            expect(wrapper.classes()).toContain('vs-link--variant-on-dark');
            expect(wrapper.classes()).not.toContain('vs-link--variant-primary');
        });

        it(':href - should apply the supplied href', () => {
            const href = 'http://google.com';
            const wrapper = factoryShallowMount({
                href,
            });

            expect(wrapper.attributes('href')).toBe(href);
        });

        it(':type - should not render an special link by default', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.classes()).not.toEqual(
                expect.arrayContaining([/vs-link--/]),
            );
            expect(wrapper.attributes('target')).toBe('_self');
            expect(wrapper.findComponent(VsIcon).exists()).toBe(false);
        });

        it(':type - should render an appropriate link', async() => {
            const wrapper = factoryShallowMount({
                type: 'external',
            });

            expect(wrapper.attributes('target')).toBe('_self');
            expect(wrapper.findComponent(VsIcon).exists()).toBe(true);
        });

        it(':type - should add a download attribute if download type is used', () => {
            const wrapper = factoryShallowMount({
                type: 'download',
            });
            expect(wrapper.attributes('download')).toBe('true');
        });

        it(':type - should not add a download attribute of false if download type is not used', () => {
            const wrapper = factoryShallowMount({
                type: 'internal',
            });
            expect(wrapper.attributes()).not.toContain('download');
        });
    });
});
