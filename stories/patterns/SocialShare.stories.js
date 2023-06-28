import VsSocialShare from '@/components/patterns/social-share/SocialShare.vue';
import VsSocialShareItem from '@/components/patterns/social-share/components/SocialShareItem.vue';

export default {
    component: VsSocialShare,
    title: 'Patterns/Social Share Button',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSocialShare,
        VsSocialShareItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <div class="d-flex justify-content-end my-3 mx-3">
      <VsSocialShare
        id="default"
        page-url="http://www.visitscotland.com"
        page-title="VisitScotland - Scotland's National Tourist Organisation"
        share-popover-title="Share On"
        share-btn-text="Share"
        close-alt-text="Close"
      >  
          <VsSocialShareItem
              name="facebook"
              link-text="Facebook"
          />
          <VsSocialShareItem
            name="pinterest"
            link-text="Pinterest"
          />
          <VsSocialShareItem
            name="whatsapp"
            link-text="WhatsApp"
          />
          <VsSocialShareItem
            name="twitter"
            link-text="Twitter"
          />
          <VsSocialShareItem
            name="email"
            link-text="Email"
          />
          <VsSocialShareItem
            @copyLinkClicked="onCopyLink"
            name="link"
            link-text="Copy Link"
            link-copied-text="Link Copied!"
          />
      </VsSocialShare>
    </div>
    `,
});

const base = {
    id: 'default',
    'page-url': 'http://www.visitscotland.com',
    'page-title': 'VisitScotland - Scotland\'s National Tourist Organisation',
    'share-popover-title': 'Share On',
    'share-btn-text': 'Share',
    'close-alt-text': 'Close',
};

export const Default = Template.bind({
});

Default.args = base;
