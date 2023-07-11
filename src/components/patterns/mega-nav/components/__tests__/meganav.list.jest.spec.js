import { config, shallowMount } from '@vue/test-utils';
import VsMegaNavList from '../MegaNavList.vue';

config.global.renderStubDefaultSlot = true;

const listHeadingProp = 'Tours, Routes & Trails';

const factoryShallowMount = (propsData) => shallowMount(VsMegaNavList, {
    propsData: {
        ...propsData,
    },
    slots: {
        'nav-list-items': '<li class="top-menu-item-list">List Item</li>',
        'nav-heading-cta-link': '<li class="top-menu-item-cta">CTA Link</li>',
    },
});

describe('VsMegaNavList', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-list`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-mega-nav-list');
    });

    describe(':props', () => {
        it('does not display a heading if no `listHeading` is provided', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-mega-nav-list"]').find('.vs-mega-nav-list__heading').exists()).toBe(false);
        });

        it('displays a heading if a `listHeading` is provided', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                listHeading: listHeadingProp,
            });
            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-list"]').find('.vs-mega-nav-list__heading').text()).toBe(listHeadingProp);
        });

        it('transforms the `listHeading` to a correct id', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                listHeading: listHeadingProp,
            });
            await wrapper.vm.$nextTick();

            const heading = wrapper.find('[data-test="vs-mega-nav-list"]').find('.vs-mega-nav-list__heading');
            expect(heading.attributes('id')).toBe('vsMeganavToursRoutesTrails');
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a nav-list-items slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-mega-nav-list"]').find('.top-menu-item-list').text()).toBe('List Item');
        });

        it('renders content inserted in a nav-heading-cta-link slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-mega-nav-list"]').find('.top-menu-item-cta').text()).toBe('CTA Link');
        });
    });
});
