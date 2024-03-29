import VsButton from '@/components/button/Button.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsVideo from '@/components/video/Video.vue';
import { userEvent, within } from '@storybook/testing-library';
import { VsCol, VsRow } from '@/components/grid';

export default {
    component: VsModal,
    title: 'Modal',
    tags: ['autodocs'],
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsButton,
        VsCol,
        VsModal,
        VsRichTextWrapper,
        VsRow,
        VsVideo,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <div
        :class="args.jsDisabled ? 'no-js' : ''"
    >
        <VsButton
            id="toggle-btn"
            class="mb-4"
            ref="btnShow"
            @click="this.emitter.emit('showModal', 'c05sg3G4oA4')"
        >
            Play Video
        </VsButton>

        <VsModal v-bind="args">
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        :video-id="args.modalId"
                        video-title="Test Video"
                        class="mb-8"
                        cookie-btn-text="Manage cookies"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need JavaScript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>
                
                <VsCol
                    cols="10"
                    offset="1"
                >
                    <VsRichTextWrapper>
                        <p>
                            Discover our incredible castles from a new perspective.
                            This incredible drone footage shows castles from Dumfries &amp;
                            Galloway to Wick on the north coastline.
                        </p>
                    </VsRichTextWrapper>
                </VsCol>
            </VsRow>
        </VsModal>
    </div>
    `,
});

const base = {
    modalId: 'c05sg3G4oA4',
    closeBtnText: 'Close',
    isVideoModal: true,
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const ModalOpen = Template.bind({
});

ModalOpen.args = base;

ModalOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Play Video');

    await userEvent.click(button);
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
