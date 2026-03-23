import VsBackdrop from '@/components/backdrop/Backdrop.vue';
import VsButton from '@/components/button/Button.vue';

import { ref } from 'vue';

export default {
    component: VsBackdrop,
    title: 'Components/Overlays & popups/Backdrop',
};

const Template = () => ({
    components: {
        VsBackdrop,
        VsButton,
    },
    setup() {
        const show = ref(false);
        return {
            show,
        };
    },
    template: `
        <div style="position: relative;">
            <VsButton @click="show = true">
                Open Backdrop
            </VsButton>

            <VsBackdrop 
                :show="show" 
                @click="show = false" 
            />

            <div 
                v-if="show" 
                class="p-100 bg-white" 
                style="z-index:1050; position: absolute; top: 50px; left: 50px; width: 300px;"
            >
                <p class="mb-100">Content over backdrop</p>
                <VsButton @click="show = false">
                    Close
                </VsButton>
            </div>
        </div>
    `,
});

export const Default = Template.bind({
});
Default.args = {
};
