import { shallowMount } from '@vue/test-utils';
import VsBackdrop from '../Backdrop.vue';

const factoryShallowMount = (propsData) => shallowMount(VsBackdrop, {
    propsData: {
        show: false,
        ...propsData,
    },
});

describe('VsBackdrop', () => {
    it('should render backdrop when show is true', () => {
        const wrapper = factoryShallowMount({
            show: true,
        });
        expect(wrapper.find('.vs-backdrop').exists()).toBe(true);
    });

    it('should not render backdrop when show is false', () => {
        const wrapper = factoryShallowMount({
            show: false,
        });
        expect(wrapper.find('.vs-backdrop').exists()).toBe(false);
    });

    describe(':props', () => {
        it('zIndex: applies custom z-index style', () => {
            const wrapper = factoryShallowMount({
                show: true,
                zIndex: 2000,
            });
            const backdrop = wrapper.find('.vs-backdrop');
            expect(backdrop.attributes('style')).toContain('z-index: 2000');
        });

        it('clickable: emits click and update:show when true', async() => {
            const wrapper = factoryShallowMount({
                show: true,
                clickable: true,
            });
            const backdrop = wrapper.find('.vs-backdrop');

            await backdrop.trigger('click');

            expect(wrapper.emitted('click')).toHaveLength(1);
            expect(wrapper.emitted('update:show')).toHaveLength(1);
            expect(wrapper.emitted('update:show')[0]).toEqual([false]);
        });

        it('clickable: does not emit when false', async() => {
            const wrapper = factoryShallowMount({
                show: true,
                clickable: false,
            });
            const backdrop = wrapper.find('.vs-backdrop');

            await backdrop.trigger('click');

            expect(wrapper.emitted('click')).toBeUndefined();
            expect(wrapper.emitted('update:show')).toBeUndefined();
        });
    });

    describe(':methods', () => {
        it('lockScroll: sets body overflow to hidden', () => {
            const wrapper = factoryShallowMount({
                show: true,
            });
            wrapper.vm.lockScroll();
            expect(document.body.style.overflow).toBe('hidden');
        });

        it('unlockScroll: restores body overflow', () => {
            const wrapper = factoryShallowMount({
                show: true,
            });
            document.body.style.overflow = 'hidden';
            wrapper.vm.unlockScroll();
            expect(document.body.style.overflow).toBe('');
        });

        it('unlockScroll: called on unmount when show is true', () => {
            const wrapper = factoryShallowMount({
                show: true,
            });
            const unlockScrollSpy = jest.spyOn(wrapper.vm, 'unlockScroll');
            wrapper.unmount();
            expect(unlockScrollSpy).toHaveBeenCalled();
        });
    });
});
