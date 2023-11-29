import { config, shallowMount } from '@vue/test-utils';
import VsLinkList from '../LinkList.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'Link text';

const factoryShallowMount = () => shallowMount(VsLinkList, {
    slots: {
        default: slotContent,
    },
});

describe('VsLinkList', () => {
    describe(':slots', () => {
        it(':default - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotContent);
        });
    });
});
