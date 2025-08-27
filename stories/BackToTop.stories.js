import VsBackToTop from '@/components/back-to-top/BackToTop.vue';

export default {
    component: VsBackToTop,
    title: 'Components/Navigation/BackToTop',
};

const Template = (args) => ({
    components: {
        VsBackToTop,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <div>
                <p>Scroll down the to see the back to top button.</p>
                <div style="height:2000px"></div>
                
                <VsBackToTop v-bind="args" />
            </div>
        </div>
    `,
});

const base = {
    'button-text': 'Back to top',
};

export const Default = Template.bind();
Default.args = base;

export const NoJavascript = Template.bind();
NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
