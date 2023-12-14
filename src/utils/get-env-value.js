const getEnvValue = (key) => {
    if (process.env[key]) {
        return process.env[key];
    }

    return import.meta.env[key];
};

export default getEnvValue;
