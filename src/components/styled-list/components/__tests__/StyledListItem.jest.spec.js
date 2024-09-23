import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsStyledListItem from '../StyledListItem.vue';

const defaultSlotText = 'Styled list item default';
const itemHeadingSlotText = 'Styled list item heading';
const imageSrcProp = 'fixtures/styled-list/investment.svg';

const factoryMount = (propsData) => mount(VsStyledListItem, {
    props: {
        ...propsData,
    },
    slots: {
        default: defaultSlotText,
        'item-heading': itemHeadingSlotText,
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
        it(':imageSrc - renders an image with the source set by the prop value', () => {
            wrapper = factoryMount({
                imageSrc: imageSrcProp,
            });

            const image = wrapper.find('img');

            expect(image.exists()).toBe(true);
            expect(image.attributes('src')).toBe(imageSrcProp);
            expect(wrapper.find('.col-md-10').exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });

        it('renders content inserted in a item heading slot', () => {
            expect(wrapper.text()).toContain(itemHeadingSlotText);
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
