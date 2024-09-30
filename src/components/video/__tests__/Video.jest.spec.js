import {
    shallowMount, mount, config,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import { setActivePinia, createPinia } from 'pinia';
import VsVideo from '../Video.vue';

config.global.renderStubDefaultSlot = true;

const videoId = 'C0DPdy98e4c';
const singleMinuteDescriptor = '%s minute';
const pluralMinuteDescriptor = '%s minutos';
const language = 'de';

const noJsContent = 'Js is off';
const errorContent = 'Error content';

function mountOptions() {
    return {
        propsData: {
            videoId,
            singleMinuteDescriptor,
            pluralMinuteDescriptor,
            language,
            errorMessage: errorContent,
            noJsMessage: noJsContent,
            player: null,
        },
    };
};

const factoryShallowMount = () => shallowMount(
    VsVideo,
    mountOptions(),
);

const factoryMount = () => mount(
    VsVideo,
    mountOptions(),
);

describe('VsVideo', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render a div with the class `vs-video`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.find('div[data-test=vs-video]').exists()).toBe(true);
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });

    describe(':props', () => {
        it('should pass a videoId prop to the youtube component', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.vm.$nextTick();

            expect(wrapper.find('vue-youtube-stub').attributes('video-id')).toBe(videoId);
        });

        it('should pass a language prop to `playerVars` data object', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.vm.playerVars.hl).toBe('de');
        });
    });

    describe(':data', () => {
        it('should show a roundedDuration that rounds up, if the duration is 0 minutes and < 30 seconds', async() => {
            const wrapper = factoryShallowMount();

            // a 25 second video, which should round to 1 minute
            wrapper.vm.formatTime(25);

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.duration.roundedMinutes).toContain('1');
        });

        it('should show a roundedDuration that rounds down, if the duration is x minutes and < 30 seconds', async() => {
            const wrapper = factoryShallowMount();

            // a 1 minute 20 second video, which should round down to 1 minute
            wrapper.vm.formatTime(80);

            expect(wrapper.vm.duration.roundedMinutes).toContain('1');
        });

        it('should show a roundedDuration that rounds up, if the duration is x minutes and >= 30 seconds', async() => {
            // a 1 minute 30 second video, which should round up to 2 minutes
            const wrapper = factoryShallowMount();

            wrapper.vm.formatTime(90);

            expect(wrapper.vm.duration.roundedMinutes).toContain('2');
        });

        it('should show render the singleMinuteDescriptor for a 1 minute video', async() => {
            // a 1 minute 20 second video, which should round down to 1 minute
            const wrapper = factoryShallowMount();

            wrapper.vm.formatTime(80);

            expect(wrapper.vm.duration.roundedMinutes).toBe(singleMinuteDescriptor.replace('%s', '1'));
        });

        it('should render the pluralMinuteDiscriptor for a multi minute video', async() => {
            const wrapper = factoryShallowMount();

            // a 3 minute 40 second video, which should round up to 4 minute
            wrapper.vm.formatTime(220);

            expect(wrapper.vm.duration.roundedMinutes).toBe(pluralMinuteDescriptor.replace('%s', '4'));
        });

        it('renders content inserted into the `embedIntroCopyNoJs` slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.text()).toContain(noJsContent);
        });
    });

    describe(':methods', () => {
        it('should call the playVideo method when receiving emitted event', () => {
            jest.useFakeTimers();
            const wrapper = factoryShallowMount();
            const mockPlayMethod = jest.fn();
            wrapper.vm.playVideo = mockPlayMethod;

            wrapper.vm.emitter.emit('video-controls', {
                action: 'play',
                id: videoId,
            });

            // wait for setTimeout to run
            jest.advanceTimersByTime(1500);

            expect(mockPlayMethod).toHaveBeenCalled();
        });

        it('should call the pauseVideo method when receiving emitted event', () => {
            jest.useFakeTimers();
            const wrapper = factoryShallowMount();
            const mockPauseMethod = jest.fn();
            wrapper.vm.pauseVideo = mockPauseMethod;

            wrapper.vm.emitter.emit('video-controls', {
                action: 'pause',
                id: videoId,
            });

            // wait for setTimeout to run
            jest.advanceTimersByTime(1500);

            expect(mockPauseMethod).toHaveBeenCalled();
        });

        it('should return the formatted time in minutes and seconds', async() => {
            const wrapper = factoryShallowMount();
            wrapper.vm.formatTime(210);

            expect(wrapper.vm.duration.minutes).toBe(3);
            expect(wrapper.vm.duration.seconds).toBe(30);
        });

        it('should not render the video duration if video duration is 0', () => {
            const wrapper = factoryShallowMount();

            wrapper.vm.formatTime(0);

            expect(wrapper.find('p[data-test="vs-video-duration"]').exists()).toBe(false);
        });
    });
});
