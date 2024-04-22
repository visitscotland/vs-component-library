import { BTab } from 'bootstrap-vue-next';
import VsTabs from '@/components/tabs/Tabs.vue';
import VsTabItem from '@/components/tabs/components/TabItem.vue';

export default {
    component: VsTabs,
    title: 'Tabs',
    tags: ['autodocs'],
    decorators: [() => ({
        template: `
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10">
                        <story />
                    </div>
                </div>
            </div>`,
    })],
};

const Template = (args) => ({
    components: {
        VsTabs,
        VsTabItem,
        BTab,
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
            <VsTabs v-bind="args">
                <BTab title="Getting Here" active>
                    <VsTabItem title="Getting Here">
                        <div class="px-5 py-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer aliquet, nisi in volutpat tristique, 
                                nulla tellus faucibus diam, non suscipit dolor 
                                arcu vel quam. Cras varius enim vitae justo 
                                scelerisque tempor. Morbi laoreet convallis arcu, 
                                ac molestie neque finibus vitae. 
                            </p>
                        </div>
                    </VsTabItem>
                </BTab>
                <BTab title="Getting Around">
                    <VsTabItem title="Getting Around">
                        <div class="px-5 py-4">
                        <p>
                            Duis feugiat, turpis vitae congue lacinia, purus orci 
                            vulputate erat, vel fringilla quam eros sed tellus. 
                            Maecenas suscipit dignissim lacus vel tincidunt. 
                            Nam velit purus, pellentesque ut sem quis, lobortis 
                            pellentesque diam. 
                        </p>
                        </div>
                    </VsTabItem>
                </BTab>
                <BTab title="Where to Stay" :disabled="args.disabled ? true : false">
                    <VsTabItem title="Where to Stay">
                        <div class="px-5 py-4">
                        <p>
                            Vivamus blandit nec mi ut feugiat. Proin sit 
                            amet elit volutpat, pharetra justo at, eleifend dui. 
                            Vivamus venenatis consectetur sem, quis 
                            bibendum leo dictum in.
                        </p>
                        </div>
                    </VsTabItem>
                </BTab>
            </VsTabs>
        </div>
    `,
});

const base = {
    jsDisabled: false,
    disabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const DisabledTab = Template.bind({
});

DisabledTab.args = {
    ...base,
    disabled: true,
};

export const GreyTheme = Template.bind({
});

GreyTheme.args = base;

GreyTheme.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
