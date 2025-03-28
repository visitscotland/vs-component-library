import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import HeroSectionVideoControl from '../HeroSectionVideoControl.vue';

config.global.renderStubDefaultSlot = true;

describe('HeroSectionVideoControl', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(HeroSectionVideoControl);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders the component with data-test attribute', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.attributes('data-test')).toBe('vs-hero-section-video-control');
    });

    it('displays pause icon when video is playing', () => {
        expect(wrapper.findComponent(
            {
                name: 'VsButton',
            },
        ).props('icon')).toBe('fa-regular fa-pause');
    });

    it('displays play icon when video is not playing', async() => {
        await wrapper.vm.toggleVideo();
        expect(wrapper.findComponent(
            {
                name: 'VsButton',
            },
        ).props('icon')).toBe('fa-regular fa-play');
    });

    describe(':events', () => {
        it('emits videoToggled event with correct value when button is clicked', async() => {
            await wrapper.findComponent(
                {
                    name: 'VsButton',
                },
            ).trigger('click');

            expect(wrapper.emitted('videoToggled')).toBeTruthy();
            expect(wrapper.emitted('videoToggled')[0]).toEqual([true]);

            // Check state after click
            expect(wrapper.vm.isPlaying).toBe(false);

            // Click again to test toggle
            await wrapper.findComponent(
                {
                    name: 'VsButton',
                },
            ).trigger('click');

            expect(wrapper.emitted('videoToggled')[1]).toEqual([false]);
            expect(wrapper.vm.isPlaying).toBe(true);
        });
    });

    describe(':methods', () => {
        it('toggles isPlaying state when toggleVideo is called', async() => {
            expect(wrapper.vm.isPlaying).toBe(true);

            await wrapper.vm.toggleVideo();
            expect(wrapper.vm.isPlaying).toBe(false);

            await wrapper.vm.toggleVideo();
            expect(wrapper.vm.isPlaying).toBe(true);
        });
    });

    describe(':slots', () => {
        const slotContent = 'Test Slot Content';
        wrapper = shallowMount(HeroSectionVideoControl, {
            slots: {
                default: slotContent,
            },
        });

        expect(wrapper.text()).toContain(slotContent);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
