import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';

export default {
    component: VsBreadcrumbItem,
    title: 'Components/Navigation/Breadcrumb',
};

const Template = (args) => ({
    components: {
        VsBreadcrumb,
        VsBreadcrumbItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsBreadcrumb>
        <VsBreadcrumbItem 
            v-bind="args"
            v-for="( name, index ) in args.itemNames"
            key="index"
            :text="args.itemNames[index]"
        >
        </VsBreadcrumbItem>
    </VsBreadcrumb>
    `,
});

const base = {
    href: '#',
    active: false,
    text: '(Overridden by itemNames array)',
    ariaCurrent: 'Current Page',
    itemNames: [
        'Home',
        'Things to do',
        'Scottish Food & Drink',
        'Best seafood shacks',
    ],
};

export const Default = Template.bind({
});

Default.args = base;
