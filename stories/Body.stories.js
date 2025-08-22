import VsBody from '@/components/body/Body.vue';
import VsLink from '@/components/link/Link.vue';
import VsHeading from '@/components/heading/Heading.vue';

export default {
    component: VsBody,
    title: 'Components/Text & typography/Body',
    argTypes: {
        variant: {
            options: [
                'normal',
                'lead',
            ],
            control: {
                type: 'radio',
            },
        },
    },
    decorators: [() => ({
        template: '<div style="max-width: 750px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsBody,
        VsLink,
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsBody v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsBody>
    `,
});

export const Default = Template.bind({
});

Default.args = {
    default: `
        <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
    `,
};

export const Lead = Template.bind({
});

Lead.args = {
    default: `
        <p>Ben Nevis is the king of them all. In the north west <a href='#' class="external-link">Highlands</a>, near the town of <a href='#'>Fort William</a> and part of the <a href='#'>Grampian Mountain</a> range, the famous peak attracts 125k walkers a year. Whether you're an avid ambler or you just love beautiful landscapes, bagging 'the Ben' is likely to feature near the top of your Scottish bucket list.</p>
    `,
    variant: 'lead',
};

export const NoMargins = Template.bind({
});

NoMargins.args = {
    default: `
    <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
    `,
    noMargins: true,
};

export const WithRichText = Template.bind({
});

WithRichText.args = {
    default: `
        <h2>
            Experiencing Ben Nevis
        </h2>
        <p>Ben Nevis is the king of them all. In the north west <a href='#' class="external-link">Highlands</a>, near the town of <a href='#'>Fort William</a> and part of the <a href='#'>Grampian Mountain</a> range, the famous peak attracts 125k walkers a year. Whether you're an avid ambler or you just love beautiful landscapes, bagging 'the Ben' is likely to feature near the top of your Scottish bucket list.</p>
        <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
        
        <h3>
            More information
        </h3>
        <p>Read on for an overview of walking routes up the mountain, or visit <a href='#'>Walk Highlands</a> for detailed maps, difficulty levels and walking advice.</p>
        <p>Remember it's never 'easy' to bag a Scottish Munro or Corbett. You'll need a good amount of hillwalking experience, fitness, hill craft and Components/Navigation skills using a map and compass, before attempting any Scottish mountains, even more so in winter.</p>
        
        <h4>
            Did you know? 
        </h4>
        <p>Mauris lacus elit, ultrices eu est eget, tempor viverra leo. Aenean ut lacinia sem. Nam vitae orci ante. Morbi sed diam iaculis, sodales risus ac, tincidunt massa. </p>
        <p>Proin eu purus ex. Nulla ipsum nisi, consequat eget justo non, feugiat porttitor leo. Ut vitae augue ultricies, tristique sem finibus, facilisis massa.</p>

        <h4>Even more information</h4>
        <p>Proin fringilla rutrum eros, ac fermentum nulla. Donec ultricies sit amet nisi in sagittis. Donec accumsan enim non tortor tempus, id fringilla justo sodales.</p>
        
        <h5>Frequently asked questions</h5>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas sit amet dignissim nulla. Maecenas tristique mauris eget sem pellentesque, vitae lacinia ex efficitur</li>
            <li>Proin a leo erat. Pellentesque aliquet orci nulla. Integer commodo tristique gravida.</li>
        </ul>

        <h6>More questions</h6>
        <ol>
            <li>Vestibulum id ante commodo, tincidunt lacus sed, pellentesque ipsum. Nulla commodo feugiat molestie. Nulla aliquam, justo quis pellentesque fringilla, orci felis dictum nibh</li>
            <li>Curabitur efficitur odio tellus, quis tristique purus rhoncus sit amet. Aliquam erat volutpat.</li>
            <li>Etiam maximus, tellus vel eleifend vulputate, risus orci malesuada massa, sit amet accumsan nunc erat et magna. Vestibulum eget est mauris. </li>
        </ol>
    `,
};
