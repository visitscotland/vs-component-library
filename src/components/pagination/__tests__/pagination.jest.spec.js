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

        await pageItems.at(0).trigger('click');

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

            await pageItems.at(0).trigger('click');

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
