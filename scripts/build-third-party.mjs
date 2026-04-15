import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const srcRoot = path.resolve(projectRoot, 'src');

const thirdPartyStyles = glob.sync('./src/styles/third-party/**.scss', { cwd: projectRoot });

const scssPreprocessorOptions = {
    additionalData: `
        @import "@/styles/resources.scss";
    `,
    silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'],
};

const outDir = path.resolve(projectRoot, 'dist/client/styles/third-party');

async function buildThirdPartyStyles() {
    for (const style of thirdPartyStyles) {
        const name = path.parse(style).name;
        const entryPath = path.resolve(projectRoot, style);

        console.log(`Building ${name}...`);

        await build({
            publicDir: false,
            configFile: false,
            css: {
                preprocessorOptions: {
                    scss: scssPreprocessorOptions,
                },
            },
            resolve: {
                alias: {
                    '@': srcRoot,
                },
            },
            build: {
                cssCodeSplit: false,
                outDir,
                emptyOutDir: false,
                rollupOptions: {
                    input: {
                        [name]: entryPath,
                    },
                    external: [],
                    output: {
                        dir: outDir,
                        format: 'es',
                        assetFileNames: '[name][extname]',
                        entryFileNames: '[name].css',
                        chunkFileNames: '[name].chunk.js',
                    },
                },
            },
        });

        const stylePath = path.resolve(outDir, 'style.css');
        const renamedPath = path.resolve(outDir, `${name}.css`);

        if (fs.existsSync(stylePath) && !fs.existsSync(renamedPath)) {
            fs.renameSync(stylePath, renamedPath);
        } else if (fs.existsSync(stylePath)) {
            const content = fs.readFileSync(stylePath, 'utf-8');
            fs.writeFileSync(renamedPath, content);
            fs.unlinkSync(stylePath);
        }
    }

    console.log('All third-party styles built successfully!');
}

buildThirdPartyStyles().catch((err) => {
    console.error(err);
    process.exit(1);
});
