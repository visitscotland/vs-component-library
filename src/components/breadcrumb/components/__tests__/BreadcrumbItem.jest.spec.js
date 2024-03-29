import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { BBreadcrumbItem } from 'bootstrap-vue-next';
import VsBreadcrumbItem from '../BreadcrumbItem.vue';

const factoryMount = (propsData) => mount(VsBreadcrumbItem, {
    propsData: {
        text: 'Some Text',
        ...propsData,
    },
});

describe('VsBreadcrumbItem', () => {
    it('should render a b-breadcrumb-item', () => {
        const wrapper = factoryMount();

        const breadcrumbItem = wrapper.findComponent(BBreadcrumbItem);
        expect(breadcrumbItem.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':active - `active` prop should be `false` by default', () => {
            const wrapper = factoryMount();

            expect(wrapper.classes()).not.toContain('active');
        });

        it(':active - should accept and render an `active` property', () => {
            const wrapper = factoryMount({
                active: true,
            });

            expect(wrapper.classes()).toContain('active');
        });

        it(':text - should accept and render a `text` property', () => {
            const wrapper = factoryMount({
                text: 'Things to See and Do',
            });

            expect(wrapper.text()).toBe('Things to See and Do');
        });

        it(':href - should accept and render an `href` property', () => {
            const wrapper = factoryMount({
                href: 'https://www.visitscotland.com/see-do/itineraries/',
            });
            const link = wrapper.find('a');

            expect(link.attributes('href')).toBe('https://www.visitscotland.com/see-do/itineraries/');
        });

        it(':aria-current - `aria-current` prop should be `page` by default', () => {
            const wrapper = factoryMount({
                active: true,
            });
            const span = wrapper.find('span');

            expect(span.attributes('aria-current')).toBe('page');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            const html = wrapper.html();

            const results = await axe(html, {
                rules: {
                    // must have a parent with ul/ol element
                    listitem: {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });
});
