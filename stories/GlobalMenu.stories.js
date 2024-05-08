import { userEvent, within } from '@storybook/test';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import VsGlobalMenuLanguage from '@/components/global-menu/components/GlobalMenuLanguage.vue';
import VsGlobalMenuLanguageItem from '@/components/global-menu/components/GlobalMenuLanguageItem.vue';

export default {
    component: VsGlobalMenu,
    title: 'GlobalMenu',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsGlobalMenu,
        VsGlobalMenuLanguage,
        VsGlobalMenuLanguageItem,
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
            <VsGlobalMenu
                v-bind="args"
            >
                <template v-slot:third-menu-item>
                    <VsGlobalMenuLanguage
                        data-testid="language-btn"
                    >
                        <VsGlobalMenuLanguageItem languageName="English">
                        </VsGlobalMenuLanguageItem>
                        <VsGlobalMenuLanguageItem languageName="Deutsch">
                        </VsGlobalMenuLanguageItem>
                        <VsGlobalMenuLanguageItem languageName="Español">
                        </VsGlobalMenuLanguageItem>
                        <VsGlobalMenuLanguageItem languageName="Français">
                        </VsGlobalMenuLanguageItem>
                        <VsGlobalMenuLanguageItem languageName="Italiano">
                        </VsGlobalMenuLanguageItem>
                        <VsGlobalMenuLanguageItem languageName="Nederlands">
                        </VsGlobalMenuLanguageItem>
                    </VsGlobalMenuLanguage>
                </template>
            </VsGlobalMenu>
        </div>
    `,
});

const base = {
    dropdownLabel: 'Our websites',
    activeSite: 'https://www.visitscotland.com/',
    'second-menu-item': '',
    'third-menu-item': '',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const MenuOpen = Template.bind({
});

MenuOpen.args = base;

MenuOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = within(canvas.getByTestId('language-btn')).getByRole('button');
    await userEvent.click(button);
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
