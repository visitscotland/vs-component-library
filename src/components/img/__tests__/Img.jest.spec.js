import { shallowMount, mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsImg from '../Img.vue';

const slotText = 'Image text';
const imgUrl = 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander';

const factoryShallowMount = (propsData) => shallowMount(VsImg, {
    slots: {
        default: slotText,
    },
    propsData: {
        src: `${imgUrl}`,
        alt: 'Claire standing stones',
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsImg, {
    slots: {
        default: slotText,
    },
    propsData: {
        src: `${imgUrl}`,
        alt: 'Claire standing stones',
        ...propsData,
    },
});

describe('VsImg', () => {
    it('should render a b-img-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-IMG-STUB');
    });

    describe(':props', () => {
        it('should accept and render a `src` property', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('src')).toContain(`${imgUrl}`);
        });

        it('should accept and render an `alt` property', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('alt')).toBe('Claire standing stones');
        });

        it('should accept and render a `lowResImage` property', () => {
            const wrapper = factoryMount();

            expect(wrapper.attributes('style')).toContain(`${imgUrl}&size=xxs`);
        });

        it('should set a `generic-lqip` class if `useGenericLqip` is set to true', () => {
            const wrapper = factoryMount({
                useGenericLqip: true,
            });

            expect(wrapper.classes('generic-lqip')).toBe(true);
        });

        it('should set an `img-fluid` class if the `fluid` property is truthy', () => {
            const wrapper = factoryMount({
                fluid: true,
            });

            expect(wrapper.classes('img-fluid')).toBe(true);
        });

        it('should set an `img-fluid` class and a `w-100` class if the `fluid-grow` property is truthy', () => {
            const wrapper = factoryMount({
                fluidGrow: true,
            });

            expect([
                wrapper.classes('img-fluid'),
                wrapper.classes('w-100'),
            ]).toEqual([
                true, true,
            ]);
        });

        it('should construct the srcSet using a ? if the src contains no query parameter', async() => {
            const wrapper = factoryShallowMount({
                src: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander',
            });

            await expect(wrapper.attributes('srcset')).toContain('&size=');
        });

        it('should construct the srcSet using an & if the src contains a query parameter', async() => {
            const wrapper = factoryShallowMount({
                src: 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?preview-token=test',
            });

            await expect(wrapper.attributes('srcset')).toContain('&size=');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
