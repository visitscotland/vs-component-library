import VsCookieFallback from '@/components/elements/cookie-fallback/CookiesFallback.vue';

export default {
    component: VsCookieFallback,
    title: 'Elements/CookieFallback',
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
        <VsCookieFallback v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsCookieFallback>
    `,
});

const base = {
};

export const Default = Template.bind({
});

Default.args = base;
