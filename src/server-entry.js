import { initApp } from '@/main';

export default async() => {
    const { app } = initApp({

    }, true);

    return app;
};
