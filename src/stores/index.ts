import {
    createPinia, Pinia, getActivePinia,
} from 'pinia';

let piniaInstance: Pinia|null = null;

const activePinia: Pinia|null = getActivePinia();

if (activePinia) {
    piniaInstance = activePinia;
}

const pinia = (): Pinia => {
    if (piniaInstance !== null) return piniaInstance;

    piniaInstance = createPinia();

    return piniaInstance;
};

export default pinia;
