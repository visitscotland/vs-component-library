import VsBreadcrumb from '@/components/patterns/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/patterns/breadcrumb/components/BreadcrumbItem.vue';

export default {
    component: VsBreadcrumbItem,
    title: 'Patterns/Breadcrumb',
    tags: ['autodocs'],
    argTypes: {
    },
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
