import VsIcentre from '@/components/patterns/icentre/Icentre.vue';

export default {
    component: VsIcentre,
    title: 'Patterns/Icentre',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsIcentre,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsIcentre>
            <template v-slot:icentreQuote>
                Add Quote Here
            </template>

            <template v-slot:icentreLinks>
                <p>
                    Test content <a href="#">link</a>
                </p>
            </template>
        </VsIcentre>
    `,
});

// Missing both quote and ImagewithCaption while those are wip in another branch

const base = {
};

export const Default = Template.bind({
});

Default.args = base;
