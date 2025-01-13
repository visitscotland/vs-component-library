import VsBackToTop from '@/components/back-to-top/BackToTop.vue';

export default {
    component: VsBackToTop,
    title: 'BackToTop',
    decorators: [() => ({
        template: '<div style="position: relative;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsBackToTop,
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
            <div style="height:100px;width:100%;backgroundColor:rebeccapurple"></div>
            <main style="position:relative">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel felis vel nibh gravida tincidunt. Nam consequat velit metus, sed posuere quam egestas vitae. Curabitur bibendum lectus sed neque convallis, at molestie ex posuere. Aenean tincidunt blandit finibus. Proin venenatis id lectus id ultrices. Quisque nisl tellus, tempor sit amet magna vulputate, gravida egestas dolor. Duis risus enim, maximus a condimentum et, aliquet quis ipsum. Vivamus gravida, nibh et pulvinar gravida, est turpis scelerisque nisi, ultricies pretium lacus magna vitae augue. Nulla facilisi. In ac lorem vel lorem facilisis tincidunt. In hac habitasse platea dictumst. Duis at felis vel massa volutpat consequat. Mauris felis neque, gravida cursus fermentum in, molestie sit amet felis.</p>

                <p>Nam aliquet enim ut sodales accumsan. Phasellus sit amet tempor mauris. Vestibulum egestas, velit id tristique volutpat, nibh augue scelerisque dolor, id varius ipsum ligula id justo. Praesent quis arcu arcu. Proin molestie, lorem laoreet maximus aliquet, dolor turpis interdum nibh, id ullamcorper tortor lacus eu lectus. Maecenas tempor semper sem sit amet pulvinar. Mauris sit amet nulla sodales, vulputate nisl at, rutrum justo. Donec tempor luctus nisl sed vehicula. Duis nec metus a sapien tincidunt commodo. Donec vitae facilisis quam.</p>

                <p>Sed urna lorem, elementum non varius non, suscipit vel felis. Nulla convallis et arcu id ornare. Pellentesque maximus arcu magna, congue pellentesque eros condimentum id. Vivamus orci augue, laoreet vitae condimentum non, ultricies sit amet velit. Pellentesque molestie accumsan elit, in sodales massa rutrum vel. Nulla et elit eget velit blandit suscipit at et nunc. Ut efficitur imperdiet nisl, eu faucibus leo sollicitudin ut. Maecenas aliquet quam sit amet ex lobortis, a bibendum justo vestibulum. Quisque sagittis vel purus vel pharetra. Morbi vehicula, felis maximus finibus mattis, nisi orci cursus urna, ac rutrum quam purus et diam. Etiam turpis felis, laoreet vestibulum congue sed, efficitur sit amet leo. Nulla elementum vestibulum massa id accumsan. Nunc nec iaculis orci, et rhoncus elit. In euismod quis tortor ut tincidunt. Integer sit amet dui purus. Ut aliquam eget metus nec egestas.</p>

                <p>Ut eget feugiat tellus. Mauris diam enim, rhoncus sed arcu eget, eleifend elementum risus. Fusce in malesuada erat. Vivamus volutpat dapibus laoreet. Curabitur rutrum, sapien ut maximus efficitur, metus diam vulputate lectus, in dictum purus augue sagittis felis. Proin quis nisi id nibh tincidunt egestas. Duis id ante eu purus accumsan porta. Donec porttitor felis eu elit dignissim, vitae tincidunt dui cursus. Pellentesque a sem quis risus interdum ultrices. Donec fermentum elementum odio sollicitudin sodales. Mauris imperdiet elementum erat, commodo consectetur neque tristique vitae. Sed vitae orci nibh.</p>

                <p>Suspendisse porta neque id eleifend ullamcorper. Nullam ut suscipit leo, vel ultrices mauris. Maecenas pharetra maximus bibendum. Aliquam id condimentum augue, eu blandit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat metus maximus, luctus metus sit amet, congue orci. Quisque scelerisque, ipsum gravida blandit blandit, lectus eros imperdiet turpis, sed congue velit elit eu orci. Vestibulum in dolor dolor. Duis mattis sem odio, ac venenatis sapien molestie ac. Aliquam a condimentum lectus. Nam vel nisi in nisi aliquam gravida id vitae lectus. Proin auctor lectus eget finibus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mattis urna et quam tempus varius vel et mi. Sed diam justo, convallis at consectetur sed, suscipit id augue.</p>

                <p>Ut eget feugiat tellus. Mauris diam enim, rhoncus sed arcu eget, eleifend elementum risus. Fusce in malesuada erat. Vivamus volutpat dapibus laoreet. Curabitur rutrum, sapien ut maximus efficitur, metus diam vulputate lectus, in dictum purus augue sagittis felis. Proin quis nisi id nibh tincidunt egestas. Duis id ante eu purus accumsan porta. Donec porttitor felis eu elit dignissim, vitae tincidunt dui cursus. Pellentesque a sem quis risus interdum ultrices. Donec fermentum elementum odio sollicitudin sodales. Mauris imperdiet elementum erat, commodo consectetur neque tristique vitae. Sed vitae orci nibh.</p>

                <p>Suspendisse porta neque id eleifend ullamcorper. Nullam ut suscipit leo, vel ultrices mauris. Maecenas pharetra maximus bibendum. Aliquam id condimentum augue, eu blandit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat metus maximus, luctus metus sit amet, congue orci. Quisque scelerisque, ipsum gravida blandit blandit, lectus eros imperdiet turpis, sed congue velit elit eu orci. Vestibulum in dolor dolor. Duis mattis sem odio, ac venenatis sapien molestie ac. Aliquam a condimentum lectus. Nam vel nisi in nisi aliquam gravida id vitae lectus. Proin auctor lectus eget finibus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mattis urna et quam tempus varius vel et mi. Sed diam justo, convallis at consectetur sed, suscipit id augue.</p>

                <p>Suspendisse porta neque id eleifend ullamcorper. Nullam ut suscipit leo, vel ultrices mauris. Maecenas pharetra maximus bibendum. Aliquam id condimentum augue, eu blandit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat metus maximus, luctus metus sit amet, congue orci. Quisque scelerisque, ipsum gravida blandit blandit, lectus eros imperdiet turpis, sed congue velit elit eu orci. Vestibulum in dolor dolor. Duis mattis sem odio, ac venenatis sapien molestie ac. Aliquam a condimentum lectus. Nam vel nisi in nisi aliquam gravida id vitae lectus. Proin auctor lectus eget finibus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mattis urna et quam tempus varius vel et mi. Sed diam justo, convallis at consectetur sed, suscipit id augue.</p>

                <p>Ut eget feugiat tellus. Mauris diam enim, rhoncus sed arcu eget, eleifend elementum risus. Fusce in malesuada erat. Vivamus volutpat dapibus laoreet. Curabitur rutrum, sapien ut maximus efficitur, metus diam vulputate lectus, in dictum purus augue sagittis felis. Proin quis nisi id nibh tincidunt egestas. Duis id ante eu purus accumsan porta. Donec porttitor felis eu elit dignissim, vitae tincidunt dui cursus. Pellentesque a sem quis risus interdum ultrices. Donec fermentum elementum odio sollicitudin sodales. Mauris imperdiet elementum erat, commodo consectetur neque tristique vitae. Sed vitae orci nibh.</p>

                <p>Suspendisse porta neque id eleifend ullamcorper. Nullam ut suscipit leo, vel ultrices mauris. Maecenas pharetra maximus bibendum. Aliquam id condimentum augue, eu blandit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec feugiat metus maximus, luctus metus sit amet, congue orci. Quisque scelerisque, ipsum gravida blandit blandit, lectus eros imperdiet turpis, sed congue velit elit eu orci. Vestibulum in dolor dolor. Duis mattis sem odio, ac venenatis sapien molestie ac. Aliquam a condimentum lectus. Nam vel nisi in nisi aliquam gravida id vitae lectus. Proin auctor lectus eget finibus laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mattis urna et quam tempus varius vel et mi. Sed diam justo, convallis at consectetur sed, suscipit id augue.</p>
                
                <VsBackToTop />
            </main>
            
            <div style="height:100px;width:100%;backgroundColor:rebeccapurple"></div>
        </div>
    `,
});

const base = {
    default: 'This guide is only for visitors living outside the UK.',
};

export const Default = Template.bind();
Default.args = base;

export const NoJavascript = Template.bind();
NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
