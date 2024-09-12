import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsLinkList from '../LinkList.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = '<li>Link list item</li>';
const headingSlotContent = 'In this article:';

const factoryShallowMount = (propsData) => shallowMount(VsLinkList, {
    propsData,
    slots: {
        default: slotContent,
        heading: headingSlotContent,
    },
});

describe('VsLinkList', () => {
    describe(':props', () => {
        it(':toc - data-test attribute should be `link-list` when false', () => {
            const wrapper = factoryShallowMount();
            const dataTest = wrapper.find('[data-test=link-list]');

            expect(dataTest).toBeTruthy();
        });

        it(':toc - data-test attribute should be `link-list--toc` when true', () => {
            const wrapper = factoryShallowMount({
                toc: true,
            });
            const dataTest = wrapper.find('[data-test=link-list--toc]');

            expect(dataTest).toBeTruthy();
        });
    });

    describe(':slots', () => {
        it(':default - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain('Link list item');
        });

        it(':heading - should render the slot content', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(headingSlotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
