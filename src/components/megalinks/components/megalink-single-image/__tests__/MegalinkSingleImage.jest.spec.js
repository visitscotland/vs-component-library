import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMegalinkSingleImage from '../MegalinkSingleImage.vue';

config.global.renderStubDefaultSlot = true;

const vsSingleImageSlot = '<p>Image goes here</p>';
const vsSingleImageContentSlot = '<p>This is the content for the single image component</p>';
const vsSingleImageLinksSlot = '<li>This is just one link</li>';
const vsSingleImageButtonTextSlot = 'This is the button text';

function mountOptions() {
    return {
        propsData: {
            alternate: false,
            title: 'The Single Image title',
            buttonLink: 'http://www.visitscotland.com',
        },
        slots: {
            'vs-single-image': vsSingleImageSlot,
            'vs-single-image-content': vsSingleImageContentSlot,
            'vs-single-image-links': vsSingleImageLinksSlot,
            'vs-single-image-button-text': vsSingleImageButtonTextSlot,
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsMegalinkSingleImage,
    mountOptions(),
);

const factoryMount = () => mount(
    VsMegalinkSingleImage,
    mountOptions(),
);

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsMegalinkSingleImage', () => {
    describe(':props', () => {
        it('if the alternate prop is true, should render an element with class "vs-megalink-single-image--alternate"', async() => {
            await wrapper.setProps({
                alternate: true,
            });

            expect(wrapper.classes()).toContain('vs-megalink-single-image--alternate');
        });

        it('if the alternate prop is true, it should render a VsCol with class "offset-lg-6"', async() => {
            await wrapper.setProps({
                alternate: true,
            });

            expect(wrapper.find('.offset-lg-6').exists()).toBe(true);
        });
        it('if the title prop is empty, it should not render a header element', async() => {
            await wrapper.setProps({
                title: '',
            });

            expect(wrapper.find('[data-test="megalink-single-image__title"]').exists()).toBe(false);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a vs-single-image slot', () => {
            expect(wrapper.find('[data-test="megalink-single-image"').html()).toContain(vsSingleImageSlot);
        });

        it('renders content inserted in a vs-single-image-content slot', () => {
            expect(wrapper.find('[data-test="megalink-single-image__content"').html()).toContain(vsSingleImageContentSlot);
        });

        it('renders content inserted in a vs-single-image-links slot', () => {
            expect(wrapper.find('[data-test="megalink-single-image__content"]').html()).toContain(vsSingleImageLinksSlot);
        });

        it('renders content inserted in a vs-single-image-button-text slot', () => {
            expect(wrapper.find('[data-test="megalink-single-image__content"]').html()).toContain(vsSingleImageButtonTextSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const modifiedWrapper = factoryMount();
            expect(await axe(modifiedWrapper.html())).toHaveNoViolations();
        });
    });
});
