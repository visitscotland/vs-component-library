import VsMap from '@/components/map/Map.vue';
import placesData from '@/assets/fixtures/maps/places-data.json';

export default {
    component: VsMap,
    title: 'Components/Deprecated/Map',
    tags: ['deprecated'],
};

const Template = (args) => ({
    components: {
        VsMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `

        <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
            ⚠️ Deprecated: Use new Google Map component instead.
            This component will be removed in a future release. 
            See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1354137643/Map+deprecated">Component migration docs.</a> 
        </div>
    
        <div
            :class="args.jsDisabled ? 'no-js' : ''"
            :style="!args.jsDisabled ? 'height: 75vh; width: 600px' : ''"
        >
            <VsMap
                v-bind="args"
                :class="args.jsDisabled ? 'no-js' : ''"
            >
                <template v-slot:map-loading-text>
                    Loading
                </template>
                <template v-slot:info-message>
                    Test
                </template>
                <template v-slot:zoom-too-close>
                    We're sorry, you can't zoom in any more
                </template>
                <template v-slot:zoom-too-far>
                    We're sorry, you can't zoom out any more
                </template>
                <template v-slot:no-js>
                    You need Javascript enabled to see this map
                </template>
            </VsMap>
        </div>
    `,
});

const base = {
    mapId: 'vs-map',
    isVisible: true,
    places: placesData.features,
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
