import {
    config, shallowMount, mount,
} from '@vue/test-utils';

import VsModal from '../Modal.vue';

config.global.renderStubDefaultSlot = true;

const defaultSlotText = 'Modal text';

const slotOptions = {
    default: defaultSlotText,
};

const propOptions = {
    modalId: 'my-modal',
    closeBtnText: 'Close',
    autoMount: true,
};

const factoryShallowMount = (propsData) => shallowMount(VsModal, {
    slots: slotOptions,
    propsData: {
        ...propOptions,
        ...propsData,
    },
});

const factoryMount = (propsData) => mount(VsModal, {
    slots: slotOptions,
    propsData: {
        ...propOptions,
        ...propsData,
    },
});

describe('VsModal', () => {
    it('should render a bmodal-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-MODAL-STUB');
    });

    it('should emit `video-controls` when the modal is shown', async() => {
        const wrapper = factoryMount({
            isVideoModal: true,
        });

        await wrapper.vm.$nextTick();

        const mockCallback = jest.fn();

        wrapper.vm.emitter.on('video-controls', mockCallback);

        wrapper.vm.emitter.emit('showModal', wrapper.vm.modalId);

        expect(mockCallback.mock.calls).toHaveLength(1);
    });

    describe(':props', () => {
        it('modalId: sets the correct ID on the modal element', () => {
            const wrapper = factoryShallowMount();
            const modal = wrapper.find('[data-test=vs-modal]');

            expect(modal.attributes('id')).toBe('my-modal');
        });

        it('closeBtnText: sets the text on close button element', () => {
            const wrapper = factoryShallowMount();
            const closeBtn = wrapper.find('[data-test=vs-modal__close-btn]');

            expect(closeBtn.text()).toContain('Close');
        });

        it('isVideoModal: defines static prop on BModal', async() => {
            const wrapper = factoryShallowMount();
            wrapper.setProps({
                isVideoModal: true,
            });
            await wrapper.vm.$nextTick();

            const modalStub = wrapper.find('b-modal-stub').html();

            expect(modalStub).toContain('static="true"');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();
            const modal = wrapper.find('[data-test=vs-modal]');

            expect(modal.text()).toContain(defaultSlotText);
        });
    });

    describe(':methods', () => {
        it('modal is closed on close button click', async() => {
            const wrapper = factoryShallowMount();

            wrapper.setData({
                show: true,
            });

            await wrapper.vm.$nextTick();

            const closeBtn = wrapper.find('[data-test=vs-modal__close-btn]');

            closeBtn.trigger('click');

            await wrapper.vm.$nextTick();

            expect(wrapper.vm.show).toBe(false);
        });
    });
});
