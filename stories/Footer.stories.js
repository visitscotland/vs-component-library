import { userEvent, within } from '@storybook/testing-library';
import VsIcon from '@/components/icon/Icon.vue';
import VsList from '@/components/list/List.vue';
import VsCol from '@/components/grid/Col.vue';

import VsFooter from '@/components/footer/Footer.vue';
import VsFooterAccordionItem from '@/components/footer/components/FooterAccordionItem.vue';
import VsFooterNavListItem from '@/components/footer/components/FooterNavListItem.vue';
import VsFooterSocialMenu from '@/components/footer/components/FooterSocialMenu.vue';
import VsFooterSocialItem from '@/components/footer/components/FooterSocialItem.vue';
import VsFooterUtilityList from '@/components/footer/components/FooterUtilityList.vue';
import VsFooterCopyright from '@/components/footer/components/FooterCopyright.vue';

export default {
    component: VsFooter,
    title: 'Footer',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsIcon,
        VsList,
        VsCol,
        VsFooter,
        VsFooterAccordionItem,
        VsFooterNavListItem,
        VsFooterSocialMenu,
        VsFooterSocialItem,
        VsFooterUtilityList,
        VsFooterCopyright,
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
        <VsFooter>
            <template v-slot:accordion-items>
                <VsCol
                    cols="12"
                    md="4"
                    lg="3"
                >
                    <VsFooterAccordionItem
                        title="Visitor information"
                        variant="dark"
                        control-id="footer_accordion_item_1"
                        class="border-start-0 ps-md-0"
                    >
                        <template v-slot:icon-open>
                            <VsIcon
                                name="chevron"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <template v-slot:icon-closed>
                            <VsIcon
                                name="chevron"
                                orientation="down"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <VsList 
                            unstyled
                            role="menu"
                        >
                            <VsFooterNavListItem
                                href="#"
                                link-text="Brochures"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland iCentres"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="iKnow Scotland Community"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland Awards"
                            />
                        </VsList>
                    </VsFooterAccordionItem>
                </VsCol>

                <VsCol
                    cols="12"
                    md="4"
                    lg="3"
                >
                    <VsFooterAccordionItem
                        title="Get in touch"
                        variant="dark"
                        data-testid="footer_accordion_item_2"
                        control-id="footer_accordion_item_2"
                    >
                        <template v-slot:icon-open>
                            <VsIcon
                                name="chevron"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <template v-slot:icon-closed>
                            <VsIcon
                                name="chevron"
                                orientation="down"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <VsList unstyled>
                            <VsFooterNavListItem
                                href="#"
                                link-text="Brochures"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland iCentres"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="iKnow Scotland Community"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland Awards"
                            />
                        </VsList>
                    </VsFooterAccordionItem>
                </VsCol>

                <VsCol
                    cols="12"
                    md="4"
                    lg="3"
                >
                    <VsFooterAccordionItem
                        title="Our other sites"
                        variant="dark"
                        control-id="footer_accordion_item_3"
                        class="border-bottom-0"
                    >
                        <template v-slot:icon-open>
                            <VsIcon
                                name="chevron"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <template v-slot:icon-closed>
                            <VsIcon
                                name="chevron"
                                orientation="down"
                                variant="light"
                                size="xs"
                            />
                        </template>

                        <VsList unstyled>
                            <VsFooterNavListItem
                                href="#"
                                link-text="Brochures"
                                type="external"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland iCentres"
                                type="external"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="iKnow Scotland Community"
                                type="external"
                            />
                            <VsFooterNavListItem
                                href="#"
                                link-text="VisitScotland Awards"
                                type="external"
                            />
                        </VsList>
                    </VsFooterAccordionItem>
                </VsCol>
            </template>

            <template v-slot:social-menu>
                <VsFooterSocialMenu>
                    <template v-slot:title>
                        Find us on
                    </template>

                    <VsFooterSocialItem
                        href="#"
                        icon="facebook"
                    />
                    <VsFooterSocialItem
                        href="#"
                        icon="twitter"
                    />
                    <VsFooterSocialItem
                        href="#"
                        icon="youtube"
                    />
                    <VsFooterSocialItem
                        href="#"
                        icon="instagram"
                    />
                </VsFooterSocialMenu>
            </template>

            <VsFooterUtilityList>
                <VsFooterNavListItem
                    href="#"
                    link-text="Accessibility"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Acceptable Use"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Privacy"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Cookies"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Social Media"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Environmental Policy"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="Terms of Use"
                />
                <VsFooterNavListItem
                    href="#"
                    link-text="About Us"
                />
            </VsFooterUtilityList>

            <VsFooterCopyright
                link-alt-text="Brand Scotland"
                href="https://www.scotland.org/"
            >
                <template v-slot:copyright>
                    <span>VisitScotland. All rights reserved.</span>
                </template>
            </VsFooterCopyright>
        </VsFooter>
    </div>
    `,
});

const base = {
    default: '',
    'accordion-items': '',
    'social-menu': '',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const FooterMobile = Template.bind({
});

FooterMobile.args = {
    ...base,
};

FooterMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const FooterMobileOpen = Template.bind({
});

FooterMobileOpen.args = {
    ...base,
};

FooterMobileOpen.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

FooterMobileOpen.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = within(canvas.getByTestId('footer_accordion_item_2')).getByRole('button');
    await userEvent.click(button);
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};

NoJavascript.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
