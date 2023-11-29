import VsDropdown from '@/components/dropdown/Dropdown.vue';
import VsDropdownItem from '@/components/dropdown/components/DropdownItem.vue';

export default {
    component: VsDropdown,
    title: 'Patterns/Dropdown',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsDropdown,
        VsDropdownItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsDropdown v-bind="args">
            <VsDropdownItem title>English</VsDropdownItem>
            <VsDropdownItem>Deutsch</VsDropdownItem>
            <VsDropdownItem>Español</VsDropdownItem>
            <VsDropdownItem>Français</VsDropdownItem>
            <VsDropdownItem>Italiano</VsDropdownItem>
            <VsDropdownItem>Nederlands</VsDropdownItem>
        </VsDropdown>
    `,
});

const base = {
    text: 'Language (EN)',
};

export const Default = Template.bind({
});

Default.args = base;
