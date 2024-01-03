import { mount } from '@vue/test-utils';
import VsArticleSection from '../ArticleSection.vue';

const defaultSlotText = 'Article section content';
const sidebarSlotText = 'Article sidebar content';

const factoryMount = (props) => mount(VsArticleSection, {
    props: {
        ...props,
    },
    slots: {
        default: defaultSlotText,
        'article-sidebar': sidebarSlotText,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsArticleSection', () => {
    it('should render a component with the data-test attribute `vs-article-section`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-article-section');
    });

    describe(':props', () => {
        it(':sidebarAlign - Should render the sidebar to the `left` of the section ', () => {
            wrapper = factoryMount({
                sidebarAlign: 'left',
            });

            const section = wrapper.find('[data-test="vs-article-section"');
            const sidebar = wrapper.find('[data-test="vs-article-section__sidebar"');
            const content = wrapper.find('[data-test="vs-article-section__content"');

            expect(section.classes()).toContain('vs-article-section--sidebar-left');
            expect(sidebar.classes()).toContain('pl-md-0');
            expect(content.classes()).toContain('offset-xl-1');
        });

        it(':sidebarAlign - Should render the sidebar to the `right` of the section ', () => {
            wrapper = factoryMount({
                sidebarAlign: 'right',
            });

            const section = wrapper.find('[data-test="vs-article-section"');
            const sidebar = wrapper.find('[data-test="vs-article-section__sidebar"');

            expect(section.classes()).toContain('vs-article-section--sidebar-right');
            expect(sidebar.classes()).toContain('pr-md-0');
            expect(sidebar.classes()).toContain('order-md-2');
            expect(sidebar.classes()).toContain('offset-xl-1');
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a articleSidebar slot', () => {
            expect(wrapper.text()).toContain(sidebarSlotText);
        });

        it('renders content inserted in the default slot', () => {
            expect(wrapper.text()).toContain(defaultSlotText);
        });
    });
});
