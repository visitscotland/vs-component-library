import VsAddress from '@/components/address/Address.vue';

export default {
    component: VsAddress,
    title: 'Address',
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
        <VsAddress v-bind="args">
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
