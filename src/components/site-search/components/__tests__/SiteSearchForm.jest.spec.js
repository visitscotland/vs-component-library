import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSiteSearchForm from '../SiteSearchForm.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            labelText: 'What are you looking for?',
            submitButtonText: 'Search',
            clearButtonText: 'Clear form',
            closeButtonText: 'Close search form',
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsSiteSearchForm,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsSiteSearchForm,
    mountOptions(propsData),
);

describe('VsSiteSearchForm', () => {
    it('should render a component with the data-test attribute `vs-site-search-form`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test=vs-site-search-form]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should display `labelText` within the input', () => {
            const wrapper = factoryShallowMount();
            const label = wrapper.find('.vs-site-search-form__label');
            expect(label.text()).toContain('What are you looking for?');
        });

        it('should display `submitButtonText` within the submit button', () => {
            const wrapper = factoryShallowMount();
            const searchBtn = wrapper.find('.vs-site-search-form__search-button');
            expect(searchBtn.text()).toContain('Search');
        });

        it('should display `clearButtonText` within the submit button', () => {
            const wrapper = factoryShallowMount();
            const input = wrapper.find('vs-input-stub');
            expect(input.attributes('clearbuttontext')).toBe('Clear form');
        });

        it('should display `closeButtonText` within the submit button', () => {
            const wrapper = factoryShallowMount();
            const closeBtn = wrapper.find('.vs-site-search-form__close-button');
            expect(closeBtn.text()).toContain('Close search form');
        });
    });

    describe(':methods', () => {
        it('emits `toggleAction` event when close button clicked', async() => {
            const wrapper = factoryShallowMount();
            const closeBtn = wrapper.find('.vs-site-search-form__close-button');
            closeBtn.trigger('click');
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
