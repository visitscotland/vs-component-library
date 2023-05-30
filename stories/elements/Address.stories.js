import VsAddress from '@/components/elements/address/Address.vue';

export default {
    component: VsAddress,
    title: 'Elements/Address',
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsAddress,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsAddress v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsAddress>
    `,
});

const base = {
    default: '<span>Edinburgh Castle,</span>'
        + '<span>Castle Hill,</span>'
        + '<span>Edinburgh,</span>'
        + '<span>City of Edinburgh,</span>'
        + '<span>EH1 2NG</span>',
};

export const Default = Template.bind({
});

Default.args = base;