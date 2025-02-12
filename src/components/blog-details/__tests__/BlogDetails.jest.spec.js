import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsBlogDetails from '../BlogDetails.vue';

const testData = {
    author: 'Sarah Henderson',
    date: 'May 10, 2023',
    readTime: '2 minute read',
};

const factoryShallowMount = (propsData) => shallowMount(VsBlogDetails, {
    propsData: {
        blogReadTime: testData.readTime,
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

describe('VsBlogDetails', () => {
    it('renders correctly with required props', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.attributes('data-test')).toBe('vs-blog-details');
    });

    describe(':props', () => {
        it('should display an author when passed `blogAuthor` prop', () => {
            wrapper = factoryShallowMount({
                blogAuthor: testData.author,
            });
            const authorElement = wrapper
                .find('[data-test=vs-blog-details]')
                .find('.vs-blog-details__author');
            expect(authorElement.exists()).toBe(true);
            expect(authorElement.text()).toContain(testData.author);
        });

        it('does not display author section when `blogAuthor` is not provided', () => {
            const authorElement = wrapper
                .find('[data-test=vs-blog-details]')
                .find('.vs-blog-details__author');
            expect(authorElement.exists()).toBe(false);
        });

        it('should display a date when passed `blogPublishDate` prop', () => {
            wrapper = factoryShallowMount({
                blogPublishDate: testData.date,
            });
            const dateElement = wrapper
                .find('[data-test=vs-blog-details]')
                .find('.vs-blog-details__date');
            expect(dateElement.exists()).toBe(true);
            expect(dateElement.text()).toContain(testData.date);
        });

        it('should display a read time when passed `blogReadTime` prop', () => {
            const blogDetails = wrapper.find('[data-test=vs-blog-details]');
            expect(blogDetails.text()).toContain(testData.readTime);
        });

        it('computes correct icon variant when author is present', () => {
            wrapper = factoryShallowMount({
                blogAuthor: testData.author,
            });
            expect(wrapper.vm.iconVariant).toBe('secondary');
        });

        it('computes correct icon variant when author is not present', () => {
            expect(wrapper.vm.iconVariant).toBe('tertiary');
        });

        it('applies highlight class correctly when author is not present', () => {
            const timeElement = wrapper.find('[data-test=vs-blog-details__date-time]');
            expect(timeElement.classes()).toContain('vs-blog-details--highlight');
        });

        it('does not apply highlight class to time section when author is present', () => {
            wrapper = factoryShallowMount({
                blogAuthor: 'John Doe',
            });
            const timeElement = wrapper.find('[data-test=vs-blog-details__date-time]');
            expect(timeElement.classes()).not.toContain('vs-blog-details--highlight');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
