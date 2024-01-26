import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsLinkList from '../LinkList.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = '<li>Link list item</li>';

const factoryShallowMount = () => shallowMount(VsLinkList, {
    slots: {
        default: slotContent,
    },
});

describe('VsLinkList', () => {
    describe(':slots', () => {
        it(':default - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain('Link list item');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
