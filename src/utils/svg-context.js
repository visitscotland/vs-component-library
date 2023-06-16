import requireContext from 'require-context.macro';

let files = null;

// Jest doesn't handle the resourceQueried path properly through webpack and errors

if (typeof jest !== 'undefined') {
    files = requireContext('../assets/svg', true, /^\.\/.*\.svg$/);
} else if (import.meta && import.meta.env) {
    files = import.meta.glob('../assets/svg/**/*.svg', {
        as: 'raw',
    });

    const newFiles = {
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(files)) {
        const newKey = key.replace('../assets/svg', '.');
        newFiles[newKey] = value;
    };

    files = newFiles;
} else {
    files = requireContext('../assets/svg?optimise', true, /^\.\/.*\.svg$/);
}

const output = files;

export default output;
