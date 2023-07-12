import { config, mount } from '@vue/test-utils';
import VsMegaNavFeaturedItem from '../MegaNavFeaturedItem.vue';

config.global.renderStubDefaultSlot = true;

const factoryMount = (slotData) => mount(VsMegaNavFeaturedItem, {
    propsData: {
        link: 'http://www.visitscotland.com',
        imgUrl: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm',
        imgAlt: 'Test alt text',
    },
    ...slotData,
});

describe('VsMegaNavFeaturedItem', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-featured-item`', async() => {
        const wrapper = factoryMount();
        expect(wrapper.find('[data-test="vs-mega-nav-featured-item"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render a link with the link prop value as href', async() => {
            const wrapper = factoryMount({
                slots: {
                    'vs-featured-item-link': 'Test featured item link text',
                },
            });
            expect(wrapper.find('a[href="http://www.visitscotland.com"]').exists()).toBe(true);
        });

        it('should render an image using the imgUrl prop', async() => {
            const wrapper = factoryMount();
            expect(wrapper.find('img').attributes('src')).toBe('https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm');
        });

        it('should render image alt text using the imgAlt prop', async() => {
            const wrapper = factoryMount();
            expect(wrapper.find('img').attributes('alt')).toBe('Test alt text');
        });
    });

    describe(':slots', () => {
        it('should render a header with the vs-featured-item-header value passed', async() => {
            const wrapper = factoryMount({
                slots: {
                    'vs-featured-item-header': 'Test featured item header text',
                },
            });
            expect(wrapper.text()).toContain('Test featured item header text');
        });

        it('should render content with the vs-featured-item-content value passed', async() => {
            const wrapper = factoryMount({
                slots: {
                    'vs-featured-item-content': '<p>Test featured item content text</p>',
                },
            });
            expect(wrapper.html()).toContain('<p>Test featured item content text</p>');
        });

        it('should render a link with the vs-featured-item-link value passed', async() => {
            const wrapper = factoryMount({
                slots: {
                    'vs-featured-item-link': 'Test featured item link text',
                },
            });
            expect(wrapper.text()).toContain('Test featured item link text');
        });
    });
});
