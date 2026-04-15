const files = import.meta.glob('../assets/svg/**/*.svg', {
    query: '?raw',
    import: 'default',
});

const newFiles = {
};

// eslint-disable-next-line no-restricted-syntax
for (const [key, value] of Object.entries(files)) {
    const newKey = key.replace('../assets/svg', '.');
    newFiles[newKey] = value;
}

const output = newFiles;

export default output;
