const getEnvValue = (key) => {
    if (process.env) {
        return process.env[key];
    }

    return import.meta.env[key];
};

export default getEnvValue;
