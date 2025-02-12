import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsPagination from '../VsPagination.vue';

describe('VsPagination.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(VsPagination, {
            propsData: {
                numberOfPages: 27,
                nextButtonLabel: 'Next',
                previousButtonLabel: 'Previous',
                pageLabel: 'Page',
                ofLabel: 'of',
            },
        });
    });

    it('should render an element with the `vs-pagination` test attribute', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-pagination');
    });

    it('the "previous" button should be disabled when the current page is the first page', () => {
        const previousButton = wrapper.find('.vs-pagination__prev .vs-button');

        expect(previousButton.attributes('disabled')).toBeDefined();
    });

    it('the "previous" button should not be disabled when the current page is not the first page', async() => {
        const previousButton = wrapper.find('.vs-pagination__prev .vs-button');
        const pageItems = wrapper.findAll('.vs-pagination__item .vs-button');

        await pageItems.at(1).trigger('click');

        expect(previousButton.attributes().disabled).toBeUndefined();
    });

    it('the "next" button should not be disabled when the current page is not the last page', () => {
        const nextButton = wrapper.find('.vs-pagination__next .vs-button');

        expect(nextButton.attributes('disabled')).toBeUndefined();
    });

    it('the "next" button should be disabled when the current page is the last page', async() => {
        const nextButton = wrapper.find('.vs-pagination__next .vs-button');
        const pageItems = wrapper.findAll('.vs-pagination__item .vs-button');

        await pageItems.at(pageItems.length - 1).trigger('click');

        expect(nextButton.attributes().disabled).toBeDefined();
    });

    it('should display a list of pages without any ellipses when there fewer than 7 pages', async() => {
        await wrapper.setProps({
            numberOfPages: 6,
        });

        const ellipses = wrapper.find('.vs-pagination__item--ellipses');

        expect(ellipses.exists()).toBe(false);
    });

    it('should display a list of pages without any ellipses when there 7 pages', async() => {
        await wrapper.setProps({
            numberOfPages: 7,
        });

        const ellipses = wrapper.find('.vs-pagination__item--ellipses');

        expect(ellipses.exists()).toBe(false);
    });

    it('should display a list of pages with an ellipses before the last page when there are more than 7 pages', async() => {
        await wrapper.setProps({
            numberOfPages: 27,
        });
        const pageItems = wrapper.findAll('.vs-pagination__item');

        const ellipses = wrapper.find('.vs-pagination__item--ellipses');
        expect(ellipses.exists()).toBe(true);
        expect(pageItems.at(pageItems.length - 2).attributes('class')).toContain('vs-pagination__item--ellipses');
    });

    it('should display a list of pages with an ellipses after the first page when there are more than 7 pages and the last page is selected', async() => {
        const pageItems = wrapper.findAll('.vs-pagination__item');

        await pageItems.at(pageItems.length - 1).find('.vs-button').trigger('click');

        const ellipses = wrapper.find('.vs-pagination__item--ellipses');

        expect(ellipses.exists()).toBe(true);
        expect(pageItems.at(1).attributes('class')).toContain('vs-pagination__item--ellipses');
    });

    it('should display a list of pages with an ellipses after the first page and before the last page when there are more than 7 pages and the last a middle page is selected', async() => {
        const pageItems = wrapper.findAll('.vs-pagination__item');

        await pageItems.at(4).find('.vs-button').trigger('click');

        const ellipses = wrapper.find('.vs-pagination__item--ellipses');

        expect(ellipses.exists()).toBe(true);
        expect(pageItems.at(1).attributes('class')).toContain('vs-pagination__item--ellipses');
        expect(pageItems.at(pageItems.length - 2).attributes('class')).toContain('vs-pagination__item--ellipses');
    });

    describe(':props', () => {
        it(':nextButtonLabel - should render the next button with the label passed', async() => {
            expect(wrapper.find('.vs-pagination__next').text()).toContain('Next');
        });

        it(':previousButtonLabel - should render the previous button with the label passed', async() => {
            expect(wrapper.find('.vs-pagination__prev').text()).toContain('Previous');
        });

        it(':numberOfPages - should render the total number of pages passed', async() => {
            expect(wrapper.find('.vs-pagination__count').text()).toContain('27');
        });

        it(':pageLabel - should render the string passed within vs-pagination__count', async() => {
            expect(wrapper.find('.vs-pagination__count').text()).toContain('Page');
        });

        it(':ofLabel - should render the string passed within vs-pagination__count', async() => {
            expect(wrapper.find('.vs-pagination__count').text()).toContain('of');
        });
    });

    describe(':emits', () => {
        it(':page-click - should be emitted when a page button is clicked', async() => {
            const pageItems = wrapper.findAll('.vs-pagination__item .vs-button');

            await pageItems.at(1).trigger('click');

            expect(wrapper.emitted('page-click')).toBeTruthy();
            expect(wrapper.emitted('page-click')[0]).toEqual([2]);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
