import VsStyledList from '@/components/styled-list/StyledList.vue';
import VsStyledListItem from '@/components/styled-list/components/StyledListItem.vue';

export default {
    component: VsStyledList,
    title: 'StyledList',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'icon',
                'numbered',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsStyledList,
        VsStyledListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsStyledList v-bind="args">
                <VsStyledListItem
                v-for="(item, index) in args.listItems"
                :key="index"
                :heading="item.heading"
                :imageSrc="item.imageSrc ? item.imageSrc : null"
                :variant="args.variant"
                :heading-level="args.headingLevel"
            >
                <div v-html="item.content" />
            </VsStyledListItem>
        </VsStyledList>
    `,
});

export const WithIcon = Template.bind({
});

WithIcon.args = {
    variant: 'icon',
    listItems: [
        {
            heading: 'Showcase your excellence',
            content: `
                <p>Being a Taste Our Best business means that you can be easily identified as a provider of high quality, locally sourced food and drink. This is something that we'll help support throughout our marketing.</p>
            `,
        },
        {
            heading: 'Important to visitors',
            content: `
                <p>Food tourism is a key part of the visitor experience, with 66% of our visitors telling us that food is important when choosing a holiday destination.</p>
                <p><a href="#">Read our food and drink insights to find out more</a>.</p>
            `,
        },
        {
            heading: 'Supporting seasonality',
            content: `
                <p>Promoting Scottish produce in season not only meets our visitor preferences. Local food can provide freshness, reduce food miles, and offer benefits to local farmers and communities. That's not all - seasonal food can be tastier for diners and be more affordable to serve for businesses.</p>
            `,
        },
    ],
    headingLevel: 3,
};

export const Numbered = Template.bind({
});

Numbered.args = {
    variant: 'numbered',
    listItems: [
        {
            heading: 'Review the guidance',
            content: `
                <p>Take a look at out Taste Our Best criteria for your type of business, so you are aware of what our team will be looking for when assessing your business. Don't worry if you're not sure if you can meet all the requirements, we can offer you guidance that's right for you business.</p>
                <p>If you have any queries, our team can help and provide advice on what will work best for you. Get in touch with us at <a href='#'>customer.services@visitscotland.com</a>.</p>
                <p>Be sure to check you <a href='#'>agree to our schedule of conditions</a>.</p>
            `,
        },
        {
            heading: 'View participation fees',
            content: `
                <p>Our annual fees relating to your Taste Our Best standalone membership are based on the type of food business you run. They range from just over £55 + vat for a takeaway to just over £134 + vat for a restaurant or bar.</p>
                <p>Find our full range of fees in the Taste Our Best membership section of the following download.</p>
            `,
        },
        {
            heading: 'Complete your application',
            content: `
                <p>A Taste Our Best accreditation assessment is an added benefit of our Quality Assurance Scheme, so existing members won't need to sign up separately. You can also apply for Taste Our Best as a standalone service.</p>
                <p>Once you've signed up you will receive a welcome call from our Quality Assurance team. They will talk you through the process and explain how your first live grading visit will work before we see you in person. You'll also have the chance to ask us any questions you might have.</p>
                <p>Are you already a member of our Quality Assurance Scheme? Then you do not need to make an application. As a Taste Our Best accreditation assessment is already included as a benefit of your membership.</p>
            `,
        },
        {
            heading: 'The visit',
            content: `
                <p>We will come and eat at your establishment as a regular diner would, taking the form of an incognito visit.</p>
                <p>At a time convenient to you, our Quality and Tourism Advisor will offer their expert advice and feedback specific to your business, and let you know if you have been successful in achieving the Taste our Best award.</p>
                <p>This is a valuable opportunity to gain insights and tailored one-to-one advice about the visitor journey your business is offering.</p>
            `,
        },
        {
            heading: 'Your award',
            content: `
                <p>Following your Taste Our Best assessment visit you will receive confirmation of your award by email, along with a detailed report containing tailored advice and guidance.</p>
                <p>You will also be provided with an award certificate and electronic logos so that you can shout about your new Taste Our Best Award.</p>
                <p><a href="#">Read more about how to make the most of your award</a>.</p>
            `,
        },
    ],
};

export const WithImage = Template.bind({
});

WithImage.args = {
    variant: 'image',
    listItems: [
        {
            heading: 'New',
            imageSrc: 'fixtures/styled-list/swot-opportunities.svg',
            content: `
                <p>Originality for young travellers means providing new opportunities or reviving and refreshing existing traditions and brands so that young travellers feel they are discovering them for the first time.</p>
            `,
        },
        {
            heading: 'Value for money',
            imageSrc: 'fixtures/styled-list/investment.svg',
            content: `
                <p>Affordability is key, particularly when income may not match the desire for new experiences. Young travellers are adept at seeking out deals and signing up to offers that keep them "in the know".</p>
                <p>Those without children can be agile and spontaneous. They're able to take advantage of last-minute opportunities.</p>
            `,
        },
        {
            heading: 'Braggable',
            imageSrc: 'fixtures/styled-list/messages-of-support.svg',
            content: `
                <p>Being seen as "ahead of the curve" is important to young travellers, allowing them to feel like a leader rather than a follower.</p>
                <p>Reframing an experience (staying in a log cabin rather than a hotel for example) means "bragging rights" are rooted in a genuinely differentiated experience rather than simply ticking off a destination.</p>
            `,
        },
        {
            heading: 'Unique',
            imageSrc: 'fixtures/styled-list/innovation.svg',
            content: `
                <p>Younger people want a deeper level of involvement when they travel.</p>
                <p>They often seek out experiences that are unique to the destination. These may not be particularly unusual, but are different to normal behaviour and different from previous (and future) holidays.</p>
            `,
        },
    ],
};

export const WithImageHorizontal = Template.bind({
});

WithImageHorizontal.args = {
    variant: 'image-horizontal',
    listItems: [
        {
            imageSrc: 'fixtures/styled-list/outdoor-access.svg',
            heading: '70%',
            content: '<p>of visitors stated scenery and landscape.</p>',
        },
        {
            imageSrc: 'fixtures/styled-list/calton-hill.svg',
            heading: '48%',
            content: '<p>of visitors mentioned Scotland\'s history and culture.</p>',
        },
        {
            imageSrc: 'fixtures/styled-list/cycling.svg',
            heading: '27%',
            content: '<p>of visitors mentioned outdoor activities.</p>',
        },
        {
            imageSrc: 'fixtures/styled-list/staff-training.svg',
            heading: '22%',
            content: '<p>of visitors highlighted visiting friends and family.</p>',
        },
    ],
    source: 'Source: Scotland Visitor Survey, 2023',
};
