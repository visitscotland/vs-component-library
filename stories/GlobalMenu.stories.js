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
        <VsGlobalMenu
            v-bind="args"
        >
            <template v-slot:third-menu-item>
                <VsGlobalMenuLanguage>
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
    `,
});

const base = {
    dropdownLabel: 'Our websites',
    activeSite: 'https://www.visitscotland.com/',
    'second-menu-item': '',
    'third-menu-item': '',
};

export const Default = Template.bind({
});

Default.args = base;