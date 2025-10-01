import { userEvent, within } from 'storybook/test';
import VsDropdown from '@/components/dropdown/Dropdown.vue';
import VsDropdownItem from '@/components/dropdown/components/DropdownItem.vue';
import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsDropdown,
    title: 'Components/Actions & controls/Dropdown',
};

const Template = (args) => ({
    components: {
        VsDropdown,
        VsDropdownItem,
        VsIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsDropdown 
            v-bind="args" 
            data-testid="dropdown-btn"
        >   
            <template #button-content>
                <VsIcon
                    v-if="args.icon"
                    :icon="args.icon"
                    variant="inverse"
                    size="xs"
                    focusable="false"
                />
                {{ args.text }}
            </template>

            <VsDropdownItem title>English</VsDropdownItem>
            <VsDropdownItem>Deutsch</VsDropdownItem>
            <VsDropdownItem :active="args.isActive ? true : false">Español</VsDropdownItem>
            <VsDropdownItem >Français</VsDropdownItem>
            <VsDropdownItem>Italiano</VsDropdownItem>
            <VsDropdownItem>Nederlands</VsDropdownItem>
        </VsDropdown>
    `,
});

const base = {
    text: 'Language',
};

export const Primary = Template.bind({
});

Primary.args = base;

export const Secondary = Template.bind();
Secondary.args = {
    ...base,
    variant: 'secondary',
};

export const MenuOpen = Template.bind({
});

MenuOpen.args = base;

MenuOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = within(canvas.getByTestId('dropdown-btn')).getByRole('button');
    await userEvent.click(button);
};

export const Active = Template.bind({
});

Active.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = within(canvas.getByTestId('dropdown-btn')).getByRole('button');
    await userEvent.click(button);
};

Active.args = {
    ...base,
    isActive: true,
};

export const WithIcon = Template.bind({
});

WithIcon.args = {
    ...base,
    icon: 'fa-regular fa-globe',
};
