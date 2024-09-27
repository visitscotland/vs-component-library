import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsHeading from '@/components/heading/Heading.vue';
import { VsContainer } from '@/components';

export default {
    component: VsHeroSection,
    parameters: {
        layout: 'fullscreen',
    },
    title: 'Hero',
    tags: ['autodocs'],
    argTypes: {
        inset: {
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        heading: {
            control: {
                type: 'input',
            },
        },

    },
};

const belowFoldContent = `
        <VsContainer class="mt-300">
            <VsHeading level="2">Holding out for a hero</VsHeading>
            <p>
                Where have all the good men gone<br>
                And where are all the gods?<br>
                Where's the streetwise Hercules<br>
                To fight the rising odds?<br>
            </p>
            <p>
                Isn't there a white knight upon a fiery steed<br>
                Late at night, I toss and I turn<br>
                And I dream of what I need<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the end of the night<br>
                He's gotta be strong, and he's gotta be fast<br>
                And he's gotta be fresh from the fight<br>
            <p>
            </p>
                I need a hero<br>
                I'm holding out for a hero 'til the morning light<br>
                He's gotta be sure, and it's gotta be soon<br>
                And he's gotta be larger than life
                Larger than life<br>
            <p>
            </p>
                Somewhere after midnight<br>
                In my wildest fantasy<br>
                Somewhere, just beyond my reach<br>
                There's someone reaching back for me<br>
            </p>
            <p>
                Racing on the thunder<br>
                And rising with the heat<br>
                It's gonna take a Superman to sweep me off my feet, yeah<br>
            </p>
            <p>
                I need a hero<br><br>
                I'm holding out for a hero 'til the end of the night<br><br>
                He's gotta be strong, and he's gotta be fast<br><br>
                And he's gotta be fresh from the fight<br><br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the morning light<br>
                He's gotta be sure, and it's gotta be soon<br>
                And he's gotta be larger than life<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the end of the night<br>
            </p>
            <p>
                Up where the mountains meet the heavens above<br>
                Out where the lightning splits the sea
                I could swear there is someone, somewhere watching me<br>
                Through the wind and the chill and the rain<br>
                And the storm and the flood<br>
            </p>
            <p>
                I can feel his approach like a fire in my blood<br>
                (Like a fire in my blood, like a fire in my blood<br>
                Like a fire in my blood, like a fire in my blood, blood)<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the end of the night<br>
                He's gotta be strong, and he's gotta be fast<br>
                And he's gotta be fresh from the fight<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the morning light<br>
                He's gotta be sure, and it's gotta be soon<br>
                And he's gotta be larger than life<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the end of the night<br>
                He's gotta be strong, and he's gotta be fast<br>
                And he's gotta be fresh from the fight<br>
            <p>
            </p>
                I need a hero<br>
                I'm holding out for a hero 'til the morning light<br>
                He's gotta be sure, and it's gotta be soon<br>
                And he's gotta be larger than life<br>
            </p>
            <p>
                I need a hero<br>
                I'm holding out for a hero 'til the end of the night<br>
            </p>
        </VsContainer>
`;

const Template = (args) => ({
    components: {
        VsHeroSection,
        VsHeading,
        VsContainer,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsHeroSection v-bind="args" />
        ${ belowFoldContent }
    `,
});

const base = {
    heading: 'Scotland, the biggest wee country in the world',
    lede: 'Welcome to Scotland, where history meets breathtaking beauty, and every visit feels like home.',
};

export const NoImage = Template.bind({
});

NoImage.args = base;

export const FullBleed = Template.bind({
});

FullBleed.args = {
    ...base,
    src: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
};

export const Inset = Template.bind({
});

Inset.args = {
    ...base,
    src: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
    inset: true,
};
