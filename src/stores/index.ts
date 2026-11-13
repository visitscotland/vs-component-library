import { createPinia, type Pinia } from 'pinia';

// Standalone apps and SSR requests must each own their store state.
const pinia = (): Pinia => createPinia();

export default pinia;
