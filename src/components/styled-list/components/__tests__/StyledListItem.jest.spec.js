import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledListItem from '../StyledListItem.vue';

const defaultSlotText = 'Styled list item default';
const headingProp = 'Styled list item heading';
const imageSrcProp = 'fixtures/styled-list/investment.svg';

const factoryMount = (propsData) => mount(VsStyledListItem, {
    props: {
        ...propsData,
        heading: headingProp,
    },
    slots: {
        default: defaultSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsStyledListItem', () => {
    it('should render a component with the data-test attribute `vs-styled-list__item`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-styled-list__item');
    });

    describe(':props', () => {
        it(':heading - should render with H3 element containing the title value', () => {
            expect(wrapper.text()).toContain(headingProp);
        });

        it(':imageSrc - renders an image with the source set by the prop value', () => {
            wrapper = factoryMount({
                imageSrc: imageSrcProp,
                variant: 'image',
            });

            const image = wrapper.find('img');

            expect(image.exists()).toBe(true);
            expect(image.attributes('src')).toBe(imageSrcProp);
        });

        it(':variant - renders an image within a col-md-2 element when set to `image`', () => {
            wrapper = factoryMount({
                imageSrc: imageSrcProp,
                variant: 'image',
            });

            const column = wrapper.find('.col-md-2');

            expect(column.exists()).toBe(true);
            expect(column.find('img').exists()).toBe(true);
        });

        it(':variant - renders col-md-2 element and col-md-10 element when set to `image`', () => {
            wrapper = factoryMount({
                imageSrc: imageSrcProp,
                variant: 'image',
            });

            expect(wrapper.find('.col-md-2').exists()).toBe(true);
            expect(wrapper.find('.col-md-10').exists()).toBe(true);
        });

        it(':variant - renders an image within a col-md-12 element when set to `image-horizontal`', () => {
            wrapper = factoryMount({
                imageSrc: imageSrcProp,
                variant: 'image-horizontal',
            });

            const column = wrapper.find('.col-md-12');

            expect(column.exists()).toBe(true);
            expect(column.find('img').exists()).toBe(true);
        });

        it(':headingLevel - changes the heading to the corresponsing level', () => {
            wrapper = factoryMount({
                headingLevel: 4,
            });

            const h4 = wrapper.find('h4');

            expect(h4.exists()).toBe(true);
        });

        it(':headingLevel - checks the default headingLevel renders by default', () => {
            wrapper = factoryMount();

            const h3 = wrapper.find('h3');

            expect(h3.exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
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
