import VsIcon from '@/components/elements/icon/Icon.vue';
import * as propTypes from 'prop-types';

export default {
    component: VsIcon,
    title: 'Elements/Icon',
    argTypes: {
        size: {
            options: ["xxs","xs","sm","md","lg","xl"],
            control: { type: "select"}
        }
    }
};

const Template = args => ({
    components: { VsIcon },
    setup() {
        return { args };
    },
    template: `
        <VsIcon v-bind="$props"></VsIcon>
    `,
});

const base = {
    name: 'user',
    variant: null,
    customColour: null,
    orientation: null,
    size: 'md',
    smallSize: null,
}

export const Default = Template.bind({});

Default.args = {
    ...base
};

export const ColourVariant = Template.bind({});

ColourVariant.args = {
    ...base,
    variant: 'secondary',
};

export const CustomColour = Template.bind({});

CustomColour.args = {
    ...base,
    customColour: '#FF0000',
};

export const Orientation = Template.bind({});

Orientation.args = {
    ...base,
    orientation: 'xl',
};

export const Size = Template.bind({});

Size.args = {
    ...base,
    size: 'xl',
};

export const ResponsiveSize = Template.bind({});

ResponsiveSize.args = {
    ...base,
    size: 'xl',
    smallSize: 'xs',
};