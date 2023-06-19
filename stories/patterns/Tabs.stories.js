import { BTab } from 'bootstrap-vue-next';
import VsTabs from '@/components/patterns/tabs/Tabs.vue';
import VsTabItem from '@/components/patterns/tabs/components/TabItem.vue';

export default {
    component: VsTabs,
    title: 'Patterns/Tabs',
    tags: ['autodocs'],
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
        <VsTabs v-bind="args">
            <BTab title="First" active>
                <VsTabItem title="First">
                    <div class="px-5 py-4">
                        <p>I'm the first tab</p>
                    </div>
                </VsTabItem>
            </BTab>
            <BTab title="Second">
                <VsTabItem title="Second">
                    <div class="px-5 py-4">
                        <p>I'm the second tab</p>
                    </div>
                </VsTabItem>
            </BTab>
            <BTab title="Disabled" disabled>
                <VsTabItem title="Disabled">
                    <div class="px-5 py-4">
                        <p>I'm a disabled tab</p>
                    </div>
                </VsTabItem>
            </BTab>
            <BTab title="Fourth">
                <VsTabItem title="Fourth">
                    <div class="px-5 py-4">
                        <p>I'm the fourth tab</p>
                    </div>
                </VsTabItem>
            </BTab>
        </VsTabs>
    `,
});

const base = {
};

export const Default = Template.bind({
});

Default.args = base;
