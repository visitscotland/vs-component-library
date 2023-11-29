import VsList from '@/components/list/List.vue';

export default {
    component: VsList,
    title: 'Elements/List',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsList,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsList v-bind="args">
            ${args.default}
        </VsList>
    `,
});

const base = {
    default: `<li>Follow the Scottish Outdoor Access Code</li>
    <li>Leave no trace</li>
    <li>Use a stove rather than an open fire</li>`,
    ordered: false,
    unstyled: false,
    inline: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const NestedUnordered = Template.bind({
});

NestedUnordered.args = {
    ...base,
    default: ` <li>Follow the Scottish Outdoor Access Code:
        <VsList>
            <li>Respecting others</li>
            <li>Caring for the environment</li>
            <li>Taking responsibility for your actions</li>
        </VsList>
    </li>
    <li>Leave no trace</li>
    <li>Use a stove rather than an open fire</li>`,
};

export const Ordered = Template.bind({
});

Ordered.args = {
    ...base,
    ordered: true,
};

export const NestedOrdered = Template.bind({
});

NestedOrdered.args = {
    ...base,
    default: ` <li>Follow the Scottish Outdoor Access Code:
        <VsList ordered>
            <li>Respecting others</li>
            <li>Caring for the environment</li>
            <li>Taking responsibility for your actions</li>
        </VsList>
    </li>
    <li>Leave no trace</li>
    <li>Use a stove rather than an open fire</li>`,
    ordered: true,
};

export const Inline = Template.bind({
});

Inline.args = {
    ...base,
    default: `<li class="mr-7">Car</li>
    <li class="mr-7">Ferry</li>
    <li class="mr-7">Bike</li>
    <li class="mr-7">Plane</li>
    <li class="mr-7">Walk</li>`,
    inline: true,
};
