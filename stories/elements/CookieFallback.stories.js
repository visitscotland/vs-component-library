import VsCookieFallback from '@/components/cookie-fallback/CookiesFallback.vue';

export default {
    component: VsCookieFallback,
    title: 'CookieFallback',
    tags: ['autodocs'],
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsCookieFallback,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCookieFallback v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsCookieFallback>
    `,
});

const base = {
    fallbackMessage: 'Cookies are required to view this content. <br/> Change your preferences at ',
};

export const Default = Template.bind({
});

Default.args = base;
