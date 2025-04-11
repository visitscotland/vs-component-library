import { shallowMount } from '@vue/test-utils';
// import axe from '@/../test/unit/helpers/axe-helper';
import VsCard from '../Card.vue';

const defaultSlot = 'Default Slot';

const factoryShallowMount = () => shallowMount(VsCard, {
    slots: {
        default: defaultSlot,
    },
});

describe('VsCard', () => {
    it('should render a card component', () => {
        const wrapper = factoryShallowMount();
        const card = wrapper.find('div[data-test=vs-card]');

        expect(card.exists()).toBe(true);
    });
});
