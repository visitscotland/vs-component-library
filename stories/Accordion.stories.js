import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsAccordionToggle from '@/components/accordion/components/AccordionToggle.vue';
import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsAccordion,
    title: 'Accordion',
    argTypes: {
        breakPoint: {
            options: [
                '',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                'xxl',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsAccordion,
        VsAccordionItem,
        VsAccordionToggle,
        VsIcon,
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
            <VsAccordion
                v-bind="args"
                :break-point="args.breakPoint"
            >
                <VsAccordionItem
                    v-for="accordionItem in args.accordionItems"
                    :open-by-default="accordionItem.openByDefault"
                    :variant="accordionItem.variant"
                    :control-id="accordionItem.controlId"
                    :colour-badge="accordionItem.colourBadge"
                    :heading-level="args.headingLevel"
                >
                    <template v-slot:title>
                        <VsIcon
                            v-if="accordionItem.icon"
                            :name="accordionItem.icon"
                            size="sm"
                            class="me-025"
                        />
                        {{ accordionItem.title }}
                    </template>

                    <div class="p-075" v-html="accordionItem.content" />
                </VsAccordionItem>
            </VsAccordion>
        </div>
    `,
});

const base = {
    accordionItems: [
        {
            openByDefault: true,
            controlId: 'accordion_item_1',
            title: 'Train',
            content: '<p><a href=https://www.scotrail.co.uk/plan-your-journey/stations-and-facilities/pth" target="_blank" rel="noopener noreferrer" title="" class="vs-link vs-link--variant-primary">Perth Railway Station<!----></a>&nbsp;offers direct links&nbsp;from&nbsp;<a href="https://www.visitscotland.com/destinations-maps/edinburgh/" target="_self" title="Edinburgh" class="vs-link vs-link--variant-primary">Edinburgh<!----></a>&nbsp;and&nbsp;<a href="/destinations-maps/glasgow/" target="_self" title="Glasgow" class="vs-link vs-link--variant-primary">Glasgow<!----></a>&nbsp;and neighbouring towns. A sleeper service direct from London is also available.</p>',
        },
        {
            controlId: 'accordion_item_2',
            title: 'Driving',
            content: '<p>The M90 from Edinburgh and the M80, M9 and A9 from Glasgow and Stirling offer the quickest routes into the Perthshire region.</p> <p><a href="https://www.perthcity.co.uk/section/explore-perthshire/travel-to-and-in-perthshire" target="_blank" rel="noopener noreferrer" class="vs-link vs-link--variant-primary">Travel to Perth<i data-test="vs-icon" class="ms-025 vs-link__icon fak fa-external-link vs-icon vs-icon--size-xxs vs-icon--external-link vs-icon--variant-primary"></i></a></p>',
        },
        {
            controlId: 'accordion_item_3',
            title: 'Flying',
            content: '<p>Perth\'s central location makes reaching it from the rest of the UK and beyond pretty simple. <a href="https://www.visitscotland.com/info/transport/glasgow-airport-gla-p267891" target="_self" class="vs-link vs-link--variant-primary">Glasgow Airport<i data-test="vs-icon" class="ms-025 vs-link__icon fak fa-external-link vs-icon vs-icon--size-xxs vs-icon--external-link vs-icon--variant-primary"></i></a> is located under an hour and a half\'s drive from Perthshire while <a href="https://www.visitscotland.com/info/transport/edinburgh-airport-p2534181" target="_self" class="vs-link vs-link--variant-primary">Edinburgh <i data-test="vs-icon" class="ms-025 vs-link__icon fak fa-external-link vs-icon vs-icon--size-xxs vs-icon--external-link vs-icon--variant-primary"></i></a>is just an hour and <a href="https://www.hial.co.uk/dundee-airport" target="_blank" rel="noopener noreferrer" class="vs-link vs-link--variant-primary">Dundee Airport<i data-test="vs-icon" class="ms-025 vs-link__icon fak fa-external-link vs-icon vs-icon--size-xxs vs-icon--external-link vs-icon--variant-primary"></i></a> is 30 minutes away. Travel time to Perthshire from <a href="https://www.aberdeenairport.com/" target="_blank" rel="noopener noreferrer" class="vs-link vs-link--variant-primary">Aberdeen Airport<i data-test="vs-icon" class="ms-025 vs-link__icon fak fa-external-link vs-icon vs-icon--size-xxs vs-icon--external-link vs-icon--variant-primary"></i></a> is around two hours.</p>',
        },
    ],
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const WithIcon = Template.bind({
});

WithIcon.args = {
    ...base,
    accordionItems: [
        {
            ...base.accordionItems[0],
            icon: 'walk',
        },
        {
            ...base.accordionItems[1],
            icon: 'car',
        },
        {
            ...base.accordionItems[2],
            icon: 'cycle',
        },
    ],
};

export const Responsive = Template.bind({
});

Responsive.args = {
    ...base,
    breakPoint: 'md',
};

export const ColourBadge = Template.bind({
});

ColourBadge.args = {
    ...base,
    accordionItems: [
        {
            ...base.accordionItems[0],
            openByDefault: false,
            colourBadge: '#04C852',
        },
        {
            ...base.accordionItems[1],
            colourBadge: '#122B80',
        },
        {
            ...base.accordionItems[2],
            colourBadge: '#E71845',
        },
    ],
};

export const OverrideHeadingLevel = Template.bind({

});

OverrideHeadingLevel.args = {
    ...base,
    headingLevel: 3,
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
