import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSkipTo from '../SkipTo.vue';

config.global.renderStubDefaultSlot = true;

const mainMenuText = 'Main menu';
const mainContentText = 'Main content';
const searchText = 'Search Text';
const footerText = 'Footer Text';

function mountOptions() {
    return {
        props: {
            skipToText: 'Skip to',
        },
        slots: {
            'main-menu-text': mainMenuText,
            'main-content-text': mainContentText,
            'search-text': searchText,
            'footer-text': footerText,
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsSkipTo,
    mountOptions(),
);

const factoryMount = () => mount(
    VsSkipTo,
    mountOptions(),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsSiteSearch', () => {
    it('should render a component with the data-test attribute `vs-skip-to`', () => {
        expect(wrapper.find('[data-test="vs-skip-to"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the `skipToText` label', () => {
            expect(wrapper.attributes('aria-label')).toBe('Skip to');
            expect(wrapper.find('[data-test="vs-skip-to"]').find('.vs-skip-to__label').text()).toContain('Skip to');
        });

        it('should render the `search` link if `hasSearchLink` === true', () => {
            expect(wrapper.find('[data-test="vs-skip-to-search"]').exists()).toBe(true);
        });

        it('should skip the `search` link if `hasSearchLink` === false', async() => {
            wrapper.setProps({
                hasSearchLink: false,
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-skip-to-search"]').exists()).toBe(false);
        });
    });
    describe(':slots', () => {
        it('should render the content of the `mainMenuText` slot', () => {
            expect(wrapper.text()).toContain(mainMenuText);
        });

        it('should render the content of the `mainContentText` slot', () => {
            expect(wrapper.text()).toContain(mainContentText);
        });

        it('should render the content of the `searchText` slot', () => {
            expect(wrapper.text()).toContain(searchText);
        });

        it('should render the content of the `footerText` slot', () => {
            expect(wrapper.text()).toContain(footerText);
        });
    });

    describe(':methods', () => {
        it('should call the `mainMenuFocus` method on the main menu link click', async() => {
            const mainMenuBtn = wrapper.find('[data-test="vs-skip-to-main-menu"]');
            const mockMethod = jest.spyOn(wrapper.vm, 'mainMenuFocus');
            mainMenuBtn.trigger('click');

            await wrapper.vm.$nextTick();

            expect(mockMethod).toHaveBeenCalled();
        });

        it('should call the `footerFocus` method on the footer link click', async() => {
            const footerBtn = wrapper.find('[data-test="vs-skip-to-footer"]');
            const mockMethod = jest.spyOn(wrapper.vm, 'footerFocus');
            footerBtn.trigger('click');

            await wrapper.vm.$nextTick();

            expect(mockMethod).toHaveBeenCalled();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
