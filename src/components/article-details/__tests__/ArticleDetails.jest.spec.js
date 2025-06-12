import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsArticleDetails from '../ArticleDetails.vue';

const testData = {
    author: 'Sarah Henderson',
    date: 'May 10, 2023',
    readTime: '2 minute read',
};

const factoryShallowMount = (propsData) => shallowMount(VsArticleDetails, {
    propsData: {
        articleReadTime: testData.readTime,
        ...propsData,
    },
});

let wrapper;

beforeEach(() => {
    wrapper = factoryShallowMount();
});

afterEach(() => {
    wrapper.unmount();
});

describe('VsArticleDetails', () => {
    it('renders correctly with required props', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.attributes('data-test')).toBe('vs-article-details');
    });

    describe(':props', () => {
        it('should display an author when passed `articleAuthor` prop', () => {
            wrapper = factoryShallowMount({
                articleAuthor: testData.author,
            });
            const authorElement = wrapper
                .find('[data-test=vs-article-details]')
                .find('.vs-article-details__author');
            expect(authorElement.exists()).toBe(true);
            expect(authorElement.text()).toContain(testData.author);
        });

        it('does not display author section when `articleAuthor` is not provided', () => {
            const authorElement = wrapper
                .find('[data-test=vs-article-details]')
                .find('.vs-article-details__author');
            expect(authorElement.exists()).toBe(false);
        });

        it('should display a date when passed `articlePublishDate` prop', () => {
            wrapper = factoryShallowMount({
                articlePublishDate: testData.date,
            });
            const dateElement = wrapper
                .find('[data-test=vs-article-details]')
                .find('.vs-article-details__date');
            expect(dateElement.exists()).toBe(true);
            expect(dateElement.text()).toContain(testData.date);
        });

        it('should display a read time when passed `articleReadTime` prop', () => {
            const articleDetails = wrapper.find('[data-test=vs-article-details]');
            expect(articleDetails.text()).toContain(testData.readTime);
        });

        it('computes correct icon variant when author is present', () => {
            wrapper = factoryShallowMount({
                articleAuthor: testData.author,
            });
            expect(wrapper.vm.iconVariant).toBe('secondary');
        });

        it('computes correct icon variant when author is not present', () => {
            expect(wrapper.vm.iconVariant).toBe('highlight');
        });

        it('applies highlight class correctly when author is not present', () => {
            const timeElement = wrapper.find('[data-test=vs-article-details__date-time]');
            expect(timeElement.classes()).toContain('vs-article-details--highlight');
        });

        it('does not apply highlight class to time section when author is present', () => {
            wrapper = factoryShallowMount({
                articleAuthor: 'John Doe',
            });
            const timeElement = wrapper.find('[data-test=vs-article-details__date-time]');
            expect(timeElement.classes()).not.toContain('vs-article-details--highlight');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
