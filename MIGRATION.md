# v5.0.0 Migration Notes

This release includes a number of **breaking changes**. Please read carefully before upgrading, as some changes will require updates to your templates, props, and CSS.

This update modernizes the design system, improves accessibility, and simplifies styling across your application.

---

## VsIcon

- **Rename** the `name` prop to `icon`.
  - Pass the full class name, including the FontAwesome kit (e.g., `fa-solid fa-house`).
  - You can also pass an icon semantic token (e.g., `vs-icon-control-dismiss`).
- **Remove** the `duotone`, `orientation`, and `iconLookup` props.
- **Update variant values:**
  - `default` → `primary`
  - `primary` → `cta`
  - `tertiary` → `highlight`
  - `danger` → `error`

## Typography

### VsBody

- **Replace** `VsRichTextWrapper` with `VsBody`.
- Wrap all relevant paragraph content in `VsBody` to ensure consistent spacing.
- **Remove** any global paragraph spacing overrides.
- **New:** `noMargins` prop to remove default spacing when needed.
- Adjust content in tabs, modals, panels, accordions, warnings, and other slots to use `VsBody` if appropriate.

### VsHeading

- **Remove** the `subheading` slot. Use `VsDetail` instead.
- **Remove** deprecated heading styles: `display-xs`, `display-l`, `heading-xxl`.
- Use `VsHeading` and `VsBody` separately for clarity and control.
  - (Heading styles inside `VsBody` are now only a fallback for legacy content.)
- Headings now **scale automatically with the viewport** – no manual breakpoint overrides required.
- **New:** `noMargins` prop.

### VsDetail

- **New component:** `VsDetail`, which replaces subheading styles.


## VsHeroSection

- **Rename** the `src` prop to `imgSrc` for clarity.


## VsBlogDetails

- `VsBlogDetails` has been **renamed** to `VsArticleDetails`.
- All props and slots using “blog” have been updated to “article.” Update all usage accordingly.


## Buttons

- **Remove** `clearButtonText` prop from `VsSiteSearchForm`.
- **Rename** `transparent` button variant to `subtle`.

Example:

```
<VsTooltip
  :title="transportType.value"
  href="#"
  :icon="transportType.key"
  size="sm"
  icon-only
  variant="subtle"
>
  {{ transportType.value }}
</VsTooltip>
```

## Tokens

This release includes important changes to how design tokens are organized and used. Please review carefully to avoid unexpected issues.

### Token Organization

- **New folder structure:**
  - `primitives/`: Base values not consumed directly in code, but used as aliases by semantic tokens.
    - Example: `vs-font-size-700: 2rem`
  - `semantic/`: Tokens with specific meaning and usage contexts.
    - Example: `vs-font-size-heading-l: { !vs-font-size-700 }`

- **Guidance:**
  - Always use **semantic tokens** for consistency across the system.
  - If no suitable semantic token exists for your use case, you may use a hard-coded value temporarily.
  - When a repeated need emerges, create a new semantic token to cover that scenario.

### New Tokens

- **Font Weight Primitives** have been added to support more consistent typography.

### Updated Semantic Tokens

- **Font Weight**
- **Letter Spacing**
- **Line Height**
- **Font Size**
- **Font Family**

Ensure you check your styles and update any references to deprecated tokens.

### Deprecated Tokens

- The **old font-size tokens** have been deprecated but remain in the library temporarily. 
  - They will be removed once all components and use cases are migrated to the new type scale.
  - We recommend auditing your components and templates to plan for this update.


## CSS Bundle

All component styles are now bundled in a single style.css file. This change avoids issues with dynamic chunking and inconsistent filenames.

How to update:
- Remove the asynchronous loading of icons.css from VsBrIconFonts.
- Update your Nuxt config:

```
// Remove these:
'/components/vs-component-library.css',
'/components/fonts.css',

// Replace with:
'/components/style.css'
```

## Testing
We recommend thoroughly testing your application after upgrading, especially:
- Icon rendering
- Typography spacing
- Buttons and interactive components
- CSS bundle loading

**If you have any questions or need help migrating, please reach out to the design system team.**
