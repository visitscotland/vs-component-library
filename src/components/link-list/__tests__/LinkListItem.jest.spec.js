import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsLinkListItem from '../components/LinkListItem.vue';

const slotContent = 'Link text';

config.global.renderStubDefaultSlot = true;

jest.mock('@/stores/video.store.ts');

const factoryShallowMount = () => shallowMount(VsLinkListItem, {
    slots: {
        default: slotContent,
    },
});

describe('VsLinkListItem', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    describe(':slots', () => {
        it(':default - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotContent);
        });
    });

    describe(':props', () => {
        it('should render `videoDescriptor` if set and a videoId is present', async() => {
            const videoDescriptor = 'Video';

            const wrapper = shallowMount(VsLinkListItem, {
                propsData: {
                    videoId: '123456',
                    videoDescriptor,
                    type: 'video',
                    href: '#',
                },
            });

            await expect(wrapper.html()).toContain(videoDescriptor);
        });

        it('should render a properly formated duration if videoId is present', async() => {
            const videoDescriptor = 'Video';

            const wrapper = shallowMount(VsLinkListItem, {
                propsData: {
                    videoId: '123456',
                    videoDescriptor,
                    type: 'video',
                    href: '#',
                },
            });

            await expect(wrapper.html()).toContain('0:59');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
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
