import {
    config, mount, shallowMount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsCaption from '../Caption.vue';

config.global.renderStubDefaultSlot = true;

const captionSlot = 'A Scottish Castle';
const creditSlot = 'VisitScotland';

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
        },
        slots: {
            caption: captionSlot,
            credit: creditSlot,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsCaption,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsCaption,
    mountOptions(propsData),
);

describe('VsCaption', () => {
    it('should render a caption element', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test="vs-caption"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should set correct class if `variant` is `large`', () => {
            const wrapper = factoryShallowMount({
                variant: 'large',
            });
            const caption = wrapper.find('[data-test="vs-caption"]');
            expect(caption.classes('vs-caption--large')).toBe(true);
        });

        it('should set correct class if `theme` is `subtle`', () => {
            const wrapper = factoryShallowMount({
                theme: 'subtle',
            });
            const caption = wrapper.find('[data-test="vs-caption"]');
            expect(caption.classes('vs-caption--subtle')).toBe(true);
        });

        it('should set correct class if `textAlign` is `right`', () => {
            const wrapper = factoryShallowMount({
                textAlign: 'right',
            });
            const caption = wrapper.find('[data-test="vs-caption"]');
            expect(caption.classes('vs-caption--right')).toBe(true);
        });

        it('should not show map if only `latitude` is passed in', () => {
            const wrapper = factoryShallowMount({
                latitude: '55.9485947',
            });

            const mapWrapper = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__map-wrapper');
            expect(mapWrapper.exists()).toBe(false);
        });

        it('should not show map if only `longitude` is passed in', () => {
            const wrapper = factoryShallowMount({
                longitude: '-3.2021022',
            });

            const mapWrapper = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__map-wrapper');
            expect(mapWrapper.exists()).toBe(false);
        });

        it('should not show map if `latitude` and `longitude` is passed in and caption is fullwidth variant', () => {
            const wrapper = factoryShallowMount({
                latitude: '55.9485947',
                longitude: '-3.2021022',
            });

            const mapWrapper = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__map-wrapper');
            expect(mapWrapper.exists()).toBe(false);
        });

        it('should show map if `latitude` and `longitude` is passed in and caption is large variant', () => {
            const wrapper = factoryShallowMount({
                latitude: '55.9485947',
                longitude: '-3.2021022',
                variant: 'large',
            });

            const mapWrapper = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__map-wrapper');
            expect(mapWrapper.exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content in the `caption` slot', () => {
            const wrapper = factoryShallowMount();
            const captionInfo = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__caption-info');

            expect(captionInfo.text()).toContain(captionSlot);
        });

        it('renders content in the `credit` slot', () => {
            const wrapper = factoryShallowMount();
            const captionInfo = wrapper.find('[data-test="vs-caption"]').find('.vs-caption__caption-info');

            expect(captionInfo.text()).toContain(creditSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
