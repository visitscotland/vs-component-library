import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsArticle from '../Article.vue';

const defaultSlotText = 'Article content';
const introSlotText = 'Article intro';
const imgSlotText = 'Article img';

const factoryMount = (propsData) => mount(VsArticle, {
    propsData: {
        ...propsData,
        title: 'Route to the summit',
        anchorLink: 'Routes',
    },
    slots: {
        default: defaultSlotText,
        'vs-article-img': imgSlotText,
        'vs-article-intro': introSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsArticle', () => {
    it('should render a component with the data-test attribute `vs-article`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-article');
    });

    describe(':props', () => {
        it('renders `title` passed to the article', () => {
            expect(wrapper.text()).toContain('Route to the summit');
        });

        it('renders `anchorLink` passed to the article', () => {
            const header = wrapper.find('article[data-test=vs-article]').find('.vs-article__header');
            const anchor = header.find('#Routes');
            expect(anchor.exists()).toBe(true);
        });

        it(':removeBorder - render with class `vs-article__wrapper--no-border` when true', () => {
            const removeBorderWrapper = factoryMount({
                removeBorder: true,
            });

            expect(removeBorderWrapper.find('.vs-article__wrapper--no-border').exists()).toBe(true);
        });

        it(':headingAlign - render heading with class `text-start` when `left`', () => {
            const headingAlignWrapper = factoryMount({
                headingAlign: 'left',
            });

            const header = headingAlignWrapper.find('article[data-test=vs-article]').find('.vs-article__header .text-start');

            expect(header.exists()).toBe(true);
        });

        it(':headingAlign - render heading with class `text-center` when `centre`', () => {
            const header = wrapper.find('article[data-test=vs-article]').find('.vs-article__header .text-center');

            expect(header.exists()).toBe(true);
        });

        it(':headingAlign - render heading with class `text-end` when `right`', () => {
            const headingAlignWrapper = factoryMount({
                headingAlign: 'right',
            });

            const header = headingAlignWrapper.find('article[data-test=vs-article]').find('.vs-article__header .text-end');

            expect(header.exists()).toBe(true);
        });

        it(':coverPosition - render cover media above title when `standard`', () => {
            const header = wrapper.find('article[data-test=vs-article]').find('.vs-article__header');

            expect(header.text()).not.toContain(imgSlotText);
        });

        it(':coverPosition - render cover media above title when `alternative`', () => {
            const coverPositionWrapper = factoryMount({
                coverPosition: 'alternative',
            });

            const header = coverPositionWrapper.find('article[data-test=vs-article]').find('.vs-article__header');

            expect(header.text()).toContain(imgSlotText);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a vsArticleImg slot', () => {
            expect(wrapper.text()).toContain(imgSlotText);
        });

        it('renders content inserted in a vsArticleIntro slot', () => {
            expect(wrapper.text()).toContain(introSlotText);
        });

        it('renders content inserted in the default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
