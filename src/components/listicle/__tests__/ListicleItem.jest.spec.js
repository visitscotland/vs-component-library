import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsListicleItem from '../ListicleItem.vue';

config.global.renderStubDefaultSlot = true;

const hippoDetailsSlot = 'Hippo details slot';
const imageSlot = 'Image slot';
const descriptionSlot = 'Description slot';
const facilitiesSlot = 'Facilities slot';

const factoryShallowMount = (propsData) => shallowMount(VsListicleItem, {
    propsData: {
        ...propsData,
    },
    slots: {
        'hippo-details': hippoDetailsSlot,
        'image-slot': imageSlot,
        'description-slot': descriptionSlot,
        'facilities-slot': facilitiesSlot,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsListicleItem', () => {
    it('should render a component with the data-test attribute `vs-listicle-item`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-listicle-item');
    });

    describe(':slots', () => {
        it('renders content inserted into the `hippo-details` slot', () => {
            expect(wrapper.text()).toContain(hippoDetailsSlot);
        });

        it('renders content inserted into the `image-slot` slot', () => {
            expect(wrapper.text()).toContain(imageSlot);
        });

        it('renders content inserted into the `description-slot` slot', () => {
            expect(wrapper.text()).toContain(descriptionSlot);
        });

        it('renders content inserted into the `facilities-slot` slot', () => {
            expect(wrapper.text()).toContain(facilitiesSlot);
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
