// vite.config.mts
import { defineConfig, loadEnv } from "file:///C:/vs-dev/vs-component-library/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/vs-dev/vs-component-library/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import dts from "file:///C:/vs-dev/vs-component-library/node_modules/vite-plugin-dts/dist/index.mjs";
import replace from "file:///C:/vs-dev/vs-component-library/node_modules/@rollup/plugin-replace/dist/es/index.js";
var __vite_injected_original_dirname = "C:\\vs-dev\\vs-component-library";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": JSON.stringify({
        ICON_KIT_TOKEN: env.ICON_KIT_TOKEN,
        ICON_API_TOKEN: env.ICON_API_TOKEN,
        RECAPTCHA_TOKEN: env.RECAPTCHA_TOKEN,
        EVENTS_API_URL: env.EVENTS_API_URL,
        CLUDO_API_KEY: env.CLUDO_API_KEY,
        CLUDO_CUSTOMER_ID: env.CLUDO_CUSTOMER_ID,
        CLUDO_ENGINE_ID: env.CLUDO_ENGINE_ID,
        GOOGLE_MAPS_API_KEY: env.GOOGLE_MAPS_API_KEY
      }),
      "process.versions": process.versions,
      "process.platform": `"${process.platform}"`
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                        @import "@/styles/resources.scss";
                    `,
          silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import", "legacy-js-api"]
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        find: "@vue/runtime-core",
        replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js"
      },
      dedupe: [
        "vue"
      ]
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            /**
             * Custom Google Maps Places UI Kit components
             * listed here to stop errors in console.
             */
            isCustomElement: (tag) => [
              "gmp-map",
              "gmp-advanced-marker",
              "gmp-place-search",
              "gmp-place-search-all-content",
              "gmp-place-text-search-request",
              "gmp-place-nearby-search-request",
              "gmp-place-details",
              "gmp-place-details-place-request",
              "gmp-place-all-content",
              "gmp-place-content-config",
              "gmp-place-address",
              "gmp-place-rating",
              "gmp-place-type",
              "gmp-place-price",
              "gmp-place-accessible-entrance-icon",
              "gmp-place-opening-hours",
              "gmp-place-website",
              "gmp-place-phone-number",
              "gmp-place-summary",
              "gmp-place-type-specific-highlights",
              "gmp-place-reviews",
              "gmp-place-feature-list",
              "gmp-place-media",
              "gmp-place-attribution"
            ].includes(tag)
          }
        }
      }),
      dts({
        outDir: "./dist/components",
        include: [
          "./src/components",
          // './src/custom-components',
          "./src/directives",
          "./src/mixins",
          "./src/stores",
          "./src/styles",
          "./src/tokens",
          "./src/types",
          "./src/utils",
          "./src/component-entry.ts",
          "./src/constants.ts"
        ],
        exclude: [
          "./src/components/**/__tests__/**",
          "./src/stores/__mocks__/**",
          "./src/utils/__mocks__/**"
        ]
      }),
      replace({
        "process.getuid": "() => -1",
        preventAssignment: true
      })
    ],
    build: {
      cssCodeSplit: false,
      lib: {
        entry: {
          "vs-component-library": path.resolve(__vite_injected_original_dirname, "src/component-entry.ts"),
          "vs-component-library-maps": path.resolve(__vite_injected_original_dirname, "src/components/map-index.ts"),
          fonts: path.resolve(__vite_injected_original_dirname, "src/assets/fonts/fonts.scss"),
          icons: path.resolve(__vite_injected_original_dirname, "src/styles/third-party/_font-awesome.scss")
        },
        name: "vs-component-library",
        fileName: "[name]"
      },
      rollupOptions: {
        external: [
          "vue",
          "pinia"
        ],
        output: {
          dir: "dist/components",
          globals: {
            vue: "Vue",
            "bootstrap-vue-next": "BootstrapVueNext",
            pinia: "Pinia"
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcdnMtZGV2XFxcXHZzLWNvbXBvbmVudC1saWJyYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx2cy1kZXZcXFxcdnMtY29tcG9uZW50LWxpYnJhcnlcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi92cy1kZXYvdnMtY29tcG9uZW50LWxpYnJhcnkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IHJlcGxhY2UgZnJvbSAnQHJvbGx1cC9wbHVnaW4tcmVwbGFjZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlZmluZToge1xyXG4gICAgICAgICAgICAncHJvY2Vzcy5lbnYnOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBJQ09OX0tJVF9UT0tFTjogZW52LklDT05fS0lUX1RPS0VOLFxyXG4gICAgICAgICAgICAgICAgSUNPTl9BUElfVE9LRU46IGVudi5JQ09OX0FQSV9UT0tFTixcclxuICAgICAgICAgICAgICAgIFJFQ0FQVENIQV9UT0tFTjogZW52LlJFQ0FQVENIQV9UT0tFTixcclxuICAgICAgICAgICAgICAgIEVWRU5UU19BUElfVVJMOiBlbnYuRVZFTlRTX0FQSV9VUkwsXHJcbiAgICAgICAgICAgICAgICBDTFVET19BUElfS0VZOiBlbnYuQ0xVRE9fQVBJX0tFWSxcclxuICAgICAgICAgICAgICAgIENMVURPX0NVU1RPTUVSX0lEOiBlbnYuQ0xVRE9fQ1VTVE9NRVJfSUQsXHJcbiAgICAgICAgICAgICAgICBDTFVET19FTkdJTkVfSUQ6IGVudi5DTFVET19FTkdJTkVfSUQsXHJcbiAgICAgICAgICAgICAgICBHT09HTEVfTUFQU19BUElfS0VZOiBlbnYuR09PR0xFX01BUFNfQVBJX0tFWSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICdwcm9jZXNzLnZlcnNpb25zJzogcHJvY2Vzcy52ZXJzaW9ucyxcclxuICAgICAgICAgICAgJ3Byb2Nlc3MucGxhdGZvcm0nOiBgXCIke3Byb2Nlc3MucGxhdGZvcm19XCJgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IFwiQC9zdHlsZXMvcmVzb3VyY2VzLnNjc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFsnbWl4ZWQtZGVjbHMnLCAnY29sb3ItZnVuY3Rpb25zJywgJ2dsb2JhbC1idWlsdGluJywgJ2ltcG9ydCcsICdsZWdhY3ktanMtYXBpJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgICAgICAgICAgIGZpbmQ6ICdAdnVlL3J1bnRpbWUtY29yZScsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogJ0B2dWUvcnVudGltZS1jb3JlL2Rpc3QvcnVudGltZS1jb3JlLmVzbS1idW5kbGVyLmpzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVkdXBlOiBbXHJcbiAgICAgICAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgdnVlKHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBDdXN0b20gR29vZ2xlIE1hcHMgUGxhY2VzIFVJIEtpdCBjb21wb25lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGxpc3RlZCBoZXJlIHRvIHN0b3AgZXJyb3JzIGluIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtbWFwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtYWR2YW5jZWQtbWFya2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2Utc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2Utc2VhcmNoLWFsbC1jb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2UtdGV4dC1zZWFyY2gtcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLW5lYXJieS1zZWFyY2gtcmVxdWVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLWRldGFpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS1kZXRhaWxzLXBsYWNlLXJlcXVlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS1hbGwtY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLWNvbnRlbnQtY29uZmlnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2UtYWRkcmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLXJhdGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLXR5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS1wcmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLWFjY2Vzc2libGUtZW50cmFuY2UtaWNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLW9wZW5pbmctaG91cnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS13ZWJzaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2UtcGhvbmUtbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnbXAtcGxhY2Utc3VtbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLXR5cGUtc3BlY2lmaWMtaGlnaGxpZ2h0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLXJldmlld3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS1mZWF0dXJlLWxpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dtcC1wbGFjZS1tZWRpYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ21wLXBsYWNlLWF0dHJpYnV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyh0YWcpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZHRzKHtcclxuICAgICAgICAgICAgICAgIG91dERpcjogJy4vZGlzdC9jb21wb25lbnRzJyxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJy4vc3JjL2N1c3RvbS1jb21wb25lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnLi9zcmMvZGlyZWN0aXZlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjL21peGlucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjL3N0b3JlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjL3N0eWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjL3Rva2VucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy4vc3JjL3R5cGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnLi9zcmMvdXRpbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICcuL3NyYy9jb21wb25lbnQtZW50cnkudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICcuL3NyYy9jb25zdGFudHMudHMnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAnLi9zcmMvY29tcG9uZW50cy8qKi9fX3Rlc3RzX18vKionLFxyXG4gICAgICAgICAgICAgICAgICAgICcuL3NyYy9zdG9yZXMvX19tb2Nrc19fLyoqJyxcclxuICAgICAgICAgICAgICAgICAgICAnLi9zcmMvdXRpbHMvX19tb2Nrc19fLyoqJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBsYWNlKHtcclxuICAgICAgICAgICAgICAgICdwcm9jZXNzLmdldHVpZCc6ICcoKSA9PiAtMScsXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50QXNzaWdubWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidWlsZDoge1xyXG4gICAgICAgICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgICAgIGVudHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZzLWNvbXBvbmVudC1saWJyYXJ5JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnQtZW50cnkudHMnKSxcclxuICAgICAgICAgICAgICAgICAgICAndnMtY29tcG9uZW50LWxpYnJhcnktbWFwcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9tYXAtaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgICAgICAgICBmb250czogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMvZm9udHMvZm9udHMuc2NzcycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3N0eWxlcy90aGlyZC1wYXJ0eS9fZm9udC1hd2Vzb21lLnNjc3MnKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndnMtY29tcG9uZW50LWxpYnJhcnknLFxyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6ICdbbmFtZV0nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICAgICAgICAgICAgICd2dWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwaW5pYScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyOiAnZGlzdC9jb21wb25lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdib290c3RyYXAtdnVlLW5leHQnOiAnQm9vdHN0cmFwVnVlTmV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpbmlhOiAnUGluaWEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUixTQUFTLGNBQWMsZUFBZTtBQUMxVCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFKcEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBRTNDLFNBQU87QUFBQSxJQUNILFFBQVE7QUFBQSxNQUNKLGVBQWUsS0FBSyxVQUFVO0FB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
