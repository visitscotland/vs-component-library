// This allows typescript files to consume vue SFCs properly and return the component.
// In particular this is necessary in stories and index files.

declare module '*.vue' {
    import { defineComponent } from 'vue';

    const component: ReturnType<typeof defineComponent>;
    export default component;
}
