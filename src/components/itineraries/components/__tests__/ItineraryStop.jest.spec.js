import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsItineraryStop from '../ItineraryStop.vue';

config.global.renderStubDefaultSlot = true;

function mountOptions() {
    return {
        propsData: {
            stopLabel: 'Test stop label',
            stopNumber: '0',
            stopTitle: 'Test stop title',
            openingTimesLink: 'http://www.visitscotland.com',
            dayName: 'Thursday',
        },
        slots: {
            default: '<img src="test" alt="">',
            'stop-description': 'Test stop description',
            'stop-address': '<p>address line one<br>address line two</p>',
            'stop-tips': 'Test stop tips',
            'stop-closed': 'Closed',
            'stop-open': 'Open',
            'stop-closing-soon': 'Closing soon',
            'stop-opening-text': 'Usually open today',
            'stop-link-text': 'All opening times',
            'stop-charge-text': 'Free admission',
            'stop-facilities': 'Test facilities content',
            'stop-button': 'Test button text',
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsItineraryStop,
    mountOptions(),
);

const factoryMount = () => mount(
    VsItineraryStop,
    mountOptions(),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsItineraryStop', () => {
    it('should render a component with the data-test attribute `vs-itinerary-stop`', () => {
        expect(wrapper.find('[data-test="vs-itinerary-stop"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the stopLabel prop', () => {
            expect(wrapper.find('[data-test="vs-itinerary-stop-heading"]').html()).toContain('Test stop label');
        });

        it('should render the stopNumber prop', () => {
            expect(wrapper.find('[data-test="vs-itinerary-stop-marker"]').text()).toBe('0');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default slot', () => {
            expect(wrapper.html()).toContain('<img src="test" alt="">');
        });

        it('renders content inserted into the stop-description slot', () => {
            expect(wrapper.html()).toContain('Test stop description');
        });

        it('renders content inserted into the stop-address slot', () => {
            expect(wrapper.find('[data-test="vs-itinerary-stop-address"]').html()).toContain('<p>address line one<br>address line two</p>');
        });

        it('renders content inserted into the stop-tips slot', () => {
            expect(wrapper.html()).toContain('Test stop tips');
        });

        it('renders content inserted into the vs-stop-facilities slot', () => {
            expect(wrapper.html()).toContain('Test facilities content');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            const html = modifiedWrapper.html();

            const results = await axe(html, {
                rules: {
                    // must have a parent with ul/ol element
                    listitem: {
                        enabled: false,
                    },
                },
            });

            expect(results).toHaveNoViolations();
        });
    });
});
