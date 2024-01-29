import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSiteSearch from '../SiteSearch.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions() {
    return {
        propsData: {
            isShowing: false,
        },
        slots: {
            default: 'Search',
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsSiteSearch,
    mountOptions(),
);

const factoryMount = () => mount(
    VsSiteSearch,
    mountOptions(),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsSiteSearch', () => {
    it('should render a component with the data-test attribute `vs-site-search`', () => {
        expect(wrapper.find('[data-test=vs-site-search]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should display a button `primary` variant by default', () => {
            expect(wrapper.attributes().variant).toBe('primary');
        });

        it('should display a button `light` variant when `isShowing` is true', async() => {
            await wrapper.setProps({
                isShowing: true,
            });
            expect(wrapper.attributes().variant).toBe('light');
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a default slot', () => {
            expect(wrapper.text()).toContain('Search');
        });
    });

    describe(':methods', () => {
        it('emits `toggleAction` event when clicked', async() => {
            wrapper.trigger('click');
            await wrapper.vm.$nextTick();

            expect(wrapper.emitted().toggleAction).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
