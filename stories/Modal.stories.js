import VsButton from '@/components/button/Button.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsBody from '@/components/body/Body.vue';
import VsVideo from '@/components/video/Video.vue';
import { userEvent, within } from 'storybook/test';
import { VsCol, VsRow } from '@/components/grid';

export default {
    component: VsModal,
    title: 'Components/Overlays & popups/Modal',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsButton,
        VsCol,
        VsModal,
        VsBody,
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
            class="mb-100"
            ref="btnShow"
            @click="this.emitter.emit('showModal', 'c05sg3G4oA4')"
        >
            Play Video
        </VsButton>

        <VsModal v-bind="args" :class="args.jsDisabled ? 'no-js' : ''">
            <VsRow>
                <VsCol cols="12" v-if="args.isVideoModal">
                    <VsVideo
                        :video-id="args.modalId"
                        video-title="Test Video"
                        class="mb-200"
                        cookie-btn-text="Manage cookies"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need JavaScript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>

                <VsCol 
                    cols="10"
                    offset="1" 
                    v-else
                >
                    <VsBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ultrices ex a volutpat. 
                            Donec consectetur porta ex vitae tincidunt. 
                        </p>
                        <p>
                            Suspendisse nec sapien quis ante venenatis dictum. Quisque convallis enim luctus tempor porta. 
                            Nunc imperdiet, felis quis commodo dignissim, est erat varius dui, 
                            in venenatis tellus ex eu nisi. Fusce fringilla arcu tellus, 
                            eu tristique lacus bibendum at. Nullam blandit luctus consequat.
                        </p>
                        <p>
                            Aliquam suscipit turpis sapien, sit amet dictum dui sodales sed. Proin tincidunt mollis 
                            mauris, eget aliquam felis vestibulum vitae. Nullam sagittis metus non gravida aliquet. 
                            Quisque ut tempor ex, non iaculis arcu.
                        </p>
                    </VsBody>
                </VsCol>
                
                <VsCol
                    cols="10"
                    offset="1"
                >
                    <VsBody>
                        <p>
                            Discover our incredible castles from a new perspective.
                            This incredible drone footage shows castles from Dumfries &amp;
                            Galloway to Wick on the north coastline.
                        </p>
                    </VsBody>
                </VsCol>
            </VsRow>
        </VsModal>
    </div>
    `,
});

const base = {
    modalId: 'c05sg3G4oA4',
    closeBtnText: 'Close',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const VideoModal = Template.bind({
});

VideoModal.args = {
    ...base,
    isVideoModal: true,
};

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

NoJavascript.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Play Video');

    await userEvent.click(button);
};

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
};

NoCookies.decorators = [
    () => {
        window.bypassCookiesRequired = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

NoCookies.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Play Video');

    await userEvent.click(button);
};
