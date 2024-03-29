import { mount } from '@vue/test-utils';
import VsCannedSearchSummaryBox from '../CannedSearchSummaryBox.vue';

const summaryLeftSlotContent = 'This is a price';
const summaryTopSlotContent = 'This is a date';
const summaryCentreSlotContent = 'This is a duration';

const linkHref = 'https://google.com';
const linkType = 'external';
const linkLabel = 'Visit Website';
const linkTitle = 'Hilton Hotel';

const factoryMount = () => mount(VsCannedSearchSummaryBox, {
    propsData: {
        linkHref,
        linkType,
        linkLabel,
        linkTitle,
    },
    slots: {
        'vs-canned-search-summary-left': summaryLeftSlotContent,
        'vs-canned-search-summary-top': summaryTopSlotContent,
        'vs-canned-search-summary-centre': summaryCentreSlotContent,
    },
    global: {
        provide: {
            slideVisible: () => true,
        },
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
});

describe('VsCannedSearchSummaryBox', () => {
    describe(':slots', () => {
        it('should render the content of the `vs-canned-search-summary-left` slot', () => {
            expect(wrapper.html()).toContain(summaryLeftSlotContent);
        });

        it('should render the content of the `vs-canned-search-summary-top` slot', () => {
            expect(wrapper.html()).toContain(summaryTopSlotContent);
        });

        it('should render the content of the `vs-canned-search-summary-centre` slot', () => {
            expect(wrapper.html()).toContain(summaryCentreSlotContent);
        });
    });

    describe(':props', () => {
        it('should render a `vs-link` with the `href` provided in `linkHref`', () => {
            const link = wrapper.find('[data-test="vs-canned-search-summary-box__link"]');

            expect(link.attributes().href).toBe(linkHref);
        });

        it('should render the content of the `linkLabel` property', () => {
            expect(wrapper.html()).toContain(linkLabel);
        });

        it('should render the content of the `linkTitle` property', () => {
            expect(wrapper.html()).toContain(linkTitle);
        });
    });
});
