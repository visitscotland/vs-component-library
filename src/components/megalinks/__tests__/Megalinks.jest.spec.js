import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMegalinks from '../Megalinks.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsMegalinks, {
    propsData: {
        title: 'A megalinks title',
        sectionId: 'a-megalinks-title',
        buttonLink: 'http://www.visitscotland.com',
        variant: 'multi-image',
    },
    slots: {
        'vs-megalinks-intro': '<p>Megalinks intro text</p>',
        'vs-megalinks-button': 'Megalinks button text',
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsMegalinks', () => {
    describe(':props', () => {
        it('should only render the button if an href is supplied', async() => {
            expect(wrapper.find('[data-test="vs-megalinks__button"]').exists()).toBe(true);

            await wrapper.setProps({
                buttonLink: '',
            });
            expect(wrapper.find('[data-test="vs-megalinks__button"]').exists()).toBe(false);
        });

        it('should render a variant class', () => {
            expect(wrapper.find('.vs-megalinks--multi-image').exists()).toBe(true);
        });

        it('should only show the intro if there is a heading', async() => {
            expect(wrapper.find('[data-test="vs-megalinks__intro"]').exists()).toBe(true);

            await wrapper.setProps({
                title: '',
            });
            expect(wrapper.find('[data-test="vs-megalinks__intro"]').exists()).toBe(false);
        });

        it('should pass an id to the heading only if one is supplied', async() => {
            expect(wrapper.find('[data-test="vs-megalinks__heading"]').attributes().id).toBe('a-megalinks-title');

            await wrapper.setProps({
                sectionId: null,
            });
            expect(wrapper.find('[data-test="vs-megalinks__heading"]').attributes().id).toBe(undefined);
        });

        it(':headingLevel - changes the default headingLevel renders by default', () => {
            const headingLevel = '2';

            const heading = wrapper.find('[data-test="vs-megalinks__heading"]');

            expect(heading.attributes('level')).toBe(headingLevel);
        });

        it(':headingLevel - changes the heading level to the value passed', async() => {
            const headingLevel = '3';

            await wrapper.setProps({
                headingLevel,
            });

            const heading = wrapper.find('[data-test="vs-megalinks__heading"]');

            expect(heading.attributes('level')).toBe(headingLevel);
        });

        it(':headingStyle - changes the default headingStyle renders by default', () => {
            const headingStyle = 'heading-xl';

            const heading = wrapper.find('[data-test="vs-megalinks__heading"]');

            expect(heading.attributes('headingstyle')).toBe(headingStyle);
        });

        it(':headingStyle - changes the heading style to the value passed', async() => {
            const headingStyle = 'heading-m';

            await wrapper.setProps({
                headingStyle,
            });

            const heading = wrapper.find('[data-test="vs-megalinks__heading"]');

            expect(heading.attributes('headingstyle')).toBe(headingStyle);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a vs-megalinks-heading slot', () => {
            expect(wrapper.find('[data-test="vs-megalinks__heading"]').text()).toBe('A megalinks title');
        });

        it('renders content inserted in a vs-megalinks-intro slot', () => {
            expect(wrapper.find('[data-test="vs-megalinks__intro"]').html()).toContain('<p>Megalinks intro text</p>');
        });

        it('renders content inserted in a vs-megalinks-button slot', async() => {
            await wrapper.setProps({
                buttonLink: 'http://www.visitscotland.com',
            });

            expect(wrapper.find('[data-test="vs-megalinks__button"]').html()).toContain('Megalinks button text');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
