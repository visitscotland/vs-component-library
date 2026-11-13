import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The version check uses only Node built-ins.
export function checkNodeVersion(root = process.cwd(), actual = process.versions.node) {
    const expected = readFileSync(join(root, '.nvmrc'), 'utf8').trim();
    assert.match(expected, /^\d+\.\d+\.\d+$/, '.nvmrc must pin an exact Node release');
    assert.equal(actual, expected, `Node ${actual} differs from .nvmrc ${expected}; use the pinned runtime before continuing`);
    return expected;
}

export async function checkInstalledRuntime(root = process.cwd(), actual = process.versions.node) {
    const expected = checkNodeVersion(root, actual);
    const { default: semver } = await import('semver');
    const vite = JSON.parse(readFileSync(join(root, 'node_modules/vite/package.json'), 'utf8'));
    const range = vite.engines?.node;
    assert.ok(typeof range === 'string' && semver.validRange(range), 'Installed Vite must declare a valid Node engine range');
    assert.ok(semver.satisfies(actual, range), `Installed Vite ${vite.version} requires Node ${range}; configured ${expected}`);
    return {
        node: expected,
        vite: vite.version,
        requiredNode: range,
    };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    try {
        if (process.argv[2] === 'check-version') console.log(`Node ${checkNodeVersion()} matches .nvmrc`);
        else if (process.argv[2] === 'check-installed') console.log(JSON.stringify(await checkInstalledRuntime()));
        else throw new Error('Use check-version or check-installed');
    } catch (error) {
        console.error(`Runtime preflight failed: ${error.message}`);
        process.exitCode = 1;
    }
}
