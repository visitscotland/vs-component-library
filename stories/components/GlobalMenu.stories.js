import { userEvent, within } from 'storybook/test';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import VsGlobalMenuLanguage from '@/components/global-menu/components/GlobalMenuLanguage.vue';
import VsGlobalMenuLanguageItem from '@/components/global-menu/components/GlobalMenuLanguageItem.vue';

export default {
    component: VsGlobalMenu,
    title: 'Components/Deprecated/GlobalMenu',
    tags: ['deprecated'],
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
        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
        ⚠️ Deprecated: This pattern is no longer supported. Use the Navigation Bar instead. This component will be removed in a future release.
        See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1157562370/Global+Menu+deprecated">Component migration docs.</a> 
        </div>

        <div
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <VsGlobalMenu
                v-bind="args"
            >
                <template
                    v-slot:third-menu-item
                    v-if="!args.noLanguages"
                >
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

export const NoLanguages = Template.bind({
});

NoLanguages.args = {
    ...base,
    noLanguages: true,
};
