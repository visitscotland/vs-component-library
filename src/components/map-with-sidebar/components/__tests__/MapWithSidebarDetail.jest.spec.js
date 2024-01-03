import { shallowMount, config } from '@vue/test-utils';
import VsMapWithSidebarDetail from '../MapWithSidebarDetail.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMapWithSidebarDetail, {
    propsData: {
        contentData: {
            properties: {
                category: {
                    id: 'cities',
                    label: 'Cities',
                },
                title: 'Aberdeen',
                id: 'aberdeen',
                description: 'Aberdeen description',
                image: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
                link: 'https://www.visitscotland.com/',
                address: {
                    shortAddress: 'New Town, Edinburgh',
                },
            },
        },
    },
});

describe('VsMapWithSidebarCategory', () => {
    it('should render an element with the `vs-map-with-sidebar-detail` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-map-with-sidebar-detail');
    });

    describe(':props', () => {
        it('should render a title with the value defined in the `ContentData` prop', () => {
            const wrapper = factoryShallowMount();
            const title = wrapper.find('[data-test="vs-map-with-sidebar-detail__heading"]');

            expect(title.text()).toBe('Aberdeen');
        });

        it('should render an image with the src attribute defined in the `ContentData` prop', () => {
            const wrapper = factoryShallowMount();
            const img = wrapper.find('vs-img-stub');

            expect(img.attributes('src')).toBe('https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm');
        });

        it('should render a description with the value defined in the `ContentData` prop', () => {
            const wrapper = factoryShallowMount();
            const description = wrapper.find('[data-test="vs-map-with-sidebar-detail__description"]');

            expect(description.text()).toBe('Aberdeen description');
        });
    });
});
