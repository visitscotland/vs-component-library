import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('smoke-results', {
    recursive: true, 
});
for (const command of ['test', 'lint', 'build']) {
    const result = spawnSync(process.execPath, ['.yarn/releases/yarn-4.16.0.cjs', command], {
        encoding: 'utf8',
        maxBuffer: 32 * 1024 * 1024,
        timeout: 20 * 60 * 1000,
        env: {
            ...process.env,
            CI: 'true', 
        },
    });
    writeFileSync(`smoke-results/${command}.log`, `${result.stdout || ''}${result.stderr || ''}${result.error?.message || ''}`);
    if (result.status !== 0) throw new Error(`yarn ${command} failed; see smoke-results/${command}.log`);
    console.log(`yarn ${command} passed`);
}
