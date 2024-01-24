import { mount, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIconListItem from '../IconListItem.vue';

const factoryShallowMount = (propsData) => shallowMount(VsIconListItem, {
    propsData: {
        ...propsData,
        icon: 'facility-wifi',
        label: 'wifi',
    },
});

const factoryMount = (propsData) => mount(VsIconListItem, {
    propsData: {
        ...propsData,
        icon: 'facility-wifi',
        label: 'wifi',
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsIconListItem', () => {
    it('should render a component with the data-test attribute `vs-icon-list__item`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-icon-list__item');
    });

    it('should contain a `vs-icon` component', () => {
        const vsLink = wrapper.find('vs-icon-stub');
        expect(vsLink.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept and render a `label` property', async() => {
            expect(wrapper.text()).toContain('wifi');
        });

        it('should accept an `icon` property and pass it to the icon', async() => {
            const vsLink = wrapper.find('vs-icon-stub');
            expect(vsLink.attributes('name')).toBe('facility-wifi');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            const html = modifiedWrapper.html();

            const results = await axe(html, {
                rules: {
                    // must have a parent wil ul/ol element
                    listitem: {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });
});
