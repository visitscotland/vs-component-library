## [5.20.4](https://github.com/visitscotland/vs-component-library/compare/v5.20.3...v5.20.4) (2025-12-03)


### Bug Fixes

* **main map:** clear text search query to ensure a fresh search each time ([2331e39](https://github.com/visitscotland/vs-component-library/commit/2331e39d953a21f83e975bcaee92cbc2c3d72cda))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.20.3](https://github.com/visitscotland/vs-component-library/compare/v5.20.2...v5.20.3) (2025-12-02)

### [5.20.2](https://github.com/visitscotland/vs-component-library/compare/v5.20.1...v5.20.2) (2025-12-02)

## [5.20.1](https://github.com/visitscotland/vs-component-library/compare/v5.20.0...v5.20.1) (2025-11-26)


### Bug Fixes

* **main map:** set map pin title ([5c9e9fb](https://github.com/visitscotland/vs-component-library/commit/5c9e9fb6d2a811751e2c6ec82c487c62018ea8c2))

# [5.20.0](https://github.com/visitscotland/vs-component-library/compare/v5.19.1...v5.20.0) (2025-11-25)


### Bug Fixes

* **grid:** removing custom row css to stick to bootstrap grid ([e831ef4](https://github.com/visitscotland/vs-component-library/commit/e831ef4ebfa3667b8d822572c316c618fa088a94))


### Features

* **grid:** update max-container width to match bootstraps grid ([523150b](https://github.com/visitscotland/vs-component-library/commit/523150b085182fa194a4e10acb3fd7442ae2d8a9))
* **page-intro:** update page-intro to use new max container width ([830a1e2](https://github.com/visitscotland/vs-component-library/commit/830a1e2e5106b3b9eaecdb7fde4fe4306fa3942f))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.19.1](https://github.com/visitscotland/vs-component-library/compare/v5.19.0...v5.19.1) (2025-11-24)

# [5.19.0](https://github.com/visitscotland/vs-component-library/compare/v5.18.3...v5.19.0) (2025-11-20)


### Bug Fixes

* **map-categories.json:** updates category id's where they had typos ([b56f393](https://github.com/visitscotland/vs-component-library/commit/b56f39365604d9c03fff81aa2b76bca739d4d642))
* **package.json:** reverts changes to prepack command to ensure proper building ([f43a308](https://github.com/visitscotland/vs-component-library/commit/f43a308d978d4bf30f7f520b38acbae76f37dca0))
* **vite.config:** adds place detail compact element to vite custom elements to suppress console warn ([0fbcf88](https://github.com/visitscotland/vs-component-library/commit/0fbcf88a1b697da6c1df0b495fe5add2476bb501))
* **vsmainmap:** ensures focus state is still visible ([713f08e](https://github.com/visitscotland/vs-component-library/commit/713f08e4986520cd08ddc0ac29b07a88d94a1873))
* **vsmainmap:** fix for sidebar positioning ([8f996fd](https://github.com/visitscotland/vs-component-library/commit/8f996fd832a89a418d7ac3adf8272c948a7d095e))
* **vsmainmap:** fixes category labelling in the searched for string when deleting ([4ddcaf6](https://github.com/visitscotland/vs-component-library/commit/4ddcaf61be2a832c3e444ce7aeba7c67a70afc9d))
* **vsmainmap:** fixes click through bug when search is carried out ([d94f66e](https://github.com/visitscotland/vs-component-library/commit/d94f66e9b4dc8727e17fe294568b77d2848b1522))
* **vsmainmap:** fixes filter_controls container overflowing off screen (lg) & neatens up on mobile ([deb6459](https://github.com/visitscotland/vs-component-library/commit/deb6459958fcaf90fbb1df360a77447d38199a9b))
* **vsmainmap:** fixes Google Maps attribution not working on dark theme browsers ([98582b6](https://github.com/visitscotland/vs-component-library/commit/98582b64919c4d5596b04f0717695dce3741bb2b))
* **vsmainmap:** fixes Initial Zoom level being too high ([2b9aa4a](https://github.com/visitscotland/vs-component-library/commit/2b9aa4a79e08a5224f9d99a920d09f0421048d3e))
* **vsmainmap:** fixes sub categories on the search results string when adding ([9e901af](https://github.com/visitscotland/vs-component-library/commit/9e901af6207ffe74c9cd7e5a1613c8c6e76a7812))
* **vsmainmap:** fixes the viewport when only result returned ([a878b94](https://github.com/visitscotland/vs-component-library/commit/a878b94390b965068649e69ab61b9b5b70dddb17))
* **vsmainmap:** fixes typos in the things to do categories ([b7f5bab](https://github.com/visitscotland/vs-component-library/commit/b7f5babec458e340d3e75fb70a89d3b5f5380429))
* **vsmainmap:** removes includedTypes from F&D and Things to Do to fit under GMap constraints ([34c09e8](https://github.com/visitscotland/vs-component-library/commit/34c09e858fded8b7eb8b988f35c46283baa50120))
* **vsmapsidebar:** fixes a hardcoded label, and unresolved component ([0ada292](https://github.com/visitscotland/vs-component-library/commit/0ada29242e237ace5cf949a8ca1b55d181bc8867))
* **vsmapsidebar:** fixes sidebar responsiveness issues on mobile ([3e46869](https://github.com/visitscotland/vs-component-library/commit/3e4686915585bf19a0247d6236a51f7370fe1194))
* **vsmapsidebar:** fixes sidebar staying open after selecting search result on mobile ([80f6b7d](https://github.com/visitscotland/vs-component-library/commit/80f6b7d99ebdb75c947ae37a5e6edc13de3d1487))
* **vsmeganav:** fixes new map button label overflowing content by making icon only & updates style ([1157c67](https://github.com/visitscotland/vs-component-library/commit/1157c675d907d0d43f030d201cc62717921f6a2e))


### Features

* **googlemaps:** adds a base custom Google Maps component, story & secrets for API key ([2a913ae](https://github.com/visitscotland/vs-component-library/commit/2a913aeed393a60459c75e92b948da8459c7e89d))
* **vsmainmap:** adds back in category buttons and styles based on design ([5b720e8](https://github.com/visitscotland/vs-component-library/commit/5b720e891d3f0fdec779e367c8e851922c1bd9c1))
* **vsmainmap:** adds beahviour to revert to top level search when all sub categories are unselected ([64893b3](https://github.com/visitscotland/vs-component-library/commit/64893b31806666d76eccfb81525d05825db7ae93))
* **vsmainmap:** adds click events to search panel to load details ([28feb80](https://github.com/visitscotland/vs-component-library/commit/28feb8090b32f7dff25c3f219ba31be788650e68))
* **vsmainmap:** adds custom markers ([a5b77c8](https://github.com/visitscotland/vs-component-library/commit/a5b77c80999b84161f235852a577f2a1e4972a72))
* **vsmainmap:** adds labels and region coding to MainMap ([79357ed](https://github.com/visitscotland/vs-component-library/commit/79357ed48c6a6267a923780aa27d333f5d4678b7))
* **vsmainmap:** adds markers to map when performing a PlaceSearch search ([789b188](https://github.com/visitscotland/vs-component-library/commit/789b1885a950d1cf8583c999a4a79955eee468ac))
* **vsmainmap:** adds nearby and text searches based on input category or text query ([c360d5e](https://github.com/visitscotland/vs-component-library/commit/c360d5ecd0281bc882b1a4a384458557c1d6b864))
* **vsmainmap:** adds NoCookies & NoJS functionality to map component ([4091604](https://github.com/visitscotland/vs-component-library/commit/40916042560c7db874475de9e75422a104251023))
* **vsmainmap:** adds text based search and category button ([1433942](https://github.com/visitscotland/vs-component-library/commit/1433942a2c9bdb2668ed417750caf69091b92ee7))
* **vsmainmap:** adds the infoWindow details view ([bf3e5ac](https://github.com/visitscotland/vs-component-library/commit/bf3e5ac63c9b19196e8afebcead8672675b8c14c))
* **vsmainmap:** adds the subcategories and their functionality ([8103fa2](https://github.com/visitscotland/vs-component-library/commit/8103fa21662fa5bb1fcc9a7501937a7ec50b2bc2))
* **vsmainmap:** implements compact detail view for mobile devices ([201f0cd](https://github.com/visitscotland/vs-component-library/commit/201f0cd62ce79597afb64a9aed382f4324891254))
* **vsmainmap:** mobile implementation of scrollsnap for subfilters and adds query to search bar ([73b83fc](https://github.com/visitscotland/vs-component-library/commit/73b83fc283c1e27ab87aead82e8ae8879ddeaa01))
* **vsmainmap:** removes markers when a new search starts ([3954918](https://github.com/visitscotland/vs-component-library/commit/3954918ae0ea1853e922701df617ab438f76f593))
* **vsmainmap:** reset map function ([7c60628](https://github.com/visitscotland/vs-component-library/commit/7c60628ffaf06b2faf61b8102c576ef59784d6f1))
* **vsmainmap:** uses external labels on categories and removes them from map-categories.json ([a5a17d1](https://github.com/visitscotland/vs-component-library/commit/a5a17d1047c06fb4930347abd567d65e596a640b))
* **vsmapsidebar:** adds a button to collapse and open sidebar on mobile view ([682cccd](https://github.com/visitscotland/vs-component-library/commit/682cccd747a7b6612985b413492cda2095fbb801))
* **vsmapsidebar:** adds new map sidebar for Google Maps, and styles it and base map to fit designs ([150844d](https://github.com/visitscotland/vs-component-library/commit/150844d7b2ccb164f36d17c07d1cfa9c92786bed))
* **vsmapsidebar:** moves sidebar view logic to store ([566bd01](https://github.com/visitscotland/vs-component-library/commit/566bd01e257c5331541e894640fbe76f3b083eae))
* **vsmeganav:** adds new "map of scotland" button to meganav ([be4b258](https://github.com/visitscotland/vs-component-library/commit/be4b25897d601c17888ccc96c68f85595e2a877d))
* **vsmeganav:** update the map button to align with design and ensure its visable on mobile ([d694252](https://github.com/visitscotland/vs-component-library/commit/d694252c0b1a97525f1151b415faae95c6c55e02))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.18.3](https://github.com/visitscotland/vs-component-library/compare/v5.18.2...v5.18.3) (2025-11-19)

## [5.18.2](https://github.com/visitscotland/vs-component-library/compare/v5.18.1...v5.18.2) (2025-11-13)


### Bug Fixes

* **federated search:** reset filters scroll when search fired ([ab8e690](https://github.com/visitscotland/vs-component-library/commit/ab8e690092a5584979ad3210bd3108cecef8f60f))

## [5.18.1](https://github.com/visitscotland/vs-component-library/compare/v5.18.0...v5.18.1) (2025-11-13)


### Bug Fixes

* **fed search input:** set filter items as props rather than injecting them ([1ad07c9](https://github.com/visitscotland/vs-component-library/commit/1ad07c9dc5f2e12bf8048ff3f278f20ba4720bb1))
* **federated search:** set search url when its added as a prop ([137ab58](https://github.com/visitscotland/vs-component-library/commit/137ab5857e35ca09f0d4a6e24b0448779e3a0839))
* **home pattern:** update prop name ([e21b59b](https://github.com/visitscotland/vs-component-library/commit/e21b59b963854f6ef75b58e31220abff129c618d))

# [5.18.0](https://github.com/visitscotland/vs-component-library/compare/v5.17.0...v5.18.0) (2025-11-12)


### Features

* **illustrated map:** add illustrated map component ([08239d3](https://github.com/visitscotland/vs-component-library/commit/08239d372840e8859257a7500a41fa38898b65bd))
* **illustrated map:** added aria label for svg ([929814a](https://github.com/visitscotland/vs-component-library/commit/929814a14a81c36c6433bc79fc42af2925ffc790))
* **illustrated map:** update map to have width prop and add to itinerary example ([6f06d51](https://github.com/visitscotland/vs-component-library/commit/6f06d51894e14d89e952b8b3c8fcd264f84cb46f))
* **illustrated map:** update map to highlight both ayr and arran ([a29d609](https://github.com/visitscotland/vs-component-library/commit/a29d609e2d04d6e16600fa4d7061e5e1adb19e8d))
* **illustrated map:** update width prop to null as default ([f869f4d](https://github.com/visitscotland/vs-component-library/commit/f869f4da4b46adb26a5354624ab945f6c72af4a2))
* **map:** add map to itinerary page ([19d056f](https://github.com/visitscotland/vs-component-library/commit/19d056f4c1f355f6184c685b97f0bb8bb97bc388))

# [5.17.0](https://github.com/visitscotland/vs-component-library/compare/v5.16.4...v5.17.0) (2025-11-12)


### Features

* **article:** remove travel between from itinerary ([c493e64](https://github.com/visitscotland/vs-component-library/commit/c493e6425e1ade6080804e82ca6a6a14f0d32deb))
* **detail:** adds icon prop to detail component ([bd03572](https://github.com/visitscotland/vs-component-library/commit/bd03572dc18cdc38e38c937cf648902d2ba25fae))
* **detail:** update icon size in detail ([6eff8f8](https://github.com/visitscotland/vs-component-library/commit/6eff8f8254f3cb559dbaa31aeedc9b0c41a25784))
* **icon:** add new tertiary variant to icon component ([56561a5](https://github.com/visitscotland/vs-component-library/commit/56561a547bc60ec311e2d1f57288f6e7c1bdc19c))
* **itinerary:** remove caption from itinerary ([f0718ba](https://github.com/visitscotland/vs-component-library/commit/f0718ba4a052da41515f2467e3f35edc334f153b))

## [5.16.4](https://github.com/visitscotland/vs-component-library/compare/v5.16.3...v5.16.4) (2025-11-10)


### Bug Fixes

* **federated search:** card text not breaking causes some cards to be too big ([e0d25e6](https://github.com/visitscotland/vs-component-library/commit/e0d25e609ee5a8e46bd4323ef4425685693d4912))

## [5.16.3](https://github.com/visitscotland/vs-component-library/compare/v5.16.2...v5.16.3) (2025-11-10)


### Bug Fixes

* **federated search:** missing language parameter ([8f431fb](https://github.com/visitscotland/vs-component-library/commit/8f431fb7e652cf99417697059ec3966f57355a21))

## [5.16.2](https://github.com/visitscotland/vs-component-library/compare/v5.16.1...v5.16.2) (2025-11-10)


### Bug Fixes

* **federated search:** add margin bottom when no pagination shown ([1821605](https://github.com/visitscotland/vs-component-library/commit/1821605a918e829c3f4803842d336f70c77f31e7))
* **federated search:** apply sort by when it appears in the URL ([5324a9a](https://github.com/visitscotland/vs-component-library/commit/5324a9aa5d5c07696384e64c8e8b9565ec81e639))
* **federated search:** apply start and end date when they appear in the URL ([5d19db9](https://github.com/visitscotland/vs-component-library/commit/5d19db921ed8294791beb557465248f8ba2ed6bc))

## [5.16.1](https://github.com/visitscotland/vs-component-library/compare/v5.16.0...v5.16.1) (2025-11-06)


### Bug Fixes

* **federated search:** remove 'other' category from stories ([c9af77b](https://github.com/visitscotland/vs-component-library/commit/c9af77b4dd1cd1c32c43334459ca698b4ae6ec05))
* **fedfilter:** add icons to buttons when primary variant ([a7a2258](https://github.com/visitscotland/vs-component-library/commit/a7a2258e88cc5b601601009fd6e6a340d240559f))

# [5.16.0](https://github.com/visitscotland/vs-component-library/compare/v5.15.4...v5.16.0) (2025-11-06)


### Features

* **panel:** update panel variants and styles ([071f39a](https://github.com/visitscotland/vs-component-library/commit/071f39a8e3e0f21795b5b650f0fcb6b1f89b6962))
* **panel:** update ternary check in panel component ([a60c8ff](https://github.com/visitscotland/vs-component-library/commit/a60c8ff3323315ff2efba9fe51e2fa58e690dcc7))

## [5.15.4](https://github.com/visitscotland/vs-component-library/compare/v5.15.3...v5.15.4) (2025-11-05)


### Bug Fixes

* **federated search:** adjust how pagination is calculated ([dfaf6b9](https://github.com/visitscotland/vs-component-library/commit/dfaf6b9367a5bb0f95f1f10566da7f6394097bc0))

## [5.15.3](https://github.com/visitscotland/vs-component-library/compare/v5.15.2...v5.15.3) (2025-11-05)


### Bug Fixes

* **event:** fix badge rounded corners in event card with rounded utilities ([86cf8d8](https://github.com/visitscotland/vs-component-library/commit/86cf8d8bdc9c2f3cc640076a52db46b45721cd36))

## [5.15.2](https://github.com/visitscotland/vs-component-library/compare/v5.15.1...v5.15.2) (2025-11-04)


### Bug Fixes

* **event-search-ts:** update subcategories to use key ([df081a9](https://github.com/visitscotland/vs-component-library/commit/df081a962b4cec2af6fa88dba677879b36d74f30))
* **fed search input:** make sure sub category and sub category key are aligned ([c42e90c](https://github.com/visitscotland/vs-component-library/commit/c42e90c586e0de5dbb2a504e2d5f9f4a168c6d15))
* **federated search input:** clear sub category when category changes ([3c9e8d0](https://github.com/visitscotland/vs-component-library/commit/3c9e8d0e8af05f269fc8b1d3c176de90d82fda15))
* **federated search input:** highlight search term in search suggestions ([fa0f5dc](https://github.com/visitscotland/vs-component-library/commit/fa0f5dcc9901c4b8d12901ef9785289dd3717fc5))
* **federated search:** reduce white space on mobile ([414dcea](https://github.com/visitscotland/vs-component-library/commit/414dcea18b72a67f42ccf81687b2c6e69c997428))
* **federated search:** remove internal link icon ([e4fb3c4](https://github.com/visitscotland/vs-component-library/commit/e4fb3c462fd45a038dca6eceea674ee9862e73b3))
* **federated search:** remove scroll snap from cardgrid ([a0e3b94](https://github.com/visitscotland/vs-component-library/commit/a0e3b94c60aeb3a04ff7b1a3f5da15df10272c10))
* **federated search:** sort not wrapping on mobile ([a9cc50b](https://github.com/visitscotland/vs-component-library/commit/a9cc50b02a83f0d2ea81bb05be2a63516dc87d55))
* **federated search:** update sub categories to mirror categories ([6b290b7](https://github.com/visitscotland/vs-component-library/commit/6b290b733208722fec824a11a138d8c31e5a637f))
* **mega nav:** hide search link button text on mobile ([fbf54c0](https://github.com/visitscotland/vs-component-library/commit/fbf54c07e24b780a6cd67558151e34ce4e4cdfa8))

## [5.15.1](https://github.com/visitscotland/vs-component-library/compare/v5.15.0...v5.15.1) (2025-11-04)


### Bug Fixes

* **cookie control:** make consent check more resilient to race conditions ([db6c3ef](https://github.com/visitscotland/vs-component-library/commit/db6c3ef6093109aefc21fcb491b39a5532990883))

# [5.15.0](https://github.com/visitscotland/vs-component-library/compare/v5.14.2...v5.15.0) (2025-10-29)


### Features

* **badge:** implement highlight badge style ([7e166c4](https://github.com/visitscotland/vs-component-library/commit/7e166c4d73f5b0aedff91044f7baa854320e9d48))

## [5.14.2](https://github.com/visitscotland/vs-component-library/compare/v5.14.1...v5.14.2) (2025-10-28)


### Bug Fixes

* **federated search:** swap to searching categories by key ([4d7648c](https://github.com/visitscotland/vs-component-library/commit/4d7648cb17d4822bf823ab903cce6dbaf8e3250a))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.14.1](https://github.com/visitscotland/vs-component-library/compare/v5.14.0...v5.14.1) (2025-10-28)

# [5.14.0](https://github.com/visitscotland/vs-component-library/compare/v5.13.0...v5.14.0) (2025-10-28)


### Bug Fixes

* **federated search:** adjust tests for new filter logic ([51a4978](https://github.com/visitscotland/vs-component-library/commit/51a49787c3e5bd8e94c37d0d552005acdd75f333))
* **federated search:** change conditionals to use category key instead of the label ([82069ef](https://github.com/visitscotland/vs-component-library/commit/82069ef131e3c0b6307213d1843065763d9d6ade))
* **federated search:** chromatic skip sort date input so new Date() isn't a change every day ([485d3e7](https://github.com/visitscotland/vs-component-library/commit/485d3e7870714ceeda73f48185af1bd30a7397d2))
* **federated search:** restore categories in home page story ([9ae540e](https://github.com/visitscotland/vs-component-library/commit/9ae540e98ef728b75db22b89889b4824b349b1d0))


### Features

* **federated search:** retrieve categories from the CMS as a prop rather than Cludo ([fe6ec13](https://github.com/visitscotland/vs-component-library/commit/fe6ec13f3fa40c08917179e13fe88970818dd667))
* **federated search:** switch to provide/inject for categories ([82a8962](https://github.com/visitscotland/vs-component-library/commit/82a89625fe015bda3be3a0c4308f1a25d34a1106))

# [5.13.0](https://github.com/visitscotland/vs-component-library/compare/v5.12.5...v5.13.0) (2025-10-23)


### Features

* **federated search:** implement optional spotlight for search categories ([e8f4122](https://github.com/visitscotland/vs-component-library/commit/e8f41221bf54eb3a92d23aa2aa14f75d65af36ba))

## [5.12.5](https://github.com/visitscotland/vs-component-library/compare/v5.12.4...v5.12.5) (2025-10-20)


### Bug Fixes

* **map:** allow immediately loading of OS branding for Nuxt sites ([2b68259](https://github.com/visitscotland/vs-component-library/commit/2b682599ab980e2df59333f31d4aa52ac563abd3))
* **maps:** adjust docs comments to clarify ([f7c4a13](https://github.com/visitscotland/vs-component-library/commit/f7c4a13958a1a2a3ce74d781187ba075bfc99be7))

## [5.12.4](https://github.com/visitscotland/vs-component-library/compare/v5.12.3...v5.12.4) (2025-10-14)


### Bug Fixes

* **build:** temporarily remove custom components from vite config ([d9cbf6d](https://github.com/visitscotland/vs-component-library/commit/d9cbf6d3e8a8982282988494873a05ad22b6d361))

## [5.12.3](https://github.com/visitscotland/vs-component-library/compare/v5.12.2...v5.12.3) (2025-10-14)


### Bug Fixes

* **buttons:** adjust specificity again ([f230a9d](https://github.com/visitscotland/vs-component-library/commit/f230a9d6c51a87317b6812c4a952047507366b26))

## [5.12.2](https://github.com/visitscotland/vs-component-library/compare/v5.12.1...v5.12.2) (2025-10-14)


### Bug Fixes

* **buttons:** adjust to use css var ([c317ebb](https://github.com/visitscotland/vs-component-library/commit/c317ebb5eb1bd7340b93ee024e7f570bf47c11c0))

## [5.12.1](https://github.com/visitscotland/vs-component-library/compare/v5.12.0...v5.12.1) (2025-10-14)


### Bug Fixes

* **buttons:** increase specificity of button default styles to avoid conflict with bootstrap ([3f42834](https://github.com/visitscotland/vs-component-library/commit/3f4283476d9cd45c688738a5c801c40a8b9a2202))

# [5.12.0](https://github.com/visitscotland/vs-component-library/compare/v5.11.0...v5.12.0) (2025-10-09)


### Bug Fixes

* **cludo-search.ts:** get cludo categories when events category selected ([c861c04](https://github.com/visitscotland/vs-component-library/commit/c861c04e9625793447a7b7e3fc7343da70ba3870))
* **divider:** component name ([8cba25e](https://github.com/visitscotland/vs-component-library/commit/8cba25ef8989f221a4b9f04423059cb6c36b7778))
* **event-search.ts:** conditional for querying events api ([2826ac4](https://github.com/visitscotland/vs-component-library/commit/2826ac447a948644e754e2f02fc020d79dbad150))
* **event-search.ts:** error return value ([b963052](https://github.com/visitscotland/vs-component-library/commit/b963052182abb0034e7af44eeba072740ad111c5))
* **fed card:** prop issues ([643685c](https://github.com/visitscotland/vs-component-library/commit/643685cf47d32cbce45ebe4868ebcf51634facf5))
* **fed filter:** update to use labels if available ([9637d2a](https://github.com/visitscotland/vs-component-library/commit/9637d2a6468de1d597b40f2d87ee302b124c73ac))
* **fed search input:** autocomplete positioning ([1f793f6](https://github.com/visitscotland/vs-component-library/commit/1f793f6fe4043ba2cde17bc1a4f1b88a46da42c0))
* **fed search sort:** click event ([eae22fe](https://github.com/visitscotland/vs-component-library/commit/eae22fe831aa48603145631484650a013b7c85ef))
* **federated search:** fix typos ([9197d10](https://github.com/visitscotland/vs-component-library/commit/9197d10dbaccdf9bc628fe619ce10e53f9c9ea3e))
* **federated search:** fixed url params when moving around the search ui so results reset properly ([ba0046f](https://github.com/visitscotland/vs-component-library/commit/ba0046f29f6f6194c1e56e3f9e179d1f2800b8dd))
* **federated search:** incorrect props and check for window value ([07ae16b](https://github.com/visitscotland/vs-component-library/commit/07ae16bf319168036721e994d3611333626ef82d))
* **federated search:** various issues ([4b349d3](https://github.com/visitscotland/vs-component-library/commit/4b349d36ca814e26bb18ef064804a70be4719cf3))
* **federatedsearch:** fixed cludo-api-key typo ([dd3d256](https://github.com/visitscotland/vs-component-library/commit/dd3d25630e5e672e599358ea62bec8e9c4aa6ab3))
* **federatedsearch:** removes FedCard.stories.js as forgot to remove it ([663d4f9](https://github.com/visitscotland/vs-component-library/commit/663d4f9de71c0a23ec16a608ff2c5a1816ca3b05))
* **federatedsearch:** reverts fallback image from css solution to JS, uses static served resource ([e5ed077](https://github.com/visitscotland/vs-component-library/commit/e5ed077470246d0704145a0ba1bf0cede015da68))
* **fedfilter:** properly accesses props for variant on category buttons ([6a676be](https://github.com/visitscotland/vs-component-library/commit/6a676be91700e6649c6b749c3ddcce342416a305))
* **fedsearchinput:** fix missing label causing story to error ([1ceba33](https://github.com/visitscotland/vs-component-library/commit/1ceba330b0b184201bb3619752a1230b73aad941))
* **fedsearchinput:** fix missing label on search button ([4ab10ef](https://github.com/visitscotland/vs-component-library/commit/4ab10efaa4ab8a26fb2a658523bf6dd648c6f95b))
* **vsfedcard:** fixed regex that caused prices to round to three digits ([b8c21e5](https://github.com/visitscotland/vs-component-library/commit/b8c21e5d315edbc7cae21497326b7517686eeb30))
* **vsfedcard:** fixes comments on pull request for FedCard ([177b372](https://github.com/visitscotland/vs-component-library/commit/177b372291d4abc6152fb71d11ea3e91cb0a3843))
* **vsfedcard:** fixes mobile height ([c5d5ccb](https://github.com/visitscotland/vs-component-library/commit/c5d5ccb375828e5615c8e83c4d36ea01768d7e17))
* **vsfederatedsearch:** adds better error checking for cludo ([de57810](https://github.com/visitscotland/vs-component-library/commit/de5781061aa69ff9f930b32afbb9b387b980c25e))
* **vsfederatedsearch:** changes fallback img to be served via css background rather than in JS ([41d00b5](https://github.com/visitscotland/vs-component-library/commit/41d00b59bcaa0df55d534bda5c834c34e7fc2111))
* **vsfederatedsearch:** fixes error message showing when changing sort option ([66bf858](https://github.com/visitscotland/vs-component-library/commit/66bf8581eb7d6400709568b579780fe778d5a92d))
* **vsfederatedsearch:** fixes events search warning showing when it shouldn't ([23ce917](https://github.com/visitscotland/vs-component-library/commit/23ce917ebc5f53c73238478bf4233a1b15614ade))
* **vsfederatedsearch:** resets the page num when category selected to ensure no blank results pages ([d03ff7e](https://github.com/visitscotland/vs-component-library/commit/d03ff7ec68991e5ef33c7fc8a2b8d13d582314f2))
* **vsfedfilter/vsfederatedsearch:** fixes break in filter tests ([414af92](https://github.com/visitscotland/vs-component-library/commit/414af92e7096111109c88e8488fc7155bae776a2))
* **vsfedfilter/vsfederatedsearch:** fixes header rendering when empty, change to align with design ([75dd001](https://github.com/visitscotland/vs-component-library/commit/75dd001afe581321d09ed3abdd5538e765bc35b0))
* **vsfedfilter/vsfederatedsearch:** fixes scrollbutton scroll amount & fixes alignment ([6f03437](https://github.com/visitscotland/vs-component-library/commit/6f03437fb82e2488c49d278d45f0d1f83037eed7))
* **vsfedfilter/vsfederatedsearch:** updated filter padding to ensure focus state visible ([6afc761](https://github.com/visitscotland/vs-component-library/commit/6afc761acbdc71f6053166625c41be923dfa40fd))
* **vsfedfilter:** adds aria label to scroll buttons ([be5f1e0](https://github.com/visitscotland/vs-component-library/commit/be5f1e03557cbf311a0411c25f669d8505b26939))
* **vsfedfilter:** changes based on Gemma's feedback PR[#608](https://github.com/visitscotland/vs-component-library/issues/608). Plus moves scrollbar styling to mixin ([0740e3f](https://github.com/visitscotland/vs-component-library/commit/0740e3f89df3327758de2e63fbbad83bf7469dfa))
* **vsfedfilter:** fixes merge conflict gone wrong ([e1f8883](https://github.com/visitscotland/vs-component-library/commit/e1f8883fe13b862f20ea8acde44131f36294cc56))
* **vsfedfilter:** reverts cardgroup scrollsnap styles and makes fedfilter use scrollsnap styles ([52aefe4](https://github.com/visitscotland/vs-component-library/commit/52aefe4fa133f2616559b6061122e6d6569ed540))
* **vsfedsearchinput:** fixes categories improperly reloading when renavigating to search results ([23370b1](https://github.com/visitscotland/vs-component-library/commit/23370b15925f7db483b78d885caa2156f4443457))
* **vsfedsearchinput:** halfway solution to fixing subcategory persistance when navigating back to sr ([41d9db1](https://github.com/visitscotland/vs-component-library/commit/41d9db18facf7c2713a5a124e5e9e2fcd90d094c))


### Features

* **fed card:** add elevated style ([80d6848](https://github.com/visitscotland/vs-component-library/commit/80d684886d31bd3b434250b1c6fde8a504dca136))
* **fed card:** set link depending on available data ([6970841](https://github.com/visitscotland/vs-component-library/commit/697084167fa07465cbac4259c1fa1cf8f1a98769))
* **federated search - divider:** creates new component and tests ([5596bb9](https://github.com/visitscotland/vs-component-library/commit/5596bb9277e7edc15504c2f0215f3cd1ee310a42))
* **federated search:** add api secrets ([de5f6fc](https://github.com/visitscotland/vs-component-library/commit/de5f6fc5217111ebd227467c737d5ecfcf808063))
* **federated search:** add date and sort filters to events api query ([8a60081](https://github.com/visitscotland/vs-component-library/commit/8a6008129d57461ce74cadaf1814e90bf312a2f6))
* **federated search:** add events api call ([4b7d5a6](https://github.com/visitscotland/vs-component-library/commit/4b7d5a676ea3717bfd1a14b56e03b784ea686a7d))
* **federated search:** add labels from cms ([92fa1c3](https://github.com/visitscotland/vs-component-library/commit/92fa1c3525a230c2ac4641118a7762a8b3001235))
* **federated search:** add pagination ([61fcb4c](https://github.com/visitscotland/vs-component-library/commit/61fcb4c877ccad248e3478986131c8174e4f9f97))
* **federated search:** add pagination to events query ([b169211](https://github.com/visitscotland/vs-component-library/commit/b169211139b561b429ed5248f65604bc6f22f167))
* **federated search:** add price and date to event cards ([863c1d2](https://github.com/visitscotland/vs-component-library/commit/863c1d27062918d450f94b76ef7453eef604d1bb))
* **federated search:** add show additional filters when events category selected ([e46db83](https://github.com/visitscotland/vs-component-library/commit/e46db83b0c7cd86800531723ea862b8e0249ec4a))
* **federated search:** add story from search input ([6e36e0a](https://github.com/visitscotland/vs-component-library/commit/6e36e0a52bc3abdad1434004a9d26ae97f621fe5))
* **federated search:** add sub category filter for events ([1e60eb6](https://github.com/visitscotland/vs-component-library/commit/1e60eb63f0072d27b3ba53713806a32f78c226fa))
* **federated search:** display results using cards and card group ([ed27252](https://github.com/visitscotland/vs-component-library/commit/ed27252ea35f48d8be9b34f77294f6c4564e28a6))
* **federated search:** move types to the types folder ([d42ba2d](https://github.com/visitscotland/vs-component-library/commit/d42ba2dd999826d4855a43f5bee2aa1dc75caee4))
* **federated search:** replace harcoded labels ([2bc8e2b](https://github.com/visitscotland/vs-component-library/commit/2bc8e2b283eb59670076dab1f9e1347206331c15))
* **federated search:** separate input component ([f022ef8](https://github.com/visitscotland/vs-component-library/commit/f022ef867ca4b139e19d16e6e5844cce51af7a73))
* **federated-search:** fix pagination ([230ef39](https://github.com/visitscotland/vs-component-library/commit/230ef393aa3d1b91b3f00790d6ed3a581c2126a8))
* **federated-search:** merge in branch ([a1eb4d1](https://github.com/visitscotland/vs-component-library/commit/a1eb4d12e23a960ea9ecf1799852c26a88232de2))
* **federeated_search/fedcard:** adds new FedCard custom component, story and tests ([d5245cb](https://github.com/visitscotland/vs-component-library/commit/d5245cb32d3d180be93092e598a32d58abc7764c))
* **mega nav:** add search link variant ([ff4b47c](https://github.com/visitscotland/vs-component-library/commit/ff4b47c7c86f7afdd9fe6692bc7eaa5d39405a2f))
* **vsfederatedsearch:** adds a no results warning when there are no search results returned ([c711c85](https://github.com/visitscotland/vs-component-library/commit/c711c85403c0ed36c75e931954139604b59de0f1))
* **vsfederatedsearch:** adds in error messaging and logic for various error states ([afdf462](https://github.com/visitscotland/vs-component-library/commit/afdf46298ae09ce597a858c8a8ab55010253967d))
* **vsfederatedsearch:** adds no js message to federated search ([2e5abb0](https://github.com/visitscotland/vs-component-library/commit/2e5abb0cc8fb2fc4fe7f4b0727367fa87b3d6430))
* **vsfedsearchinput:** adds autocomplete feature ([3a6d2e5](https://github.com/visitscotland/vs-component-library/commit/3a6d2e54d218f2e2f6c38d0d476dfc258f71bcdf))
* **vsfedsearchsort/vsfederatedsearch:** adds new component for site fed search sort ([79da44a](https://github.com/visitscotland/vs-component-library/commit/79da44ac15b1baaa1b2609068c9b1e4bbbce6f4d))
* **vsfedsearchsort/vsfederatedsearch:** partially adds new component, changes FedCard to update des ([6543864](https://github.com/visitscotland/vs-component-library/commit/6543864f0b786a2c0c27e59e440915c49fdf88a5))

# [5.11.0](https://github.com/visitscotland/vs-component-library/compare/v5.10.1...v5.11.0) (2025-10-07)


### Features

* **articledetails:** remove article detail changes and use detail instead ([8c9d79c](https://github.com/visitscotland/vs-component-library/commit/8c9d79cd6f82e64496b9b75fb947fa976d8469c9))
* **articledetails:** update article details and badge variants for use in event card ([ae2ff53](https://github.com/visitscotland/vs-component-library/commit/ae2ff5305e79ffe05b629795df2e519f2b6781dc))
* **event card:** fix badge layout ([85c22e3](https://github.com/visitscotland/vs-component-library/commit/85c22e3978b4f5f00ed32ad4ffffd816ef76ff10))
* **eventcard:** adds event card pattern to storybook ([3e067e6](https://github.com/visitscotland/vs-component-library/commit/3e067e657c7628ae7794f088a098d14568e4b3c5))

## [5.10.1](https://github.com/visitscotland/vs-component-library/compare/v5.10.0...v5.10.1) (2025-10-02)


### Bug Fixes

* **breadcrumb:** extend fix to smaller phones ([81f4e99](https://github.com/visitscotland/vs-component-library/commit/81f4e995b83bdb8d9817b96e6079cb6a64b65b5c))

# [5.10.0](https://github.com/visitscotland/vs-component-library/compare/v5.9.3...v5.10.0) (2025-10-02)


### Features

* **codeowners:** add codeowners file ([97867f9](https://github.com/visitscotland/vs-component-library/commit/97867f9fb9a38c26669f05bf423ee10ba63045ba))

## [5.9.3](https://github.com/visitscotland/vs-component-library/compare/v5.9.2...v5.9.3) (2025-10-02)


### Bug Fixes

* **breadcrumb:** adjust breadcrumb sizing for larger share button ([417fe5e](https://github.com/visitscotland/vs-component-library/commit/417fe5e86aee409b0d6ec2686009343ae3ced2b2))

## [5.9.2](https://github.com/visitscotland/vs-component-library/compare/v5.9.1...v5.9.2) (2025-10-01)


### Bug Fixes

* **cludo:** correct font weight for icon on sort ([41f3969](https://github.com/visitscotland/vs-component-library/commit/41f39699fafdb2501517b430df44cd5bdaa1ed24))

## [5.9.1](https://github.com/visitscotland/vs-component-library/compare/v5.9.0...v5.9.1) (2025-10-01)


### Bug Fixes

* **cludo:** improve text centring on pagination active page ([5f663cd](https://github.com/visitscotland/vs-component-library/commit/5f663cd18483e5ed2b0cf5ffa72ccba5bf3e6cad))

# [5.9.0](https://github.com/visitscotland/vs-component-library/compare/v5.8.0...v5.9.0) (2025-09-25)


### Features

* **modulewrapper:** mark module wrapper component as deprecated ([b1933df](https://github.com/visitscotland/vs-component-library/commit/b1933df2edbe53feeccc6fe3b88b4dc3fe411dcb))

# [5.8.0](https://github.com/visitscotland/vs-component-library/compare/v5.7.0...v5.8.0) (2025-09-25)


### Features

* **card:** update card token background ([3904f06](https://github.com/visitscotland/vs-component-library/commit/3904f06cce2f7ea94ed9d4055e55dab879fb5059))

# [5.7.0](https://github.com/visitscotland/vs-component-library/compare/v5.6.1...v5.7.0) (2025-09-24)


### Bug Fixes

* **card:** code rabbit suggestion to update slot check and image ([e2ade47](https://github.com/visitscotland/vs-component-library/commit/e2ade473270b7a842dccdd0897d1d62398bb779a))


### Features

* **card:** add overlay variant to card component ([a9ee49a](https://github.com/visitscotland/vs-component-library/commit/a9ee49ab931c98bdb3d4c199cb9c1ace3d0249c1))
* **cardgroup:** update scrollsnap in card group so it can also be applied on desktop ([f08e638](https://github.com/visitscotland/vs-component-library/commit/f08e63833651fb923a0975282df5a19569de310e))
* **card:** tidy up card overlay on nav pages ([6e3b4ae](https://github.com/visitscotland/vs-component-library/commit/6e3b4ae70909743a1c2127d775757feca2589eca))
* **card:** update overlay card height ([79bc2fc](https://github.com/visitscotland/vs-component-library/commit/79bc2fc0d3abf994862184e045b1056cde8cf93b))
* **card:** update styles in overlay card ([e5b5159](https://github.com/visitscotland/vs-component-library/commit/e5b515924ba28d11b783606c53c392aa39f638bc))

## [5.6.1](https://github.com/visitscotland/vs-component-library/compare/v5.6.0...v5.6.1) (2025-09-22)


### Bug Fixes

* **civic:** adjust cookie cats post civic scan ([92b9984](https://github.com/visitscotland/vs-component-library/commit/92b99840d24949e3a3514710bd7c8d97c72e2592))
* **civic:** remove magic numbers ([404c27b](https://github.com/visitscotland/vs-component-library/commit/404c27bfaec5a25f47740c52b5e3628e0158a7a8))

# [5.6.0](https://github.com/visitscotland/vs-component-library/compare/v5.5.4...v5.6.0) (2025-09-17)


### Features

* **sectionheader:** add new section header component to the library ([132e091](https://github.com/visitscotland/vs-component-library/commit/132e0913d51dcec79d645d89dfe7796dc5907033))
* **sectionheader:** optimise new section header component code ([044e983](https://github.com/visitscotland/vs-component-library/commit/044e983231b55e2f00e65f42ba9db4c0a52e1ea9))

## [5.5.4](https://github.com/visitscotland/vs-component-library/compare/v5.5.3...v5.5.4) (2025-09-08)


### Bug Fixes

* **civic:** test removing specific datalayer handling ([cfe1615](https://github.com/visitscotland/vs-component-library/commit/cfe1615f2c268c1d789fa35895ea4117b994ae08))

## [5.5.3](https://github.com/visitscotland/vs-component-library/compare/v5.5.2...v5.5.3) (2025-09-08)


### Bug Fixes

* **civic:** remove reference to sop ([c89730c](https://github.com/visitscotland/vs-component-library/commit/c89730c0a775fc9e15687ae0a148e98ba302ab13))

## [5.5.2](https://github.com/visitscotland/vs-component-library/compare/v5.5.1...v5.5.2) (2025-09-08)


### Bug Fixes

* **civic:** stop trying to define datalayer ([b17e620](https://github.com/visitscotland/vs-component-library/commit/b17e620d7b6ddb8f448f8797dc5be3ab34c8f097))

## [5.5.1](https://github.com/visitscotland/vs-component-library/compare/v5.5.0...v5.5.1) (2025-09-08)


### Bug Fixes

* **civic:** switch back to datalayer version ([30adbb2](https://github.com/visitscotland/vs-component-library/commit/30adbb2c1f58ae608037c417448f8a1abe512102))

# [5.5.0](https://github.com/visitscotland/vs-component-library/compare/v5.4.3...v5.5.0) (2025-09-08)


### Features

* **civic:** switch to window. instead of datalayer.push ([f84605d](https://github.com/visitscotland/vs-component-library/commit/f84605d1d34fb30210d94e4bf2b0bdf3ffdf8608))

## [5.4.3](https://github.com/visitscotland/vs-component-library/compare/v5.4.2...v5.4.3) (2025-09-05)


### Bug Fixes

* **civic:** add option to load script for embed wrapper ([41d022a](https://github.com/visitscotland/vs-component-library/commit/41d022a060513df1366033bcd7ac7a05645d5e7a))

## [5.4.2](https://github.com/visitscotland/vs-component-library/compare/v5.4.1...v5.4.2) (2025-09-03)


### Bug Fixes

* **civic:** update syntax slightly ([6198280](https://github.com/visitscotland/vs-component-library/commit/6198280a6c9d376430a319117eb39358185c3429))

## [5.4.1](https://github.com/visitscotland/vs-component-library/compare/v5.4.0...v5.4.1) (2025-09-03)


### Bug Fixes

* **civic:** correct dispatchEvent syntax ([f8ca8b3](https://github.com/visitscotland/vs-component-library/commit/f8ca8b3a2a3aa1bbf274990c1ede3f7c6debadff))

# [5.4.0](https://github.com/visitscotland/vs-component-library/compare/v5.3.13...v5.4.0) (2025-09-03)


### Features

* **civic:** adjust event triggers to account for switch to datalayer ([f2e575c](https://github.com/visitscotland/vs-component-library/commit/f2e575c7b844e27da862037f30e316cdc38a3c1f))
* **civic:** correct bypass val name in Article story ([8b120e0](https://github.com/visitscotland/vs-component-library/commit/8b120e005e69509ef9aa5c4df9f8f380ab9ee220))
* **civic:** implement new mixin and integrate with Video ([9b39949](https://github.com/visitscotland/vs-component-library/commit/9b39949d3ecd9cb0d83131aa0e9e2a37ffc0f61a))
* **civic:** make embed wrapper removal more explicit ([b828426](https://github.com/visitscotland/vs-component-library/commit/b82842628ab98fed4f4c9e447d5a597493543dc9))
* **civic:** make mixin computeds more ssr safe ([109d667](https://github.com/visitscotland/vs-component-library/commit/109d6676816ba2b87d6fabae4d046a81e93d5b68))
* **civic:** remove cookie store ([12f1a48](https://github.com/visitscotland/vs-component-library/commit/12f1a489596e89d26d3afc5d3774d55eb675b698))
* **civic:** remove lingering ot styles and update manage cookies button ([4e0c030](https://github.com/visitscotland/vs-component-library/commit/4e0c030898362d721d5108895576c0e4d90543a9))
* **civic:** remove redundant VsCookieChecker component ([85490f0](https://github.com/visitscotland/vs-component-library/commit/85490f026e55f618e4b5f7f960a82396248e42ff))
* **civic:** update all tests to account for new manager ([f3e88af](https://github.com/visitscotland/vs-component-library/commit/f3e88afc3015fb02df1a19091d9dc4c75a92d87b))

## [5.3.13](https://github.com/visitscotland/vs-component-library/compare/v5.3.12...v5.3.13) (2025-09-01)


### Bug Fixes

* **vscardgroup:** exports the VsCardGroup component ([85c85ac](https://github.com/visitscotland/vs-component-library/commit/85c85ac173eb1d81f511e7fcc2dc733c20a84a2c))

## [5.3.12](https://github.com/visitscotland/vs-component-library/compare/v5.3.11...v5.3.12) (2025-08-21)


### Bug Fixes

* **search results:** set font weight to ensure icon is visible ([bea3d07](https://github.com/visitscotland/vs-component-library/commit/bea3d07230fdfb71d0fdf1d54f8e25d5e1f4df3c))

## [5.3.11](https://github.com/visitscotland/vs-component-library/compare/v5.3.10...v5.3.11) (2025-08-20)


### Bug Fixes

* **sticky nav:** add option for sticky nav with content ([ca37a7c](https://github.com/visitscotland/vs-component-library/commit/ca37a7c39b6e74aac7ed78848854257e99883ced))

## [5.3.10](https://github.com/visitscotland/vs-component-library/compare/v5.3.9...v5.3.10) (2025-08-14)


### Bug Fixes

* **build:** switch from define to rollup-replace ([daaf944](https://github.com/visitscotland/vs-component-library/commit/daaf9448f63377ff938db026b8a18344e1f6d4a6))

## [5.3.9](https://github.com/visitscotland/vs-component-library/compare/v5.3.8...v5.3.9) (2025-08-14)


### Bug Fixes

* **build:** restore polyfill for getuid specifically ([9efdc92](https://github.com/visitscotland/vs-component-library/commit/9efdc920ee437ee51ae5ec809e5cdd4b846db564))

## [5.3.8](https://github.com/visitscotland/vs-component-library/compare/v5.3.7...v5.3.8) (2025-08-14)


### Bug Fixes

* **build:** remove node-polyfills from vite ([4dfcbc2](https://github.com/visitscotland/vs-component-library/commit/4dfcbc2b8605512ac0e3998e309abe23422e3895))

## [5.3.7](https://github.com/visitscotland/vs-component-library/compare/v5.3.6...v5.3.7) (2025-08-13)


### Bug Fixes

* **buttons:** fix specificity issue with focus states ([e48ec9b](https://github.com/visitscotland/vs-component-library/commit/e48ec9bd7a6b3820ba7d5b25a9ce07ae20db56f3))

## [5.3.6](https://github.com/visitscotland/vs-component-library/compare/v5.3.5...v5.3.6) (2025-08-12)


### Bug Fixes

* **footer social links:** add aria label override functionality ([5ebc7e5](https://github.com/visitscotland/vs-component-library/commit/5ebc7e5074115f8b2d47cc55536b8a1e868f10bf))

## [5.3.5](https://github.com/visitscotland/vs-component-library/compare/v5.3.4...v5.3.5) (2025-08-08)


### Bug Fixes

* **build:** restore polyfills temporarily ([a50f1cd](https://github.com/visitscotland/vs-component-library/commit/a50f1cd39be869e2cde1db05a53d5105a339a25b))

## [5.3.4](https://github.com/visitscotland/vs-component-library/compare/v5.3.3...v5.3.4) (2025-08-08)


### Bug Fixes

* **build:** and again ([04d55c7](https://github.com/visitscotland/vs-component-library/commit/04d55c798f94b03ea9a6e904be31da77a0ec8b34))

## [5.3.3](https://github.com/visitscotland/vs-component-library/compare/v5.3.2...v5.3.3) (2025-08-08)


### Bug Fixes

* **build:** correct syntax ([8dc9d64](https://github.com/visitscotland/vs-component-library/commit/8dc9d64779eeb72871beea22317dc3ba4d2965f7))

## [5.3.2](https://github.com/visitscotland/vs-component-library/compare/v5.3.1...v5.3.2) (2025-08-08)


### Bug Fixes

* **build:** restore process.getuid shim from before polyfills ([ec9177a](https://github.com/visitscotland/vs-component-library/commit/ec9177ac0d8b95c513b5d29c8efbd528a0671b1c))

## [5.3.1](https://github.com/visitscotland/vs-component-library/compare/v5.3.0...v5.3.1) (2025-08-08)


### Bug Fixes

* **build:** remove node polyfills library from vite build for nuxt 3.16 compatibility ([3d03622](https://github.com/visitscotland/vs-component-library/commit/3d036227f0ea87b4730c17ac2de6ec06efd5263d))

# [5.3.0](https://github.com/visitscotland/vs-component-library/compare/v5.2.0...v5.3.0) (2025-08-05)


### Features

* **tokens:** update elevation tokens ([7864b70](https://github.com/visitscotland/vs-component-library/commit/7864b708ee4b6c72f07afc51f7a04cd1e13c4585))

# [5.2.0](https://github.com/visitscotland/vs-component-library/compare/v5.1.2...v5.2.0) (2025-08-05)


### Features

* **border-radius:** refactor border-radius tokens in the system and apply for consistency ([eacccb6](https://github.com/visitscotland/vs-component-library/commit/eacccb6a29ad09fff57b6b3b18188f62153faaa5))

## [5.1.2](https://github.com/visitscotland/vs-component-library/compare/v5.1.1...v5.1.2) (2025-08-01)


### Bug Fixes

* **video:** restore previous videostore timing ([5f61e9c](https://github.com/visitscotland/vs-component-library/commit/5f61e9cd38b38148572391a097a96e174fb92ea7))

## [5.1.1](https://github.com/visitscotland/vs-component-library/compare/v5.1.0...v5.1.1) (2025-08-01)


### Bug Fixes

* **forms:** only invoke exponea.identify() on breg forms ([61b242d](https://github.com/visitscotland/vs-component-library/commit/61b242d0a2fbc0eceab886d7591bce9bf920fe75))

# [5.1.0](https://github.com/visitscotland/vs-component-library/compare/v5.0.3...v5.1.0) (2025-07-30)


### Features

* **navigation page:** update navigation page pattern to remove featured card ([f68aae9](https://github.com/visitscotland/vs-component-library/commit/f68aae9a163de376c634c7d63a9fc2d54be2e92c))
* **spotlight section:** add new spotlight section component to component index ([3fbaf5c](https://github.com/visitscotland/vs-component-library/commit/3fbaf5c5e188c7612aab58dc68af5885028242a1))
* **spotlight section:** update spotlight section and add to nav page pattern ([b8d45df](https://github.com/visitscotland/vs-component-library/commit/b8d45df5520890783f34c5885810ee8f16c67003))
* **spotlightsection:** add new spotlight section component ([ba0d6db](https://github.com/visitscotland/vs-component-library/commit/ba0d6db9d8cd373c5264fe0bea2f8b691637a0e4))

## [5.0.3](https://github.com/visitscotland/vs-component-library/compare/v5.0.2...v5.0.3) (2025-07-29)


### Bug Fixes

* **lint:** address linting issues raised by dependabot update ([0b1ca62](https://github.com/visitscotland/vs-component-library/commit/0b1ca6231b8c57b459d6ce73aea28c413dae3f20))

## [5.0.2](https://github.com/visitscotland/vs-component-library/compare/v5.0.1...v5.0.2) (2025-07-22)


### Bug Fixes

* **video:** restore play icon on slc video button ([135651c](https://github.com/visitscotland/vs-component-library/commit/135651ceb509b471dd09da714732d7458d379361))

## [5.0.1](https://github.com/visitscotland/vs-component-library/compare/v5.0.0...v5.0.1) (2025-07-18)


### Bug Fixes

* **build:** restore full build on prepack ([97f6b17](https://github.com/visitscotland/vs-component-library/commit/97f6b17feb2bb584e4b556af737ad5060126abd8))
* **videostore:** account for change in videoLoaded as well ([4afad57](https://github.com/visitscotland/vs-component-library/commit/4afad579a1f1e396e64e52e2399ec4ade027572e))
* **videostore:** add premount fallback for store ([0d7d887](https://github.com/visitscotland/vs-component-library/commit/0d7d88769560afd484a83eed5623679f331911b9))
* **videostore:** adjust store loading timing in SLC component ([99317ec](https://github.com/visitscotland/vs-component-library/commit/99317ec03c6d283a8d78b27468fb4282132745fa))

# [5.0.0](https://github.com/visitscotland/vs-component-library/compare/v4.29.0...v5.0.0) (2025-07-15)


### Bug Fixes

* **articledetails:** fix logic for no read time in article details ([1a329ed](https://github.com/visitscotland/vs-component-library/commit/1a329ed4ba3fafae7bae6cb327188196102a8b0c))
* **itinerary:** revert changes to itinerary stop icon to xl ([9178796](https://github.com/visitscotland/vs-component-library/commit/91787961337e29611b5694a9f4c132ebb4171d8c))
* **skiscotland:** update icon name to use new prop ([3d36331](https://github.com/visitscotland/vs-component-library/commit/3d363310a2f02209adb33f71c7c7f5324a5a1f57))
* **togglebutton:** fix class for toggle button ([05e834b](https://github.com/visitscotland/vs-component-library/commit/05e834b37dd71e7b5c8487deb37957a2d2ec9d16))


### Features

* **articledetails:** rename blogDetails component to articleDetails ([0639adf](https://github.com/visitscotland/vs-component-library/commit/0639adf415763554de67bd400a2a2c6eb08f1336))
* **body:** adding calculated margins to heading and body components ([00d3615](https://github.com/visitscotland/vs-component-library/commit/00d361593c9feaf5a72054b35f53df84a805b19f))
* **body:** adding global body typography styles ([93335b2](https://github.com/visitscotland/vs-component-library/commit/93335b2e4e4b4e522caddb56ee923dabaa444566))
* **body:** adjust body heading sizes across viewports ([f59071b](https://github.com/visitscotland/vs-component-library/commit/f59071b1b5e6382235a52e71c461aa07f2f3f74f))
* **body:** adjusting body font sizes across viewports ([f4adb80](https://github.com/visitscotland/vs-component-library/commit/f4adb80f3ef0e7054e27169a269cfde729873dab))
* **body:** update spacing in body and cards ([9ab07d3](https://github.com/visitscotland/vs-component-library/commit/9ab07d3ace684fb610a4b96cff51c7db31ea7532))
* **build:** bundle all styles into a single output in vite ([a61c09e](https://github.com/visitscotland/vs-component-library/commit/a61c09e728c79ea89e08779ca9389dfbc38a6704))
* **button:** rename transparent button to subtle ([ba362bd](https://github.com/visitscotland/vs-component-library/commit/ba362bdbd85323492b2938ea5343df62be8cb2b6))
* **card:** update cards to use new typography and icon component changes ([906c642](https://github.com/visitscotland/vs-component-library/commit/906c642d7b5c6291c894c50c400d45b4df34c10b))
* **detail:** add colour and noMargin props to detail ([49046a9](https://github.com/visitscotland/vs-component-library/commit/49046a9b7cd162eb8dfe3429b7b2ec10637c00df))
* **detail:** add new detail typography component ([a598de2](https://github.com/visitscotland/vs-component-library/commit/a598de20bec0480e2eb9cdb01561c96cd7acb376))
* **detail:** add new font-based-margins mixin for calculating margin spacing ([98caf8f](https://github.com/visitscotland/vs-component-library/commit/98caf8fd3efa421cb5d01d2be79e5c22d2fb898e))
* **detail:** updating story to include arg types ([93795a4](https://github.com/visitscotland/vs-component-library/commit/93795a40101b1c4a3eb425e6391f4cbe9e6f1c42))
* **fontawesome:** update to most recent version of the icon kit ([d57bb29](https://github.com/visitscotland/vs-component-library/commit/d57bb2917c0748004dfe44323af5788b6d7273b0))
* **heading:** add new font-based-margin mixin to calculate heading spacing ([2e7e5c8](https://github.com/visitscotland/vs-component-library/commit/2e7e5c8a6c4baeae5ef821e412bf775f0a0b584a))
* **heading:** headings now scale automatically at md breakpoint ([f97de56](https://github.com/visitscotland/vs-component-library/commit/f97de56f6024f3e516fee47737be2113f3bf2576))
* **heading:** remove all references to display-xs heading ([bbd3cff](https://github.com/visitscotland/vs-component-library/commit/bbd3cffcf188f6a2732388d5e82d07e599c44256))
* **heading:** remove display-l and heading-xxl heading styles ([dd76c81](https://github.com/visitscotland/vs-component-library/commit/dd76c81f2307328803b46c29db6171211aa41e1c))
* **heading:** removed subheading slot and subheading styles from heading component ([cf0462a](https://github.com/visitscotland/vs-component-library/commit/cf0462a9469f2903dbd90f1a9343d9c4a76a0915))
* **hero:** hero section headings have been updated to be larger than body text ([a435dad](https://github.com/visitscotland/vs-component-library/commit/a435dad95176060f509a63e01cae4dcf011fb953))
* **hero:** rename src prop to imgSrc ([c432bbb](https://github.com/visitscotland/vs-component-library/commit/c432bbb537159d7a75b88e840b63358e7481d47e))
* **icon:** add new semantic icon tokens into the system ([eae9e15](https://github.com/visitscotland/vs-component-library/commit/eae9e15ea734bcbc11183e86b9c1d9146c4d07fe))
* **icon:** add semantic icon tokens into the system ([b714e41](https://github.com/visitscotland/vs-component-library/commit/b714e41863e66746a9a3dd68b5df928beaba0188))
* **icon:** fixing the rest of icons with new icon classes ([82c4aa6](https://github.com/visitscotland/vs-component-library/commit/82c4aa62d54db7bedbd4bb5838be27bbd1a77996))
* **icon:** refactor icon variants to match new design tokens ([1ada7ef](https://github.com/visitscotland/vs-component-library/commit/1ada7efe0a472d67cd82a1d3e3be5cd9890a8cb4))
* **icon:** removes orientation prop from icon component ([1c34657](https://github.com/visitscotland/vs-component-library/commit/1c3465705026290e9595761280781cccecc2922c))
* **icons:** change icon name prop to icon and adds new FA kit ([fa576da](https://github.com/visitscotland/vs-component-library/commit/fa576da5d29967aaab9a7008324907eb427e19a9))
* **icons:** update icon library to latest FA kit ([1caf4c0](https://github.com/visitscotland/vs-component-library/commit/1caf4c04a67904a988740d5cff20dd7fd7471991))
* **icons:** update icon to latest kit ([8ca25c5](https://github.com/visitscotland/vs-component-library/commit/8ca25c57541345f0ad7dac569912745dae9a0dec))
* **icon:** update close icon across the site to use new token ([e27bb69](https://github.com/visitscotland/vs-component-library/commit/e27bb69391fa9718b2a0271c8e050290d449a8e4))
* **icon:** update icon colour variants in storybook ([b6c17c4](https://github.com/visitscotland/vs-component-library/commit/b6c17c411f544ead07a92274451b8d68a35e0cb9))
* **icon:** update icon prop with correct value ([b7d956e](https://github.com/visitscotland/vs-component-library/commit/b7d956ef1732c2a2b7d46b737fe867e2893254c6))
* **icon:** update icon to new classes ([7ceed92](https://github.com/visitscotland/vs-component-library/commit/7ceed9281230b8d8724faacb68ccec15acce9de3))
* **icon:** update icon tokens to include play/pause ([5615071](https://github.com/visitscotland/vs-component-library/commit/56150712addd6a87aee09844cf7be06b3561ac93))
* **icon:** update icons in buttons to new classes ([e030669](https://github.com/visitscotland/vs-component-library/commit/e0306696d52c06f4ba5d516eb89f8a8ca494b489))
* **icon:** update icons in css to new kit font ([7a35ed7](https://github.com/visitscotland/vs-component-library/commit/7a35ed74ec9ba8b4edaed1269b8f9008d90d84de))
* **icon:** update map icons to new icon classes ([7c285d0](https://github.com/visitscotland/vs-component-library/commit/7c285d022651e4d9d139727ce1d823decb4bd7e2))
* **icon:** update transport icons across the system ([153076a](https://github.com/visitscotland/vs-component-library/commit/153076a5a2f1559d60723d32c1f4edc4dbfda53c))
* **itinerary:** add detail to itinerary and listicle components ([a82826f](https://github.com/visitscotland/vs-component-library/commit/a82826f26b32bf960202d643993ac7e121c53348))
* **itinerary:** decouple sub-heading from heading component in itinerary stop ([64d543b](https://github.com/visitscotland/vs-component-library/commit/64d543bf57e2f19417150ae0d84a236c89d3a6f6))
* **link:** update link and social share to have correct icon variants ([cd61b19](https://github.com/visitscotland/vs-component-library/commit/cd61b19bc7591107551a5ce19a7e340ca4124448))
* **listicle:** decouple subheading from heading in listicles ([c915d2e](https://github.com/visitscotland/vs-component-library/commit/c915d2e1da2ca57b733b6d6966758ddd7afed027))
* **maps:** expose maps for consumption in nuxt sites ([24d55dd](https://github.com/visitscotland/vs-component-library/commit/24d55ddeec6410ccbfa78d3d685e954d523d65e1))
* remove duotone prop from icon component ([ce0d949](https://github.com/visitscotland/vs-component-library/commit/ce0d9497263b9fac20563b0db19e1e1436e28132))
* **rich-tect:** update external link style ([5db13b2](https://github.com/visitscotland/vs-component-library/commit/5db13b2a6d84c285214f11e225b8a3d3fd552709))
* **rich-text:** add styles for headings and lists to rich text component ([2dfce47](https://github.com/visitscotland/vs-component-library/commit/2dfce4797aeaeec158758f511f74cb25f93d1508))
* **rich-text:** rename vs-rich-text-wrapper component to vs-body ([b860c84](https://github.com/visitscotland/vs-component-library/commit/b860c84375b9707682c160fb48f022f2d28088e2))
* **sitesearchform:** remove clearButtonText prop from siteSearchForm component ([8f64fc8](https://github.com/visitscotland/vs-component-library/commit/8f64fc8edf6fdb37533956abeb25d0693084e677))
* **tokens:** add new tokens in and update font-weight across the library ([72eb27d](https://github.com/visitscotland/vs-component-library/commit/72eb27d473719bde54afc19c704472f6ff992c36))
* **typography:** removes global paragraph spacing, adds to text component and updates use cases ([48d7158](https://github.com/visitscotland/vs-component-library/commit/48d71582cc723b1c5c31f35c5dea7bfbd48ebfca))


### BREAKING CHANGES

* **articledetails:** The rename blogDetails component and props have been updated to articleDetails and
replacing blog with article in props and will need updated everywhere its used.
* **hero:** src prop has been renamed to imgSrc so the heroSection will need to be updated to
the new prop.
* **build:** As the map and main js bundles both share a number of components (heading, icon,
buttontogglegroup), css code split produces some unhelpful results. The shared components get put
into a separate chunk, which some setups could consume asynchronously as they're needed but which
our nuxt setup can't handle properly. To avoid a particularly complicated loading  setup in the nuxt
sites it's simplest to just remove it. This also  means that the existing issue with icons not
working on non-js sites is resolved, because all the icon css files are pulled in automatically with
the main bundle. The performance concerns about that originally are no longer valid as the icon file
is hugely smaller now we subset the icons properly.
* **button:** The transparent button variant has been renamed to subtle and will need to be
changed wherever it is used.
* **sitesearchform:** Remove clearButtonText prop from siteSearchForm
* **heading:** Subheading has been removed from heading component
* **rich-text:** VsRichTextWrapper has been renamed to VsBody - this will need to be updated
anywhere this component is used.
* **typography:** Global paragraph spacing has been removed which may cause some unintended layout
issues. Use the text component for consistent paragraph spacing for body text at and applit margin
on an individual basis
* **icon:** refactor icon variants to match new design tokens - these will need to be updated
wherever used to ensure it matches to the new varients. Rename “default” to “primary“,  Rename
“primary“ to “cta“,  Rename “tertiary” to “highlight“,  Rename “danger“ to “error“,  Add new
variants : “secondary”, “success“, and “warning“
* **icon:** removes orientation prop from icon component - use icon from the icon library
instead
* remove duotone prop from icon component, now use icon prop to pass correct set of
classes to matching icon in the fontawesome kit

# [4.29.0](https://github.com/visitscotland/vs-component-library/compare/v4.28.1...v4.29.0) (2025-07-14)


### Features

* **hero:** add fetchpriority=”high” to video in hero section ([909fd11](https://github.com/visitscotland/vs-component-library/commit/909fd1105f40678c5758185f4b1dff87a1325328))

## [4.28.1](https://github.com/visitscotland/vs-component-library/compare/v4.28.0...v4.28.1) (2025-07-07)


### Bug Fixes

* **css:** remove css rules with syntax errors ([d41ea97](https://github.com/visitscotland/vs-component-library/commit/d41ea97e4ab50b25ce1380c57d49c445bd336287))

# [4.28.0](https://github.com/visitscotland/vs-component-library/compare/v4.27.0...v4.28.0) (2025-06-26)


### Features

* **images:** load appropriate images based on usage size as well as screen size ([46ddf67](https://github.com/visitscotland/vs-component-library/commit/46ddf674dee453f75a847b22917f763c10296787))
* **images:** reduce code re-use in imgSizesMixin ([9964ec9](https://github.com/visitscotland/vs-component-library/commit/9964ec9688bfb3cbcc2a93d2c06cbcea85b3ba3b))
* **images:** rename arg ([b01bab9](https://github.com/visitscotland/vs-component-library/commit/b01bab9f9b5713d1bcff23bcac30cd3e8a83f8f5))

# [4.27.0](https://github.com/visitscotland/vs-component-library/compare/v4.26.3...v4.27.0) (2025-06-25)


### Bug Fixes

* **a11y:** add tests and correct wrapper detection for data-test ([55db30d](https://github.com/visitscotland/vs-component-library/commit/55db30d219d30329963f173082582ae3925ae7e7))
* **a11y:** remove unneeded id ([54f5533](https://github.com/visitscotland/vs-component-library/commit/54f553339ea3baec457b1083410a21888b2dd9eb))


### Features

* **a11y:** add status alert to hero section video controls ([de9e9e3](https://github.com/visitscotland/vs-component-library/commit/de9e9e3ba2ca3c7e9f3475d53cc1bbec7d14bdce))

## [4.26.3](https://github.com/visitscotland/vs-component-library/compare/v4.26.2...v4.26.3) (2025-06-06)


### Bug Fixes

* **cookies:** use proper warning type ([a832e41](https://github.com/visitscotland/vs-component-library/commit/a832e41a9fa62e9c7e04cd5054730b04db31c5c6))

## [4.26.2](https://github.com/visitscotland/vs-component-library/compare/v4.26.1...v4.26.2) (2025-06-06)


### Bug Fixes

* **video:** restore cookie button in megalinks ([061ac7c](https://github.com/visitscotland/vs-component-library/commit/061ac7cd69cc25a3231b5a082d3af2673b9fefcd))

## [4.26.1](https://github.com/visitscotland/vs-component-library/compare/v4.26.0...v4.26.1) (2025-06-06)


### Bug Fixes

* **card:** fix card not appearing as same height in a row ([89cfde3](https://github.com/visitscotland/vs-component-library/commit/89cfde301d75a58d869cec90312e67cf53408bb1))

# [4.26.0](https://github.com/visitscotland/vs-component-library/compare/v4.25.0...v4.26.0) (2025-06-04)


### Features

* **video:** restore missing cookie warnings ([157d624](https://github.com/visitscotland/vs-component-library/commit/157d624b3cd4b2d28c64e1b63d75fae6035eead0))

# [4.25.0](https://github.com/visitscotland/vs-component-library/compare/v4.24.1...v4.25.0) (2025-06-02)


### Bug Fixes

* **video:** update tests ([b73ed01](https://github.com/visitscotland/vs-component-library/commit/b73ed0144a79a578fbe757955b34e8b8648fd633))


### Features

* **video:** restore no-cookie warning and block video ([45c0fe7](https://github.com/visitscotland/vs-component-library/commit/45c0fe76042818c8adc9b8c8d3646d4f237db392))

## [4.24.1](https://github.com/visitscotland/vs-component-library/compare/v4.24.0...v4.24.1) (2025-05-29)


### Bug Fixes

* **input:** fixed "component emitted event 'status-update' but is not declared" error message ([48b861b](https://github.com/visitscotland/vs-component-library/commit/48b861bcd6150eac48697a61c008153d7268f8b4))
* **vsinput:** fixed "component emitted event 'status-update' but is not declared" error message ([91028f9](https://github.com/visitscotland/vs-component-library/commit/91028f997fd843b8955c9bb22b8aeb731d8fc78d))


### Reverts

* **input:** revert adding emit ([60cf8db](https://github.com/visitscotland/vs-component-library/commit/60cf8dbb952cfb33532a2ef9cb3c66976d8ea11d))

# [4.24.0](https://github.com/visitscotland/vs-component-library/compare/v4.23.0...v4.24.0) (2025-05-28)


### Features

* **badge:** add new subtle variant for badge component ([45b15c5](https://github.com/visitscotland/vs-component-library/commit/45b15c5c6233a401a0307c4dce7fb7a546335b6d))
* **card group:** update card group pattern files to include new link card ([10c8baf](https://github.com/visitscotland/vs-component-library/commit/10c8baf62b6113d34536954fb8ce851a5a959479))
* **card:** add accentBar option to card component ([54e8889](https://github.com/visitscotland/vs-component-library/commit/54e88898a6cae0158de41451130df93f89948bee))
* **card:** push footer content to the bottom of the card ([f357a69](https://github.com/visitscotland/vs-component-library/commit/f357a6975b852cef77a10a79b9802f0c5f590021))
* **card:** update card component to include new link card pattern ([f2f4024](https://github.com/visitscotland/vs-component-library/commit/f2f4024d84473af90c68ba11d02b21a8e5bdadd8))

# [4.23.0](https://github.com/visitscotland/vs-component-library/compare/v4.22.0...v4.23.0) (2025-05-27)


### Features

* **card:** apply new truncate utility class to split card body ([c5485e3](https://github.com/visitscotland/vs-component-library/commit/c5485e3f6145bc87a5d8e3c901e7d0ddb212ece3))
* **utilities:** creates new utilities scss file for utility classes ([20ddf84](https://github.com/visitscotland/vs-component-library/commit/20ddf847ca78d5197b653ae60b9e8581494ec691))

# [4.22.0](https://github.com/visitscotland/vs-component-library/compare/v4.21.0...v4.22.0) (2025-05-27)


### Features

* **card layout:** add card layout pattern ([904bb13](https://github.com/visitscotland/vs-component-library/commit/904bb134ec393039df3081efcf5e99f8d1db9788))
* **cardgroup:** add new card group component to the library ([bb0610c](https://github.com/visitscotland/vs-component-library/commit/bb0610cf989b55a1fbc9758ef99ec33dccd487f3))

# [4.21.0](https://github.com/visitscotland/vs-component-library/compare/v4.20.1...v4.21.0) (2025-05-20)


### Features

* **card:** add new card component ([551ce0a](https://github.com/visitscotland/vs-component-library/commit/551ce0a853e25c2d91ecb2ca32343448ec876f21))
* **card:** adds new card component ([1a38b00](https://github.com/visitscotland/vs-component-library/commit/1a38b0097d1afbf47a879b90073f958b4056f00c))
* **link:** added new link variant for secondary links - used in cards ([f8baf98](https://github.com/visitscotland/vs-component-library/commit/f8baf98b105e344c665e76b0eea13f254b096b33))

## [4.20.1](https://github.com/visitscotland/vs-component-library/compare/v4.20.0...v4.20.1) (2025-04-14)


### Bug Fixes

* **megalinks:** fixed bug where video play button was misaligned with image ([aae2add](https://github.com/visitscotland/vs-component-library/commit/aae2add601084546c1fca6537f20492572c8db84))

# [4.20.0](https://github.com/visitscotland/vs-component-library/compare/v4.19.3...v4.20.0) (2025-04-10)


### Features

* **styled lists:** allow anchor links to styled list items ([f682ea0](https://github.com/visitscotland/vs-component-library/commit/f682ea07ad57263989ad06037880db87f5e36fb4))

## [4.19.3](https://github.com/visitscotland/vs-component-library/compare/v4.19.2...v4.19.3) (2025-04-08)


### Bug Fixes

* **input,meganav,sitesearchform:** remove clear button props, add and style native clear ([8d4e8f3](https://github.com/visitscotland/vs-component-library/commit/8d4e8f309efda22ec418916961aa4e296763c004))

## [4.19.2](https://github.com/visitscotland/vs-component-library/compare/v4.19.1...v4.19.2) (2025-04-08)


### Bug Fixes

* **font awesome:** add missing icons ([dc7c5c3](https://github.com/visitscotland/vs-component-library/commit/dc7c5c330631a010ee57179ac9b52f7fb7578cae))

## [4.19.1](https://github.com/visitscotland/vs-component-library/compare/v4.19.0...v4.19.1) (2025-03-31)


### Bug Fixes

* **tabs:** adjust tab display on desktop ([366b130](https://github.com/visitscotland/vs-component-library/commit/366b130c524c9a46aebb3f95e30bb1f6c8708758))
* **tabs:** tab height on small mobile ([2bf0a8e](https://github.com/visitscotland/vs-component-library/commit/2bf0a8ed5266c9fabc459d5e2325a91ba9cd9b97))

# [4.19.0](https://github.com/visitscotland/vs-component-library/compare/v4.18.1...v4.19.0) (2025-03-27)


### Bug Fixes

* **hero:** only show video control when videoSrc is passed ([ec83520](https://github.com/visitscotland/vs-component-library/commit/ec835201fe247db3a40be3e0fe9f6c3f2bb5c700))
* **hero:** update hero video control test for updated icon ([dbbefbb](https://github.com/visitscotland/vs-component-library/commit/dbbefbbf9e22a6719052def49b26df37d18194b9))


### Features

* **hero:** add toggle control for video in hero ([f29f8a5](https://github.com/visitscotland/vs-component-library/commit/f29f8a5db680ff7dfc99619d27509cf5dca1b293))
* **hero:** hide video from screen readers ([3dbcc68](https://github.com/visitscotland/vs-component-library/commit/3dbcc68deb3f3d60129d0d2b1c1884ba9c9d3a3c))
* **hero:** update hero video control colours and hero video example ([5d1b0fc](https://github.com/visitscotland/vs-component-library/commit/5d1b0fcab025bf8f46b14ccbdc84f79ff00d8ba3))
* **hero:** update hero video control to use new pause icon ([9a0b108](https://github.com/visitscotland/vs-component-library/commit/9a0b1082d6dc86fcb896580604dc3e0dbd7c16f1))

## [4.18.1](https://github.com/visitscotland/vs-component-library/compare/v4.18.0...v4.18.1) (2025-03-27)


### Bug Fixes

* **article:** add ability to override heading style ([20e265a](https://github.com/visitscotland/vs-component-library/commit/20e265a6ad417a15aca8f7d79695926a1e62a6fb))
* **megalinks:** add ability to override heading level and style ([71d6e63](https://github.com/visitscotland/vs-component-library/commit/71d6e63986db51bd5bd4a66a31ad81581e24b5af))
* **meganav:** update aria role so that they work with all combinations of the menu ([c1c905f](https://github.com/visitscotland/vs-component-library/commit/c1c905f644a91435b52cba29498a61f75b9ec13a))
* **module wrapper:** add ability to override heading style ([bdbef28](https://github.com/visitscotland/vs-component-library/commit/bdbef28941ca25a8766682c29f37a77d64e8738b))

# [4.18.0](https://github.com/visitscotland/vs-component-library/compare/v4.17.0...v4.18.0) (2025-03-25)


### Bug Fixes

* **sticky nav:** ensure skip to is on screen if focussed ([abfc686](https://github.com/visitscotland/vs-component-library/commit/abfc6866e5a829cf9dc535d1eff66517ff21056d))


### Features

* **skip to:** add landmark id to hero section heading ([5fc2e99](https://github.com/visitscotland/vs-component-library/commit/5fc2e9964a24fd558d0be298d3c099ca5df6f8c5))

# [4.17.0](https://github.com/visitscotland/vs-component-library/compare/v4.16.1...v4.17.0) (2025-03-25)


### Features

* **heading and megallinks:** added `id` prop to VsHeading and `sectionId` prop to VsMegalink ([e769c13](https://github.com/visitscotland/vs-component-library/commit/e769c134636a4af2eabe6374552d8b75bab14d1a))

## [4.16.1](https://github.com/visitscotland/vs-component-library/compare/v4.16.0...v4.16.1) (2025-03-24)


### Bug Fixes

* **filter section:** remove width from date input ([5ffd793](https://github.com/visitscotland/vs-component-library/commit/5ffd793fd3c3ecc743bca8ef2c0be1eff609dc25))

# [4.16.0](https://github.com/visitscotland/vs-component-library/compare/v4.15.0...v4.16.0) (2025-03-20)


### Features

* **global menu:** remove site navigation from global nav ([6e09616](https://github.com/visitscotland/vs-component-library/commit/6e09616e3429b40656ee77bbe7d9bf916e046fca))

# [4.15.0](https://github.com/visitscotland/vs-component-library/compare/v4.14.0...v4.15.0) (2025-03-19)


### Features

* **tabs:** add datalayer tracking for tab click event ([342752b](https://github.com/visitscotland/vs-component-library/commit/342752bbfe0cf7dc66d1d9f1f4bf7e3858bae7f9))

# [4.14.0](https://github.com/visitscotland/vs-component-library/compare/v4.13.13...v4.14.0) (2025-03-18)


### Bug Fixes

* **articles:** remove spacing in all cases ([04496c4](https://github.com/visitscotland/vs-component-library/commit/04496c4d942a52ef04ee261f90f36240683cf637))
* **article:** switch to spacer ([5aabf7d](https://github.com/visitscotland/vs-component-library/commit/5aabf7d0d5c59cb8142ec6c92065e4b4ad3b8cae))
* **stories:** add missing > ([7d41884](https://github.com/visitscotland/vs-component-library/commit/7d41884384ef39377405ed89bf5dc91693ac7c58))


### Features

* **article:** reduce spacing above vs-heading at top of article if no intro above ([e7266c8](https://github.com/visitscotland/vs-component-library/commit/e7266c84cdcd64289a87b381ccf5d8ee8686b98b))

## [4.13.13](https://github.com/visitscotland/vs-component-library/compare/v4.13.12...v4.13.13) (2025-03-11)


### Bug Fixes

* **styledlist:** remove margin-top ([729328d](https://github.com/visitscotland/vs-component-library/commit/729328de049d684e8e9423bccaba7d1e82cbd530))
* **vsstyledlist:** remove margin-top ([5f585bd](https://github.com/visitscotland/vs-component-library/commit/5f585bda2a4f455bccad71c4a93856cb61f389d6))

## [4.13.12](https://github.com/visitscotland/vs-component-library/compare/v4.13.11...v4.13.12) (2025-03-11)


### Bug Fixes

* **build:** proxy all node functions ([a1779f9](https://github.com/visitscotland/vs-component-library/commit/a1779f9f4552955692f74bf1b24f4642ccbf3cc0))

## [4.13.11](https://github.com/visitscotland/vs-component-library/compare/v4.13.10...v4.13.11) (2025-03-11)


### Bug Fixes

* **build:** correct getuid syntax ([3ec103d](https://github.com/visitscotland/vs-component-library/commit/3ec103d857adefd8adcfe828caf054af24ef4a42))

## [4.13.10](https://github.com/visitscotland/vs-component-library/compare/v4.13.9...v4.13.10) (2025-03-11)


### Bug Fixes

* **build:** restore partial env alongside uid shim ([0362da3](https://github.com/visitscotland/vs-component-library/commit/0362da396dec81c659f95439b054498fdd51ce7c))

## [4.13.9](https://github.com/visitscotland/vs-component-library/compare/v4.13.8...v4.13.9) (2025-03-11)


### Bug Fixes

* **build:** add process.getuid shim ([1d2e0ad](https://github.com/visitscotland/vs-component-library/commit/1d2e0ad489fa8ad25047fb8a91ab8fd25b7fc19b))

## [4.13.8](https://github.com/visitscotland/vs-component-library/compare/v4.13.7...v4.13.8) (2025-03-11)


### Bug Fixes

* **build:** remove process.env completely ([e784935](https://github.com/visitscotland/vs-component-library/commit/e78493514fd41cff066b0c779be3cc36d0ccc48b))

## [4.13.7](https://github.com/visitscotland/vs-component-library/compare/v4.13.6...v4.13.7) (2025-03-11)


### Bug Fixes

* **build:** restrict process.env values passed to build ([e82b940](https://github.com/visitscotland/vs-component-library/commit/e82b940b7843729bb62b4b4e9de95af184b050e3))
* **vsstyledlistitem:** remove bottom padding ([fc48ede](https://github.com/visitscotland/vs-component-library/commit/fc48edea4b1ae5bdf8c7e8b1474c02b054dbcc0a))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.13.6](https://github.com/visitscotland/vs-component-library/compare/v4.13.5...v4.13.6) (2025-03-10)


### 🐛 Bug Fixes

* **filter:** hide details marker on iOS devices ([31cf07c](https://github.com/visitscotland/vs-component-library/commit/31cf07c2e839c966aa10f1ecda12c2acc7d5ed87))

### [4.13.5](https://github.com/visitscotland/vs-component-library/compare/v4.13.4...v4.13.5) (2025-03-03)


### 🐛 Bug Fixes

* **icon:** fix Linkedin icon ([1c9d780](https://github.com/visitscotland/vs-component-library/commit/1c9d78016c240fd1a0b963c3201b7c999c55f6d8))

### [4.13.4](https://github.com/visitscotland/vs-component-library/compare/v4.13.3...v4.13.4) (2025-02-28)


### 🐛 Bug Fixes

* **npm:** move package to devdeps ([228c18a](https://github.com/visitscotland/vs-component-library/commit/228c18a33622dfbbc6ff6c22581be79df7e0a3a8))

### [4.13.3](https://github.com/visitscotland/vs-component-library/compare/v4.13.2...v4.13.3) (2025-02-28)


### ✨ Features

* **forms:** add spacing above error ([2622d9a](https://github.com/visitscotland/vs-component-library/commit/2622d9a392ed1e74a2d25176f6565b7119f7cacf))
* **forms:** restore submit error ([9763180](https://github.com/visitscotland/vs-component-library/commit/9763180160112325177d1d2459c7938f751ff6cb))

## [4.13.2](https://github.com/visitscotland/vs-component-library/compare/v4.13.1...v4.13.2) (2025-02-27)


### Bug Fixes

* **semantic release:** add test file ([d2c9710](https://github.com/visitscotland/vs-component-library/commit/d2c971087b8af9eeb6d218f5d4f8a940e5e912cb))
* **semantic release:** remove test file ([142092a](https://github.com/visitscotland/vs-component-library/commit/142092a53ed4d773245c93403ba711ad99c6ae0d))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.13.1](https://github.com/visitscotland/vs-component-library/compare/v4.13.0...v4.13.1) (2025-02-27)


### 🏗 Build System

* **deps:** bump vite from 5.4.11 to 5.4.12 in the npm_and_yarn group ([a9f58a0](https://github.com/visitscotland/vs-component-library/commit/a9f58a0a6df87ef10637dd66de5a75064a10e8d6))


### 🐛 Bug Fixes

* **megalinks:** improve SVG layout in stretched link cards ([ef25f51](https://github.com/visitscotland/vs-component-library/commit/ef25f518d04cb84ffe53972021ad74660baa49b3))
* **svgs:** stop using image scaler for SVGs ([78527af](https://github.com/visitscotland/vs-component-library/commit/78527af683dfd755a48acd47db26910865d48127))

## [4.13.0](https://github.com/visitscotland/vs-component-library/compare/v4.12.2...v4.13.0) (2025-02-27)


### ✨ Features

* **tabs:** bSH Styling implented for tabs ([dd51a99](https://github.com/visitscotland/vs-component-library/commit/dd51a991d697ffa85f46a1a0ad756e5f18864183))
* **tabs:** started to create a bsh styled variant ([f19e603](https://github.com/visitscotland/vs-component-library/commit/f19e60360a3c741f5d49152f766b9f725396cf1f))


### 🐛 Bug Fixes

* **tabs:** fixed slight change in non-bsh tabs appearance due to flex change ([cac0ddf](https://github.com/visitscotland/vs-component-library/commit/cac0ddf98f18daa8b5472f9a267b55412cd1d628))


### 🎨 Styling

* **tabs:** ensures conformity with code style ([149fc41](https://github.com/visitscotland/vs-component-library/commit/149fc41a2d33f01c74b35462fa66b6a63667dcd2))


### ✅ Tests

* **tabs:** added new bsh variant test ([585dc14](https://github.com/visitscotland/vs-component-library/commit/585dc14748792baa92188b68b32bc81be09f899f))
* **tabs:** fix failing test ([b82f2e3](https://github.com/visitscotland/vs-component-library/commit/b82f2e33b1f8c90e46dd55a8398276fd5be2cc46))


### ♻️ Code Refactoring

* **tabs:** adds in more detailed comments, uses tokens for border-radius and fixes story ([69b9f15](https://github.com/visitscotland/vs-component-library/commit/69b9f1526153d76fdc58fc1f7763b57a19b0d322))
* **tabs:** changed BSH Variant to No Container variant, added in mobile view ([5e35600](https://github.com/visitscotland/vs-component-library/commit/5e356002c1ded6a41912abc777a537047a24e112))
* **tabs:** fine-tuned sizing on tabs ([a5967c2](https://github.com/visitscotland/vs-component-library/commit/a5967c2f5ddaff224a9f9629832779edccf2ba55))
* **tabs:** refactored tabs to use provide/inject instead of props for child TabItem ([cddf457](https://github.com/visitscotland/vs-component-library/commit/cddf4579bbcce67ba6f472aa3cbfb3c57199228d))
* **tabs:** removed obsolete commented code ([e7aa6b1](https://github.com/visitscotland/vs-component-library/commit/e7aa6b14d3944d7a01e76934ae0960f3bb354074))

### [4.12.2](https://github.com/visitscotland/vs-component-library/compare/v4.12.1...v4.12.2) (2025-02-26)


### 🐛 Bug Fixes

* **filter:** simplify component ([5d9efbc](https://github.com/visitscotland/vs-component-library/commit/5d9efbc34780db8595aaa09ede6df66460ef92c8))

### [4.12.1](https://github.com/visitscotland/vs-component-library/compare/v4.12.0...v4.12.1) (2025-02-25)


### 🐛 Bug Fixes

* **maps:** ensure filters with subcategories remain visible ([27aaf75](https://github.com/visitscotland/vs-component-library/commit/27aaf754a284dcc2dd62b3f5b1f5bb4f0ff8ace2))


### ✨ Features

* **vsheading:** add new smallest size for headings ([194c0c2](https://github.com/visitscotland/vs-component-library/commit/194c0c21c543220f8b41bddf3857a29adef3ad92))

## [4.12.0](https://github.com/visitscotland/vs-component-library/compare/v4.11.1...v4.12.0) (2025-02-19)


### 📝 Docs

* **filter:** add mobile story ([dd85d3c](https://github.com/visitscotland/vs-component-library/commit/dd85d3c44d8016efd589bd20c7e0f961b93947f8))
* **filter:** update story ([bcb36ec](https://github.com/visitscotland/vs-component-library/commit/bcb36ec0795affa184f9800d235acde1de905fb3))


### ✨ Features

* **filter:** add new component ([93c74e4](https://github.com/visitscotland/vs-component-library/commit/93c74e48db948ff106c4c8fcdb5f54ce443a990e))
* **filter:** add nojs fallback ([8a502cf](https://github.com/visitscotland/vs-component-library/commit/8a502cf4a0c6abe61b71887bad56a8b891fbb4fc))
* **filter:** close modal when resizing screen ([7f1b058](https://github.com/visitscotland/vs-component-library/commit/7f1b058e4709f9665025e07a1605999c76d6821c))
* **filter:** develop new component ([2c715f8](https://github.com/visitscotland/vs-component-library/commit/2c715f8f63bd767edb2f8b1e255f3163f8a323c3))
* **filter:** set filter button text ([b42c89c](https://github.com/visitscotland/vs-component-library/commit/b42c89cebb2593b17a11d366fe6bd195c80fe269))
* **filter:** setup new component ([5e16519](https://github.com/visitscotland/vs-component-library/commit/5e165198edb3e3ffbabda58307a3fb164147a6d3))
* **filter:** tidy up code ([d7bd5c1](https://github.com/visitscotland/vs-component-library/commit/d7bd5c16ac312ea4fe618e086cebe623141acf2d))
* **filter:** tidy up code ([c0ded56](https://github.com/visitscotland/vs-component-library/commit/c0ded56d10cc62ecf54ebfb2c311abafdda77936))
* **filter:** work on mobile version ([83fc02e](https://github.com/visitscotland/vs-component-library/commit/83fc02e7e5d1c8fed6ab27f86c080fffcfaf5de9))
* **modal:** add emitter listener for hideModal event ([69d3f29](https://github.com/visitscotland/vs-component-library/commit/69d3f29feca38ded5f6c4e01ef14f75a5d51cfc8))


### ✅ Tests

* **checkbox:** add test for size prop ([3f5ec91](https://github.com/visitscotland/vs-component-library/commit/3f5ec91e651bca57b199a41a5f155551c4b578ef))
* **filter:** add unit tests for the filter components ([ec0c024](https://github.com/visitscotland/vs-component-library/commit/ec0c024b8bd325ead4a1fe60f85026ce64098249))
* **filter:** update test ([8d539a7](https://github.com/visitscotland/vs-component-library/commit/8d539a7928e280b1cc13f6fe100f28e1324f59fa))
* **filter:** update unit tests ([90e763b](https://github.com/visitscotland/vs-component-library/commit/90e763b217006148a71c85209de1f1d6642a1cb1))


### 🐛 Bug Fixes

* **bootstrap:** suppress deprecation warnings ([05e7b67](https://github.com/visitscotland/vs-component-library/commit/05e7b6773560e9025a24dbbc0f415b395dd3676d))
* **filter:** date picker width ([b9b9acb](https://github.com/visitscotland/vs-component-library/commit/b9b9acbec6b9974f2293a41abf808021db277a33))
* **filter:** minor changes ([79e7367](https://github.com/visitscotland/vs-component-library/commit/79e73678260ee6bc1949be1d1f8175fb3aaa0974))

### [4.11.1](https://github.com/visitscotland/vs-component-library/compare/v4.11.0...v4.11.1) (2025-02-19)


### ♻️ Code Refactoring

* **eventcard:** fixed css spacing ([4c23aca](https://github.com/visitscotland/vs-component-library/commit/4c23acad34ab3aea8c5f4c1281a7c200b967f19a))


### 🐛 Bug Fixes

* **eventcard:** fixes cta button spacing on mobile ([3c47c86](https://github.com/visitscotland/vs-component-library/commit/3c47c86aaa467747023cb48dfc3388645d819240))
* **pagination:** enable two-way binding ([d454877](https://github.com/visitscotland/vs-component-library/commit/d45487799d923baff1a8882a6cb68f3f501bb80b))


### ✨ Features

* **dropdown:** add secondary colour variant ([f01b6f4](https://github.com/visitscotland/vs-component-library/commit/f01b6f428c32ca93c9c32d4ccc7d285624bd432b))


### ✅ Tests

* **dropdown:** add unit test ([332dadc](https://github.com/visitscotland/vs-component-library/commit/332dadc762dbde21918a25dd1fc15af8467d8f9a))

## [4.11.0](https://github.com/visitscotland/vs-component-library/compare/v4.10.3...v4.11.0) (2025-02-14)


### 📝 Docs

* **pagination:** update story to reflect component changes ([fb0ff83](https://github.com/visitscotland/vs-component-library/commit/fb0ff833840d193bb8221fcfaaa670751edf7f02))


### 🎨 Styling

* **pagination:** fix typos and remove commented out code ([2d83df1](https://github.com/visitscotland/vs-component-library/commit/2d83df115f3110775e81914ebd7c5a24892aa1f6))


### ✅ Tests

* **pagination:** add tests for logic displaying page numbers ([774508b](https://github.com/visitscotland/vs-component-library/commit/774508b734ab03c4a1b887a2ea4e0a36c9af533a))
* **pagination:** add tests for previous and next buttons ([471ad44](https://github.com/visitscotland/vs-component-library/commit/471ad447e5a3fcca880dc24c64f3348d521f1f66))
* **pagination:** add unit tests ([142b7a7](https://github.com/visitscotland/vs-component-library/commit/142b7a72a812073d7424a29b919737aa402b1bcc))


### ✨ Features

* **pagination:** add new component ([01582dd](https://github.com/visitscotland/vs-component-library/commit/01582dd00658424f2748ddb1e8d00f07998beded))
* **pagination:** add styles and mobile version ([2cb36a9](https://github.com/visitscotland/vs-component-library/commit/2cb36a91eb799b36e9c600d1ef35c4ae8d2d8e48))
* **pagination:** correct style issues ([43851ea](https://github.com/visitscotland/vs-component-library/commit/43851eafae048e31e052c42f8c53c1384f27d052))
* **pagination:** rework component ([fa569e1](https://github.com/visitscotland/vs-component-library/commit/fa569e1f7415b47dd356773611807e8faeb23277))
* **pagination:** update styling ([fabd7ef](https://github.com/visitscotland/vs-component-library/commit/fabd7ef0f7718c6f79aed932ca9f87d570fb6aa7))
* **pagination:** use a function to set button classes ([f931e5d](https://github.com/visitscotland/vs-component-library/commit/f931e5d7da6c647cafebaa0ea43c76f9019b27d7))


### 🐛 Bug Fixes

* **pagination:** accessibility fixes ([1ce3584](https://github.com/visitscotland/vs-component-library/commit/1ce35846a32a4e59e7d268ae7970c7daaffb5d3b))
* **storybook:** reset viewport when switching between stories ([b3121b9](https://github.com/visitscotland/vs-component-library/commit/b3121b92b9cb2838d82e3784b1a947205f1f759f))

### [4.10.3](https://github.com/visitscotland/vs-component-library/compare/v4.10.2...v4.10.3) (2025-02-14)


### 🐛 Bug Fixes

* **analytics:** make partner urls protocol agnostic ([c4df803](https://github.com/visitscotland/vs-component-library/commit/c4df8032de50929c5be1b95650add993b3fe850b))

### [4.10.2](https://github.com/visitscotland/vs-component-library/compare/v4.10.1...v4.10.2) (2025-02-13)


### 🐛 Bug Fixes

* **analytics:** remove spaces from signpost urls ([7210f4e](https://github.com/visitscotland/vs-component-library/commit/7210f4e6566a4dbc44df7ab9c88a1dfd2c81f476))

### [4.10.1](https://github.com/visitscotland/vs-component-library/compare/v4.10.0...v4.10.1) (2025-02-13)


### ✨ Features

* **analytics:** track partner referrals for external links ([67b9940](https://github.com/visitscotland/vs-component-library/commit/67b99405bef79830fe3226880c690f690d7e6e43))

## [4.10.0](https://github.com/visitscotland/vs-component-library/compare/v4.8.3...v4.10.0) (2025-02-12)


### 🏗 Build System

* **deps:** bump elliptic from 6.5.7 to 6.6.0 in the npm_and_yarn group ([6da9376](https://github.com/visitscotland/vs-component-library/commit/6da937608b0a5854ea7e59bf7a9cc2ea9ccc12e5))


### ✨ Features

* **eventcard:** added new Event Card component as per BSHUB-524 ([a35c42f](https://github.com/visitscotland/vs-component-library/commit/a35c42fbb908928febd308f3863223024a63d9a5))
* **hero:** add new video hero variant to herosection component ([87a2325](https://github.com/visitscotland/vs-component-library/commit/87a232520563632c5bccbc0ce193b19ad5e3085e))


### ✅ Tests

* **eventcard:** add tests for new component ([4e389e1](https://github.com/visitscotland/vs-component-library/commit/4e389e112693128512a3573a4702bd4fe35a0432))
* **hero:** update hero section unit tests to include new video variant ([c25cc1b](https://github.com/visitscotland/vs-component-library/commit/c25cc1bb24232e7cb70b729d9478d890d333a7fa))


### ⏪ Revertions

* Revert "Revert "feat(map with sidebar): add separate story for regions with no icentres"" ([acc8a4d](https://github.com/visitscotland/vs-component-library/commit/acc8a4d9ce8ad60de8f0625436faf0f072c5c740))
* Revert "Revert "feat(map with sidebar): remove filters and toggles with no data"" ([464d9ba](https://github.com/visitscotland/vs-component-library/commit/464d9ba2a93119ae1875f5299f612a4fe32b445b))


### 🔖 Others

* **release:** 4.9.0 ([bc745e3](https://github.com/visitscotland/vs-component-library/commit/bc745e381af5470dbd081f75b537b3f11f2d2852))


### ♻️ Code Refactoring

* **eventcard:** changed the data structure of component to better match cms data ([f451ded](https://github.com/visitscotland/vs-component-library/commit/f451ded480f80b2f1f973a8df60ef1e3bc7804fc))
* **eventcard:** changes story to detail-list and refactored button positioning ([63c9d0f](https://github.com/visitscotland/vs-component-library/commit/63c9d0fcef306225d15d89bd19ad1b551d078a04))
* **eventcard:** implemented PR Feedback, change class names, added prop comments, VsButton, etc ([b473073](https://github.com/visitscotland/vs-component-library/commit/b47307397c36ddc09993d79d79b245bb84006ada))
* **eventcard:** listing now using VsList element as a description list was not right for job ([ef5f900](https://github.com/visitscotland/vs-component-library/commit/ef5f900fa5ed20109d8bee83affe7a3b49bf7c5b))
* **eventcard:** refactored card so that there is only one content slot, for reusability ([3b9b200](https://github.com/visitscotland/vs-component-library/commit/3b9b2005997170471085bfdd9f52b6a57e7c2e17))
* **eventcard:** refactored code to make neater and ensure proper style ([8826af5](https://github.com/visitscotland/vs-component-library/commit/8826af53f35e3ddb801c61a930068b4f638439b2))
* **eventcard:** remove unnecessary button from story ([0a4e62f](https://github.com/visitscotland/vs-component-library/commit/0a4e62ff43535707a0754434636c6ecdb9d9fc52))
* **eventcard:** removed divs for performance and to make semantically correct ([e0e06fd](https://github.com/visitscotland/vs-component-library/commit/e0e06fd681b35de55580e4d052270bd22afe97dc))


### 🎨 Styling

* **eventcard:** fixed spacing issue ([579618e](https://github.com/visitscotland/vs-component-library/commit/579618e41eeab9bd01737b30abdd46c521a3263a))


### 🐛 Bug Fixes

* **eventcard:** fixed error causing storybook to not render Travel Trade variant of component ([06d881b](https://github.com/visitscotland/vs-component-library/commit/06d881bb47078fc37f75fdca438b977730c8bb52))
* **eventcard:** fixed mis-matched closing tags on VsLists causing Chromatic errors ([db4323d](https://github.com/visitscotland/vs-component-library/commit/db4323da8d5c009d331a0a9d86bc74526b945bd0))
* **hero:** add playinline to fix video not playing on iOS ([2780eff](https://github.com/visitscotland/vs-component-library/commit/2780effdaa2dcd42b83f749a00caa16d4f8159b2))
* **map:** hide toggles unless multiple present ([82941f1](https://github.com/visitscotland/vs-component-library/commit/82941f18a60615c6cacf167dc4423f2d6dee7c99))

## [4.9.0](https://github.com/visitscotland/vs-component-library/compare/v4.8.3...v4.9.0) (2025-02-11)


### ⏪ Revertions

* Revert "Revert "feat(map with sidebar): add separate story for regions with no icentres"" ([acc8a4d](https://github.com/visitscotland/vs-component-library/commit/acc8a4d9ce8ad60de8f0625436faf0f072c5c740))
* Revert "Revert "feat(map with sidebar): remove filters and toggles with no data"" ([464d9ba](https://github.com/visitscotland/vs-component-library/commit/464d9ba2a93119ae1875f5299f612a4fe32b445b))


### 🐛 Bug Fixes

* **map:** hide toggles unless multiple present ([82941f1](https://github.com/visitscotland/vs-component-library/commit/82941f18a60615c6cacf167dc4423f2d6dee7c99))

### [4.8.3](https://github.com/visitscotland/vs-component-library/compare/v4.8.2...v4.8.3) (2025-02-11)


### ⏪ Revertions

* Revert "feat(map with sidebar): remove filters and toggles with no data" ([6974d4f](https://github.com/visitscotland/vs-component-library/commit/6974d4f53c791d3d6dc396cc777a5a15be5c5b9d))


### 🐛 Bug Fixes

* **hero:** remove rounded corners on hero image on smaller screens ([9f265d9](https://github.com/visitscotland/vs-component-library/commit/9f265d993c0d281f875ac119fc092a3dba904cb5))

### [4.8.2](https://github.com/visitscotland/vs-component-library/compare/v4.8.1...v4.8.2) (2025-02-06)


### ♻️ Code Refactoring

* **analytics:** remove redundant commented out code ([48d38ff](https://github.com/visitscotland/vs-component-library/commit/48d38ffa462595f0467ba6f6ef91d1a5585caff3))


### ✨ Features

* **analytics:** add accordion open event ([ef8fd61](https://github.com/visitscotland/vs-component-library/commit/ef8fd6133497ba6c77326a0e322fb43d2b9fcea5))


### 🐛 Bug Fixes

* **analytics:** revert change to errors tag name ([18beeb6](https://github.com/visitscotland/vs-component-library/commit/18beeb687d13333f2cd426c1bdd143548909e4bb))
* **analytics:** update error event name to GA4 schema ([ce1929c](https://github.com/visitscotland/vs-component-library/commit/ce1929ccb960dfdce0603c8afbbf24a138563e41))

### [4.8.1](https://github.com/visitscotland/vs-component-library/compare/v4.8.0...v4.8.1) (2025-02-04)


### 🐛 Bug Fixes

* **vsarticle:** vs-article-image needs to be conditional on the slot having content to reder ([971d9d4](https://github.com/visitscotland/vs-component-library/commit/971d9d4424d2826585eb3cd43fb3a60ef3140623))


### 🏗 Build System

* **yarn:** upgrade yarn to latest version ([ab1abe8](https://github.com/visitscotland/vs-component-library/commit/ab1abe87b71a98ef5b97eb531cec4fcf7c1e84ff))

## [4.8.0](https://github.com/visitscotland/vs-component-library/compare/v4.7.7...v4.8.0) (2025-01-30)


### ✅ Tests

* **hero:** refactor tests for heroSection and add HeroSectionImage tests ([2dd0a56](https://github.com/visitscotland/vs-component-library/commit/2dd0a565ee6f0cfdf26486b2486bd4b3762436e4))


### 📝 Docs

* **pageintro:** update page intro story to include correct blog details story ([3d48400](https://github.com/visitscotland/vs-component-library/commit/3d484003e4c2a54c834adba8a3bc30e7f8ce57a1))


### ✨ Features

* **blogdetails:** making read time optional ([a368e77](https://github.com/visitscotland/vs-component-library/commit/a368e7731aa66740f962ac81132a84d9980f6362))
* **blogdetails:** update blog details to allow optional author and date ([4bb56ee](https://github.com/visitscotland/vs-component-library/commit/4bb56eef2a1dd6a1e5e1dd3f4bff17d04f9d4457))
* **hero:** add heroSectionImage child component ([cecf29c](https://github.com/visitscotland/vs-component-library/commit/cecf29c838ed92ccd04b54ee9c6015474ac3112b))
* **hero:** add new split hero variant ([68d2f4b](https://github.com/visitscotland/vs-component-library/commit/68d2f4b79af69881037ff5b678b17547e96a25c0))
* **hero:** layout updates to hero component ([5bb4108](https://github.com/visitscotland/vs-component-library/commit/5bb4108eb5be45a701df70b149805fe668c682c7))
* **hero:** refactor hero to use grid for all variants ([818e4e7](https://github.com/visitscotland/vs-component-library/commit/818e4e7de7c837db1b628cc89ce5e1921a00ded7))
* **hero:** tweak padding for inset hero ([550b4db](https://github.com/visitscotland/vs-component-library/commit/550b4dbcc94a87959b150cd304be2b0afe32e75d))
* **hero:** update hero text layout for xxl ([3a67da7](https://github.com/visitscotland/vs-component-library/commit/3a67da780e7419aa1fd8198200bc3c9a5c2e333f))
* **hero:** update layout for mobile screens ([b52c318](https://github.com/visitscotland/vs-component-library/commit/b52c3182061f0f01d3cb072048be664cbbc9d7c0))
* **hero:** update layout for mobile screens ([f04c53c](https://github.com/visitscotland/vs-component-library/commit/f04c53c58534d5953f5efaf6a67257c8f0e4bf28))
* **nav:** update z-index in nav ([3272d11](https://github.com/visitscotland/vs-component-library/commit/3272d11cedece578cd0b4ca8bfeb3174fa253522))
* **pageheader:** add new pageheader template examples ([7d3e616](https://github.com/visitscotland/vs-component-library/commit/7d3e616787145da408dacd6bcfcb24efe86ff86e))

### [4.7.7](https://github.com/visitscotland/vs-component-library/compare/v4.7.5...v4.7.7) (2025-01-28)


### 🔖 Others

* **update version manually:** bump patch version so BSH picks up changes ([b486221](https://github.com/visitscotland/vs-component-library/commit/b486221d887d9a8fc064887ade5d030b8e36ef85))

### [4.7.5](https://github.com/visitscotland/vs-component-library/compare/v4.7.4...v4.7.5) (2025-01-28)


### 🐛 Bug Fixes

* **stretchedlinkcard.vue:** remove BSH-specific prop resolution ([243241f](https://github.com/visitscotland/vs-component-library/commit/243241f8e52a4fc4676af27cf7f5e1889af58181))

### [4.7.4](https://github.com/visitscotland/vs-component-library/compare/v4.7.3...v4.7.4) (2025-01-20)


### 🐛 Bug Fixes

* **back to top:** button positioning ([a39d48a](https://github.com/visitscotland/vs-component-library/commit/a39d48af067d74f87a786b08ebef012985ca9581))

### [4.7.3](https://github.com/visitscotland/vs-component-library/compare/v4.7.2...v4.7.3) (2025-01-20)


### 🐛 Bug Fixes

* **back to top:** add/remove event listener when component mounted/unmounted ([f8f3440](https://github.com/visitscotland/vs-component-library/commit/f8f34405e60a615f11564a8de5af550eb0aeb491))

### [4.7.2](https://github.com/visitscotland/vs-component-library/compare/v4.7.1...v4.7.2) (2025-01-20)


### ✅ Tests

* **warning:** update test ([4939b77](https://github.com/visitscotland/vs-component-library/commit/4939b77753f4a8c67847f67a7bceca06128d5be3))


### 🐛 Bug Fixes

* **banner:** icon name changed ([222167d](https://github.com/visitscotland/vs-component-library/commit/222167d45cb480277192d17ebbb9718d861b9c84))
* **icons:** some icon names have changed ([a42aba2](https://github.com/visitscotland/vs-component-library/commit/a42aba2df4d12795ce9555cea610c168639ce7fb))

### [4.7.1](https://github.com/visitscotland/vs-component-library/compare/v4.7.0...v4.7.1) (2025-01-17)


### 🐛 Bug Fixes

* **back to top:** add component to export list ([575015f](https://github.com/visitscotland/vs-component-library/commit/575015f2d4760d013caae881b59447af4a7cbabc))

## [4.7.0](https://github.com/visitscotland/vs-component-library/compare/v4.6.0...v4.7.0) (2025-01-17)


### ✅ Tests

* **back to top:** add tests for new component ([6714d07](https://github.com/visitscotland/vs-component-library/commit/6714d073f34653c7820119b498fe257a995e1f5b))


### ✨ Features

* **back to top:** add new arrow-up icon ([d959e02](https://github.com/visitscotland/vs-component-library/commit/d959e0276bca6da384d87345adc56d312ac60c65))
* **back to top:** add new component ([c15d538](https://github.com/visitscotland/vs-component-library/commit/c15d53801fc79eccb974436f1d0300a2af5868c8))
* **back to top:** add new component ([a490592](https://github.com/visitscotland/vs-component-library/commit/a490592c91bc2c99de3cd6cd5428c86043d33667))
* **back to top:** remove unused variable ([21d80df](https://github.com/visitscotland/vs-component-library/commit/21d80df8702bef67bb38f82e4479eafd5d5f1180))

# [4.6.0](https://github.com/visitscotland/vs-component-library/compare/v4.5.0...v4.6.0) (2025-01-16)


### Bug Fixes

* **megalinks:** move badge spacing to util class ([5623c6f](https://github.com/visitscotland/vs-component-library/commit/5623c6f5d7745c10901b10aedc2818c6efdf824c))


### Features

* **megalinks:** add optional badges to multi image variant ([3947d27](https://github.com/visitscotland/vs-component-library/commit/3947d275cfcafaa30f14b41ecf2bed19511c7e51))

# [4.5.0](https://github.com/visitscotland/vs-component-library/compare/v4.4.7...v4.5.0) (2025-01-16)


### Bug Fixes

* **megalinklinklist:** added conditional to badges so empty div doesn't show if no badges ([21915bf](https://github.com/visitscotland/vs-component-library/commit/21915bf3f322af122302659df8e842bc4a3c7b9c))
* **megalinklinklist:** fixed badges showing on homepage view ([e48a3ae](https://github.com/visitscotland/vs-component-library/commit/e48a3ae006ca4e983e0a72f3dba64ae7b5e10aa8))
* **megalinklinklist:** fixed merge-conflict wrongly resolved that caused storybook to crash ([62e7130](https://github.com/visitscotland/vs-component-library/commit/62e713001e5cbfe4a7377033d65087cf3418cb5f))
* **preview.js:** added back autodocs tag to storybook ([9686725](https://github.com/visitscotland/vs-component-library/commit/9686725c0449112934e1ab893bbd4fde117c9b00))
* **stretchedlinkcard:** fixed badges no longer showing on SLC due to changes to MegaLinkLinkList ([20c0c98](https://github.com/visitscotland/vs-component-library/commit/20c0c9804022c736c7e2b3b54fe9362efe5ba00a))


### Features

* **megalinklinklist:** added badges to the MegalinkLinkList ([b4bcf71](https://github.com/visitscotland/vs-component-library/commit/b4bcf7195c7c2d056fa3b41e196081d8cb9d461f))
* **megalinklinklist:** end of day commit :- started to add support for stylistic changes for BSH ([d347ce9](https://github.com/visitscotland/vs-component-library/commit/d347ce92a060ed1375fcb5c026a9480a82977528))
* **megalinklinklist:** implemented BSH styling ([bf774dc](https://github.com/visitscotland/vs-component-library/commit/bf774dcd215a56ec79ed1703d5ec52ceed97e68e))

## [4.4.7](https://github.com/visitscotland/vs-component-library/compare/v4.4.6...v4.4.7) (2025-01-16)


### Bug Fixes

* **image with caption:** modify SCSS for SVG images ([a13211a](https://github.com/visitscotland/vs-component-library/commit/a13211aff652ad628ed3340e15160360ed956ca0))
* **image with caption:** modify SCSS for SVG images ([f481e20](https://github.com/visitscotland/vs-component-library/commit/f481e2014dd7819a794b9983cc4d2693272e5b81))

## [4.4.6](https://github.com/visitscotland/vs-component-library/compare/v4.4.5...v4.4.6) (2025-01-15)


### Bug Fixes

* **nuxt:** add missing itinerary component to export for nuxt sites ([c490479](https://github.com/visitscotland/vs-component-library/commit/c49047906ee82385f844017c64ebd6cdab893321))

## [4.4.5](https://github.com/visitscotland/vs-component-library/compare/v4.4.4...v4.4.5) (2025-01-08)


### Bug Fixes

* **semantic release:** adjust env name ([4dc4105](https://github.com/visitscotland/vs-component-library/commit/4dc41054bc71a2a36599246d2cd2937d5e869cbf))

## [4.4.4](https://github.com/visitscotland/vs-component-library/compare/v4.4.3...v4.4.4) (2025-01-08)


### Bug Fixes

* **yarn:** rebuild lock file ([860bc19](https://github.com/visitscotland/vs-component-library/commit/860bc199efd53335df6c41faba29912112702120))

## [4.4.3](https://github.com/visitscotland/vs-component-library/compare/v4.4.2...v4.4.3) (2025-01-08)


### Bug Fixes

* **semantic release:** test release - remove debug logging ([eb5656b](https://github.com/visitscotland/vs-component-library/commit/eb5656b15cb689ae687812fea3c94156d6deb3f9))

## [4.4.2](https://github.com/visitscotland/vs-component-library/compare/v4.4.1...v4.4.2) (2025-01-07)


### Bug Fixes

* **semantic release:** mOve install after npm set up / test release ([adc9f5c](https://github.com/visitscotland/vs-component-library/commit/adc9f5cb28fc54e2d4acf94a01b7895e54193cf8))

## [4.4.1](https://github.com/visitscotland/vs-component-library/compare/v4.4.0...v4.4.1) (2025-01-07)


### Bug Fixes

* **styled list item:** adjusted CSS to extend line between numbered list ([1634244](https://github.com/visitscotland/vs-component-library/commit/163424437c36f0e64a2e1b0c0a2aa463e2fb36a1))

# [4.4.0](https://github.com/visitscotland/vs-component-library/compare/v4.3.13...v4.4.0) (2024-12-16)


### Features

* **semantic release:** add MS Teams Notification ([16fdbf0](https://github.com/visitscotland/vs-component-library/commit/16fdbf0689f988b3e8bfb03a37ed9a0a34c83fa5))

## [4.3.13](https://github.com/visitscotland/vs-component-library/compare/v4.3.12...v4.3.13) (2024-12-16)


### Bug Fixes

* **semantic release:** correct override version ([0d1595f](https://github.com/visitscotland/vs-component-library/commit/0d1595f2d7d4dec3d9b61dbc175d374e04ed912f))
* **semantic release:** remove duplicate ms-teams install ([937ac50](https://github.com/visitscotland/vs-component-library/commit/937ac5003751f56057df7717842b753c32c63f13))
* **semantic release:** remove ms-teams again ([8fcd5d8](https://github.com/visitscotland/vs-component-library/commit/8fcd5d834171f4b1a3c18b55a7ea38a3162c84dc))
* **semantic release:** remove unnecessary yarn-jest package causing conflict ([e6a7eb7](https://github.com/visitscotland/vs-component-library/commit/e6a7eb78119090d8cb5d9416f8c6bdec795e65a9))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.3.12](https://github.com/visitscotland/vs-component-library/compare/v4.3.11...v4.3.12) (2024-12-16)


### ✨ Features

* **semantic release:** restore ms teams integration ([e63825c](https://github.com/visitscotland/vs-component-library/commit/e63825c7292bcc34a02a1c14abb89d10646945a5))


### 🐛 Bug Fixes

* **semantic release:** add verbose logs to install ([d11958b](https://github.com/visitscotland/vs-component-library/commit/d11958bf19ef1925817635ad928016a84320c241))
* **semantic release:** correct config syntax ([93f722c](https://github.com/visitscotland/vs-component-library/commit/93f722c8b701e053bc095e6e83ef53f8d9f03d51))
* **semantic release:** eNsure dePENdencies are installed ([7a96a08](https://github.com/visitscotland/vs-component-library/commit/7a96a08fab7bf3011c501a987556a13b9a621c17))
* **semantic release:** override broken peer dependency ([6757454](https://github.com/visitscotland/vs-component-library/commit/6757454c974373ffd4abccf7a0562d73a390bd01))

## [4.3.11](https://github.com/visitscotland/vs-component-library/compare/v4.3.10...v4.3.11) (2024-12-13)


### Bug Fixes

* **semantic release:** update package.json on release ([15833fc](https://github.com/visitscotland/vs-component-library/commit/15833fca5e03f81bc9bd590d104872dd2e4037ac))

## [4.3.10](https://github.com/visitscotland/vs-component-library/compare/v4.3.9...v4.3.10) (2024-12-13)


### Bug Fixes

* **form.vue:** fix known bug when making call to `exponea.identify` ([4768f6c](https://github.com/visitscotland/vs-component-library/commit/4768f6ce320e03bbc010bd85e999c8f26782d002))
* **form.vue:** modify form logic to handle and correct malformed JSON payload ([1432945](https://github.com/visitscotland/vs-component-library/commit/1432945dd46bdafdedbb0afd24f61850f9732c6c))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.3.9](https://github.com/visitscotland/vs-component-library/compare/v4.3.8...v4.3.9) (2024-12-12)


### 🐛 Bug Fixes

* **styled list:** change source prop to a slot ([11766a8](https://github.com/visitscotland/vs-component-library/commit/11766a815bb01d5725b795cbf1228a71f923eb12))

### [4.3.8](https://github.com/visitscotland/vs-component-library/compare/v4.3.7...v4.3.8) (2024-12-09)


### 🐛 Bug Fixes

* **form.vue:** add logic in Form.vue to parse hidden inputs and convert 'true/false' to booleans ([49651da](https://github.com/visitscotland/vs-component-library/commit/49651da225dbc6dd08103d36efa1aafef766c704))

### [4.3.7](https://github.com/visitscotland/vs-component-library/compare/v4.3.6...v4.3.7) (2024-12-03)


### 📝 Docs

* **mega nav:** story template wasn't using correct slot for nav-heading-cta-link ([1f83b93](https://github.com/visitscotland/vs-component-library/commit/1f83b9357c00bd928fb0b8ea01589396cb1c027e))

### [4.3.6](https://github.com/visitscotland/vs-component-library/compare/v4.3.5...v4.3.6) (2024-11-28)


### 🐛 Bug Fixes

* **check-vender-library.js:** run the function instantly the first time it's called ([2ca07fe](https://github.com/visitscotland/vs-component-library/commit/2ca07fe22e9f0abda28d17f2bb720b0cc6dff101))

### [4.3.5](https://github.com/visitscotland/vs-component-library/compare/v4.3.4...v4.3.5) (2024-11-28)


### ✨ Features

* **semantic release:** move to dev dependencies ([3c9c040](https://github.com/visitscotland/vs-component-library/commit/3c9c040cffe6d169daa0f95bacd3ad14d70bae9b))

### [4.3.4](https://github.com/visitscotland/vs-component-library/compare/v4.3.3...v4.3.4) (2024-11-27)


### ✅ Tests

* **button:** added new tests for block level button fix ([ff1b988](https://github.com/visitscotland/vs-component-library/commit/ff1b988ed3c36c3b5935e6d3104009c0d2835d4f))


### 🐛 Bug Fixes

* **button:** added justify-content-center to button so block level buttons display content correctly ([5f8b03a](https://github.com/visitscotland/vs-component-library/commit/5f8b03aae99c804cebdf1580a171df9651c9c50a))
* **button:** fixed bug where adding 'block' to a button did not cause it to be a block element ([27dc6ec](https://github.com/visitscotland/vs-component-library/commit/27dc6ecc8f6114ebe816e8808180be18ffb96957))
* **button:** fixed some odities with how icons displayed as a block level button ([6d342d5](https://github.com/visitscotland/vs-component-library/commit/6d342d5b5425b7748779adcbdb23c09c0bfcbeb9))


### ♻️ Code Refactoring

* **button:** cleanup storybook ([8f5f127](https://github.com/visitscotland/vs-component-library/commit/8f5f127eedcc7be16fc693511c7f21fd02665804))

## [4.3.3](https://github.com/visitscotland/vs-component-library/compare/v4.3.2...v4.3.3) (2024-11-25)


### Bug Fixes

* **semantic release:** add missing pipe to yml file ([8945aff](https://github.com/visitscotland/vs-component-library/commit/8945affd6390b2e8b9ee441b14b40cab474d5ce8))
* **semantic release:** add ms-teams to with array ([24ba993](https://github.com/visitscotland/vs-component-library/commit/24ba9931069579b93270bff0f0c1573a7cea2dda))
* **semantic release:** automatically alert teams about new releases ([48defc0](https://github.com/visitscotland/vs-component-library/commit/48defc0e29724c2d6efb40437e0eeafeb69a9bf9))
* **semantic release:** move teams to dev dep ([5bde3cc](https://github.com/visitscotland/vs-component-library/commit/5bde3cc9b0e34621364794eddef2066e584c3d04))

## [4.3.2](https://github.com/visitscotland/vs-component-library/compare/v4.3.1...v4.3.2) (2024-11-25)


### Bug Fixes

* **semantic release:** enforce install before publish ([e1833de](https://github.com/visitscotland/vs-component-library/commit/e1833dee8dcc38bfb6d36e5124a5480a20f13510))

## [4.3.1](https://github.com/visitscotland/vs-component-library/compare/v4.3.0...v4.3.1) (2024-11-25)


### Bug Fixes

* **semantic release:** add npm publish option ([2dc7336](https://github.com/visitscotland/vs-component-library/commit/2dc7336648820423c626fb016baf1bcb739b8cdc))
* **semantic release:** make npm token secret available to release ([bf200b3](https://github.com/visitscotland/vs-component-library/commit/bf200b3e8d68252e59e0cbc24b6b31eb118f7bd6))

# [4.3.0](https://github.com/visitscotland/vs-component-library/compare/v4.2.2...v4.3.0) (2024-11-25)


### Bug Fixes

* **semantic release:** fix syntax in releaserc ([93bd151](https://github.com/visitscotland/vs-component-library/commit/93bd1519c36f73bccdd0ea1ca81d3ddc2cdf3d4c))


### Features

* **release:** experimentally set up semantic release ([d3c5b63](https://github.com/visitscotland/vs-component-library/commit/d3c5b63540475b8bf191507db6b882d4ce75abb6))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.2.2](https://github.com/visitscotland/vs-component-library/compare/v4.2.1...v4.2.2) (2024-11-25)


### 🎨 Styling

* **tokens:** remove old deprecated tokens and tidy color token files ([e51d15f](https://github.com/visitscotland/vs-component-library/commit/e51d15fbc0c414946b9ba67169740096729d18c6))
* **tokens:** update elevation tokens to use new color tokens ([cf9f7b3](https://github.com/visitscotland/vs-component-library/commit/cf9f7b32d888932b0aab0fa4cc83b428112495e8))
* **tokens:** update elevation tokens to use new primitive ([5f316f6](https://github.com/visitscotland/vs-component-library/commit/5f316f6ff62091d0b85fed3b7f7b7b8d37c62ebc))


### ⏪ Revertions

* **article:** remove table of contents from sidebar ([30f0462](https://github.com/visitscotland/vs-component-library/commit/30f046230f02caec6a3467ba6692168fa3673c6d))


### ♻️ Code Refactoring

* **icon:** add missing icon variants to match colour tokens ([76ba6f6](https://github.com/visitscotland/vs-component-library/commit/76ba6f6e6517e8b2ad222d238201b51a83fd4282))
* **tokens:** remove -new- from new color token names ([1fca82e](https://github.com/visitscotland/vs-component-library/commit/1fca82e4c368d4b96759cc63a0e03ec8f3d71e24))
* **tokens:** remove unused old core tokens ([37157d7](https://github.com/visitscotland/vs-component-library/commit/37157d7fd25d8f71ddaca55a25506092896d65eb))


### 🐛 Bug Fixes

* **badge:** fix token name in badge component ([9fb5d36](https://github.com/visitscotland/vs-component-library/commit/9fb5d36b30dcf1b4d666f6446d313a877b2e659b))
* **vsbadge:** remove `new-` namespace per DS-685 ([5e45180](https://github.com/visitscotland/vs-component-library/commit/5e4518055786b5d037a4c24b2dae1a45f0f0bc20))


### ✨ Features

* **page intro:** add table of contents ([2560d28](https://github.com/visitscotland/vs-component-library/commit/2560d2839cf63c9f93d98546105b01c9f73d19d2))


### ✅ Tests

* **page intro:** add new tests for table of contents ([116653b](https://github.com/visitscotland/vs-component-library/commit/116653b3d8efa508c93f8bf4c3e0e10b21ad3ec1))

### [4.2.1](https://github.com/visitscotland/vs-component-library/compare/v4.2.0...v4.2.1) (2024-11-21)


### 🐛 Bug Fixes

* **_cludo-search-results.scss:** extra comma was breaking the webpack build process ([12edfcf](https://github.com/visitscotland/vs-component-library/commit/12edfcf2090caef259f0e3f4ec0e54a6ee539a5a))

## [4.2.0](https://github.com/visitscotland/vs-component-library/compare/v4.1.4...v4.2.0) (2024-11-20)


### ⏪ Revertions

* **carousel:** remove no image variant ([5e9d99d](https://github.com/visitscotland/vs-component-library/commit/5e9d99dd67d28524bf6e2b5cf1c2eb6c4aa06ea0))


### ✅ Tests

* **stretched link card:** add test for badges prop ([7aba7ba](https://github.com/visitscotland/vs-component-library/commit/7aba7bab1c858f524fa0297df2b50ac8edb81327))
* **vs badge:** add unit tests ([28d5715](https://github.com/visitscotland/vs-component-library/commit/28d571585e552ab576c4748e9a66cc7df376e933))


### 🐛 Bug Fixes

* **stretched link card:** left align card content it centre aligns when used within modulewrapper ([dcb8516](https://github.com/visitscotland/vs-component-library/commit/dcb8516b0ff9ab9c3faf2e266f152ea525f2743c))


### ✨ Features

* **badge:** update colour tokens ([e970535](https://github.com/visitscotland/vs-component-library/commit/e97053551fff1f6365b41d9bf31481e87967c71a))
* **carousel slide:** add no image variant ([c8dd6ba](https://github.com/visitscotland/vs-component-library/commit/c8dd6baf695673c6d8f570798eaaf6a07dd2a14f))
* **stretched link card:** add no image variant ([fccbf35](https://github.com/visitscotland/vs-component-library/commit/fccbf35905494dae89a64676d81679015221be87))
* **stretched link card:** add variant with badges ([68efc38](https://github.com/visitscotland/vs-component-library/commit/68efc3856821220fb54e9a610ea7f575be8bc38e))
* **stretched link card:** replace prop with slot ([1d88e11](https://github.com/visitscotland/vs-component-library/commit/1d88e116476238b1f0b029cac4c7cec2f5f62b10))
* **vs badge:** add new badge component ([2c20fc0](https://github.com/visitscotland/vs-component-library/commit/2c20fc073cd00f63e7653f1885bf343bb7a5efe3))

### [4.1.3](https://github.com/visitscotland/vs-component-library/compare/v4.1.2...v4.1.3) (2024-11-08)


### ✨ Features

* **article:** add table of contents to sidebar ([da49c7a](https://github.com/visitscotland/vs-component-library/commit/da49c7aba55588542d788229c52c2b8c050408d5))


### ✅ Tests

* **article sidebar:** add test for new toc slot ([679ae8b](https://github.com/visitscotland/vs-component-library/commit/679ae8b6b2b75a5e9e7554583d31d4dab630d7d6))


### 🐛 Bug Fixes

* **article.stories.js:** add conditional to VsLinkList component in template ([fb5071f](https://github.com/visitscotland/vs-component-library/commit/fb5071ffa6a73b4356429e8a008bce9f16ce1bea))

### [4.1.2](https://github.com/visitscotland/vs-component-library/compare/v4.1.1...v4.1.2) (2024-11-08)


### 🐛 Bug Fixes

* **forms:** fire datalayer event on bloomreach form submit ([22de4be](https://github.com/visitscotland/vs-component-library/commit/22de4bed71aa71738508161ea9f18e1761525f39))
* **video:** linting error fix ([e642eb4](https://github.com/visitscotland/vs-component-library/commit/e642eb4f36aadace5e10645552d0431d6fcc0031))

### [4.1.1](https://github.com/visitscotland/vs-component-library/compare/v4.1.0...v4.1.1) (2024-11-07)


### ♻️ Code Refactoring

* **tourisminfo:** add new variants to storybook for tourism info component ([92b1e2d](https://github.com/visitscotland/vs-component-library/commit/92b1e2d10f2ed87fc852e01bb78162a79babbbd2))


### 🐛 Bug Fixes

* **modal:** modal will now pause video when closed/hidden as per expected behaviour ([ba5c505](https://github.com/visitscotland/vs-component-library/commit/ba5c505876709bb0cb49b7c061f7fce4e745c2d2))
* **quote:** changed css class name for clarity ([aec62a6](https://github.com/visitscotland/vs-component-library/commit/aec62a65dc209e66515f6cc195f8c78697f3dd1b))
* **quote:** fixed quote margin issue when narrow in sidebar ([96bed05](https://github.com/visitscotland/vs-component-library/commit/96bed05fae0025784884e2fb2e4677cd29c7505c))
* **quote:** updated spacing ([ad822b5](https://github.com/visitscotland/vs-component-library/commit/ad822b579ba4a035f9202981f74cb1dadcf50e45))
* **quote:** updated spacing ([5b7fa4f](https://github.com/visitscotland/vs-component-library/commit/5b7fa4fdf905400eb04fbea88153b5cb7fb2b6db))
* **socialshare:** social share popover is now fully on screen when on mobile layouts ([0b418dc](https://github.com/visitscotland/vs-component-library/commit/0b418dce44726fa317f6f2443f0b5bbec2fc607c))
* **tourisminfo:** added a new story to TourismInfo for a quote with no links or buttons ([ef2462c](https://github.com/visitscotland/vs-component-library/commit/ef2462c47de22506d4e96b7da5b25a0005485715))
* **tourisminfo:** removal of white space from the local expert module on destination pages ([57c3a99](https://github.com/visitscotland/vs-component-library/commit/57c3a99a91fb097d05b6319cd4b7767284b577fe))
* **video:** fixed play button displaying video duration incorrectly after closing modal ([11a1d74](https://github.com/visitscotland/vs-component-library/commit/11a1d74b8a4be72f0dc6fd08e797d4980a4b34b0))
* **video:** removed console.log from code where left in by accident ([b72b202](https://github.com/visitscotland/vs-component-library/commit/b72b202194a1e79077a0fffb14c826aa3d2e5a58))
* **video:** video will now start at the beginning when modal is re-opened as expected behaviour ([beb67ea](https://github.com/visitscotland/vs-component-library/commit/beb67ea802628793649c6e3b1d2f45c98c3a797f))

## [4.1.0](https://github.com/visitscotland/vs-component-library/compare/v4.0.3...v4.1.0) (2024-10-30)


### ✅ Tests

* **textarea:** add tests ([492d9da](https://github.com/visitscotland/vs-component-library/commit/492d9da3a11cd6452fa777f5af7cdf04a54d8110))


### ✨ Features

* **form:** add textarea field to form ([58e536d](https://github.com/visitscotland/vs-component-library/commit/58e536ded7daa5a8d5c8f09794020fce61bd6f68))
* **textarea:** add new component ([91c5b7c](https://github.com/visitscotland/vs-component-library/commit/91c5b7ceaf6c5c6bf42c9ee0354ef0fe856d9c72))


### 🎨 Styling

* **styled list:** adjust styles due to heading level changes ([0e4954d](https://github.com/visitscotland/vs-component-library/commit/0e4954da142102c44b951f3d206c04fdf54e7bc3))


### 🐛 Bug Fixes

* **styled list item:** heading style ([1a032f7](https://github.com/visitscotland/vs-component-library/commit/1a032f70aaab34b3a6075fc5fec6e44c1f4a0085))
* **textarea.jest.spec.js:** correct typo in filename ([e346c35](https://github.com/visitscotland/vs-component-library/commit/e346c353962763cf05cfc25f87bcd307542a3dd4))
* **textarea.stories.js:** update invalid story variant ([64ebee4](https://github.com/visitscotland/vs-component-library/commit/64ebee4b86f64ef8af5d19b289b32968d57aa196))

### [4.0.3](https://github.com/visitscotland/vs-component-library/compare/v4.0.2...v4.0.3) (2024-10-29)


### ✨ Features

* **accordionitem:** added headingLevel to AccordionItem, Article and StyledListItem ([1c30980](https://github.com/visitscotland/vs-component-library/commit/1c309806f2b42b00b865a6c05307e3ea99bdf983))
* **all:** merge in main branch ([8ce3754](https://github.com/visitscotland/vs-component-library/commit/8ce37544ddb59d121be5bab4faf89d3e534ea34c))
* **modulewrapper:** added business support boolean and updated styles accordingly ([8298aa6](https://github.com/visitscotland/vs-component-library/commit/8298aa6103fe213616f846c96da8d0b895c57881))
* **tests:** merge tests ([cb9cd83](https://github.com/visitscotland/vs-component-library/commit/cb9cd83224a344638b7d974a48277881ff48ebdc))


### 🏗 Build System

* **package.json:** remove node-sass from the package to fix the build ([aa14f14](https://github.com/visitscotland/vs-component-library/commit/aa14f14148c7c7176004361b79799485cb4f98dc))


### 🎨 Styling

* **eslint:** add stronger linting and max-attributes-per-line rule ([7e33578](https://github.com/visitscotland/vs-component-library/commit/7e33578e2445c65c121e33a36510f8026c2f8887))


### ♻️ Code Refactoring

* **accordion story:** change variant name ([2546a57](https://github.com/visitscotland/vs-component-library/commit/2546a57ded11b2d3f684004e07ebad36a61771e2))
* **accordionitems.jest.spec.js:** set slot content within factoryMount ([a7d6ef5](https://github.com/visitscotland/vs-component-library/commit/a7d6ef5a6bf85a44888d5cdc26e58894e93749fa))
* **accordion:** updated Accordion, Article, StyledList & Module Wrapper w/ heading validator ([4b4c437](https://github.com/visitscotland/vs-component-library/commit/4b4c4377f14a9892137b5df08aed34a3d543e783))
* **module wrapper:** use computed functions for clarity ([9000ec2](https://github.com/visitscotland/vs-component-library/commit/9000ec245d97422a5a04b3c22e6004090b137193))
* **styledlist:** removed the heading and intro sections from the styled list component ([790f760](https://github.com/visitscotland/vs-component-library/commit/790f760aa3d236da47e7ae640879b93bc78263be))


### ✅ Tests

* **module wrapper:** add test for anchorId ([301a519](https://github.com/visitscotland/vs-component-library/commit/301a51916ea5557cf8b95c383f3c6217cc8dc4b6))
* **modulewrapper:** added tests  to ModuleWrapper, AccordionListItem, Article & StyledList ([99e2db4](https://github.com/visitscotland/vs-component-library/commit/99e2db40f604ecd9c51ebfba2023fcbb46e6c5b8))
* **modulewrapper:** fixed typos ([662a202](https://github.com/visitscotland/vs-component-library/commit/662a202bf1471a42e8a195fd464a891abe9dcb86))
* **modulewrapper:** fixed typos ([5944b22](https://github.com/visitscotland/vs-component-library/commit/5944b22d0f72a5b46c25a1ccee8295c8ab31bc20))
* **styledlistitem:** fixed typo ([bfc0e69](https://github.com/visitscotland/vs-component-library/commit/bfc0e695f778fec47bb3cfa1df15bc4428ad827e))
* **styledlistitem:** tests new headingLevel prop added ([8244747](https://github.com/visitscotland/vs-component-library/commit/82447470fa623c9a2128593e71ec369ca83b73fa))


### 📝 Docs

* **grid:** update grid stories to add specific component story ([ba4456c](https://github.com/visitscotland/vs-component-library/commit/ba4456ccd9750f33383e80b22572e5178ae19d36))


### 🐛 Bug Fixes

* **accordion item:** remove test code ([70890c6](https://github.com/visitscotland/vs-component-library/commit/70890c642ccf379201f18dda38ef108a92a9c278))


### 🔖 Others

* **all:** merge in main branch ([622e92d](https://github.com/visitscotland/vs-component-library/commit/622e92da4ccc3536f520caf13943052ddec70a45))

### [4.0.2](https://github.com/visitscotland/vs-component-library/compare/v4.0.1...v4.0.2) (2024-10-25)


### 🎨 Styling

* **heading:** update letter-spacing for display heading-style to match designs ([a08adf3](https://github.com/visitscotland/vs-component-library/commit/a08adf315368413b51edba59ba4a8b28a56df6f3))

### [4.0.1](https://github.com/visitscotland/vs-component-library/compare/v4.0.0...v4.0.1) (2024-10-25)


### 🐛 Bug Fixes

* **button:** fixed the icon only bug where aria-label was overwriting the screen reader text ([602a175](https://github.com/visitscotland/vs-component-library/commit/602a1751d054cf6fa5e44b72511730b63f62d665))


### ✨ Features

* **engagement:** adjust exponea.identify syntax to fire event immediately ([806dfea](https://github.com/visitscotland/vs-component-library/commit/806dfea1ac09c26c35675d58d9f80ad76fa100f1))

## [4.0.0](https://github.com/visitscotland/vs-component-library/compare/v3.3.8...v4.0.0) (2024-10-22)


### ⚠ BREAKING CHANGES

* **spacers:** All old spacer tokens have now been removed and should be replaced with the new
tokens and utility classes going forward.
* **button:** The IconWithText prop has now been removed from the vs-button component and should
be replaced with another button variant.
* **button props:** Button icons previously configured via iconOrientation will now need to use an
appropriately oriented custom font icon instead
* **heading:** The 'thin' and 'alternative' props will no longer be accepted by the heading
component

### ✨ Features

* **button.vue:** rounded prop ([ed77a82](https://github.com/visitscotland/vs-component-library/commit/ed77a8207a3f16038718d3a0ab51ab508cf8cb27))
* **caption:** add new subtle variant for caption ([821b5fe](https://github.com/visitscotland/vs-component-library/commit/821b5fe12692a3c301076ebdc580716ffa474c88))
* **hero-section:** first implementation of new component ([7467fd3](https://github.com/visitscotland/vs-component-library/commit/7467fd3014cf070b77eb91b70aa453608f415109))
* **hero:** add new no-image variant into hero component ([eff5371](https://github.com/visitscotland/vs-component-library/commit/eff53715cc854266762a7e9a6965b274fa31ffac))
* **herosection:** iniitial draft of hero section ([4a7b805](https://github.com/visitscotland/vs-component-library/commit/4a7b8058085e9a2f3829bae111ad48fe1399b84c))
* **spacer tokens:** add new spacers from design ([18b7973](https://github.com/visitscotland/vs-component-library/commit/18b7973b924bdefc5007f2d3fb8faa1d881df119))
* **spacing.yml tokens and util update:** include additional spacing- namespaces ([3322dcb](https://github.com/visitscotland/vs-component-library/commit/3322dcb7125fd1b2a969250642466cb6c203a913))
* **tokens:** add display tokens for heading-size into the library ([94829d3](https://github.com/visitscotland/vs-component-library/commit/94829d3a2c93f629c89e87e990e5d08df5453535))
* **tokens:** add new font-size-primitives and heading-size tokens to the library ([65c3ce0](https://github.com/visitscotland/vs-component-library/commit/65c3ce07b5fd68c75fc971d89a945d8fd5d6f822))
* **tokens:** add new sub-heading tokens to the library ([1bfe41a](https://github.com/visitscotland/vs-component-library/commit/1bfe41adaa0dcae03aec3fc92327bad9ce646aac))
* **tokens:** add new tracking and line-height tokens for headings ([87230e5](https://github.com/visitscotland/vs-component-library/commit/87230e5ea8b2e05292130ea23937a3fd0a4525dc))


### ✅ Tests

* **heading:** update unit tests for new heading props ([be6ad49](https://github.com/visitscotland/vs-component-library/commit/be6ad49a56e73cff551e10c717bcc92978d610ac))
* **hero:** add unit tests for hero component ([c589daa](https://github.com/visitscotland/vs-component-library/commit/c589daa850d0a48755da790fa56ada20f990386e))


### 🎨 Styling

* **button.vue and tests:** line wrapping and indents ([8f79d5d](https://github.com/visitscotland/vs-component-library/commit/8f79d5d2386602ef1c1386c5f51809e56b838cdb))
* **button.vue:** indenting etc ([19caab8](https://github.com/visitscotland/vs-component-library/commit/19caab8b142236822e3425931e0041d5cda70b99))
* **button:** remove focus colours from button variant mixin as its now more consistent ([ce312a8](https://github.com/visitscotland/vs-component-library/commit/ce312a89903ecb1c54621a3a76c92961a05ed1a2))
* **buttons:** update accordion button line-height ([14b8041](https://github.com/visitscotland/vs-component-library/commit/14b8041740cab08fb147d1e89683c3a5484b0975))
* **button:** update button icon size to match designs ([de2e0de](https://github.com/visitscotland/vs-component-library/commit/de2e0debec3e7319f5a1d87ef815796c72bb7a1c))
* **heading:** add new heading styles in to heading component ([69d31ce](https://github.com/visitscotland/vs-component-library/commit/69d31ce212dd0362a2df6e79d736ddaeacd04f4b))
* **hero:** update caption subtle background and add padding to hero ([3e73bda](https://github.com/visitscotland/vs-component-library/commit/3e73bda4169eb20392f87d87a066d53b9dd9ed2a))
* **hero:** update padding and image size for hero section ([ebdf0e1](https://github.com/visitscotland/vs-component-library/commit/ebdf0e11e533ceed3a6a721b647e675e2f97a2cf))
* **tabs:** update tab item to new spacers ([bf92686](https://github.com/visitscotland/vs-component-library/commit/bf92686ea3c4c25d98d369c013a28892da2258b1))
* **togglebutton:** fix toggle button styles after button refactor ([7d32aea](https://github.com/visitscotland/vs-component-library/commit/7d32aeaa3a4d0e46e7a5d6512db8e12d83af73f5))


### 📝 Docs

* **button:** update button stories for better examples ([c1f5e96](https://github.com/visitscotland/vs-component-library/commit/c1f5e96379f04dc3e55191e2f3a0bdab098d3d8d))
* **hero:** add comments to props and tidy hero story ([db8d40c](https://github.com/visitscotland/vs-component-library/commit/db8d40c1707e9cbed0aba69fc3440b50ca7d7756))
* **hero:** update hero component name in storybook ([87bf5f9](https://github.com/visitscotland/vs-component-library/commit/87bf5f9277a874b5d1ae407520768d27d0cb803b))


### ♻️ Code Refactoring

* **$spacer- variables:** replace  1-12 with 0125-600 ([b900414](https://github.com/visitscotland/vs-component-library/commit/b90041434e4353509f720331c43f214d6d2aad5a))
* **accordion:** remove unused heading in accordion component ([b515e54](https://github.com/visitscotland/vs-component-library/commit/b515e54c72c2e56027050dc1ceab65f84111d2a8))
* **add new spacers & update button:** include new spacer values per main branch ([dc809b2](https://github.com/visitscotland/vs-component-library/commit/dc809b272ff9a8c7e01413e4336601d02c3278c2))
* **article:** swap sub heading back to rich text wrapper ([c288061](https://github.com/visitscotland/vs-component-library/commit/c288061152ad055bb40940b1bfd2758741afc072))
* **article:** update article to use sub-heading instead of lead text ([b67863c](https://github.com/visitscotland/vs-component-library/commit/b67863ccd6150676ae8dbc235d0e0aefc529a2f4))
* **button props:** remove iconOrientation from Button ([01233d1](https://github.com/visitscotland/vs-component-library/commit/01233d10eb194f3725f321047f45e2fc63b584d6))
* **button.vue:** replace value with token variable ([3817f03](https://github.com/visitscotland/vs-component-library/commit/3817f033f96d7eb52f31974a82078ae0ee74963e))
* **button:** make button rounded the default button ([484f81a](https://github.com/visitscotland/vs-component-library/commit/484f81a8f9325ad4be85ed4723f58310e87824fc))
* **button:** remove iconWithText button type from vs-button component ([715fd37](https://github.com/visitscotland/vs-component-library/commit/715fd374faef68723e07333362b0c0fc6e025760))
* **buttons:** update all buttons to be consistent with new button designs ([c71e33f](https://github.com/visitscotland/vs-component-library/commit/c71e33f57ac81b00bf5d7e9fa0d1f940b8bf6dcb))
* **button:** update styles per design ([d8c3775](https://github.com/visitscotland/vs-component-library/commit/d8c37757e86d47f28f62e99acbbee3ba2b36328b))
* **button:** update styles to match designs ([3712265](https://github.com/visitscotland/vs-component-library/commit/3712265c122bd6adbe92bbf32cbf828da7d7455f))
* **button:** update styles to match new designs ([d280824](https://github.com/visitscotland/vs-component-library/commit/d280824f0cfcd3d26b90e7068ce67b7dd047c5b7))
* **carousel:** refactor carousel buttons to use consistent vs-button ([5dff032](https://github.com/visitscotland/vs-component-library/commit/5dff03212d05faacd1ecfc17d3f8974a9a352812))
* **components using button icon-only propp:** remove visually-hidden span wrappers ([0c235a5](https://github.com/visitscotland/vs-component-library/commit/0c235a5308ef649104d1b0f59a33b763b0cd0150))
* **custom fa icons,carousel,mapwithsidebar:** add left-arrow icon to replace iconOrientation ([f99de29](https://github.com/visitscotland/vs-component-library/commit/f99de29b5ac13646cebd01ca3428358cb69b470a))
* **form:** remove commented out code from form component ([2d4fc1c](https://github.com/visitscotland/vs-component-library/commit/2d4fc1c0a6ae764576f9db04acc0857caec6d167))
* **heading:** add heading margins as optional in the mixin ([c31aaf4](https://github.com/visitscotland/vs-component-library/commit/c31aaf4345326a5e1ee0831fae851694288df891))
* **heading:** first components refactored to use new heading ([82151a6](https://github.com/visitscotland/vs-component-library/commit/82151a66891e62d29d7a4e25a8f7622e9a43b6c2))
* **heading:** refactor heading styles and tidy tab headings ([cd2bd9b](https://github.com/visitscotland/vs-component-library/commit/cd2bd9bfb2f346fa2def56ba6107e78a12df8030))
* **heading:** refactoring headings to use new headingStyle components to fix breaking change ([0ad6b69](https://github.com/visitscotland/vs-component-library/commit/0ad6b69021b676c078a19742da9bee2030fe39fe))
* **heading:** remove alternative prop from heading component ([a10e04a](https://github.com/visitscotland/vs-component-library/commit/a10e04a6cb2137ec86f131371b8c61ef8fdc703d))
* **heading:** remove thin and alternative heading styles and props ([5da6587](https://github.com/visitscotland/vs-component-library/commit/5da658763d35747012ce8b273e3402127a5f664d))
* **headings:** refactor font-family tokens and where theyre applied ([1b1fd00](https://github.com/visitscotland/vs-component-library/commit/1b1fd0066c85c5c976943d45f3b4c68c92a6f604))
* **headings:** refactor subheading styles ([f67d57e](https://github.com/visitscotland/vs-component-library/commit/f67d57e55c6e238dc04172c09b8b8177527d094d))
* **headings:** remove old heading-size tokens ([151a876](https://github.com/visitscotland/vs-component-library/commit/151a876267caf2cf0af693d86bb2d952c7cc19d6))
* **heading:** update headings to use new headingStyle prop ([8543320](https://github.com/visitscotland/vs-component-library/commit/8543320fefda9b8ce56e1c0b4b6210d09228d94e))
* **heading:** updating headings to use headingStyle prop ([4e75d6e](https://github.com/visitscotland/vs-component-library/commit/4e75d6e60658009e7142b5af5c4cf1ed4cfc89fd))
* **heading:** work in progress - refactor heading component to include new design styles ([ca73c6d](https://github.com/visitscotland/vs-component-library/commit/ca73c6d8106ad9042ccb91c267a4c2a73bc266ad))
* **hero:** add export and update component name to VsHeroSection ([cec0168](https://github.com/visitscotland/vs-component-library/commit/cec0168680ef4a893f905783467f09eb5b856559))
* **hero:** fix caption in hero section ([1528624](https://github.com/visitscotland/vs-component-library/commit/15286244f7cb39486104318542f8327130052fb7))
* **hero:** fix correct columns as per design ([f61c8e4](https://github.com/visitscotland/vs-component-library/commit/f61c8e45502656ea6b261ce0cb8eb4a9f3b0babd))
* **hero:** use VsImg instead of background image for hero ([f20bbbf](https://github.com/visitscotland/vs-component-library/commit/f20bbbf5b1f634384ddab04ebcc3e609bd59d4ea))
* **itineraries:** refactor itinerary headings to use new style ([5dba12c](https://github.com/visitscotland/vs-component-library/commit/5dba12c6311da501d5a9e4a0d05aef33d4977cdc))
* **modal and  irts stories:** remove dark modal background and apply secondary toggle ([b734d16](https://github.com/visitscotland/vs-component-library/commit/b734d1617d600261af20057d1190f3467552fe98))
* **move focus ring outside button, change color:** update to the focus-ring per button design ([255168f](https://github.com/visitscotland/vs-component-library/commit/255168f46528259bbd31cbae0ca783f80721303b))
* **numberinput, button.vue, button tests:** visually hidden slot span in iconOnly button ([e89ec85](https://github.com/visitscotland/vs-component-library/commit/e89ec8536c4d5fbf6d84ebf17af2d25b97f6ab9f))
* **padding and margin utiliies:** replace suffixes to use new spacer- schema ([dcb7d4e](https://github.com/visitscotland/vs-component-library/commit/dcb7d4e2924f89b0f42c358790ceda082b737217))
* **remove ondark prop from  button api:** remove all references to onDark and on-dark ([fe5c3f9](https://github.com/visitscotland/vs-component-library/commit/fe5c3f92c461c16922834ea30fcfac3d3f84f687))
* **remove rendundant class:** q ([de1d26f](https://github.com/visitscotland/vs-component-library/commit/de1d26f0d30a6f747143739f38ef6c0123f4c298))
* **spacer values:** update missed spacer- values ([bdfe5f5](https://github.com/visitscotland/vs-component-library/commit/bdfe5f507286b0a7d11dbbd5cf776d4f2814d6c2))
* **spacers:** remove old spacer tokens from the codebase ([60dfdc8](https://github.com/visitscotland/vs-component-library/commit/60dfdc8ee7576c66711b0719eddffa197edd8e73))
* **tabs:** refactor tabs to use new heading styles ([c32e5bf](https://github.com/visitscotland/vs-component-library/commit/c32e5bf0728b7f6aa258e115b111797b34a91557))
* **tab:** update tab item font size ([685f772](https://github.com/visitscotland/vs-component-library/commit/685f7721ec911b9e35be77cd1dedf59ad0a371e9))
* **utilities:** remove utilities_custom file ([fccf1a8](https://github.com/visitscotland/vs-component-library/commit/fccf1a830b1c930c646813f5380bb7e90be2589e))
* **utilties:** remove import of utilties_custom ([06d8866](https://github.com/visitscotland/vs-component-library/commit/06d886665530eb175fa0668c16b4f10507ffe185))
* visually-hidden iconOnly button text ([4baae02](https://github.com/visitscotland/vs-component-library/commit/4baae02568fe75770ca207409aa101186c13a513))


### 🐛 Bug Fixes

* **button styles focus:** button height and focus styles updated to reinstate changes ([8d91bec](https://github.com/visitscotland/vs-component-library/commit/8d91bec2f61957998e85e0cb3f9633c3876352e0))
* **caption:** fix padding for caption with map ([532b7f4](https://github.com/visitscotland/vs-component-library/commit/532b7f4ad94a3bd8ccaa69fade0df3c388946613))
* **carousel:** add back missing if condition on next button ([de5a596](https://github.com/visitscotland/vs-component-library/commit/de5a596a5ea37bb8fb31b4078c3d01317f32b52c))
* **form and productsearch:** add spaces separating utils from functional classes ([a784eaa](https://github.com/visitscotland/vs-component-library/commit/a784eaa318a2c9ec3082891cdb8d5ace85a52b0f))
* **skiscotlandcard:** fix typo in skiscotlandcard ([806394c](https://github.com/visitscotland/vs-component-library/commit/806394cf7cd34a04beb22c80db45ff018ee0842a))
* **spacing:** add missing $spacer-025 to the bootstrap overrides ([8ddbd2a](https://github.com/visitscotland/vs-component-library/commit/8ddbd2a2e3da5e6f4e4f0c87e39dfa7fff03c1b2))
* **spacing:** update headings to the right spacing value ([f9c4129](https://github.com/visitscotland/vs-component-library/commit/f9c4129e68f86da8a2530572bd0881f906b77618))
* **tab:** fix tab headings to show in no-js ([f162ae9](https://github.com/visitscotland/vs-component-library/commit/f162ae9a5bf8f45bd53277f724597e8a367f37de))
* **togglebutton:** reinstate visually hidden for this component's text ([fbcc24b](https://github.com/visitscotland/vs-component-library/commit/fbcc24b02e980bfca0b48d4e8963189420a4cf26))
* **tokens:** fix heading-l token value ([568c5b4](https://github.com/visitscotland/vs-component-library/commit/568c5b44e33debc50f3a4dede2738d699c78885f))
* **videocaption, pageintrostories, togglebuttonstories:** show/hide toggle as appropriate ([8db4809](https://github.com/visitscotland/vs-component-library/commit/8db480954464c038a38063f7f75532a3d5a0e297))
* **videocaption, togglebutton:** add visually-hidden wrapper in component ([c41e9b2](https://github.com/visitscotland/vs-component-library/commit/c41e9b2fa6666c60fa6639a206d5659d341753b8))

### [3.3.8](https://github.com/visitscotland/vs-component-library/compare/v3.3.7...v3.3.8) (2024-10-21)


### 🐛 Bug Fixes

* improve logic determining that link click is from an anchor element ([ca942b7](https://github.com/visitscotland/vs-component-library/commit/ca942b75905038dfee12f05655cc1d4951cb947b))


### 🔖 Others

* merge from main ([102e316](https://github.com/visitscotland/vs-component-library/commit/102e316741da089cd6bfea9e12f4781c6a301d74))

### [3.3.7](https://github.com/visitscotland/vs-component-library/compare/v3.3.6...v3.3.7) (2024-10-18)


### ✨ Features

* **skip to:** add ability to remove search from skip to ([2f871c3](https://github.com/visitscotland/vs-component-library/commit/2f871c37ec57472223afe3c8694aff1c50034a48))

### [3.3.6](https://github.com/visitscotland/vs-component-library/compare/v3.3.5...v3.3.6) (2024-10-15)

### [3.3.5](https://github.com/visitscotland/vs-component-library/compare/v3.3.4...v3.3.5) (2024-10-15)

### [3.3.4](https://github.com/visitscotland/vs-component-library/compare/v3.3.3...v3.3.4) (2024-10-11)


### 🐛 Bug Fixes

* **button toggle group:** bVN changed emitted event payload ([8902c6e](https://github.com/visitscotland/vs-component-library/commit/8902c6ee42694ce5b8f1ffa62c8ad4b1b78a6c89))


### ✨ Features

* **map with sidebar:** only reset map on sidebar close on desktop ([88afaac](https://github.com/visitscotland/vs-component-library/commit/88afaac4db6cc71e9e17dd3269b8a17a601626ae))

### [3.3.3](https://github.com/visitscotland/vs-component-library/compare/v3.3.2...v3.3.3) (2024-10-10)

### [3.3.2](https://github.com/visitscotland/vs-component-library/compare/v3.3.1...v3.3.2) (2024-10-10)


### 🔖 Others

* **do not push:** introduce error to test chromatic ([4aa0c8f](https://github.com/visitscotland/vs-component-library/commit/4aa0c8fa7f3db18d1be53a7f56ce54685d97ad16))


### ✨ Features

* **bloomreach engagement:** call exponea identiy with submitted email address when form submitted ([ca0aae3](https://github.com/visitscotland/vs-component-library/commit/ca0aae39ec169217d7a5f527c7ad04b444a4a994))
* **chromatic:** add weekly scheduled job ([13d3293](https://github.com/visitscotland/vs-component-library/commit/13d3293a6eb525853db006149106526699323670))
* **chromatic:** remove re-run on synch ([6128cf6](https://github.com/visitscotland/vs-component-library/commit/6128cf6a68e39a94ef906af0dd088d9a1f12c1d8))
* **push:** remove intentional regression ([2119282](https://github.com/visitscotland/vs-component-library/commit/21192822f83dbaecbb2ff47f060fa80ed86a545f))

### [3.3.1](https://github.com/visitscotland/vs-component-library/compare/v3.3.0...v3.3.1) (2024-10-04)


### ✨ Features

* **icentre:** remove icentre logo ([545024c](https://github.com/visitscotland/vs-component-library/commit/545024c69ec34330b1c7547a3379a39f17685d6b))
* **icentre:** rename to tourism info ([537724d](https://github.com/visitscotland/vs-component-library/commit/537724d01ff009b297b8ea48a3bf31f9f8cd78d5))

## [3.3.0](https://github.com/visitscotland/vs-component-library/compare/v3.2.3...v3.3.0) (2024-09-30)


### 🐛 Bug Fixes

* **styled list:** remove TypeScipt as it was breaking everything ([083988d](https://github.com/visitscotland/vs-component-library/commit/083988d8ef82731e82737880699dd9410fb63eb8))


### ✅ Tests

* **styled list:** add tests for image variant ([06f6e20](https://github.com/visitscotland/vs-component-library/commit/06f6e20a794117a456f8078caf2ce6b36304ab39))
* **styled list:** add tests for image-horizontal variant ([5061389](https://github.com/visitscotland/vs-component-library/commit/5061389efd7699895dac798f2f9c40229257b3df))
* **stylednumberedlist:** add tests for new components ([0748fbb](https://github.com/visitscotland/vs-component-library/commit/0748fbbb5976673bc5860311bd240ae7faaa60d5))


### ✨ Features

* **styled list story:** change story name ([b40a384](https://github.com/visitscotland/vs-component-library/commit/b40a384778c058c932509bcb179b98491d560e5b))
* **styled list:** add image-horizontal variant ([3eb3385](https://github.com/visitscotland/vs-component-library/commit/3eb33854819158508cd895e1a01232fe5111c99e))
* **styled list:** add variant "with image" ([a8b789b](https://github.com/visitscotland/vs-component-library/commit/a8b789b34b8c9b1639b8d85b63456bfa4f5a0888))
* **styled list:** mobile layout changes ([70f804a](https://github.com/visitscotland/vs-component-library/commit/70f804a05f3a7dbc3bc1c1d7fb513055fa469e3c))
* **styledlist:** add new variation for icon list ([930dd2e](https://github.com/visitscotland/vs-component-library/commit/930dd2e59426fd84a151ee1b802de0043450b558))
* **stylednumberedlist:** add a new component ([aa5b62a](https://github.com/visitscotland/vs-component-library/commit/aa5b62a1eba19483465ac782d6658ba128435dfd))
* **stylednumberedlist:** add a story for the new component ([ec8f26d](https://github.com/visitscotland/vs-component-library/commit/ec8f26daef8005bc03962a3b135d3ed5ff75f1b8))


### 🔖 Others

* **deps:** bump the npm_and_yarn group with 10 updates ([3b2297c](https://github.com/visitscotland/vs-component-library/commit/3b2297c21de1fd27cf256cd7a10bd51a59fac31a))


### 🎨 Styling

* **styled list item:** replace hard-coded colour value with variable ([9fd9c78](https://github.com/visitscotland/vs-component-library/commit/9fd9c7843cc1dda28c41778ca079e9eca6df6456))


### 📝 Docs

* **style list:** add comments to slots and props ([439426e](https://github.com/visitscotland/vs-component-library/commit/439426e5d9c9a3c1966238f0865b1af34dc729dd))

### [3.2.3](https://github.com/visitscotland/vs-component-library/compare/v3.2.2...v3.2.3) (2024-09-26)


### ✨ Features

* **embed wrapper:** allow embed wrapper to access extra content in warning ([545fdc2](https://github.com/visitscotland/vs-component-library/commit/545fdc226031618ca0289c0a8cf4fd903600fa28))

### [3.2.2](https://github.com/visitscotland/vs-component-library/compare/v3.2.1...v3.2.2) (2024-09-24)


### ✨ Features

* **menu:** handle back tabbing better ([339bb66](https://github.com/visitscotland/vs-component-library/commit/339bb6638e425a225d2693ae035d6117c51c7697))

### [3.2.1](https://github.com/visitscotland/vs-component-library/compare/v3.2.0...v3.2.1) (2024-09-24)


### ✨ Features

* **meganav:** close dropdown when tabbing out of it ([be7306a](https://github.com/visitscotland/vs-component-library/commit/be7306aba7b927373ebcaa4004dbf12bb8218633))
* **site search:** apply same fix to search form ([14e24cd](https://github.com/visitscotland/vs-component-library/commit/14e24cda2daefe1ccd84d485ab9ace6beef0f16b))
* **video:** remove redundant cookie checks in caption and card ([09e8483](https://github.com/visitscotland/vs-component-library/commit/09e84839be3881ef2d9c44adf145f1ef90e3bb09))

## [3.2.0](https://github.com/visitscotland/vs-component-library/compare/v3.1.9...v3.2.0) (2024-09-23)


### ✨ Features

* **article.stories.js:** add condition to show/hide sidebar content ([3b85a50](https://github.com/visitscotland/vs-component-library/commit/3b85a50e3796fe5d02c67979aa2885317bc15d62))
* **article.stories.js:** add quote with border to BSH story ([1a2f5e5](https://github.com/visitscotland/vs-component-library/commit/1a2f5e526fd43a7265f4dad418b90f479b8798ce))
* **article:** add businessSupport option to set specific styles ([1479e0a](https://github.com/visitscotland/vs-component-library/commit/1479e0ae7f3ae50f7d01adfb84357f22d379745a))
* **article:** add cover image below intro ([f35979c](https://github.com/visitscotland/vs-component-library/commit/f35979c2333da4fbe772a7588ed6368b393dc5f8))
* **article:** add option to display the cover media below the intro ([06f4bda](https://github.com/visitscotland/vs-component-library/commit/06f4bda753932157fcb3a468478a71553d0076b2))
* **article:** add option to remove border ([865acad](https://github.com/visitscotland/vs-component-library/commit/865acadda9c776ba7b461ad8f378832055d1d153))
* **article:** add option to set heading/intro alignment ([efd804f](https://github.com/visitscotland/vs-component-library/commit/efd804fcf3c1e0b3d639447b266ea416b9084142))
* **article:** remove column with when businessSupport ([07ceb44](https://github.com/visitscotland/vs-component-library/commit/07ceb44ee88e3ca904a0578172f67ad77f742720))
* **articlesection:** set content width depending on sidebar having content ([216cbea](https://github.com/visitscotland/vs-component-library/commit/216cbea67b9e648047eaf876f2208e4ff2d4fbeb))
* **article:** set sidebar order on mobile ([ae60da3](https://github.com/visitscotland/vs-component-library/commit/ae60da3764b2d9f9509ceefe0b39506a333af7de))
* **quote:** add with border variation ([5a551c5](https://github.com/visitscotland/vs-component-library/commit/5a551c56ec89f987e498d4e0a562a6cb0116e8bf))


### 🐛 Bug Fixes

* **article.stories.js:** fix quote paragraph ([90b019e](https://github.com/visitscotland/vs-component-library/commit/90b019edc63f1c53487ed3d848989ff90034c2bd))
* **article.stories.js:** typo ([4f1793f](https://github.com/visitscotland/vs-component-library/commit/4f1793f5c77ba601ac495ba19a74a2a545d7119d))
* **article:** replace logical AND with tenarys for clarity ([426088a](https://github.com/visitscotland/vs-component-library/commit/426088ad1b6bcd9993904e1ea8dd66790e4d1ca0))
* **quote:** update border and author text colour ([6258262](https://github.com/visitscotland/vs-component-library/commit/625826226f99ac68c81df8477b126612999f1167))


### ✅ Tests

* **article seciton:** add unit test ([8a9b68b](https://github.com/visitscotland/vs-component-library/commit/8a9b68b4b1d2c52731edd18cd1446a136b6833ed))

### [3.1.9](https://github.com/visitscotland/vs-component-library/compare/v3.1.8...v3.1.9) (2024-09-23)


### ✨ Features

* **video:** remove cookie checks from page hero as well ([88f7242](https://github.com/visitscotland/vs-component-library/commit/88f72424fc677a8014994f94054b06f1fb8cdb77))

### [3.1.8](https://github.com/visitscotland/vs-component-library/compare/v3.1.7...v3.1.8) (2024-09-20)

### [3.1.7](https://github.com/visitscotland/vs-component-library/compare/v3.1.6...v3.1.7) (2024-09-20)


### 🐛 Bug Fixes

* **analytics:** check for window definition before accessing ([d389bd7](https://github.com/visitscotland/vs-component-library/commit/d389bd769cef1459dc189b548f0e62809277a218))

### [3.1.6](https://github.com/visitscotland/vs-component-library/compare/v3.1.5...v3.1.6) (2024-09-19)

### [3.1.5](https://github.com/visitscotland/vs-component-library/compare/v3.1.4...v3.1.5) (2024-09-19)


### ✨ Features

* **bootstrap-overrides:** add deprecation warning for spacer-1 to 12 ([7223eb4](https://github.com/visitscotland/vs-component-library/commit/7223eb4427a0568a4b5a0094faba7e8eb096dbdb))
* **spacing.yml tokens and utils:** add spacing tokens in new format ([dd9613d](https://github.com/visitscotland/vs-component-library/commit/dd9613db03d1e08e91c310958ba8f747a3854e4d))
* **video:** remove cookie warnings from video ([0db76d8](https://github.com/visitscotland/vs-component-library/commit/0db76d8af1bd94a983445a5c9f20447ac9689dd2))
* **video:** remove redundant no-cookie stories for other videos ([6301bd4](https://github.com/visitscotland/vs-component-library/commit/6301bd46adad74feebfe892ad0fa8216ab48a4e2))
* **video:** switch to nocookies youtube embed url ([4901029](https://github.com/visitscotland/vs-component-library/commit/49010295cbf70d112122f314b6c3448cd66fd751))

### [3.1.4](https://github.com/visitscotland/vs-component-library/compare/v3.1.3...v3.1.4) (2024-09-12)


### 🐛 Bug Fixes

* **img:** correct tests for srcset ([ee039ae](https://github.com/visitscotland/vs-component-library/commit/ee039ae08b777c407249b75474dc1ecf3b756adf))
* **page intro:** fix caption display on tablet for full scren ([1efd203](https://github.com/visitscotland/vs-component-library/commit/1efd2034465834dfcba25445d3e2fa3bd98aea7c))
* **page intro:** fix social share on desktop on full screen mode ([735e1ba](https://github.com/visitscotland/vs-component-library/commit/735e1ba7daca56c8b01af08bfc05e30f44cc798b))
* **social share:** fix share width on mobile ([980ecf8](https://github.com/visitscotland/vs-component-library/commit/980ecf8eddf1eb1638388ce72f47050ae87e4094))

### [3.1.3](https://github.com/visitscotland/vs-component-library/compare/v3.1.2...v3.1.3) (2024-09-12)


### 🐛 Bug Fixes

* **page intro:** visual bug fixes for fullscreen version ([5909060](https://github.com/visitscotland/vs-component-library/commit/59090603559480c301bf6ec6a585fa81471a4667))

### [3.1.2](https://github.com/visitscotland/vs-component-library/compare/v3.1.1...v3.1.2) (2024-09-10)


### ♻️ Code Refactoring

* **buttons:** tidy code for consistent buttons ([732263f](https://github.com/visitscotland/vs-component-library/commit/732263fb680f69652963e431904da818af8b9ab2))
* **map:** refactor map category button to be button not VsButton component ([b9cab28](https://github.com/visitscotland/vs-component-library/commit/b9cab28abe98013f73e9a07c62dae0049c5d8a6c))
* **nav:** fix button specificity ([4495840](https://github.com/visitscotland/vs-component-library/commit/449584035531a528601c915bf2fe3daed8e29249))


### ✨ Features

* **intro:** implement rough fullscreen page intro image ([6c58518](https://github.com/visitscotland/vs-component-library/commit/6c5851842e4278e01e2c0e48832c1e85734d6498))
* **page intro:** ensure fullscreen mobile view has default behaviour on desktop ([8c5fde7](https://github.com/visitscotland/vs-component-library/commit/8c5fde74982537e611f39f8fad2e714f1a3125df))
* **page intro:** move hero text back under image ([ca6c444](https://github.com/visitscotland/vs-component-library/commit/ca6c444e8f5b5e8b6a8ebc47a62470ad5d59f48a))
* **page intro:** switch to tint layout ([de5812f](https://github.com/visitscotland/vs-component-library/commit/de5812f2426120e03a95985d732b48b6a0b55b51))
* **video stories:** basic implementation ([6d0a82b](https://github.com/visitscotland/vs-component-library/commit/6d0a82b2739cdcac56c3770bda2af0afc2a7057e))
* **videostories:** remove stories component ([9647347](https://github.com/visitscotland/vs-component-library/commit/9647347665270b215d0480d9e728690358c248ba))


### 🐛 Bug Fixes

* **img:** adjust responsive image sizes in line with .com ([ee8bd07](https://github.com/visitscotland/vs-component-library/commit/ee8bd07e90309dd847baca384f47a731dd1796fb))
* **page intro:** add unit tests for fsMobile positioning ([5d9deb2](https://github.com/visitscotland/vs-component-library/commit/5d9deb26b032009393a9670803d583cff4b9bb56))
* **page intro:** correct visual bugs with full screen version ([441f576](https://github.com/visitscotland/vs-component-library/commit/441f5769f1bcbababfdec6cd09f7cc8c3848d160))
* **page intro:** remove video asset ([23f141f](https://github.com/visitscotland/vs-component-library/commit/23f141f112b875ab2e0ae953d24b8a0d493392ac))
* **video stories:** remove library ([2b41190](https://github.com/visitscotland/vs-component-library/commit/2b411903efb2dd3b80b2298d8c5acdbd27c7da61))

### [3.1.1](https://github.com/visitscotland/vs-component-library/compare/v3.1.0...v3.1.1) (2024-08-16)


### ✨ Features

* **form:** ensure errors on conditional fields clear when they're hidden ([c2a99f2](https://github.com/visitscotland/vs-component-library/commit/c2a99f25802897395bbd2b259a36d28478e52b36))

## [3.1.0](https://github.com/visitscotland/vs-component-library/compare/v3.0.18...v3.1.0) (2024-08-16)


### ✅ Tests

* **link list:** add tests for table of contents ([f153982](https://github.com/visitscotland/vs-component-library/commit/f153982320318e0d27a846dba19b5258b664dad5))


### ✨ Features

* **linklist.stories.js:** add table of contents variant ([7bbb861](https://github.com/visitscotland/vs-component-library/commit/7bbb861b51a758c2c6edd8dcfd62a6aea0dae51d))
* **linklist:** add table of contents variant ([7477e3a](https://github.com/visitscotland/vs-component-library/commit/7477e3acecdd275575d6ba5086c79b9c833f8e6b))
* **linklist:** adjust HTML for accessibility ([98364ea](https://github.com/visitscotland/vs-component-library/commit/98364ea0bac4d27518305742d36a1c8597c906a8))
* **linklist:** update table of contents styles ([0900f9d](https://github.com/visitscotland/vs-component-library/commit/0900f9d95a9abf778ede7542af0c6431fc55f24a))

### [3.0.18](https://github.com/visitscotland/vs-component-library/compare/v3.0.17...v3.0.18) (2024-08-14)


### ✨ Features

* **modal:** add missing modal video story ([f60d9ff](https://github.com/visitscotland/vs-component-library/commit/f60d9fff47449769548749dfe14da2bd3e528e6d))


### 🐛 Bug Fixes

* **forms:** check conditionals on config load ([4b94d47](https://github.com/visitscotland/vs-component-library/commit/4b94d47c55421db3e9efa8b9a33c2bfd6b9a0db2))

### [3.0.17](https://github.com/visitscotland/vs-component-library/compare/v3.0.16...v3.0.17) (2024-08-06)


### ✨ Features

* **forms:** make all whitespace entries fail required validation ([c3572da](https://github.com/visitscotland/vs-component-library/commit/c3572da87095b65c82f3a1466185a8f38bf3c9a0))


### 🐛 Bug Fixes

* **forms:** account for boolean fields ([0c4af92](https://github.com/visitscotland/vs-component-library/commit/0c4af9231a79505c522d1235c8ba310bb6b4aa00))

### [3.0.16](https://github.com/visitscotland/vs-component-library/compare/v3.0.15...v3.0.16) (2024-08-01)


### ⏪ Revertions

* **product search embed:** revert previous change ([399aeef](https://github.com/visitscotland/vs-component-library/commit/399aeef97b2dbff45dbd1f3cf8c7a5ce5dba71c6))

### [3.0.15](https://github.com/visitscotland/vs-component-library/compare/v3.0.14...v3.0.15) (2024-07-31)


### ✅ Tests

* **dropdown:** update unit test ([82962cd](https://github.com/visitscotland/vs-component-library/commit/82962cd1da60e2422511a6e165992b6bbd9f8756))
* **meganav dropdown:** update unit tests ([ca03458](https://github.com/visitscotland/vs-component-library/commit/ca0345867c9e84ce724c4b62bafaa790544fae95))


### 🐛 Bug Fixes

* **dropdown:** add css for fallback ([1b35d8c](https://github.com/visitscotland/vs-component-library/commit/1b35d8c7c0ef261cd93ee26870971621157c5076))
* **dropdown:** add no-js fallback ([34c14e4](https://github.com/visitscotland/vs-component-library/commit/34c14e45cf780d314bbd20bdcb33ea99861fb906))
* **dropdown:** remove v-if ([3e7c06a](https://github.com/visitscotland/vs-component-library/commit/3e7c06a74ccd576e3127a45654c4e65c88c40893))
* **dropdown:** typo ([17f4e66](https://github.com/visitscotland/vs-component-library/commit/17f4e669af151684a2f9a43d75257e10e5cea711))
* **global menu dropdown:** add CSS for fallback ([38f7bd6](https://github.com/visitscotland/vs-component-library/commit/38f7bd67e8385b3c075c8da03f8621077e1df9d6))
* **mega nav dropdown:** remove v-if ([481838a](https://github.com/visitscotland/vs-component-library/commit/481838a3bfb3c76cb4377b50a754b00f75dc7110))
* **meganav dropdown:** add CSS for fallback ([c6ce0ea](https://github.com/visitscotland/vs-component-library/commit/c6ce0eac7aac14120bea97bc7c390036e513a06a))
* **meganav dropdown:** add no-js fallback ([95ad337](https://github.com/visitscotland/vs-component-library/commit/95ad33717aec7a6258111388ea330dd3935c0a01))

### [3.0.14](https://github.com/visitscotland/vs-component-library/compare/v3.0.13...v3.0.14) (2024-07-26)


### 🐛 Bug Fixes

* **meganav:** correct for no-js ([f18467e](https://github.com/visitscotland/vs-component-library/commit/f18467e91c4afc0e2f98b454b92c0822d2561a0e))
* **meganav:** ensure that nav sits on baseline if final segment is empty ([c80992e](https://github.com/visitscotland/vs-component-library/commit/c80992e4600ac9ce093b58153b00a989b0338b41))

### [3.0.13](https://github.com/visitscotland/vs-component-library/compare/v3.0.12...v3.0.13) (2024-07-24)


### ✨ Features

* **yarn:** update to 4.3 ([e17f1d4](https://github.com/visitscotland/vs-component-library/commit/e17f1d431b74266f466aecf304887fa99609f7ea))

### [3.0.12](https://github.com/visitscotland/vs-component-library/compare/v3.0.11...v3.0.12) (2024-07-23)


### 🏗 Build System

* **package.json:** change prePublish to prepack ([dcdd497](https://github.com/visitscotland/vs-component-library/commit/dcdd497cb9432a5bb9dcdc69d9dd680a0de585b8))

### [3.0.11](https://github.com/visitscotland/vs-component-library/compare/v3.0.10...v3.0.11) (2024-07-23)


### ✨ Features

* **design tokens:** add new colour palette tokens ([93638e6](https://github.com/visitscotland/vs-component-library/commit/93638e612566b93fbd80d335ff09938329f53f7d))


### 🎨 Styling

* **cokens:** change ptarmigan to cloud ([0c4739d](https://github.com/visitscotland/vs-component-library/commit/0c4739d9d78fd9ca9b1a628acb990b1e8f059bfb))
* **product search:** change oatcake to bluebell ([fe2c67d](https://github.com/visitscotland/vs-component-library/commit/fe2c67d74d53995711078cdfe152a5bf15be9f86))

### [3.0.10](https://github.com/visitscotland/vs-component-library/compare/v3.0.9...v3.0.10) (2024-07-17)


### ⏪ Revertions

* **button.vue:** revert changes to main branch ([4ab9e52](https://github.com/visitscotland/vs-component-library/commit/4ab9e52ae04c801316c98ef209c763731fd10a57))


### 🐛 Bug Fixes

* **button.vue:** dynamically remove unused attributes ([3590b34](https://github.com/visitscotland/vs-component-library/commit/3590b347a19ded833e5ccf7c1e50bcfabc371958))
* **button:** dynamically remove unused attributes ([944c654](https://github.com/visitscotland/vs-component-library/commit/944c654cf2ccd55d6c49d339eda67f0f82e57ce6))
* **heading stories:** replace range input for heading levels with radio buttons ([54c0c11](https://github.com/visitscotland/vs-component-library/commit/54c0c11752f9793c45e9ac3cada2179da1eb3a49))
* **vsform:** make marketo props optional ([136e386](https://github.com/visitscotland/vs-component-library/commit/136e38654773b0e1572be181460bee1d3fd9d8f4))


### ✨ Features

* **storybook:** correct install and build commands ([a588d10](https://github.com/visitscotland/vs-component-library/commit/a588d1074835ae7cd175e88bb470b382e95c4214))
* **storybook:** deploy static storybook on push to main ([551bdee](https://github.com/visitscotland/vs-component-library/commit/551bdee433bc8ee783a688219d18c82490370384))
* **storybook:** switch build path ([b0397a1](https://github.com/visitscotland/vs-component-library/commit/b0397a140fc8fe45212bcf677bc983367cd3d226))

### [3.0.9](https://github.com/visitscotland/vs-component-library/compare/v3.0.8...v3.0.9) (2024-06-14)


### 🐛 Bug Fixes

* **meganavdropdown:** function name has changed within bootstrap-vue-next ([0322ebb](https://github.com/visitscotland/vs-component-library/commit/0322ebbe15f8e4f559041c6e328f5f4f82ff4a8c))

### [3.0.8](https://github.com/visitscotland/vs-component-library/compare/v3.0.7...v3.0.8) (2024-06-14)


### 🐛 Bug Fixes

* **bootstrap vue:** correct tab usage ([903c4db](https://github.com/visitscotland/vs-component-library/commit/903c4dbb2306f55ca01515f199bf7e50fc6dc3ed))
* **yarn.lock:** some dependencies didn't seem to update correctly ([3167e97](https://github.com/visitscotland/vs-component-library/commit/3167e978057da031f6df62ee7c6d9b33d6939343))

### [3.0.7](https://github.com/visitscotland/vs-component-library/compare/v3.0.6...v3.0.7) (2024-06-13)

### [3.0.6](https://github.com/visitscotland/vs-component-library/compare/v3.0.5...v3.0.6) (2024-06-11)


### 🏗 Build System

* **deps:** bump pug from 3.0.2 to 3.0.3 ([041e941](https://github.com/visitscotland/vs-component-library/commit/041e941c4cf4a1f2be6b0000abc16bd1c658876a))


### 🐛 Bug Fixes

* **product search:** set locprox to always be zero ([cdb8d84](https://github.com/visitscotland/vs-component-library/commit/cdb8d8472f1fa59e57d35521f462f5730f4bb092)), closes [#589](https://github.com/visitscotland/vs-component-library/issues/589)

### [3.0.5](https://github.com/visitscotland/vs-component-library/compare/v3.0.4...v3.0.5) (2024-06-10)


### 🏗 Build System

* **build:** stop double building theo in build script ([0f280c3](https://github.com/visitscotland/vs-component-library/commit/0f280c3a176e2ca2ecaefb3119677872d4fefb7c))


### ✨ Features

* **bootstrap:** update BVN to v0.17 ([a056c3b](https://github.com/visitscotland/vs-component-library/commit/a056c3b00bed03a68f1ae027b154f4250958fc14))
* **icons:** add crow icon used in stories ([da78728](https://github.com/visitscotland/vs-component-library/commit/da7872815ee13fd1c264a3efb4ac5719691640fb))


### 🐛 Bug Fixes

* **a11y:** add aria-disabled tag to disabled button - prevent colour contrast error ([cf5c7e2](https://github.com/visitscotland/vs-component-library/commit/cf5c7e26e38c66c5e9cc7abd4b03004cbd9257be))
* **a11y:** add aria-label fallback for icon only buttons ([513d7b8](https://github.com/visitscotland/vs-component-library/commit/513d7b8ed2ac1f07e8263914f1adf2b633ce6418))
* **a11y:** add correct aria role to footer menus ([4baf7eb](https://github.com/visitscotland/vs-component-library/commit/4baf7eba70cf1f8e55a3f37c38db71d4ac64249a))
* **a11y:** add fallback aria label to map markers ([bedae08](https://github.com/visitscotland/vs-component-library/commit/bedae0864b81f0bf4235f67ff44f911f4c564ca9))
* **a11y:** add isStatic option to meganav to add appropriate roles for static container ([e246213](https://github.com/visitscotland/vs-component-library/commit/e24621342e0647ca167568fef37b178f4ff85976))
* **a11y:** add missing toggle button text to stories ([88328ff](https://github.com/visitscotland/vs-component-library/commit/88328ff43e888e87e9ebabe7ab3fb9379306c916))
* **a11y:** add more toggle button text ([9091298](https://github.com/visitscotland/vs-component-library/commit/9091298b537508374a813344d0744b56933e3985))
* **a11y:** add role="menuitem" to dropdown items ([b3b1832](https://github.com/visitscotland/vs-component-library/commit/b3b1832836b5d34fba44b417ff5cfbab57366d9b))
* **a11y:** correct menu/menuitem aria roles in meganav ([4e2c8d1](https://github.com/visitscotland/vs-component-library/commit/4e2c8d1f560570d64d2e2977f633c8b9ecbfd955))
* **a11y:** correct number input label anchoring ([b142a7c](https://github.com/visitscotland/vs-component-library/commit/b142a7c733e2023c329b0fd727a4b31c52dc5569))
* **a11y:** override bootstrap vue next scope behaviour for non-th table cells ([e3bd4fe](https://github.com/visitscotland/vs-component-library/commit/e3bd4fe4fa51e5da6d3996a94a807a2fa56ab57f))
* **a11y:** remove duplicated description list ([92391c4](https://github.com/visitscotland/vs-component-library/commit/92391c4bd7328f6a756d82a035defa2fd9e3c007))
* **a11y:** remove h4 from product card if empty ([8d231a5](https://github.com/visitscotland/vs-component-library/commit/8d231a53fa1bc5b84e7943370f9876c239facafe))
* **a11y:** update bootstrap and add aria-disabled to tag disabled tabs ([52383c8](https://github.com/visitscotland/vs-component-library/commit/52383c8a28e20b5b23a4c8d2edbb35b87be97ad8))
* **bootstrap vue:** bump to v0.17 ([13e2e29](https://github.com/visitscotland/vs-component-library/commit/13e2e2988812e91051ad1b5d44411ad9c1e57c83))
* **bootstrap:** adjust popover position and update close function name ([ac8fe12](https://github.com/visitscotland/vs-component-library/commit/ac8fe12af83730441f0770e2f656e31be00c5996))
* **bootstrap:** correct dropdown menu references for language menu ([b0cbad4](https://github.com/visitscotland/vs-component-library/commit/b0cbad4b67411af173426cb236322fc63cbee10a))
* **bootstrap:** move reference to dropdown menu ([c98e492](https://github.com/visitscotland/vs-component-library/commit/c98e492611d656c3b9b94b61b7762c1fd3902762))
* **bootstrap:** remove references to btn-content in button ([95e02de](https://github.com/visitscotland/vs-component-library/commit/95e02de835212d97afda9bac7fcafabb9ed1d5fa))
* **bootstrap:** remove references to btn-content in Map sidebar ([a9c3608](https://github.com/visitscotland/vs-component-library/commit/a9c3608a9f565402c0386ead3fdf7f46d7f391b3))
* **bootstrap:** restore background colour for modals ([74a1daa](https://github.com/visitscotland/vs-component-library/commit/74a1daad32e1c6716b5c6fdd6b983b7e77706b7e))
* **modal:** revert to BVN v0.15 - retains disabled tab fix but removes recent modal bug ([ceed688](https://github.com/visitscotland/vs-component-library/commit/ceed688da3eecd51be9ac4ee0729892d21778305))
* **typescript:** fix declaration generation error with aliases ([1ec1089](https://github.com/visitscotland/vs-component-library/commit/1ec108991d0abeb546800f54c6536ff70bf9df03))
* **vs form:** only get hidden fields within form component ([1c7a59f](https://github.com/visitscotland/vs-component-library/commit/1c7a59f1de07889755ddbcf396b266acc791db69))

### [3.0.4](https://github.com/visitscotland/vs-component-library/compare/v3.0.3...v3.0.4) (2024-06-04)


### 🐛 Bug Fixes

* **icons:** update icon shortcodes where used in css ([391073b](https://github.com/visitscotland/vs-component-library/commit/391073b68940d37714ffd4a5dc027b6c2bde2d68))


### ✨ Features

* **build:** externalise mapbox and restore map to main bundle ([25c0e66](https://github.com/visitscotland/vs-component-library/commit/25c0e6630f3f184d82547a59ef151bf38ce3b835))
* **form:** add hidden field(s) info to payload ([0e786e0](https://github.com/visitscotland/vs-component-library/commit/0e786e003efdc1067dbba8e6c4a0ca4ae9a17631))
* **form:** add hidden field(s) name and value to the submisson payload ([009fbc1](https://github.com/visitscotland/vs-component-library/commit/009fbc18dce268bdc5bf8ca919cead26176a09d7))
* **icons:** remove un-used fontawesome files ([2192725](https://github.com/visitscotland/vs-component-library/commit/2192725d1d89abca416e2bc33901bb984cb485ba))

### [3.0.3](https://github.com/visitscotland/vs-component-library/compare/v3.0.2...v3.0.3) (2024-05-30)


### ✨ Features

* **fontawesome:** add missing variable files ([7f89271](https://github.com/visitscotland/vs-component-library/commit/7f89271738fac1e48018c14b12ec9c2ec3d973af))
* **icons:** switch to reduced, custom subset of icons ([361726f](https://github.com/visitscotland/vs-component-library/commit/361726f30588f83de87814868fc6442d0aebcb02))

### [3.0.2](https://github.com/visitscotland/vs-component-library/compare/v3.0.1...v3.0.2) (2024-05-29)

### [3.0.1](https://github.com/visitscotland/vs-component-library/compare/v3.0.0...v3.0.1) (2024-05-29)


### ✨ Features

* **vsform:** add slot for hidden fields ([0e12a20](https://github.com/visitscotland/vs-component-library/commit/0e12a20686c133ead10b91514f440fe1f2a3c6ca))


### 🐛 Bug Fixes

* **form.stories.js:** missing quotes ([e474738](https://github.com/visitscotland/vs-component-library/commit/e47473862fb9fffa0f149cb6d1fd817bedeab68d))

## [3.0.0](https://github.com/visitscotland/vs-component-library/compare/v2.0.7...v3.0.0) (2024-05-27)


### ♻️ Code Refactoring

* **code review:** include code review fixes ([2864318](https://github.com/visitscotland/vs-component-library/commit/286431887857b9fd7a494390ae9ac6c45ca951d2))


### 🔖 Others

* **build:** merge main ([bed5ee3](https://github.com/visitscotland/vs-component-library/commit/bed5ee3c0efecaf2d5d25abf07669f5e71dcb8fd))


### 🏗 Build System

* **export:** move main requireq into export ([1825e41](https://github.com/visitscotland/vs-component-library/commit/1825e41760fb31606ffde9222dc88d931039f43d))


### 🐛 Bug Fixes

* **build:** remove breaking bootstrap imports ([4aa5f81](https://github.com/visitscotland/vs-component-library/commit/4aa5f814b2736eede276df9b92bfc51a6b99f228))
* **code review:** tidy up merge issues and remove extra releases ([ff0fab5](https://github.com/visitscotland/vs-component-library/commit/ff0fab59fcb95fa448f38f1f8232e64f2f51207f))
* **style:** restore bvn styles for non-export ([8ced6fb](https://github.com/visitscotland/vs-component-library/commit/8ced6fb2628f625a1e0481809f81369e72319804))
* **tests:** correct type path in constant ([6caf6f9](https://github.com/visitscotland/vs-component-library/commit/6caf6f9a2028ebab0108f801b20152865eadc77e))
* **video:** and in another place ([b9375ea](https://github.com/visitscotland/vs-component-library/commit/b9375ea578b3a1a7cc4dea177ea7c772af0017d5))
* **video:** check for player before accessing ([8482e3a](https://github.com/visitscotland/vs-component-library/commit/8482e3ab759773cf9ca5a373bc264a7782fc63df))


### ✨ Features

* **forms:** add a test for axios submission ([02b377a](https://github.com/visitscotland/vs-component-library/commit/02b377ae8616f5f2c19abf8c95884d50fc494eb0))


### ✅ Tests

* **forms:** add test for actual form url submission ([17d5116](https://github.com/visitscotland/vs-component-library/commit/17d511623823ea518b3571561f8113f7bb39c8bf))

### [0.0.35](https://github.com/visitscotland/vs-component-library/compare/v0.0.34...v0.0.35) (2024-05-17)


### ✨ Features

* **perf:** separate maps into their own entrypoint ([3fdd9f9](https://github.com/visitscotland/vs-component-library/commit/3fdd9f9bcbc8db9893f6172a5d69b8f293e4838b))


### 🔖 Others

* **release:** 0.0.35 ([0aec679](https://github.com/visitscotland/vs-component-library/commit/0aec679ec79f5e00d3bb8986d743c29993f57476))

### [0.0.34](https://github.com/visitscotland/vs-component-library/compare/v2.0.5...v0.0.34) (2024-05-17)


### ✨ Features

* **perf:** temporarily remove map ([2a6ce12](https://github.com/visitscotland/vs-component-library/commit/2a6ce12ba14d38a76576e2c4b2b465b1ca43cabe))


### 🔖 Others

* **release:** 0.0.34 ([afe0ee0](https://github.com/visitscotland/vs-component-library/commit/afe0ee03ea7737eae516c37cce77f35935793812))

### [0.0.33](https://github.com/visitscotland/vs-component-library/compare/v2.0.4...v0.0.33) (2024-05-15)


### ✨ Features

* **performance:** split font css into separate exit ([83d846e](https://github.com/visitscotland/vs-component-library/commit/83d846e62c6850e95be016665a6f3d20e742efbc))


### 🔖 Others

* **release:** 0.0.33 ([0432dcb](https://github.com/visitscotland/vs-component-library/commit/0432dcb64c9d3ee0d12beac68fe83f3fb50b3f34))

### [0.0.32](https://github.com/visitscotland/vs-component-library/compare/v0.0.31...v0.0.32) (2024-04-30)


### ✨ Features

* **meganav:** if no search, expand nav to fill space ([8e846dc](https://github.com/visitscotland/vs-component-library/commit/8e846dcd13467e52c0d7722ac7eac18e122ed1a4))


### 🔖 Others

* **release:** 0.0.32 ([d111842](https://github.com/visitscotland/vs-component-library/commit/d1118420d3eb32f17bf16c4fbf6f8e1d8cd95893))

### [0.0.31](https://github.com/visitscotland/vs-component-library/compare/v2.0.2...v0.0.31) (2024-04-29)


### 🔖 Others

* **release:** 0.0.31 ([4a13428](https://github.com/visitscotland/vs-component-library/commit/4a13428f07849b3b901a74a2db24c4c336e8eaee))

### [0.0.30](https://github.com/visitscotland/vs-component-library/compare/v0.0.29...v0.0.30) (2024-04-26)


### ✨ Features

* **rebrand:** correct [@component](https://github.com/component) paths ([81dbfdf](https://github.com/visitscotland/vs-component-library/commit/81dbfdfe6850f4c2cad26aeeceaa8b12b6c79363))


### 🔖 Others

* **release:** 0.0.30 ([313104a](https://github.com/visitscotland/vs-component-library/commit/313104a3d8e2d53ec6450f5940909eb222eba019))

### [0.0.29](https://github.com/visitscotland/vs-component-library/compare/v0.0.28...v0.0.29) (2024-04-26)


### ✨ Features

* **tokens:** update border token in description list ([60b6d93](https://github.com/visitscotland/vs-component-library/commit/60b6d93a918d438b11f903ad8d4b0fb7ee332b2f))


### 🔖 Others

* **release:** 0.0.29 ([265a021](https://github.com/visitscotland/vs-component-library/commit/265a021f4f3524a232904e85763f48b094edcdb0))

### [0.0.28](https://github.com/visitscotland/vs-component-library/compare/v0.0.27...v0.0.28) (2024-04-26)


### ✨ Features

* **tokens:** update token names in static link ([15c28be](https://github.com/visitscotland/vs-component-library/commit/15c28bed5c2b561911193ab330e864ef8861783f))


### 🔖 Others

* **release:** 0.0.28 ([2ad2ccf](https://github.com/visitscotland/vs-component-library/commit/2ad2ccfbc1a2a61645769f8aa9f7466f1eeaa58c))

### [0.0.27](https://github.com/visitscotland/vs-component-library/compare/v0.0.26...v0.0.27) (2024-04-24)


### ✨ Features

* **nav:** add mobile static link options ([a4adf8f](https://github.com/visitscotland/vs-component-library/commit/a4adf8f46f97d2ecd930265766ebcf36d7102515))


### 🔖 Others

* **release:** 0.0.27 ([e010c47](https://github.com/visitscotland/vs-component-library/commit/e010c471e48bd3413ce7018cd055c56c703eec09))

### [0.0.26](https://github.com/visitscotland/vs-component-library/compare/v0.0.25...v0.0.26) (2024-04-24)


### ✨ Features

* **export:** add new comp to export index ([5157e26](https://github.com/visitscotland/vs-component-library/commit/5157e26818b1537b7b2abee627ac2bd03a0822ef))


### 🔖 Others

* **release:** 0.0.26 ([d49855d](https://github.com/visitscotland/vs-component-library/commit/d49855dbe9fc4b4b6f1232995c36c46e9100c583))

### [0.0.25](https://github.com/visitscotland/vs-component-library/compare/v2.0.1...v0.0.25) (2024-04-24)


### ✨ Features

* **meganav:** implement Static link ([1111d5a](https://github.com/visitscotland/vs-component-library/commit/1111d5a4ca5dbb3126479d7ada1eedb55dbb5291))


### 🔖 Others

* **release:** 0.0.25 ([8292220](https://github.com/visitscotland/vs-component-library/commit/8292220efef9e2aca7a340b613e11b1792c0fd08))

### [0.0.24](https://github.com/visitscotland/vs-component-library/compare/v0.0.23...v0.0.24) (2024-04-18)


### ✨ Features

* **footer:** add linkedin option to validator ([287362a](https://github.com/visitscotland/vs-component-library/commit/287362aebe598b1cdab26a8618bfb1a832492bb9))
* **meganav:** add static link styles ([208bd9c](https://github.com/visitscotland/vs-component-library/commit/208bd9c1114cde3bba19365417336b19e2a498a8))
* **nav:** add option to remove search ([33a20cf](https://github.com/visitscotland/vs-component-library/commit/33a20cfa343cd92b40cfd5d3145c6b7b184950e6))


### 🔖 Others

* **release:** 0.0.24 ([8ef576a](https://github.com/visitscotland/vs-component-library/commit/8ef576a5f41a5422fac662837ce8c9f7f2d12707))

### [0.0.23](https://github.com/visitscotland/vs-component-library/compare/v0.0.22...v0.0.23) (2024-04-17)


### ✨ Features

* **forms:** revert to json submission ([93a3f2d](https://github.com/visitscotland/vs-component-library/commit/93a3f2d25e3f4f9a0ee25f96e90f1be02ec26a6c))


### 🔖 Others

* **release:** 0.0.23 ([799b83f](https://github.com/visitscotland/vs-component-library/commit/799b83f92468a3f1531b543e9602deddad3000bf))

### [0.0.22](https://github.com/visitscotland/vs-component-library/compare/v0.0.21...v0.0.22) (2024-04-16)


### 🐛 Bug Fixes

* **forms:** aaaaaaaa ([84ae697](https://github.com/visitscotland/vs-component-library/commit/84ae6971a85b2732cb616d046738c409a592721e))


### 🔖 Others

* **release:** 0.0.22 ([0b6b86c](https://github.com/visitscotland/vs-component-library/commit/0b6b86c288bf707aeecbf4c1454d856885d2d5b9))

### [0.0.21](https://github.com/visitscotland/vs-component-library/compare/v0.0.20...v0.0.21) (2024-04-16)


### 🐛 Bug Fixes

* **form:** correct ref to formType ([4790c8f](https://github.com/visitscotland/vs-component-library/commit/4790c8fbbc4b7117608bf2380048c67687fd1531))


### 🔖 Others

* **release:** 0.0.21 ([54f4bad](https://github.com/visitscotland/vs-component-library/commit/54f4badb096aae02ee8a5de012a36765042a520f))

### [0.0.20](https://github.com/visitscotland/vs-component-library/compare/v0.0.19...v0.0.20) (2024-04-16)


### 🐛 Bug Fixes

* **form:** actually send form data ([cf6b358](https://github.com/visitscotland/vs-component-library/commit/cf6b358cd177595118077e4b899070301d49b186))


### 🔖 Others

* **release:** 0.0.20 ([6f599ae](https://github.com/visitscotland/vs-component-library/commit/6f599ae290b157e1703e33fb9ad28dbe260a87ff))

### [0.0.19](https://github.com/visitscotland/vs-component-library/compare/v0.0.18...v0.0.19) (2024-04-16)


### 🐛 Bug Fixes

* **form:** switch to form data ([7522f79](https://github.com/visitscotland/vs-component-library/commit/7522f7925306157437d1a38d0bb5675db5c6cb1d))


### 🔖 Others

* **release:** 0.0.19 ([9542d62](https://github.com/visitscotland/vs-component-library/commit/9542d626178879a7412917dc2002cef32087d3bd))

### [0.0.18](https://github.com/visitscotland/vs-component-library/compare/v0.0.17...v0.0.18) (2024-04-16)


### 🐛 Bug Fixes

* **form:** correct formType path ([e78522c](https://github.com/visitscotland/vs-component-library/commit/e78522c46fe5aa9eae8424dd7074ea5e5b913f07))


### 🔖 Others

* **release:** 0.0.18 ([180159f](https://github.com/visitscotland/vs-component-library/commit/180159ff5087e667caf448e264bb28db90e29019))

### [0.0.17](https://github.com/visitscotland/vs-component-library/compare/v0.0.16...v0.0.17) (2024-04-16)


### ✨ Features

* **forms:** add formType and recaptcha to ajax form ([fca48a0](https://github.com/visitscotland/vs-component-library/commit/fca48a09ceff913243b36458d9726879ebf9b7b7))


### 🔖 Others

* **release:** 0.0.17 ([3c6c49b](https://github.com/visitscotland/vs-component-library/commit/3c6c49b29e1430297ac9d088a00827fd69f2698c))

### [0.0.16](https://github.com/visitscotland/vs-component-library/compare/v0.0.15...v0.0.16) (2024-04-11)


### 🔖 Others

* **release:** 0.0.16 ([5250269](https://github.com/visitscotland/vs-component-library/commit/525026949186be6e4d32f7073227de3043638a19))

### [0.0.15](https://github.com/visitscotland/vs-component-library/compare/v0.0.14...v0.0.15) (2024-04-04)


### ✨ Features

* **input:** add min and max to number type inputs ([a68cd86](https://github.com/visitscotland/vs-component-library/commit/a68cd8683c958694f645121e735a321ac9337d0b))
* **input:** add tests for min max validation ([c2de0f2](https://github.com/visitscotland/vs-component-library/commit/c2de0f2267966e771ca4260d4b61db2f6b9d8a6e))
* **input:** add tests for min/max validation ([ac52e11](https://github.com/visitscotland/vs-component-library/commit/ac52e114325efddc6660f7086bc28343cb2f030f))


### 🔖 Others

* **release:** 0.0.15 ([084dbec](https://github.com/visitscotland/vs-component-library/commit/084dbecf28ec46dd5a88d995458159fe9ee18543))

### [0.0.14](https://github.com/visitscotland/vs-component-library/compare/v0.0.13...v0.0.14) (2024-04-03)


### ✨ Features

* **form:** make form generic ([640f0d2](https://github.com/visitscotland/vs-component-library/commit/640f0d2c9c8460320ae85fa5665db5fd45933fcc))


### 🔖 Others

* **release:** 0.0.14 ([89f5c46](https://github.com/visitscotland/vs-component-library/commit/89f5c4680e3cf58d8448809af221bcbb2f42fccd))

### [0.0.13](https://github.com/visitscotland/vs-component-library/compare/v0.0.12...v0.0.13) (2024-04-02)


### ✨ Features

* **cookies:** add cookie checker to index ([358fd04](https://github.com/visitscotland/vs-component-library/commit/358fd047326507ea4f6ffaacc20c95c830849d3d))


### 🔖 Others

* **release:** 0.0.13 ([57af4d7](https://github.com/visitscotland/vs-component-library/commit/57af4d7056ec3adab76ce5802ca461ec19cffb1d))

### [0.0.12](https://github.com/visitscotland/vs-component-library/compare/v0.0.11...v0.0.12) (2024-04-01)


### 🐛 Bug Fixes

* **stores:** revert fix for computed bug ([e21be1a](https://github.com/visitscotland/vs-component-library/commit/e21be1ad7e6332e2641ae1f5c85ab970398ca0a3))


### 🔖 Others

* **release:** 0.0.12 ([7971961](https://github.com/visitscotland/vs-component-library/commit/797196163f5c684785400f3ad6c29f3b8d64d4eb))

### [0.0.11](https://github.com/visitscotland/vs-component-library/compare/v0.0.10...v0.0.11) (2024-04-01)


### 🐛 Bug Fixes

* **stores:** attempt [#2](https://github.com/visitscotland/vs-component-library/issues/2) ([5f2baec](https://github.com/visitscotland/vs-component-library/commit/5f2baec407d3b4514b1f4757de674388730899ca))


### 🔖 Others

* **release:** 0.0.11 ([5382f83](https://github.com/visitscotland/vs-component-library/commit/5382f83d2ba0f39902d1bcc206d6d660227d2cb4))

### [0.0.10](https://github.com/visitscotland/vs-component-library/compare/v0.0.9...v0.0.10) (2024-04-01)


### 🐛 Bug Fixes

* **stores:** move instantiation to setup ([c73f420](https://github.com/visitscotland/vs-component-library/commit/c73f4202a1ddf507188a3579d4bd1d444cda6278))


### 🔖 Others

* **release:** 0.0.10 ([27a4bcf](https://github.com/visitscotland/vs-component-library/commit/27a4bcf4cc1bd4628d4ba4210aa13dddfae91992))

### [0.0.9](https://github.com/visitscotland/vs-component-library/compare/v0.0.8...v0.0.9) (2024-03-27)


### 🐛 Bug Fixes

* **stores:** refactor out mapstates to remove computed warning ([0eccceb](https://github.com/visitscotland/vs-component-library/commit/0eccceb4d14ea6816e1164ed16252fbd91565be3))


### 🔖 Others

* **release:** 0.0.9 ([b397d81](https://github.com/visitscotland/vs-component-library/commit/b397d81c1a7e8087db23887a520ea3d63897a133))

### [0.0.8](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v0.0.8) (2024-03-26)


### 🔖 Others

* **release:** 0.0.8 ([bdc21d2](https://github.com/visitscotland/vs-component-library/commit/bdc21d27555ff451386b5772c23f0f8930678747))

### [0.0.7](https://github.com/visitscotland/vs-component-library/compare/v0.0.6...v0.0.7) (2024-03-14)


### 🐛 Bug Fixes

* **video:** remove redundant check from computed prop in videocaption ([a9480f7](https://github.com/visitscotland/vs-component-library/commit/a9480f7a039c3b7cad82d355e415616a5ca95a70))


### 🔖 Others

* **release:** 0.0.7 ([25bfe6d](https://github.com/visitscotland/vs-component-library/commit/25bfe6d6494166d5db83243726753c175825c6fd))

### [0.0.6](https://github.com/visitscotland/vs-component-library/compare/v1.2.3...v0.0.6) (2024-03-12)


### ✅ Tests

* **video:** correct id in other comp tests ([b5dccbb](https://github.com/visitscotland/vs-component-library/commit/b5dccbb458e89b677aa23bfa84c3625109dad9d9))
* **video:** correct video mock usage ([608dd46](https://github.com/visitscotland/vs-component-library/commit/608dd46e35498714a24fba2a5dae8b0e454067a4))
* **video:** update video stub name ([202a40d](https://github.com/visitscotland/vs-component-library/commit/202a40d445159e9c67fd7762a0833cadeca335a7))


### 🐛 Bug Fixes

* **all:** resolve merge conflicts ([57879a1](https://github.com/visitscotland/vs-component-library/commit/57879a1b1df5d6e8d2cc7c57fc6e3028ede8ca0c))
* **build:** remove unnecessary transpile ([b0bb066](https://github.com/visitscotland/vs-component-library/commit/b0bb06619fddf4c540be1079920414f6c9ec08d4))
* **case names:** correct case names ([733093d](https://github.com/visitscotland/vs-component-library/commit/733093d94d2fba5b1e4296c520938eb58c9874a4))
* **components:** linting errors ([644139a](https://github.com/visitscotland/vs-component-library/commit/644139a7a1650d03602a74d2f868972f4a2868c9))
* **merge:** more merge errors ([5382a49](https://github.com/visitscotland/vs-component-library/commit/5382a49a47fde2ab37ee1a83ea79b1fa287bb5c4))
* **video:** correct addVideo for new store setup ([971be32](https://github.com/visitscotland/vs-component-library/commit/971be32acffc3e39f3a94d33066d0aee95287c77))
* **vite.config.js:** define process ([e1b15ce](https://github.com/visitscotland/vs-component-library/commit/e1b15cee86d783062b4b25e01ab7555fbc47ae19))


### ✨ Features

* **build:** add process definitions ([2bc5469](https://github.com/visitscotland/vs-component-library/commit/2bc54694e89f0a3c691121e1388d535af30622f3))
* **build:** add theo to build script ([3dc6993](https://github.com/visitscotland/vs-component-library/commit/3dc6993e67634a38a35a94d65207fc2cade86266))
* **build:** load bootstrap styles globally ([6048409](https://github.com/visitscotland/vs-component-library/commit/6048409c144511aca75c8c1162a5a36a57f7fdbc))
* **build:** transpile youtube-vue3 ([5f2c71b](https://github.com/visitscotland/vs-component-library/commit/5f2c71b7cc786f9eb44c8b9c3a8c2b0c4516c9db))
* **build:** update yarn lock ([2aecbcc](https://github.com/visitscotland/vs-component-library/commit/2aecbcc1eaaab0ea9b9cabd1e7776d7e3708fb36))
* **components:** add vite library build ([041bdc9](https://github.com/visitscotland/vs-component-library/commit/041bdc9337ea09b978c2f2d3593d2b92feab188e))
* **components:** export more components ([38109ad](https://github.com/visitscotland/vs-component-library/commit/38109adf885f08c209a50153ed1eb6382b45e25c))
* **git:** restore removed changes from merge ([e7d06e6](https://github.com/visitscotland/vs-component-library/commit/e7d06e618e5ecbdebf252b76e2ac628c2dca738b))
* **image scaler:** move low rez image logic into img ([b5ccf6a](https://github.com/visitscotland/vs-component-library/commit/b5ccf6a482d7334bf42d3ac1d98fe80923deaeb6))
* **image scaling:** move srcset in for all imgs ([ffd4570](https://github.com/visitscotland/vs-component-library/commit/ffd45701553707e4bf9a964cac1a2589c40ccf16))
* **images:** tidy up image mixin move ([6f246ac](https://github.com/visitscotland/vs-component-library/commit/6f246ac05591340a6c68f18bc7868e636600408d))
* **imagewithcaption:** generate uid for caption without nuxt-unfriendly dependency ([4422755](https://github.com/visitscotland/vs-component-library/commit/4422755d0e20cb578a1241d0328eac6dce37895f))
* **meganav:** make meganav item names more generic ([3fc7cfc](https://github.com/visitscotland/vs-component-library/commit/3fc7cfc3ae3f190bd9cf84ebfafb4c73750fd368))
* **release:** change to temporary separate package name ([704ccb5](https://github.com/visitscotland/vs-component-library/commit/704ccb5db959941c73b0cd3aa3f05661151fd362))
* **release:** release with merge from main ([1f9c327](https://github.com/visitscotland/vs-component-library/commit/1f9c327cbdfdaac7e3fb8b6af5e90658b1b35c11))
* **test:** move pinia test setup to base file ([79c47b7](https://github.com/visitscotland/vs-component-library/commit/79c47b7db3d61e47a4cd7f29661349bbd67f2e4f))
* **typescript:** generate declaration files in vite library build ([fd7148e](https://github.com/visitscotland/vs-component-library/commit/fd7148e6b1e267b77f78298276755c8b7c5a51e2))
* **video:** change video export for nuxt ([2825238](https://github.com/visitscotland/vs-component-library/commit/28252384a8e4917b89a63836171810f4320773b4))
* **video:** switch video integration ([9f716d5](https://github.com/visitscotland/vs-component-library/commit/9f716d5c5a4a68d8141fde6cddb80732defc9f60))
* **video:** switch vue 3 youtube embed ([343a947](https://github.com/visitscotland/vs-component-library/commit/343a9477da5c8f33864bfd2b3c14d2c2036c0af9))

### [2.0.7](https://github.com/visitscotland/vs-component-library/compare/v2.0.6...v2.0.7) (2024-05-21)

### [2.0.6](https://github.com/visitscotland/vs-component-library/compare/v2.0.5...v2.0.6) (2024-05-21)


### 🔖 Others

* **.yarnrc.yml:** add npmPublishAccess setting ([e592f91](https://github.com/visitscotland/vs-component-library/commit/e592f91e18583aae4356d63ad669c7355bf25100))

### [2.0.5](https://github.com/visitscotland/vs-component-library/compare/v2.0.4...v2.0.5) (2024-05-16)


### ♻️ Code Refactoring

* **storybook:** auto migrate to storybook 8 ([7fc7108](https://github.com/visitscotland/vs-component-library/commit/7fc7108e2bdfdd633d20bbc5d6b7cf486e1d52cd))
* **storybook:** fix storybook build ([3287531](https://github.com/visitscotland/vs-component-library/commit/328753148e2c3393dd791f51731dc40cb8e326d3))


### ✨ Features

* **chromatic:** add turbosnap to chromatic local build ([7d4913e](https://github.com/visitscotland/vs-component-library/commit/7d4913ea82217c84f7da9bb68d3ceef6f08b6d9c))


### 🏗 Build System

* **chromatic:** add chromatic ignore to card images that change often ([75d2193](https://github.com/visitscotland/vs-component-library/commit/75d21931eccf7834ed28c4a39b5ac379d4188e4f))
* **chromatic:** add chromatic ignore to elements that change often ([abc1752](https://github.com/visitscotland/vs-component-library/commit/abc175253251af85af4e89ecdaf30c286ea071b6))
* **vite:** remove ViteRequireContext ([d746a51](https://github.com/visitscotland/vs-component-library/commit/d746a513a5349b467a21c62ba854fdbb5bc0805f))
* **yarn:** add missing yarn release ([8d8352f](https://github.com/visitscotland/vs-component-library/commit/8d8352fe2684047d6ba6067189e7de043e8903b5))
* **yarn:** removing unused packages ([0e00b7e](https://github.com/visitscotland/vs-component-library/commit/0e00b7e4165842452fb3d8edea1d87b91180fb0b))
* **yarn:** upgrade to yarn 4 and fix dependecy issues ([4fc4e8d](https://github.com/visitscotland/vs-component-library/commit/4fc4e8d6f15627e4d33efa8c6bae43bd29543185))


### 🔖 Others

* **storybook:** upgrade to latest storybook version ([683e596](https://github.com/visitscotland/vs-component-library/commit/683e5961c0f962a15dd626df555e1c06473366b0))
* **vite:** update vite config to mts ([8fe28de](https://github.com/visitscotland/vs-component-library/commit/8fe28def1ee67e17e513577dcb6bd7766be765cb))
* **yarn.lock:** add updated yarn.lock file ([143bdf0](https://github.com/visitscotland/vs-component-library/commit/143bdf01860f06709c3ba6fe5fdc997c3b144c9a))


### 🎨 Styling

* **chromatic:** ignore itinerary and psr elements in chromatic ([d28a9dc](https://github.com/visitscotland/vs-component-library/commit/d28a9dc955058c92b4f4f9c9194be2e01206a9e8))


### 🐛 Bug Fixes

* **autocomplete:** remove unused function ([1a1ce91](https://github.com/visitscotland/vs-component-library/commit/1a1ce91241535dc344fd54a2d22cce163f79c372))
* **autocomplete:** replace non-accessible third-party component ([73a9ee3](https://github.com/visitscotland/vs-component-library/commit/73a9ee3129ee79ecc4120429f13c0a965dac29b3))
* **autocomplete:** replace non-accessible third-party component ([10c45d2](https://github.com/visitscotland/vs-component-library/commit/10c45d244ed3e732d2005c9de13b1591ac259709))
* **marketo:** fix breaking marketo form story ([b9b95c2](https://github.com/visitscotland/vs-component-library/commit/b9b95c287987c0927f57d8b2c57e8a9d28b591aa))


### ✅ Tests

* **autocomplete:** update tests ([b4835db](https://github.com/visitscotland/vs-component-library/commit/b4835dbcc7cba7ca3cf01f5b5844eca10eda02f6))

### [2.0.4](https://github.com/visitscotland/vs-component-library/compare/v2.0.3...v2.0.4) (2024-05-02)


### 🎨 Styling

* **socialshare:** remove dark variant from icon ([f9376c7](https://github.com/visitscotland/vs-component-library/commit/f9376c7703e112def12b950426e89eac708f0215))


### ✅ Tests

* **test:** fix unit test warnings ([1a98aeb](https://github.com/visitscotland/vs-component-library/commit/1a98aebf801851c4aac8f03703bbc60ece283ca7))

### [2.0.3](https://github.com/visitscotland/vs-component-library/compare/v2.0.2...v2.0.3) (2024-04-30)


### 🔖 Others

* **eslint:** run eslint only on staged files ([a818cf1](https://github.com/visitscotland/vs-component-library/commit/a818cf154f10b594f6e1c74dddecd6d23e49311f))
* **prettier:** adding prettier to tidy files ([52ff314](https://github.com/visitscotland/vs-component-library/commit/52ff314bf9c40b86e7582847b455445793f41372))

### [2.0.2](https://github.com/visitscotland/vs-component-library/compare/v2.0.1...v2.0.2) (2024-04-29)


### 🎨 Styling

* **modulewrapper:** add new background theme to module wrapper ([6bcfc51](https://github.com/visitscotland/vs-component-library/commit/6bcfc515b6aee6b0d6bcbca4e4e458c8042f54f4))


### 🔖 Others

* **release:** 2.0.2 ([9a180ea](https://github.com/visitscotland/vs-component-library/commit/9a180ea40da6ebe6ad8cf50939725f9b1261ab19))

### [2.0.2](https://github.com/visitscotland/vs-component-library/compare/v2.0.1...v2.0.2) (2024-04-29)


### 🎨 Styling

* **imagewithcaption:** rebrand of imagewithcaption component colours ([27ace5a](https://github.com/visitscotland/vs-component-library/commit/27ace5a66327d96cfdbccc80e56212d858d5c19b))
* **itinerary:** rebrand itinerary colours ([56f87a5](https://github.com/visitscotland/vs-component-library/commit/56f87a5c873a7367ecee7729c6c28b55448cd028))
* **list:** rebrand lists colours ([514e8e3](https://github.com/visitscotland/vs-component-library/commit/514e8e32f9824efa6f3f6909dd7a0e1ca4e9bcbc))
* **map:** rebrand map component colours ([3a00e1c](https://github.com/visitscotland/vs-component-library/commit/3a00e1c8557057f1f8d48e4ee0e3dec7ee10bceb))
* **map:** rebranding map component colour ([a4c6c57](https://github.com/visitscotland/vs-component-library/commit/a4c6c572c0f4844675ea5c3bfbc8b85436dad000))
* **megalinks:** rebrand megalinks colours ([6d11b94](https://github.com/visitscotland/vs-component-library/commit/6d11b94f590880f9f7e4e5fb1455f34dc5996c3a))
* **megalinks:** rebrand megalinks colours removing dark theme ([803ddaf](https://github.com/visitscotland/vs-component-library/commit/803ddaf9cf671a8dea8ca0aea2e02810db1325bc))
* **meganav:** rebrand meganav colours ([b560103](https://github.com/visitscotland/vs-component-library/commit/b560103dccbc03c5287a5f9e90fe41a45db6ac2b))
* **meganav:** tweaks to meganav rebrand colours ([3d91527](https://github.com/visitscotland/vs-component-library/commit/3d9152738eef580d943a6df931da9fbe2cf44aa0))
* **product search:** rebrand product search colours ([3345082](https://github.com/visitscotland/vs-component-library/commit/33450821967b3bae26a4448d834bf15cc0555470))
* **radiobutton:** rebrand radio button ([fb4f4de](https://github.com/visitscotland/vs-component-library/commit/fb4f4de8db8c19434600c4eb1f21b32446a63450))
* **site-search:** rebrand sitesearch colours ([096c680](https://github.com/visitscotland/vs-component-library/commit/096c680b347e0468d8bdd8ce99c59643f1b2ce8a))
* **sitesearch:** finish rebranding sitesearch button ([670d153](https://github.com/visitscotland/vs-component-library/commit/670d1536507b9891eb151a008aef00d050b2b121))
* **ski scotland:** rebrand ski scotland components ([42d261c](https://github.com/visitscotland/vs-component-library/commit/42d261ca1943c56719d1eb48ca672b91244bffb6))
* **stories:** tidy up warning, imagewithcaption and article stories ([7c5249d](https://github.com/visitscotland/vs-component-library/commit/7c5249d405f427b0b0cc815af134341a79a66693))
* **stretchedlink:** remove commented out code ([d99e9ce](https://github.com/visitscotland/vs-component-library/commit/d99e9ced43c5ca7312a38a90f6c0af8cac470383))
* **summarybox:** next round of rebranded components ([68ed90a](https://github.com/visitscotland/vs-component-library/commit/68ed90ab19ed89219fe78c2137b8af422b67b79a))
* **svg:** fix svg fill in stories ([0374fdc](https://github.com/visitscotland/vs-component-library/commit/0374fdc9c1323b20663818893d7096b5f9650aef))
* **tags:** last of the colour rebrand ([5addd17](https://github.com/visitscotland/vs-component-library/commit/5addd179de4e53e75e91e39cb8540980addd3214))
* **tokens:** add accent tokens ([3458f02](https://github.com/visitscotland/vs-component-library/commit/3458f02ebebe2ecf791f45305bd3e37c031652e1))
* **tokens:** removing old tokens ([4706e42](https://github.com/visitscotland/vs-component-library/commit/4706e423c2643a7a6302f52fcdb4f60d033ca9eb))
* **warning:** remove theme from warning component ([c99e8f4](https://github.com/visitscotland/vs-component-library/commit/c99e8f4970379ec38a98559f7cb1c9177034cb7a))


### ✅ Tests

* **megalinks:** remove test for removed theme prop ([ea1df9b](https://github.com/visitscotland/vs-component-library/commit/ea1df9b5a1630cc752c9e8384aa55a29aa41c7b9))
* **site-search:** fix breaking site-search test ([996db96](https://github.com/visitscotland/vs-component-library/commit/996db960b7543fd7b9fa44ff79f6a3947426c6da))
* **togglebutton:** fix togglebutton unit tests ([3e14616](https://github.com/visitscotland/vs-component-library/commit/3e14616e5283756f87c8344b53821a4339d7ccf3))
* **warning:** remove failing warning tests ([481dd2a](https://github.com/visitscotland/vs-component-library/commit/481dd2a67535fceb7c34d66196dabfc4772b1d2b))

### [1.2.7](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.7) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.9](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.9) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.8](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.8) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.7](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.7) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.8](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.8) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.7](https://github.com/visitscotland/vs-component-library/compare/v1.2.6...v1.2.7) (2024-04-19)


### 🐛 Bug Fixes

* **datalayermixin.js:** map GTMData property to template property ([1c99679](https://github.com/visitscotland/vs-component-library/commit/1c996793bf7b227d137d5e71955ed5f68992dc6d))

### [1.2.6](https://github.com/visitscotland/vs-component-library/compare/v1.2.5...v1.2.6) (2024-03-25)


### ♻️ Code Refactoring

* **product search:** condense margin css ([23f23f8](https://github.com/visitscotland/vs-component-library/commit/23f23f884178130435793649e8ba9fa4020d880c))
* **product search:** move class logic to a computed variable ([71c9d28](https://github.com/visitscotland/vs-component-library/commit/71c9d28fe4f4cb6bbe08ce65bd67fbce62fef2d6))


### 🐛 Bug Fixes

* **product search:** add missing label ([296787c](https://github.com/visitscotland/vs-component-library/commit/296787c3d6b18530f64a348538884bae5bf55833)), closes [#188](https://github.com/visitscotland/vs-component-library/issues/188)
* **product search:** trim location value ([3045196](https://github.com/visitscotland/vs-component-library/commit/3045196f0f7704d0fe427b7c002a2ecac3c6194b))


### 🔖 Others

* **release:** 1.2.6 ([bf736ad](https://github.com/visitscotland/vs-component-library/commit/bf736ade4083b37875e9837f2d1cf339a691690a))

### [1.2.5](https://github.com/visitscotland/vs-component-library/compare/v1.2.4...v1.2.5) (2024-03-25)


### 🎨 Styling

* **stories:** add more no javascript stories and fix small ui bugs ([e2ca64d](https://github.com/visitscotland/vs-component-library/commit/e2ca64dc3ecbfb308e98bfaf87e738065a4df405))


### ✨ Features

* **storybook:** add datalayer watcher addon to test datalayer events ([7907e2c](https://github.com/visitscotland/vs-component-library/commit/7907e2cd1be0c1c6756e131d826f5aaee239c171))


### 🐛 Bug Fixes

* **data-layer-templates.js:** incorrect datalayer key ([fbed052](https://github.com/visitscotland/vs-component-library/commit/fbed0526d7047439535719fd7bf6348110254c92)), closes [#141](https://github.com/visitscotland/vs-component-library/issues/141)
* **footer:** remove footer story breaking chromatic build ([b880aec](https://github.com/visitscotland/vs-component-library/commit/b880aec5d22015334055111f475ea242ef982365))
* **product search:** add missing label ([296787c](https://github.com/visitscotland/vs-component-library/commit/296787c3d6b18530f64a348538884bae5bf55833)), closes [#188](https://github.com/visitscotland/vs-component-library/issues/188)
* **product search:** trim autocomplete inputs ([f4165f0](https://github.com/visitscotland/vs-component-library/commit/f4165f06d41a156e8349f4a46d93cd2a9957cd20)), closes [#317](https://github.com/visitscotland/vs-component-library/issues/317)


### ♻️ Code Refactoring

* **product search:** condense margin css ([23f23f8](https://github.com/visitscotland/vs-component-library/commit/23f23f884178130435793649e8ba9fa4020d880c))
* **product search:** move class logic to a computed variable ([71c9d28](https://github.com/visitscotland/vs-component-library/commit/71c9d28fe4f4cb6bbe08ce65bd67fbce62fef2d6))


### 🔖 Others

* **release:** 1.2.5 ([45e4b15](https://github.com/visitscotland/vs-component-library/commit/45e4b15478a15ef638edadb75cac45fb789e64c9))

### [1.2.4](https://github.com/visitscotland/vs-component-library/compare/v0.0.7...v1.2.4) (2024-03-19)


### ✨ Features

* **font awesome:** add all font awesome icons ([f8ed056](https://github.com/visitscotland/vs-component-library/commit/f8ed05671fe7c1d016ea5a83879784ca140b4850)), closes [#81](https://github.com/visitscotland/vs-component-library/issues/81)
* **footer:** updated twitter icon ([8a0f473](https://github.com/visitscotland/vs-component-library/commit/8a0f473d25a2eeff24949397a4a36515275f6f62)), closes [#81](https://github.com/visitscotland/vs-component-library/issues/81)
* **social share:** update twitter icon ([65c43bc](https://github.com/visitscotland/vs-component-library/commit/65c43bc8b9a9f473a9e021c46990d2d66da7860d)), closes [#81](https://github.com/visitscotland/vs-component-library/issues/81)


### ♻️ Code Refactoring

* **font awesome:** remove unused scss and font files ([0c823a3](https://github.com/visitscotland/vs-component-library/commit/0c823a3f326471aab8b11d246d24e1ec439d6197))
* **footer social item:** remove old twitter icon styles ([c2d7f83](https://github.com/visitscotland/vs-component-library/commit/c2d7f83051f3a6df144e13be31341dbc143f8b9f))
* **social share item:** remove old twitter icon styles ([3a9ae9a](https://github.com/visitscotland/vs-component-library/commit/3a9ae9a74c1bd02f5aec3420c6520c29802dad82))


### ✅ Tests

* **social share item:** update test ([cb0e472](https://github.com/visitscotland/vs-component-library/commit/cb0e47276cb80a5092bc837ec8a93b93bcd282d2))


### 🎨 Styling

* **stories:** add in missing no-js stories and fix occasional ui bug ([313eb7c](https://github.com/visitscotland/vs-component-library/commit/313eb7c8b8d2397518901a57126c6e33021e11d6))


### 🔖 Others

* **release:** 1.2.4 ([892d5a4](https://github.com/visitscotland/vs-component-library/commit/892d5a4d508ebbbecbe8e1596809739d4ece8086))

### [1.2.3](https://github.com/visitscotland/vs-component-library/compare/v1.2.2...v1.2.3) (2024-03-11)


### 🔖 Others

* **release:** 1.2.3 ([933ff73](https://github.com/visitscotland/vs-component-library/commit/933ff73431f293fbf31ac1581db5179d81118c2c))

### [1.2.2](https://github.com/visitscotland/vs-component-library/compare/v1.2.1...v1.2.2) (2024-03-08)


### ✅ Tests

* **map with sidebar:** add new tests ([b5ba1d6](https://github.com/visitscotland/vs-component-library/commit/b5ba1d680a8a2afd3d829169dbf60279b30046c0))
* **map with sidebar:** add tests for new button ([c20ad0e](https://github.com/visitscotland/vs-component-library/commit/c20ad0e5f6575f0d0d570056ad236bc9de2da4f7))


### ✨ Features

* **article:** add video article story ([05803e7](https://github.com/visitscotland/vs-component-library/commit/05803e7e7176be278b16dcc015f109dd137bfac7))
* **cookies:** adds decorators to turn cookies on/off ([94fb43a](https://github.com/visitscotland/vs-component-library/commit/94fb43af59110a28e79e21d687839e6065c35145))
* **map with side bar:** replace card back button with menu button ([e477637](https://github.com/visitscotland/vs-component-library/commit/e4776379370e4a43edf660c4c2fbacd92eeb2401)), closes [#308](https://github.com/visitscotland/vs-component-library/issues/308)
* **video:** add missing video stories ([37cd10f](https://github.com/visitscotland/vs-component-library/commit/37cd10f9384dd313805d79ed5ef5f570dca05dc1))


### 🎨 Styling

* **video:** fix video ui with caption ([83da976](https://github.com/visitscotland/vs-component-library/commit/83da976ad80406cc3fd5a3189a84136e253da411))


### 🐛 Bug Fixes

* **article:** fix article cover video story syntax ([1aadbd6](https://github.com/visitscotland/vs-component-library/commit/1aadbd61c240de051f91e8f2f909674ad7cdb76f))
* **article:** fix article video and add cover video story ([1d4f4c8](https://github.com/visitscotland/vs-component-library/commit/1d4f4c82f8dd47646727d3500cfc3d3c635ad0e6))
* **bootstrap5:** prevent smooth autoscroll for selenium ([873d669](https://github.com/visitscotland/vs-component-library/commit/873d66912e4c99ec58fca59d9fd26e0dd20c54ca))
* **imagewithcaption:** hide toggle only for image with video ([8f45c2f](https://github.com/visitscotland/vs-component-library/commit/8f45c2f039e03cbfc302fb005b38d84f3cbe760a))
* **map with sidebar:** reset filters when closing card ([b25cd3c](https://github.com/visitscotland/vs-component-library/commit/b25cd3c99a355c5bb6b4ed7bbab4459eea95713d)), closes [#309](https://github.com/visitscotland/vs-component-library/issues/309) [#310](https://github.com/visitscotland/vs-component-library/issues/310)
* **pageintro:** fix hero video in page intro ([b61bf66](https://github.com/visitscotland/vs-component-library/commit/b61bf668292ffafbc312845be052ea793971e14c))


### 🔖 Others

* **release:** 1.2.2 ([ea8bae1](https://github.com/visitscotland/vs-component-library/commit/ea8bae1fe5e40da893ac6f314b2ca241e25506cf))

### [1.2.3](https://github.com/visitscotland/vs-component-library/compare/v1.2.2...v1.2.3) (2024-03-11)


### ✅ Tests

* **map with sidebar:** add new tests ([b5ba1d6](https://github.com/visitscotland/vs-component-library/commit/b5ba1d680a8a2afd3d829169dbf60279b30046c0))
* **map with sidebar:** add tests for new button ([c20ad0e](https://github.com/visitscotland/vs-component-library/commit/c20ad0e5f6575f0d0d570056ad236bc9de2da4f7))


### ✨ Features

* **article:** add video article story ([05803e7](https://github.com/visitscotland/vs-component-library/commit/05803e7e7176be278b16dcc015f109dd137bfac7))
* **cookies:** adds decorators to turn cookies on/off ([94fb43a](https://github.com/visitscotland/vs-component-library/commit/94fb43af59110a28e79e21d687839e6065c35145))
* **map with side bar:** replace card back button with menu button ([e477637](https://github.com/visitscotland/vs-component-library/commit/e4776379370e4a43edf660c4c2fbacd92eeb2401)), closes [#308](https://github.com/visitscotland/vs-component-library/issues/308)
* **video:** add missing video stories ([37cd10f](https://github.com/visitscotland/vs-component-library/commit/37cd10f9384dd313805d79ed5ef5f570dca05dc1))


### 🎨 Styling

* **video:** fix video ui with caption ([83da976](https://github.com/visitscotland/vs-component-library/commit/83da976ad80406cc3fd5a3189a84136e253da411))


### 🐛 Bug Fixes

* **article:** fix article cover video story syntax ([1aadbd6](https://github.com/visitscotland/vs-component-library/commit/1aadbd61c240de051f91e8f2f909674ad7cdb76f))
* **article:** fix article video and add cover video story ([1d4f4c8](https://github.com/visitscotland/vs-component-library/commit/1d4f4c82f8dd47646727d3500cfc3d3c635ad0e6))
* **imagewithcaption:** hide toggle only for image with video ([8f45c2f](https://github.com/visitscotland/vs-component-library/commit/8f45c2f039e03cbfc302fb005b38d84f3cbe760a))
* **map with sidebar:** reset filters when closing card ([b25cd3c](https://github.com/visitscotland/vs-component-library/commit/b25cd3c99a355c5bb6b4ed7bbab4459eea95713d)), closes [#309](https://github.com/visitscotland/vs-component-library/issues/309) [#310](https://github.com/visitscotland/vs-component-library/issues/310)
* **pageintro:** fix hero video in page intro ([b61bf66](https://github.com/visitscotland/vs-component-library/commit/b61bf668292ffafbc312845be052ea793971e14c))

### [1.2.2](https://github.com/visitscotland/vs-component-library/compare/v1.2.1...v1.2.2) (2024-03-08)


### 🐛 Bug Fixes

* **bootstrap5:** prevent smooth autoscroll for selenium ([873d669](https://github.com/visitscotland/vs-component-library/commit/873d66912e4c99ec58fca59d9fd26e0dd20c54ca))

### [1.2.1](https://github.com/visitscotland/vs-component-library/compare/v1.2.0...v1.2.1) (2024-02-27)


### ✨ Features

* **map with sidebar:** add icon to map menu button ([1773188](https://github.com/visitscotland/vs-component-library/commit/1773188b47aa65e60e6ca9404770d9d4e0f43643)), closes [#307](https://github.com/visitscotland/vs-component-library/issues/307)


### 🐛 Bug Fixes

* **button.vue:** icon position ([ec84b3b](https://github.com/visitscotland/vs-component-library/commit/ec84b3b37fa7e25a9ec07b19527c42b091bf83e2)), closes [#307](https://github.com/visitscotland/vs-component-library/issues/307)
* **button:** small icon position ([e540eb3](https://github.com/visitscotland/vs-component-library/commit/e540eb36226036b278b4b71826affda570315be2)), closes [#307](https://github.com/visitscotland/vs-component-library/issues/307)

## [1.2.0](https://github.com/visitscotland/vs-component-library/compare/v1.1.7...v1.2.0) (2024-02-22)


### ♻️ Code Refactoring

* **_bootstrap-overrides.scss:** set body-emphasis var to color-base-text ([5961de2](https://github.com/visitscotland/vs-component-library/commit/5961de28d2eab450b9b5ff80c0f5bfe5d6a9b92c))
* **_global-styles.css:** add and hr rule to override new bootstrap default opacity ([3b703da](https://github.com/visitscotland/vs-component-library/commit/3b703da0dac89f9bd4f5b9e98cd33f6beba36eba))
* **bootstrap voverrides:** reset new spacer defaults from BS5 ([ecb4175](https://github.com/visitscotland/vs-component-library/commit/ecb417538587f53bcda68ba763d13f3e7c4ba74b))
* **bootstrap-overrides.scss:** override new default custom property ([8c78b83](https://github.com/visitscotland/vs-component-library/commit/8c78b8387918bc555747ae6347605f3c6e7c3ca5))
* **bootstrap:** include missing Bootstrap 5 files ([db47ece](https://github.com/visitscotland/vs-component-library/commit/db47eced98bd803784c201659e7dae723569ebe2))
* **bootstrrap overrides:** enable negative margin utility classes ([90021c8](https://github.com/visitscotland/vs-component-library/commit/90021c8a87baa79deba7ca76e95a4e83e837ff87))
* **col.vue and  carousel.vue:** remove position util from col and apply in .slider ([b06a772](https://github.com/visitscotland/vs-component-library/commit/b06a77211a9a273fe8ac8d1502d1bf3b615e6885))
* **gutters and  coreestyles:** update gutter utils for brevity per BS5 and import containers ([29d3f0f](https://github.com/visitscotland/vs-component-library/commit/29d3f0f81746a474cedf16ecc381962871553bac))
* **input.vue:** reduce line-height to override BS default value ([f8b1c88](https://github.com/visitscotland/vs-component-library/commit/f8b1c88c0e2d6aa8d4d492c66f1a56d4ee2d4fb7))
* **media-breakpoint mixin:** increase 2nd arg of -between() and arg of -down() to next width up ([3289bd5](https://github.com/visitscotland/vs-component-library/commit/3289bd59a56ab59fe739438a0366a5558ba07ab4))
* **media-breakpoint-down mixin:** move param up one level per BS5 ([17875c8](https://github.com/visitscotland/vs-component-library/commit/17875c81de60ec709967aeade58f046f96581955))
* **meganav  component; pageintro story:** add position-relative to columns ([1fa22d6](https://github.com/visitscotland/vs-component-library/commit/1fa22d644005a0d193f5c0590213971cb91b66dc))
* **overrides and story:** remove util in pattern story, override new BS5 default ([6235529](https://github.com/visitscotland/vs-component-library/commit/6235529454ec9c99988748b76deff5a72ed9e6a0))
* **panel.vue:** set padding per previous baseline ([3374277](https://github.com/visitscotland/vs-component-library/commit/33742779417532d608a4928707e7a21edfc0d5d3))
* **radiobutton:** override 0.125rem margin bottom with 0 ([cfee12d](https://github.com/visitscotland/vs-component-library/commit/cfee12dbc07f8ce033e2a7ade63a0d11acfed683))
* **select.vue:** override new bootstrap bg image icon ([8ee322e](https://github.com/visitscotland/vs-component-library/commit/8ee322e0db5e93e945ce0f5ea0d73ade724a0007))
* **sitesearch.vue:** apply visually-hidden class - updated from sr-only BS change ([5a1eb99](https://github.com/visitscotland/vs-component-library/commit/5a1eb993712e66a883ef33ee4581603728542abb))
* **sr-only:** replace sr-only with visually-hidden per BS5 ([4daa1a4](https://github.com/visitscotland/vs-component-library/commit/4daa1a41f67d0e90933985692c7d6429ed90df3b))
* **summaryboxdistancelistitem.vue:** auto margins l/r ([29e8b7c](https://github.com/visitscotland/vs-component-library/commit/29e8b7cc197d8bd28bebaee48134b67982cb15df))
* **tabelheadercell.vue:** set border:0 to preserve snapshot styles ([1c211d4](https://github.com/visitscotland/vs-component-library/commit/1c211d49a9af6ec59bcb70943b2ef3327dc30149))
* **table.vue:** remove padding from th > span to correct alignment bug ([e51e360](https://github.com/visitscotland/vs-component-library/commit/e51e360b2c632844bbbd93861397fb4ab5ad9dd9))
* **tabledatacell and tableheadercell:** adapt default value and styles to match baseline UI ([dbb39a3](https://github.com/visitscotland/vs-component-library/commit/dbb39a3568b12892e5b585124a95dc975d78dafb))
* **tabs.vue:** replace some styles removed in BS5 ([2cceca6](https://github.com/visitscotland/vs-component-library/commit/2cceca6c7fd61dfb7bea4d903186511fd373af6b))
* **utility classes:** replace left/right paradigm with start/end paradigm per BS5 ([b3b1543](https://github.com/visitscotland/vs-component-library/commit/b3b1543fd7fc7f2523ca7ff17795843b4494f80c))
* various small tweaks to fix layout / value discrepancies ([12f528a](https://github.com/visitscotland/vs-component-library/commit/12f528a41f71a58cd6c6822ef914291a8bc80f2f))
* **vscol:** add position-relative utiliy to replace property removed in BS5 ([21d0d93](https://github.com/visitscotland/vs-component-library/commit/21d0d93ffd9b0e55942bd0657b396079843c148d))
* **vsradiobutton:** fix layout bug introduced by BS5 ([d3747a5](https://github.com/visitscotland/vs-component-library/commit/d3747a56c41a2fa46bccc7ab80f88c7a8b2c11fc))


### 🎨 Styling

* **description-list:** fixing layout for description list ([16c5293](https://github.com/visitscotland/vs-component-library/commit/16c529384fe971860572d53c92aa7b26b59498be))
* **description-list:** fixing layout for description list ([c4e911f](https://github.com/visitscotland/vs-component-library/commit/c4e911fe76032643571dd4accdbe54b03b823138))


### ✅ Tests

* add accessibility tests for image with caption ([456855f](https://github.com/visitscotland/vs-component-library/commit/456855f5183a9849b35adeaf93192874e9c08949))
* adds next round of accessibility tests ([8102ce4](https://github.com/visitscotland/vs-component-library/commit/8102ce44b0796715eaca590a5eadc91102fc61bf))
* **description list:** fixing description list to be accessible and remove unused components ([89de9a5](https://github.com/visitscotland/vs-component-library/commit/89de9a5b214f3a210328fcb6fccc98790b7145d1))
* fix description list unit test ([a1a514c](https://github.com/visitscotland/vs-component-library/commit/a1a514c8d4fce070c3f1628597f41dc62d5ba062))
* fixing layout for description list ([7f2e27b](https://github.com/visitscotland/vs-component-library/commit/7f2e27beaeb0a2efb1993297c4bc352e24d6c83d))
* **jest:** add jest-axe to test ([576e2f6](https://github.com/visitscotland/vs-component-library/commit/576e2f6a1a31dd3179f3231811765754a6438a80))
* remove console log ([a1aaad5](https://github.com/visitscotland/vs-component-library/commit/a1aaad5d040c27c7ce37c81cc1cc9bc63fd048a9))
* **test:** add first round of accessibility tests ([953480c](https://github.com/visitscotland/vs-component-library/commit/953480c2597d34d6ff01b223964946089432ed32))
* **test:** adds next batch of accessibility tests ([fa0b68a](https://github.com/visitscotland/vs-component-library/commit/fa0b68aab865eb40c2012ef455d2c170f6081c63))
* **test:** adds next round of accessibility tests ([beccec1](https://github.com/visitscotland/vs-component-library/commit/beccec17456427f227a48091f78f5fe84f87afc2))
* **tests:** adds next round of accessibility tests ([f47f039](https://github.com/visitscotland/vs-component-library/commit/f47f0397c195fde223a808b6f2dc1a3fa4e10a1e))
* **tests:** last batch of accessibility tests ([7fbe18c](https://github.com/visitscotland/vs-component-library/commit/7fbe18c0d52e2e0e538932c7f5931d309c8c83c6))
* **tests:** next batch of accessibility tests added ([b73e8b9](https://github.com/visitscotland/vs-component-library/commit/b73e8b9f408ce3589a571cd8ea5b573e1ba46ba0))


### 🐛 Bug Fixes

* **bootstrap:** fix layout issues after bootstrap migration on number input and description list ([b4cefcb](https://github.com/visitscotland/vs-component-library/commit/b4cefcbc96c4f57685bf431a0a2782767ec19a85))
* **bootstrap:** fixing various layout issues ([77f11b2](https://github.com/visitscotland/vs-component-library/commit/77f11b286ca3f17700b3d8146f17ff7ef1a87d28))
* **carousel:** fix carousel layout ([8766433](https://github.com/visitscotland/vs-component-library/commit/8766433edf52de8fec8a54bc5af413f536d71641))
* **input:** fix input focus states ([8a76cf5](https://github.com/visitscotland/vs-component-library/commit/8a76cf59fc02e2f3146b405e577afe1c63972848))
* **nav:** fix bootstrap 5 issues in the nav ([5c381c6](https://github.com/visitscotland/vs-component-library/commit/5c381c621a352f91c5969923db726bdb03394ea6))
* **radio:** fix radio button text alignment ([d095955](https://github.com/visitscotland/vs-component-library/commit/d09595545fd0dc90587c89b8b71aed94f4ee60aa))
* **search:** fix missing label in search bar ([0ec4d8e](https://github.com/visitscotland/vs-component-library/commit/0ec4d8e47bbd3ac39ce5f37938db673aa58f6ae3))

### [1.1.7](https://github.com/visitscotland/vs-component-library/compare/v1.1.6...v1.1.7) (2024-01-11)


### 🐛 Bug Fixes

* **img:** change generic-lqip image to jpg ([b64c98a](https://github.com/visitscotland/vs-component-library/commit/b64c98a4127492c84ec9a6b72b8dcb764d2456de))
* **img:** fix css image url in img.vue ([070095e](https://github.com/visitscotland/vs-component-library/commit/070095e76beaa65564eb1bd06eeb00332d67ffea))
* **psw:** adds refine date for dates except accommodation ([eef08ac](https://github.com/visitscotland/vs-component-library/commit/eef08aca942a4e1157400fc808d59119ae07a777))

### [1.1.6](https://github.com/visitscotland/vs-component-library/compare/v1.1.5...v1.1.6) (2024-01-08)


### ✨ Features

* **form:** move aria description logic into mixin for all inputs ([b27e850](https://github.com/visitscotland/vs-component-library/commit/b27e850d240cc6fff023cbce1e68e41eefc29cbc))


### ♻️ Code Refactoring

* **components:** fix file paths after directory move ([fe90bbe](https://github.com/visitscotland/vs-component-library/commit/fe90bbe79f25ae2f79c3b6103e76c37eb32523f2))
* **components:** move all components into one folder and remove Elements and Patterns ([88fc86c](https://github.com/visitscotland/vs-component-library/commit/88fc86c055d3739d59f5242a66ac039d9dc782ce))
* **stories:** remove element and patterns folders from stories ([d1a691a](https://github.com/visitscotland/vs-component-library/commit/d1a691aa1534f287bd98a13fa31dca72ee353d9d))
* **stories:** remove elements and patterns from Storybook ([eece70d](https://github.com/visitscotland/vs-component-library/commit/eece70d20d5f95810a450523481c7d5131c58856))


### 🐛 Bug Fixes

* **components:** fix file paths ([cd30365](https://github.com/visitscotland/vs-component-library/commit/cd30365307cabfea88736c6bd9bbb9341c949f5a))
* **map:** fix map test data urls so they work in chromatic ([85649aa](https://github.com/visitscotland/vs-component-library/commit/85649aada3920f98298384e6038682a2d3fe9486))
* **modal:** fix file path in modal story ([e30ae4c](https://github.com/visitscotland/vs-component-library/commit/e30ae4cc1e96f8a1c0b16d46809e96971f54cc86))
* **psw:** update accommodation to have correct date names ([d5bb7a7](https://github.com/visitscotland/vs-component-library/commit/d5bb7a758f13bf26d593b30ea1f7062a6f850155))


### ✅ Tests

* **psw:** add tests for new selectedProd prop in dateRange ([40afc3c](https://github.com/visitscotland/vs-component-library/commit/40afc3cedb24d1dddcb4551914f3e6351404e232))

### [1.1.5](https://github.com/visitscotland/vs-component-library/compare/v1.1.4...v1.1.5) (2023-11-27)


### ✨ Features

* **carbon calculator:** correct heading hierarchy ([be08d06](https://github.com/visitscotland/vs-component-library/commit/be08d06d397d6f8c70a42a3bf9fbab506cc6ffc5))
* **carbon calculator:** remove cat heading if empty ([9229f5e](https://github.com/visitscotland/vs-component-library/commit/9229f5e66442b403919da57ad3d09b14c7369b7b))
* **form:** stop aria description pointing to missing hint ([ed48232](https://github.com/visitscotland/vs-component-library/commit/ed482329fd2d0f9175fca8f6b306db0a564143c1))
* **progress bar:** add aria labelled by for pointing to progress label ([4657bac](https://github.com/visitscotland/vs-component-library/commit/4657bac03a4e231e491ac59d5f7b8ab3ecd44414))


### 🐛 Bug Fixes

* **carbon calculator:** correct heading levels for unicorn ([2ca327b](https://github.com/visitscotland/vs-component-library/commit/2ca327b89fc73dc296eb34f46ec27cba5b856b94))
* **carousel:** ensure off screen text links are fully disabled in carousel ([df4ee54](https://github.com/visitscotland/vs-component-library/commit/df4ee5457921a5485188fbb559aa126205352616))
* **datalayer:** fix dataLayer not being defined error ([c8d4685](https://github.com/visitscotland/vs-component-library/commit/c8d46853ad9f004905cd7695f359cad0ea4b5cfe))
* **datalayer:** fix timeout issue for datalayer on meganav ([5f55931](https://github.com/visitscotland/vs-component-library/commit/5f55931f54df0ba100ae165c769369986293c741))


### 🔖 Others

* **release:** 1.1.5 ([b2b9a64](https://github.com/visitscotland/vs-component-library/commit/b2b9a64dda5e25747a9bbc78bc4c733648e3597e))
* **release:** 1.1.5 ([1655640](https://github.com/visitscotland/vs-component-library/commit/1655640a433ccbdae0aeaee413c105c481714659))

### [1.1.4](https://github.com/visitscotland/vs-component-library/compare/v1.1.5...v1.1.4) (2023-11-23)

### [1.1.3](https://github.com/visitscotland/vs-component-library/compare/v1.1.0...v1.1.3) (2023-11-23)


### ♻️ Code Refactoring

* **map:** remove old itinerary map ([802b8d2](https://github.com/visitscotland/vs-component-library/commit/802b8d2d513007856ae64c3a7e0c06a15ffe146c))


### ✅ Tests

* **modal:** bypass mount checks for jest environment ([ab8d368](https://github.com/visitscotland/vs-component-library/commit/ab8d3680ed4f30b25a0376360b62ede41c280c15))


### 🔖 Others

* **release:** 1.1.1 ([bc15626](https://github.com/visitscotland/vs-component-library/commit/bc15626acf1bf434c16dacb82483dc3667994137))
* **release:** 1.1.2 ([10a9209](https://github.com/visitscotland/vs-component-library/commit/10a920988b4964e86ef5357c42e8888d5bc53966))


### 🐛 Bug Fixes

* **carbon calculator:** correct analytics mixin path ([16df17a](https://github.com/visitscotland/vs-component-library/commit/16df17a6f96dcac2fad87e78d907217b31dd9e4b))
* **carbon calculator:** remove deprecated per day tests ([fc930bd](https://github.com/visitscotland/vs-component-library/commit/fc930bd7ae3b0b33e3c29f49462e909f72f1ef36))
* **map:** fix map API data not displaying ([e14bac4](https://github.com/visitscotland/vs-component-library/commit/e14bac4889708fe5c66edc27f6826231c057751f))
* **map:** fix submit button being disabled when filters still selected ([a04ed4f](https://github.com/visitscotland/vs-component-library/commit/a04ed4f9b82eb6533c0179bc894b9feeb0af888a))
* **modal:** don't attempt to render the modal component in ssr ([b91dd33](https://github.com/visitscotland/vs-component-library/commit/b91dd332954bf24707921d4dd7f69ae99649fa98))
* **productsearchembed:** add analytics to ProductSearchEmbed component ([7b5fcde](https://github.com/visitscotland/vs-component-library/commit/7b5fcdeaaa28f88adc207a2181f73180e5a3ee89))


### 🎨 Styling

* **map:** fix margin between label and icon ([9c2545e](https://github.com/visitscotland/vs-component-library/commit/9c2545e9d704717b868b025819a2f7dc8b4e588b))


### ✨ Features

* **carbon calculator:** add new icon and style carbon unicorn box ([01e7d86](https://github.com/visitscotland/vs-component-library/commit/01e7d8622712483ea0271a6a33c88e055787a139))
* **carbon calculator:** correct vertical spacing throughout calculator ([dd46b56](https://github.com/visitscotland/vs-component-library/commit/dd46b5686057f7b6cf30cc0544fccd4e72e04f5b))
* **carbon calculator:** ensure non-en-gb languages see carbon unicorn ([30b9092](https://github.com/visitscotland/vs-component-library/commit/30b9092d186514673ff9c5b95e7eee5358cddb31))
* **carbon calculator:** make localised number decimal count consistent ([318f402](https://github.com/visitscotland/vs-component-library/commit/318f402c92020b99b4d18f3616e0bf859a120bac))
* **carbon calculator:** remove tips from results page ([432fd16](https://github.com/visitscotland/vs-component-library/commit/432fd163061eaba4d4631b7a994dd02314683e86))
* **images:** construct srcset in mixin to ensure they work with additional params ([03ede19](https://github.com/visitscotland/vs-component-library/commit/03ede19be923a7608b6706765ec2295e905c1051))
* **images:** reduce code duplication in src set mixin ([c099eae](https://github.com/visitscotland/vs-component-library/commit/c099eae2be0058f6b78a8a32890b1e0545a17fdb))

### [1.1.2](https://github.com/visitscotland/vs-component-library/compare/v1.1.1...v1.1.2) (2023-11-22)


### 🐛 Bug Fixes

* **modal:** don't attempt to render the modal component in ssr ([b91dd33](https://github.com/visitscotland/vs-component-library/commit/b91dd332954bf24707921d4dd7f69ae99649fa98))


### ✅ Tests

* **modal:** bypass mount checks for jest environment ([ab8d368](https://github.com/visitscotland/vs-component-library/commit/ab8d3680ed4f30b25a0376360b62ede41c280c15))

### [1.1.1](https://github.com/visitscotland/vs-component-library/compare/v1.1.0...v1.1.1) (2023-11-21)


### 🐛 Bug Fixes

* **carbon calculator:** correct analytics mixin path ([16df17a](https://github.com/visitscotland/vs-component-library/commit/16df17a6f96dcac2fad87e78d907217b31dd9e4b))
* **carbon calculator:** remove deprecated per day tests ([fc930bd](https://github.com/visitscotland/vs-component-library/commit/fc930bd7ae3b0b33e3c29f49462e909f72f1ef36))


### ✨ Features

* **carbon calculator:** add new icon and style carbon unicorn box ([01e7d86](https://github.com/visitscotland/vs-component-library/commit/01e7d8622712483ea0271a6a33c88e055787a139))
* **carbon calculator:** correct vertical spacing throughout calculator ([dd46b56](https://github.com/visitscotland/vs-component-library/commit/dd46b5686057f7b6cf30cc0544fccd4e72e04f5b))
* **carbon calculator:** ensure non-en-gb languages see carbon unicorn ([30b9092](https://github.com/visitscotland/vs-component-library/commit/30b9092d186514673ff9c5b95e7eee5358cddb31))
* **carbon calculator:** make localised number decimal count consistent ([318f402](https://github.com/visitscotland/vs-component-library/commit/318f402c92020b99b4d18f3616e0bf859a120bac))
* **carbon calculator:** remove tips from results page ([432fd16](https://github.com/visitscotland/vs-component-library/commit/432fd163061eaba4d4631b7a994dd02314683e86))

## [1.1.0](https://github.com/visitscotland/vs-component-library/compare/v1.0.54...v1.1.0) (2023-11-16)


### 🐛 Bug Fixes

* **map:** fix breaking unit tests ([1f24a3e](https://github.com/visitscotland/vs-component-library/commit/1f24a3e2651f82d75ed4c4a616788517a10bfc7d))
* **map:** fix failing tests ([861bfe6](https://github.com/visitscotland/vs-component-library/commit/861bfe6d49e0aa384ce23e718a9d215db43ae0bc))
* **map:** fix regions active state to work when clicking sidebar ([43f9f72](https://github.com/visitscotland/vs-component-library/commit/43f9f72e3b69a3d2400acbbc9b759877b14f70f5))
* **map:** fix sidebar hover for polygons ([0e034b4](https://github.com/visitscotland/vs-component-library/commit/0e034b43bbe9ef98ff715224d149fc5cc6c8addc))
* **map:** remove active map pin when tabbing to next pin ([7b13f1e](https://github.com/visitscotland/vs-component-library/commit/7b13f1e537f93574445b555e075d8f90d0eeb338))


### ♻️ Code Refactoring

* **itinerary:** update itinerary stories with new, working example ([2c5c5c8](https://github.com/visitscotland/vs-component-library/commit/2c5c5c8322e63934d54636afd02bf15e438f6bcf))
* **map marker:** update marker popup with new marker dimensions ([7942cc1](https://github.com/visitscotland/vs-component-library/commit/7942cc1e2ad5936d1ee6dedbf08f9b9ef64db61d))
* **map:** add new proper to toggle map popups ([0d61ed4](https://github.com/visitscotland/vs-component-library/commit/0d61ed499d1c8a0538fbcee43bb0ccf3f6966c2b))
* **map:** add number to map icon ([5e9697e](https://github.com/visitscotland/vs-component-library/commit/5e9697e5069205e53957de8199645556f62970ac))
* **map:** add popup functionality to all map features ([dfaee86](https://github.com/visitscotland/vs-component-library/commit/dfaee86986ff1ca8fb008cd54a5b71745519d8ae))
* **map:** fix popup functionality across all maps ([498b8e8](https://github.com/visitscotland/vs-component-library/commit/498b8e8822d54bbc578b9d9aca4f0ac9dd5dc4e6))
* **map:** refactor adding popup html to get full map object ([cdc2712](https://github.com/visitscotland/vs-component-library/commit/cdc271294b53ed4f7bd99635bee146de0604fa47))
* **map:** refactor hovered place to always be full feature object not id ([c1e6ea8](https://github.com/visitscotland/vs-component-library/commit/c1e6ea868279c16ddcc63d813696e5505d635433))
* **map:** refactor to use feature object instead of id ([1dbafc0](https://github.com/visitscotland/vs-component-library/commit/1dbafc0fe0796f6947d99916626e68dd07f0360b))
* **map:** refactoring map code to be more readable ([7062564](https://github.com/visitscotland/vs-component-library/commit/7062564c7cba288c24d660f7e22700389e2218a6))
* **map:** remove console.log statement ([b704904](https://github.com/visitscotland/vs-component-library/commit/b704904ccd26702a540912ae1f29a3eac43f50a5))
* **map:** rename main map wrapper to map with sidebar ([b6a4dc7](https://github.com/visitscotland/vs-component-library/commit/b6a4dc7d68136e418551ca903800d73e9528bf81))
* **map:** rename map with sidebar story file ([ddfcf40](https://github.com/visitscotland/vs-component-library/commit/ddfcf4014c20ecd1d7ff94b364a3f63cc451bf2c))
* **map:** renaming files to follow our naming convention and fixing unit tests ([56a22d4](https://github.com/visitscotland/vs-component-library/commit/56a22d41a9a042f1d1782e8b0382e839c082aa12))
* **maps:** move map into its own component ([0177121](https://github.com/visitscotland/vs-component-library/commit/0177121fc9d26cc458df5785bcdfacf0cb789c7a))
* **maps:** update itineraries to use default map component ([c317aa7](https://github.com/visitscotland/vs-component-library/commit/c317aa7c6156fe426696424ee8a2ed05e26171ec))
* **map:** tidy class names after map refactor ([99178c6](https://github.com/visitscotland/vs-component-library/commit/99178c654975b6424545a387f0a6a99fa7cbb867))


### 🔖 Others

* **package.json:** updating Storybook and Babel to fix security alerts ([17e9093](https://github.com/visitscotland/vs-component-library/commit/17e9093c493d07f18f37d3c42886062514fe013f))


### 🎨 Styling

* **,ap:** hide full screen button on mobile ([fdc57ad](https://github.com/visitscotland/vs-component-library/commit/fdc57adac266cdd76dacff297c2d9e42bf3f3813))
* **map marker:** update map marker style to be bigger ([947cd26](https://github.com/visitscotland/vs-component-library/commit/947cd26ce6cd964679ce2fcfec7acf6ab40ea505))
* **map:** add correct colour for marker on hover ([65f6633](https://github.com/visitscotland/vs-component-library/commit/65f663394c24db114a3e758d8d3ec5c837e2aded))
* **map:** updating to correct marker color ([b30319f](https://github.com/visitscotland/vs-component-library/commit/b30319fd127554fc6df3778e18c2b8c02867725b))

### [1.0.54](https://github.com/visitscotland/vs-component-library/compare/v1.0.53...v1.0.54) (2023-11-15)


### ✨ Features

* **cookies:** add option to bypass cookie checks for cms preview mode ([7e06ae0](https://github.com/visitscotland/vs-component-library/commit/7e06ae01eb00dc39388cb0e80de851c0f3fdef2e))
* **cookies:** make variables more consistent in verify mixin ([69d656e](https://github.com/visitscotland/vs-component-library/commit/69d656eb2e56d24f4f4b7ff549087958254e3644))

### [1.0.53](https://github.com/visitscotland/vs-component-library/compare/v1.0.52...v1.0.53) (2023-11-09)


### 🐛 Bug Fixes

* **psw:** add back optional param ([45a01f6](https://github.com/visitscotland/vs-component-library/commit/45a01f68fae87d54f947e442c8996611dcbafb72))
* **psw:** fix default location when theres duplicate key ([41cbeee](https://github.com/visitscotland/vs-component-library/commit/41cbeeef17f557ed4e7d31bed0b6a2dc5a078c34))

### [1.0.52](https://github.com/visitscotland/vs-component-library/compare/v1.0.51...v1.0.52) (2023-11-09)


### ✨ Features

* **carbon calculator:** add data for motorbike and coach ([61f4452](https://github.com/visitscotland/vs-component-library/commit/61f4452e0ca7a7797cfa4dccdd3c33260ae4a4f3))
* **carbon calculator:** add more height to pages" ([4ff5911](https://github.com/visitscotland/vs-component-library/commit/4ff59113dcd6971fa60963114756675ed1f752ea))
* **carbon calculator:** add tests for duplicate functionality ([e84767f](https://github.com/visitscotland/vs-component-library/commit/e84767fa60c859053d13a05b948ef0e9487b23b5))
* **carbon calculator:** adjust tips to per-stage ([eee4415](https://github.com/visitscotland/vs-component-library/commit/eee44150f634aeb95365428a03411306e4fc0d4e))
* **carbon calculator:** allow questions with recursive multipliers ([bc0a8d2](https://github.com/visitscotland/vs-component-library/commit/bc0a8d2f4f0350393d0e85759b54b3224f25f3e2))
* **carbon calculator:** remove duplicable question for now ([c898884](https://github.com/visitscotland/vs-component-library/commit/c8988843939a55189eb3ab082cd8fef479ba3bf8))
* **carbon calculator:** set up question duplication ([1549b97](https://github.com/visitscotland/vs-component-library/commit/1549b97b66f14f610eff290e8b45dabc264068bd))
* **carbon calculator:** switch to stage-by-stage multi-question display ([d38c734](https://github.com/visitscotland/vs-component-library/commit/d38c73445b33e0d103211e20c37b06ca9cf955a4))


### 🐛 Bug Fixes

* **carbon calculator:** adjust test to account for removed question ([f896792](https://github.com/visitscotland/vs-component-library/commit/f896792b710342c1d2a64be4d1ea58627ef2d52e))
* **carbon calculator:** and again ([80455fb](https://github.com/visitscotland/vs-component-library/commit/80455fb8bf3418ba7100824da9c73b6b26e641ff))
* **carbon calculator:** fix broken story automation ([496a71c](https://github.com/visitscotland/vs-component-library/commit/496a71ca5c8ac4ef32e6b95dec19d4dcd29d0f4b))

### [1.0.51](https://github.com/visitscotland/vs-component-library/compare/v1.0.50...v1.0.51) (2023-11-03)


### 🐛 Bug Fixes

* **marketo:** remove duplicate ID on checkbox ([99d5c7e](https://github.com/visitscotland/vs-component-library/commit/99d5c7ec89ecf3e4303d7c52b94035b430dd05f3))
* **psw:** fixes active state for autocomplete dropdown ([6907c50](https://github.com/visitscotland/vs-component-library/commit/6907c50f3679d507d020de2a896de19a65902737))
* **test:** under cookie mock changes to fix tests ([a8c8914](https://github.com/visitscotland/vs-component-library/commit/a8c89141b70fd95db7196f58b795de1f0787f709))

### [1.0.50](https://github.com/visitscotland/vs-component-library/compare/v1.0.49...v1.0.50) (2023-11-03)


### ✨ Features

* **carbon calculator:** ensure numbers are formatted properly for different locales ([46a0086](https://github.com/visitscotland/vs-component-library/commit/46a00860b993c8d9c6fc49e75f80980ff4ea066b))
* **progress bar:** add option for longhand progress label ([4bf09ec](https://github.com/visitscotland/vs-component-library/commit/4bf09ec51bed79411ef1021244682d41028832a7))


### ✅ Tests

* **carbon calculator:** add tests for localised labels ([2447b59](https://github.com/visitscotland/vs-component-library/commit/2447b59c3ce5c1dd0d16c9b278b5333813d6aef9))
* **progress bar:** add tests for longhand label ([ba71ee3](https://github.com/visitscotland/vs-component-library/commit/ba71ee3715d4b6801400b8f69dfaa813f451b039))

### [1.0.49](https://github.com/visitscotland/vs-component-library/compare/v1.0.48...v1.0.49) (2023-10-27)


### 🐛 Bug Fixes

* **meganav:** correct focus area on new logo for firefox/safari ([af01aff](https://github.com/visitscotland/vs-component-library/commit/af01aff27c3ebcc2bc132426ed09ac9b3bdf7d0a))

### [1.0.48](https://github.com/visitscotland/vs-component-library/compare/v1.0.47...v1.0.48) (2023-10-25)


### ✨ Features

* **preferences:** make warnings v-show so they're usable after rejecting cookies ([755ca89](https://github.com/visitscotland/vs-component-library/commit/755ca899b94165b9fe127f2cf07758ace973146b))


### 🐛 Bug Fixes

* **warning:** correct failing tests ([54eb755](https://github.com/visitscotland/vs-component-library/commit/54eb7555f103c3f73d63f8804d43d04768c737be))

### [1.0.47](https://github.com/visitscotland/vs-component-library/compare/v1.0.46...v1.0.47) (2023-10-23)


### 🐛 Bug Fixes

* **carousel:** ensure expanded link hit area is unclickable for disabled cards ([ac59db7](https://github.com/visitscotland/vs-component-library/commit/ac59db7a80bfae89049f7abb739500eabbbc82c7))
* **megalinks:** correct responsive image sizing ([c19e475](https://github.com/visitscotland/vs-component-library/commit/c19e475b0b0aa6ed41292c407453775d69879200))

### [1.0.46](https://github.com/visitscotland/vs-component-library/compare/v1.0.45...v1.0.46) (2023-10-20)


### 🎨 Styling

* **footer:** update logo in footer to brand scotland logo ([b8c6c89](https://github.com/visitscotland/vs-component-library/commit/b8c6c89345658b2a3db71a2ddbf2d3b8165a4d7a))
* **meganav:** replacing vs meganav logo ([d358ac2](https://github.com/visitscotland/vs-component-library/commit/d358ac2cca24c2d757ac49c8fb0f6cb17b9208a0))


### 🐛 Bug Fixes

* **svglink:** update dark logo to be white ([d62449c](https://github.com/visitscotland/vs-component-library/commit/d62449cca296d16135c798a68aab9e4d2a5628bf))
* **svglink:** update path for missing svg ([6ff898f](https://github.com/visitscotland/vs-component-library/commit/6ff898f731e161ec0898acea7257d55f4ba8ed4f))
* **svg:** update path for missing svg ([f7356af](https://github.com/visitscotland/vs-component-library/commit/f7356afb71761dfed851b8306b2c8fed47b7682b))
* **webpack:** stop hashing font file names ([47515b9](https://github.com/visitscotland/vs-component-library/commit/47515b98bb131286647d4119b7444ddc480d14b6))

### [1.0.45](https://github.com/visitscotland/vs-component-library/compare/v1.0.44...v1.0.45) (2023-10-12)


### ✨ Features

* **carbon calculator:** increase chart font size in line with a11y recommendations ([ec0c50d](https://github.com/visitscotland/vs-component-library/commit/ec0c50d83ec49a81367cab222ea1ccee27e26ed1))

### [1.0.44](https://github.com/visitscotland/vs-component-library/compare/v1.0.43...v1.0.44) (2023-10-11)


### 🐛 Bug Fixes

* **ski scotland:** extend fix to lift status table ([f32ebec](https://github.com/visitscotland/vs-component-library/commit/f32ebec263b0891c622080835ec6b5f6c4be3814))

### [1.0.43](https://github.com/visitscotland/vs-component-library/compare/v1.0.42...v1.0.43) (2023-10-11)


### 🐛 Bug Fixes

* **ski scotland:** add styles to tidy up responsive behaviour of status info ([87e566c](https://github.com/visitscotland/vs-component-library/commit/87e566cb76f9a95e33a6a1fbdbbecbf016a97309))
* **ski scotland:** make status table cols consistent widths ([4ca4774](https://github.com/visitscotland/vs-component-library/commit/4ca477497b3bd6edb5729f3d7cb74f60f1e404a3))

### [1.0.42](https://github.com/visitscotland/vs-component-library/compare/v1.0.41...v1.0.42) (2023-10-10)


### ✅ Tests

* **psw:** add unit tests for guest selection ([ded7941](https://github.com/visitscotland/vs-component-library/commit/ded79410800ec9a9124a067c1066edd6ecd678bf))
* **psw:** add unit tests for guest selector ([1ef5eb6](https://github.com/visitscotland/vs-component-library/commit/1ef5eb64102ead493aedd4106498bf111eb8909a))


### ♻️ Code Refactoring

* **psw:** fix linting errors ([b49a659](https://github.com/visitscotland/vs-component-library/commit/b49a659b5c4557a13df867abe1ec92f1932bb45c))


### 🐛 Bug Fixes

* **map:** correct zoom level in second undefined case ([b6bd843](https://github.com/visitscotland/vs-component-library/commit/b6bd843bf59601c03b0ff613ade231d0b31e8669))
* **psw:** add back dates exist functionality ([c45e146](https://github.com/visitscotland/vs-component-library/commit/c45e146cf1ed9a11404419a54fcb7d8d525d87c4))


### 🔖 Others

* **package.json:** add back missing theo script to test ([99784b6](https://github.com/visitscotland/vs-component-library/commit/99784b6d1d333c9a22df0b3904f6f702d458f05f))
* **release:** 1.0.41 ([584832f](https://github.com/visitscotland/vs-component-library/commit/584832fbf7221e7120c6a21fe46d0a24f5c88de0))

### [1.0.41](https://github.com/visitscotland/vs-component-library/compare/v1.0.40...v1.0.41) (2023-10-02)


### 🐛 Bug Fixes

* **meganav:** fix sticky nav not working with no js ([64eeed7](https://github.com/visitscotland/vs-component-library/commit/64eeed70afd1356e59d940421499d59ce578aced))

### [1.0.40](https://github.com/visitscotland/vs-component-library/compare/v1.0.38...v1.0.40) (2023-09-29)


### 🔖 Others

* **dependabot:** bump get-func-name version ([d9fd85d](https://github.com/visitscotland/vs-component-library/commit/d9fd85d0f6673fb47c3d46dc1dccc9335c2362e2))
* **release:** 1.0.41 ([fa9b031](https://github.com/visitscotland/vs-component-library/commit/fa9b031572f117155f69a493b337d1253d0f7423))
* **release:** correct multi-release version number issue ([8d8f66b](https://github.com/visitscotland/vs-component-library/commit/8d8f66bc330ca1f8e9ee74f6ba9f2e65e98df81d))


### 🐛 Bug Fixes

* fix for Tours PSW search URL ([fc2430e](https://github.com/visitscotland/vs-component-library/commit/fc2430e114b653fb7035fa3bf5457344e27fdf4f))
* **psw:** fix for unit test failing ([12b9aef](https://github.com/visitscotland/vs-component-library/commit/12b9aef201ed29675fd48bb3b71ecd2969a22527))

### [1.0.39](https://github.com/visitscotland/vs-component-library/compare/v1.0.38...v1.0.39) (2023-09-29)


### 🔖 Others

* **dependabot:** bump get-func-name version ([d9fd85d](https://github.com/visitscotland/vs-component-library/commit/d9fd85d0f6673fb47c3d46dc1dccc9335c2362e2))

### [1.0.38](https://github.com/visitscotland/vs-component-library/compare/v1.0.37...v1.0.38) (2023-09-29)


### 🐛 Bug Fixes

* **psw:** adds fix for setting default dates on search ([51ba331](https://github.com/visitscotland/vs-component-library/commit/51ba3310d90b821fc8095dba72f4a7096c4c1ddc))
* **psw:** looking at fixing default dates ([17066c9](https://github.com/visitscotland/vs-component-library/commit/17066c903dd9f0d496a7d1eb477bbfa1758cc73a))


### ♻️ Code Refactoring

* **psw:** code tidy ([79c7e88](https://github.com/visitscotland/vs-component-library/commit/79c7e889ccaed58b2a11acf9bb44ed54abf6970b))

### [1.0.37](https://github.com/visitscotland/vs-component-library/compare/v1.0.36...v1.0.37) (2023-09-28)


### 🐛 Bug Fixes

* **carbon calculator:** ensure focus scrolls into view on iphone ([98e3c56](https://github.com/visitscotland/vs-component-library/commit/98e3c5606068156bc73406f4e70dfd5692ef3f28))
* **psw:** fix default location not showing ([b9acdcf](https://github.com/visitscotland/vs-component-library/commit/b9acdcf66fb12f85f48ae8eeb3e345fa768d3ee8))


### ✅ Tests

* **psw:** add Autocomplete tests ([3da9892](https://github.com/visitscotland/vs-component-library/commit/3da98929c875f2751491ae85c54cb7bbe10b43fc))
* **psw:** add more unit tests for product search embed ([ee71952](https://github.com/visitscotland/vs-component-library/commit/ee719529642794848ba3a4c929a3e2a7eef1c32a))
* **psw:** add unit tests for DateInput ([21bd876](https://github.com/visitscotland/vs-component-library/commit/21bd8761af276a9831190bc59c4da63cb9f86111))
* **psw:** add unit tests for DateRange ([98f1e5b](https://github.com/visitscotland/vs-component-library/commit/98f1e5b7de4c9ba1bf9fa086d2f01dbf09cbc652))
* **psw:** first unit tests for PSW ([3373542](https://github.com/visitscotland/vs-component-library/commit/3373542a26624186e051a140a3670948976d4841))


### ✨ Features

* **map:** move bounding box north and south to contain Scotland ([cd01d55](https://github.com/visitscotland/vs-component-library/commit/cd01d5599821b09235a1423d074ae2f404d46164))
* **sticky nav:** ensure user can scroll mobile nav rather than scrolling down page ([9e38a81](https://github.com/visitscotland/vs-component-library/commit/9e38a81d5f744a2889525a56bcf53c878b227dcb))

### [1.0.36](https://github.com/visitscotland/vs-component-library/compare/v1.0.35...v1.0.36) (2023-09-26)


### ⚡️ Performance Improvements

* **bootstrap vue:** remove bvue component from row ([13b88df](https://github.com/visitscotland/vs-component-library/commit/13b88dfa2e045896f2214f0bdd3912cc8f07568b))
* **bvue:** remove bvue component from panel ([b38b8dd](https://github.com/visitscotland/vs-component-library/commit/b38b8ddd2495b583afe2e009e064e6753366df85))


### ♻️ Code Refactoring

* **psw:** fixing UI issues and small bugs in PSW ([6a6f349](https://github.com/visitscotland/vs-component-library/commit/6a6f3491924899c3f79d556bd4a0faa343631861))
* **psw:** refactor psw to use select component ([d778018](https://github.com/visitscotland/vs-component-library/commit/d778018986404fd2b4e942eba6956fc10eb5c0b4))
* **psw:** update labels in PSW ([e7aa1a1](https://github.com/visitscotland/vs-component-library/commit/e7aa1a1bfd2ef55d0e541788880f3b2af2f61c1b))
* **psw:** update text inputs to use input component and remove unused PSW components ([e2ca77f](https://github.com/visitscotland/vs-component-library/commit/e2ca77f8f0dfc2603de1dc9cac11617f138abf42))


### 🎨 Styling

* **select:** update style of Select component to match designs ([3acbdbb](https://github.com/visitscotland/vs-component-library/commit/3acbdbb78a3dfb076f39663573db0a30dfd6424b))
* **storybook:** add favicon to storybook ([8ce5b7f](https://github.com/visitscotland/vs-component-library/commit/8ce5b7f96f950cd3b1e67196fafb056f66d3f137))


### ✨ Features

* **map:** place a white blocker behind map nav buttons ([76dd6bc](https://github.com/visitscotland/vs-component-library/commit/76dd6bc0633c945e10e5fda5d0566d67dff7959f))
* **sticky nav:** implement sticky meganav ([da64263](https://github.com/visitscotland/vs-component-library/commit/da64263f4f66fa78078ba1882387fde0fee4f7de))


### 🐛 Bug Fixes

* **chromatic:** chromatic ignore stop date info ([82b2b3f](https://github.com/visitscotland/vs-component-library/commit/82b2b3fd551c27a1946e0bf384a94f9f9a6d072b))
* **chromatic:** force PSW stories to await location load ([99a38bb](https://github.com/visitscotland/vs-component-library/commit/99a38bbaea7aa03c35b9d28f4a03ca4f14a201d6))
* **chromatic:** ignore changes to itinerary map markers ([f94d603](https://github.com/visitscotland/vs-component-library/commit/f94d603cbb782815423c967435668f72df4a5a7e))
* **chromatic:** mock PSW location load to prevent timeout ([262aabb](https://github.com/visitscotland/vs-component-library/commit/262aabb7dd964cc5db8512077789eb58e744b80f))
* **chromatic:** move map ignore up a level ([0ae51dd](https://github.com/visitscotland/vs-component-library/commit/0ae51ddf394bcbd9481b235e8d13345fb0f7411b))
* **chromatic:** move stop ignore up a level ([33c9ff1](https://github.com/visitscotland/vs-component-library/commit/33c9ff13911052657dea75bd04758e305ff0c189))
* **chromatic:** re-increase timeout ([3f47bf0](https://github.com/visitscotland/vs-component-library/commit/3f47bf02a4522ae97e79a253c1191f9bceab4060))
* **chromatic:** remove play functions ([386b952](https://github.com/visitscotland/vs-component-library/commit/386b9523c5d50d6ff629565394eb78af54c73c42))
* **chromatic:** speed up psw tests ([052dde6](https://github.com/visitscotland/vs-component-library/commit/052dde6956ffd9b0c8974b05d4611dbf318ff686))
* **map:** correct mobile/desktop style divide ([b1383d8](https://github.com/visitscotland/vs-component-library/commit/b1383d8196d7ca943290a7e0b30746a69c471f33))
* **map:** make colour of links explicit for iphone ([cf8c193](https://github.com/visitscotland/vs-component-library/commit/cf8c193f6ac96debb1ebcc502809c568f9eb40d7))
* **megalinks:** add intro examples to all 3 megalink types ([0d67e36](https://github.com/visitscotland/vs-component-library/commit/0d67e369f773231601e73a8ae9b2810c010dd428))
* **psw:** fix loading issue for PSW ([1b8b50a](https://github.com/visitscotland/vs-component-library/commit/1b8b50aad79f5d4078b9d78c64416d21380b7512))
* **psw:** fix selectedProd when changing select ([789414e](https://github.com/visitscotland/vs-component-library/commit/789414e8d2b9a9a75f84cf2351fc56bc8e547975))

### [1.0.35](https://github.com/visitscotland/vs-component-library/compare/v1.0.34...v1.0.35) (2023-09-20)


### 🐛 Bug Fixes

* **psw:** check window defined before access ([d5ff23d](https://github.com/visitscotland/vs-component-library/commit/d5ff23d2c09b5f6046adacdabcbe959acc454a89))

### [1.0.34](https://github.com/visitscotland/vs-component-library/compare/v1.0.33...v1.0.34) (2023-09-20)


### 🐛 Bug Fixes

* fix issue with polygon locations ([ba00882](https://github.com/visitscotland/vs-component-library/commit/ba00882e0c2b8d885eec7db6ae759617950a6ab7))

### [1.0.33](https://github.com/visitscotland/vs-component-library/compare/v1.0.32...v1.0.33) (2023-09-19)


### ♻️ Code Refactoring

* **maps:** update iCentre category ID and add regional map example ([7e1916d](https://github.com/visitscotland/vs-component-library/commit/7e1916d6ab68f8be9ae75689c97d194977d19bbd)), closes [#160](https://github.com/visitscotland/vs-component-library/issues/160)


### 🐛 Bug Fixes

* **psw:** fix host url for psw search ([bad24d1](https://github.com/visitscotland/vs-component-library/commit/bad24d12a5ed9048eebc9a1a95b4cef4c3766c39))

### [1.0.32](https://github.com/visitscotland/vs-component-library/compare/v1.0.31...v1.0.32) (2023-09-19)


### 🐛 Bug Fixes

* **psw:** fix correct base url for product search widget ([ecc5372](https://github.com/visitscotland/vs-component-library/commit/ecc53726821da1fb018fd4bf2b40e00379167076))

### [1.0.31](https://github.com/visitscotland/vs-component-library/compare/v1.0.30...v1.0.31) (2023-09-18)


### 🐛 Bug Fixes

* **carbon calculator:** get on mount rather than create ([3fd8835](https://github.com/visitscotland/vs-component-library/commit/3fd8835550701a7cbfcced54e1515ac58cf14702))

### [1.0.30](https://github.com/visitscotland/vs-component-library/compare/v1.0.29...v1.0.30) (2023-09-14)


### ✨ Features

* **carbon calculator:** pull in urls from labels ([e44c5ac](https://github.com/visitscotland/vs-component-library/commit/e44c5acd9a9b548226f5243a7de878eadb0e66ea))

### [1.0.29](https://github.com/visitscotland/vs-component-library/compare/v1.0.28...v1.0.29) (2023-09-14)


### ✨ Features

* **carbon calculator:** add all real data ([c36f1cf](https://github.com/visitscotland/vs-component-library/commit/c36f1cfa83dad81d3ccebfc7fe4dd3765d8493e6))
* **carbon calculator:** add analytics events ([b1c4ff5](https://github.com/visitscotland/vs-component-library/commit/b1c4ff5723203bb600fcaf6a5c7fb8346b999c0d))
* **carbon calculator:** add carbon unicorn logic ([4b0ec5d](https://github.com/visitscotland/vs-component-library/commit/4b0ec5d4b794382d9692775ebca143a119dca735))
* **carbon calculator:** add documentation for results props ([e16d258](https://github.com/visitscotland/vs-component-library/commit/e16d25875f30ca60a84c8b6bc946d6499eca44c4))
* **carbon calculator:** add hint text to radio buttons ([7dc9e41](https://github.com/visitscotland/vs-component-library/commit/7dc9e418de49ea0c253b86c68f29ab00a1be361d))
* **carbon calculator:** add key ([a7faf08](https://github.com/visitscotland/vs-component-library/commit/a7faf08eca481ca2f46a3f290348564aeb23170b))
* **carbon calculator:** add more options to q 1 ([9ed7e30](https://github.com/visitscotland/vs-component-library/commit/9ed7e30cbf9f639dc703bb8c3ad38ddb9b0f580d))
* **carbon calculator:** add more stories to calculator component ([36a59f1](https://github.com/visitscotland/vs-component-library/commit/36a59f12dfe0e00a2d3a099a64df035737f6291d))
* **carbon calculator:** add no js warning ([8688ae7](https://github.com/visitscotland/vs-component-library/commit/8688ae72399bfc755347c227ad1902735cc48c6a))
* **carbon calculator:** add reset button ([700134b](https://github.com/visitscotland/vs-component-library/commit/700134b2705f6ff8e1e8834b37b5023e953d9b7c))
* **carbon calculator:** add tests to question ([61ccdf8](https://github.com/visitscotland/vs-component-library/commit/61ccdf8e99e1f64ef46d503836793d4239a88f7e))
* **carbon calculator:** adjust results page layout ([676a275](https://github.com/visitscotland/vs-component-library/commit/676a27599e1783db3effe0add5d71458cc8f8b2b))
* **carbon calculator:** allow 0 entry on numbers and minimum multipliers for radios ([daf4840](https://github.com/visitscotland/vs-component-library/commit/daf4840a1f361a7cf7eff48bec9e5d4e11d1db21))
* **carbon calculator:** break progress bar into its own component ([c022c49](https://github.com/visitscotland/vs-component-library/commit/c022c49e77e040e23c734d7b1362c8351d37d2f7))
* **carbon calculator:** break question into its own component ([61821fb](https://github.com/visitscotland/vs-component-library/commit/61821fb6d04fc1878ae5eb2b56f0b219a2bbf82a))
* **carbon calculator:** calculate per day emissions ([b67fc1e](https://github.com/visitscotland/vs-component-library/commit/b67fc1e6fe6a10a396716b3a4eeea2bd3db0166b))
* **carbon calculator:** centre text in running total ([cc65316](https://github.com/visitscotland/vs-component-library/commit/cc6531610aa51a48948b1fe8973109c55caf2d88))
* **carbon calculator:** correct icon and layout for running total ([ea053d8](https://github.com/visitscotland/vs-component-library/commit/ea053d8c57467ebbf27917add11c7e9aaa099274))
* **carbon calculator:** correct icon in tip ([1dbac7d](https://github.com/visitscotland/vs-component-library/commit/1dbac7d0f0e8d486810df8f222eddabdff635370))
* **carbon calculator:** focus to question on nav ([307d9f0](https://github.com/visitscotland/vs-component-library/commit/307d9f0153a80185e96bd597afa8ee5d9ad04796))
* **carbon calculator:** implement basic bar chart ([d22059f](https://github.com/visitscotland/vs-component-library/commit/d22059fa63d04789aad020030b61863cbda09aff))
* **carbon calculator:** implement intro page ([b3a2cb0](https://github.com/visitscotland/vs-component-library/commit/b3a2cb0db0705dd91875736853f79c8a4912b28d))
* **carbon calculator:** improve multiply by logic ([acc5f18](https://github.com/visitscotland/vs-component-library/commit/acc5f18494f2810ef3e40f5c245ffb99dd5e9bfb))
* **carbon calculator:** integrate labelsMap for localised content ([a6db4b1](https://github.com/visitscotland/vs-component-library/commit/a6db4b134e86d6259c7719b61d777310bd0a30f3))
* **carbon calculator:** make all labels localised ([3368adc](https://github.com/visitscotland/vs-component-library/commit/3368adc206696062b8422b1a4bf4f920621e2bc9))
* **carbon calculator:** more documentation ([3c0ac65](https://github.com/visitscotland/vs-component-library/commit/3c0ac65bee09a2aaad9f572925fa7c61e82325c3))
* **carbon calculator:** port firebreak carbon calc work to vue3 ([3840266](https://github.com/visitscotland/vs-component-library/commit/3840266d1b5ed4bd5873f96a313c2cd630faa0d1))
* **carbon calculator:** restyle radio buttons ([4321aeb](https://github.com/visitscotland/vs-component-library/commit/4321aeb975ca7f204da36367fc15e3c5a245e3f1))
* **carbon calculator:** switch to CO2e ([cd83336](https://github.com/visitscotland/vs-component-library/commit/cd8333688e740de93f2ac8989f15a9c23b58d461))
* **carbon calculator:** switch to kilos ([3c36986](https://github.com/visitscotland/vs-component-library/commit/3c369865302556dd4c44e28d98728999fdda8b6b))
* **carbon calculator:** tidy up and add tests for tip ([cdaf79b](https://github.com/visitscotland/vs-component-library/commit/cdaf79b9729532f8f9687b8a4b5c82aeddff98a5))
* **carbon calculator:** tidy up Question and add tests ([fb95ae6](https://github.com/visitscotland/vs-component-library/commit/fb95ae671a502df013e1a213fdfba01c2019a2ac))
* **carbon calculator:** tidy up results and add tests ([dfbfd8a](https://github.com/visitscotland/vs-component-library/commit/dfbfd8a57613f1aceca18b376c859144dd6c4c6c))
* **carbon calculator:** tidy up running total component and add tests ([6d692c5](https://github.com/visitscotland/vs-component-library/commit/6d692c5d1f877fa56059e71f2f6793e5d5dd465b))
* **carbon calculator:** tidy up tip shadows ([731e410](https://github.com/visitscotland/vs-component-library/commit/731e4105770b5b11501fc4dedd40feb8f0c15579))
* **carbon calculator:** update comparison logic ([11df0d4](https://github.com/visitscotland/vs-component-library/commit/11df0d45a11e27c232ba68a52798be24958f4ada))
* **carbon calculator:** update data to account for returns ([ef68fb9](https://github.com/visitscotland/vs-component-library/commit/ef68fb99e68b74217f71fb98410d6752e679b306))
* **carbon calculator:** update intro content ([9ecdf5c](https://github.com/visitscotland/vs-component-library/commit/9ecdf5cd66d33fd733c03d256379c85378a4a47c))
* **carbon calculator:** update mobile style for radio buttons ([50d829b](https://github.com/visitscotland/vs-component-library/commit/50d829b051f9eae309ec05a9df3e74223853aee8))
* **carbon calculator:** update radio button hover state ([cf0263f](https://github.com/visitscotland/vs-component-library/commit/cf0263f4c551e2672e18d30415806927f941bf4e))
* **carbon calculator:** update target to 30 ([eee321e](https://github.com/visitscotland/vs-component-library/commit/eee321ec9e2a6aac3d26f87dd8b8e63adc73b330))
* **carbon calculator:** use number input in question ([cdf7a80](https://github.com/visitscotland/vs-component-library/commit/cdf7a80bcb9fadf3c84497a5cb0a815e90dcb42a))
* **carbon calculator:** use Stepped progress bar in cc ([64d3d6c](https://github.com/visitscotland/vs-component-library/commit/64d3d6c73034d8e9c2881d01c4cad6f882f2c4fc))
* **carbon calculator:** wIP Dependent Question Calculations ([3b4f1f3](https://github.com/visitscotland/vs-component-library/commit/3b4f1f33ebb63d18ca686315632c61e3b0f98716))
* **component library:** provide/inject all labels ([5a10816](https://github.com/visitscotland/vs-component-library/commit/5a10816f92bfdca7c064cba2b4dd06bbe5c4ee84))
* **input:** implement incremental number input ([238d79e](https://github.com/visitscotland/vs-component-library/commit/238d79e12119a47889cad7530794197332af307a))
* **number input:** separate number and regular input ([7e5550e](https://github.com/visitscotland/vs-component-library/commit/7e5550e8e0334c7eeda084ba469cfd096a04c375))
* **number input:** tweak input styles and font display ([9dfb6ed](https://github.com/visitscotland/vs-component-library/commit/9dfb6ed20afd499156436d05375af020c96f47af))
* **progress bar:** implement stepped progress bar# ([d424d10](https://github.com/visitscotland/vs-component-library/commit/d424d1029d752bb7b47f5786eee8e55e71de1f75))
* **progress bar:** update progress bar design to bring in line with designs ([a6aaa1e](https://github.com/visitscotland/vs-component-library/commit/a6aaa1e9c2fe155ad1b687a239b7c613b9dafba5))
* **radio button:** break out into separate component ([cdcfab5](https://github.com/visitscotland/vs-component-library/commit/cdcfab55c69e9569a8c7d859a8980d6ecb128b29))
* **radio buttons:** reduce font weight ([7df9867](https://github.com/visitscotland/vs-component-library/commit/7df986757db4abed99a8b794db1ee6f692d7300d))
* **radio button:** style focussed state and fix click area ([6038a7d](https://github.com/visitscotland/vs-component-library/commit/6038a7ddba84ebd5f671e9cb898015c291e41aa7))
* **radio button:** update focus and hover styles for a11y ([7fafc8c](https://github.com/visitscotland/vs-component-library/commit/7fafc8c7c29fa82c636a3291a8a5db435b657aec))


### 🐛 Bug Fixes

* **carbon calculator:** correct labels in story ([7470daa](https://github.com/visitscotland/vs-component-library/commit/7470daa98e5464b327092897d0635d9ddfb24e9f))
* **carbon calculator:** correct selected styles for radios ([35e9165](https://github.com/visitscotland/vs-component-library/commit/35e9165f94facb513a5ce243afb15e9f5b80b799))
* **carbon calculator:** fix broken test ([c44c752](https://github.com/visitscotland/vs-component-library/commit/c44c752da1af67ba7a74b2f3bb3c9654d9ac882b))
* **carbon calculator:** fix comparison calculation ([022326a](https://github.com/visitscotland/vs-component-library/commit/022326a74724439842a140434eb0b8441b93d8ef))
* **carbon calculator:** fix results page ([008ca8a](https://github.com/visitscotland/vs-component-library/commit/008ca8a7060d4c941cec17ce8386eddd82cd8c54))
* **carbon calculator:** fix results percent calc for accomm ([fc049eb](https://github.com/visitscotland/vs-component-library/commit/fc049eb3fb72002da38da4cc437f971c925e589d))
* **carbon calculator:** refactor calculate and tip questions ([e8374cc](https://github.com/visitscotland/vs-component-library/commit/e8374ccf16f285522055e9e1e986b3eb8552f21d))
* **carbon calculator:** remove console log ([817314e](https://github.com/visitscotland/vs-component-library/commit/817314ec7410a4d3fbed8bc41058dd433ede6f30))
* **carbon calculator:** separate number input into own component ([ad13905](https://github.com/visitscotland/vs-component-library/commit/ad139057c6e4ddff87dc58f5ebf684f2d8f39cc3))
* **carbon calculator:** switch results to token font size ([54de409](https://github.com/visitscotland/vs-component-library/commit/54de409581525733a0e75d7d0137157d5f1f8017))
* **carbon calculator:** update most labels ([94eef7a](https://github.com/visitscotland/vs-component-library/commit/94eef7ab783e8671b2e930d48228a111d9792494))
* fix missing default location in PSW ([9ec6e12](https://github.com/visitscotland/vs-component-library/commit/9ec6e12ff1fc22afeb17738df91049c3f9b5e693))
* **form validation:** make validation behaviour consistent across all form elements ([fdc271d](https://github.com/visitscotland/vs-component-library/commit/fdc271d9e1afa65067039ca87943a57c2be2f908))
* **input:** remove remnant of number input in input ([631a9e2](https://github.com/visitscotland/vs-component-library/commit/631a9e27acc61349fd4f71321ad831e82da376e1))
* **number input:** correct classnames for controls ([95df33a](https://github.com/visitscotland/vs-component-library/commit/95df33a5d8667db4ffbecdfc246d25079954c11a))
* **psw:** fix labels for PSW ([ca984e6](https://github.com/visitscotland/vs-component-library/commit/ca984e648b4dd72f0e47e4d773f83bd060f5837d))
* **radio button:** set internal border on buttons ([2b090bb](https://github.com/visitscotland/vs-component-library/commit/2b090bbe5dd93b76c0dd4d790975c4fbb630e06e))
* **radio button:** stack text properly on mobile ([147329d](https://github.com/visitscotland/vs-component-library/commit/147329d56beb8eea5ac4614b97ea9ab5f9daff54))
* **tokens:** remove token files from git ([9b9c6dd](https://github.com/visitscotland/vs-component-library/commit/9b9c6ddd2bbbdd893f7a4721285e462abdeab060))


### 🎨 Styling

* **lint:** allow v-html ([e7cb92e](https://github.com/visitscotland/vs-component-library/commit/e7cb92ee1a7c104edd3f7cb3bc04c40bcf13d863))
* **psw:** fix margin on for field in PSW ([81342db](https://github.com/visitscotland/vs-component-library/commit/81342db1c46f4e6b50f112ee23cfcd8ef2104717))

### [1.0.28](https://github.com/visitscotland/vs-component-library/compare/v1.0.27...v1.0.28) (2023-09-14)


### 🐛 Bug Fixes

* **psw:** fix translations in PSW ([ab1e2b5](https://github.com/visitscotland/vs-component-library/commit/ab1e2b5f98e81c9d6806f7493cb7c42ea4105133))
* **psw:** retrieve language object on getLabel execution ([44ec5aa](https://github.com/visitscotland/vs-component-library/commit/44ec5aa44d8153de7c79e031aff5d94c57c77aee))
* **psw:** translate product names ([5ec842d](https://github.com/visitscotland/vs-component-library/commit/5ec842d6a845aaf7658dec874cd531b2f2e527aa))

### [1.0.27](https://github.com/visitscotland/vs-component-library/compare/v1.0.26...v1.0.27) (2023-09-13)


### 🐛 Bug Fixes

* **onetrust:** fix missing window in ssr error ([ad47d74](https://github.com/visitscotland/vs-component-library/commit/ad47d74d7d21650da2c209a1715183fb54c07b2c))

### [1.0.26](https://github.com/visitscotland/vs-component-library/compare/v1.0.25...v1.0.26) (2023-09-12)


### ♻️ Code Refactoring

* **pinis:** add Pinia to root of the app ([5384e98](https://github.com/visitscotland/vs-component-library/commit/5384e98589ce0b90fe311e76bcf088d328e46c6b))


### 🐛 Bug Fixes

* **pinia:** fix issues with pinia state management ([a8976ae](https://github.com/visitscotland/vs-component-library/commit/a8976ae2f4e13289152f5fa2fe2ed9662d2e09fe))


### ✅ Tests

* **test:** add pinia to unit tests ([ab59d00](https://github.com/visitscotland/vs-component-library/commit/ab59d004dd4b78cf7d45841ffac08283d57172b4))


### 📝 Docs

* **megalinks:** add megalinks video examples to stories ([add20f2](https://github.com/visitscotland/vs-component-library/commit/add20f2be62bde7d00bfc6f8436c7282da4cf1a9))
* **stretchedlink:** updating stories for cookies ([7fbbc25](https://github.com/visitscotland/vs-component-library/commit/7fbbc25188cad5a52bb710615f630fe65fe93468))

### [1.0.25](https://github.com/visitscotland/vs-component-library/compare/v1.0.24...v1.0.25) (2023-09-08)


### 🐛 Bug Fixes

* **checkbox:** correct checkbox validation syntax ([46603b8](https://github.com/visitscotland/vs-component-library/commit/46603b883a7f31759997677f20654f7a765bc769))

### [1.0.24](https://github.com/visitscotland/vs-component-library/compare/v1.0.23...v1.0.24) (2023-09-07)


### 🐛 Bug Fixes

* **social share:** don't render popover in SSR environment ([2765b6e](https://github.com/visitscotland/vs-component-library/commit/2765b6e192f41739a09aefc4fbd2db6f8ed3566b))
* **ssr:** ensure global nav hydrates properly on load ([7087cb7](https://github.com/visitscotland/vs-component-library/commit/7087cb7b41cf615cd7e9ca88cd2e252beccc80a6))

### [1.0.23](https://github.com/visitscotland/vs-component-library/compare/v1.0.22...v1.0.23) (2023-09-05)


### 🐛 Bug Fixes

* **input:** correct regex syntax ([61c3a11](https://github.com/visitscotland/vs-component-library/commit/61c3a1190516e3df9cf29988c528d777901c52c8))
* **marketoforms:** allow lower case postcodes ([ae66b4d](https://github.com/visitscotland/vs-component-library/commit/ae66b4d0f251df913715402c52ebffa40887f91e))
* **select:** fix select validation syntax ([499c2cc](https://github.com/visitscotland/vs-component-library/commit/499c2cca73692951cb48dde5fba6108cd66eccb7))


### ✨ Features

* **forms:** remove consent checkbox from example form ([245cc66](https://github.com/visitscotland/vs-component-library/commit/245cc66164686cdf9162bd6761fcda52487a070a))

### [1.0.22](https://github.com/visitscotland/vs-component-library/compare/v1.0.21...v1.0.22) (2023-09-01)


### 🐛 Bug Fixes

* **product search:** remove label as well ([bd7e6ff](https://github.com/visitscotland/vs-component-library/commit/bd7e6ff5c86f0555bf71c9936c26179a5b503d4a))

### [1.0.21](https://github.com/visitscotland/vs-component-library/compare/v1.0.20...v1.0.21) (2023-09-01)


### 🐛 Bug Fixes

* **product search:** remove vueform multiselect ([7dfcac9](https://github.com/visitscotland/vs-component-library/commit/7dfcac9949ff862252f38c40c4226275fb961645))

### [1.0.20](https://github.com/visitscotland/vs-component-library/compare/v1.0.19...v1.0.20) (2023-09-01)


### 🐛 Bug Fixes

* **product search:** fix window.vs import ([2421277](https://github.com/visitscotland/vs-component-library/commit/24212779e9eb7105aeffb7d7dc3483edabc07654))

### [1.0.19](https://github.com/visitscotland/vs-component-library/compare/v1.0.18...v1.0.19) (2023-09-01)


### 🐛 Bug Fixes

* **webpack:** use transpileOnly for ts modules in vue ([65894d0](https://github.com/visitscotland/vs-component-library/commit/65894d07a5db6f38dcba879139e7f0b3eaec95d3))

### [1.0.18](https://github.com/visitscotland/vs-component-library/compare/v1.0.17...v1.0.18) (2023-09-01)


### 🐛 Bug Fixes

* **psw:** fix build errors for product search widget ([23ae66c](https://github.com/visitscotland/vs-component-library/commit/23ae66c9631b345d344992ce12b418ed1f5fc6f2))

### [1.0.17](https://github.com/visitscotland/vs-component-library/compare/v1.0.16...v1.0.17) (2023-09-01)


### 📝 Docs

* **marketoforms:** improves documentation for form functionality ([3c395d1](https://github.com/visitscotland/vs-component-library/commit/3c395d14f3c33358b3461c01a165c5730047dc21))


### ✨ Features

* add product search ([a32b1a8](https://github.com/visitscotland/vs-component-library/commit/a32b1a8caa5b9842e44a45dd0a258c4f9fc22798))


### ✅ Tests

* **psw:** remove psw tests until they have been refactored ([1066936](https://github.com/visitscotland/vs-component-library/commit/106693646419ef9e05d6d67db4d6ad6158a7727a))


### 🐛 Bug Fixes

* linting fixes ([87d216d](https://github.com/visitscotland/vs-component-library/commit/87d216d5340fb03ea2cb230373e2ea18e1d0b740))
* **psw:** fix psw falling over when no api data is received ([1a138dc](https://github.com/visitscotland/vs-component-library/commit/1a138dc7caa178cdafc3504203d78fbf276da209))


### 🎨 Styling

* **psw:** tidy up styles on new product search widget ([ec9ed19](https://github.com/visitscotland/vs-component-library/commit/ec9ed19078c0c38805530aa16d3199688a881160))
* **psw:** updating styles in product search ([39bcafd](https://github.com/visitscotland/vs-component-library/commit/39bcafd4efbf7359c8d03d3c6666519af9240063))

### [1.0.16](https://github.com/visitscotland/vs-component-library/compare/v1.0.15...v1.0.16) (2023-08-30)


### 🐛 Bug Fixes

* **map:** fix regions for map and add regions story ([c23364d](https://github.com/visitscotland/vs-component-library/commit/c23364d061deb42e21c81c53309b09d3a3b71a18))


### ✨ Features

* **map:** adds new distillery map option ([c1855bc](https://github.com/visitscotland/vs-component-library/commit/c1855bc1938072e00de1df927a5e5c71cbdea512))

### [1.0.15](https://github.com/visitscotland/vs-component-library/compare/v1.0.14...v1.0.15) (2023-08-28)


### 🔖 Others

* **storybook:** upgrade Storybook to latest version ([2dc6e00](https://github.com/visitscotland/vs-component-library/commit/2dc6e00231e445c78ced57239fbe5028a71614f3))


### 🐛 Bug Fixes

* **map:** bug fixes for map component ([3a90089](https://github.com/visitscotland/vs-component-library/commit/3a9008905564c2b7f2d88e9010b6d4bbbb155795))
* **map:** remove console.log statement ([c4b7b72](https://github.com/visitscotland/vs-component-library/commit/c4b7b724f33da1989346a163775bf4e6c76d15ba))

### [1.0.14](https://github.com/visitscotland/vs-component-library/compare/v1.0.13...v1.0.14) (2023-08-18)


### 🐛 Bug Fixes

* **map:** fix map heading so the selected category is always displayed at the top ([b05a08c](https://github.com/visitscotland/vs-component-library/commit/b05a08c4e148294bc39e84bae7d99695bb8dc746))

### [1.0.13](https://github.com/visitscotland/vs-component-library/compare/v1.0.12...v1.0.13) (2023-08-16)


### ✨ Features

* **map:** adds Outlander icons and themes for maps ([50ddc04](https://github.com/visitscotland/vs-component-library/commit/50ddc046c093cbfd75fe6c72b694a1e89ad1c609))


### 🎨 Styling

* **map:** update height of the map module ([542a455](https://github.com/visitscotland/vs-component-library/commit/542a45506725f2afadd78367ef80a774c5fbe7db))


### 🔖 Others

* add badges to README.md ([6dd823a](https://github.com/visitscotland/vs-component-library/commit/6dd823a8caefd786c528242fcd93700b5251b5c7))
* add contribution guidelines and code of conduct ([6bf1764](https://github.com/visitscotland/vs-component-library/commit/6bf176469a094c509bbe1716968d349de8e1f177))
* add contribution links to README.md ([a6a21d4](https://github.com/visitscotland/vs-component-library/commit/a6a21d4b13612571a65459fef3c703d45fe8a8da))
* add contributor covenant badge to README.md ([e97840d](https://github.com/visitscotland/vs-component-library/commit/e97840df67affd041a0883c62262af2d643043a3))
* add email address to code of conduct ([11cd613](https://github.com/visitscotland/vs-component-library/commit/11cd613f4cbc5ff530c1e36622aad2f622e9290d))
* add security.md file ([de88335](https://github.com/visitscotland/vs-component-library/commit/de88335429593053aac434dcba232f35a022e0f0))
* add Yarn Test badge ([0ac5afc](https://github.com/visitscotland/vs-component-library/commit/0ac5afcd2e142cdb5f4dee9d97b023c132cfaf19))
* **package.json:** add Theo to build script ([9f9a5c5](https://github.com/visitscotland/vs-component-library/commit/9f9a5c59b036638c839f61241f5108981c55d96e))
* **release:** 1.0.14 ([7bb68f8](https://github.com/visitscotland/vs-component-library/commit/7bb68f801aca6ce8661a778d8c095cf79603d65b))
* **tokens:** remove auto-generated tokens from the repo ([46b3ebf](https://github.com/visitscotland/vs-component-library/commit/46b3ebf5b46e0d6e9fd1d5488d245318bfa60812))
* update code of conduct ([1315c1a](https://github.com/visitscotland/vs-component-library/commit/1315c1a1a6d652909feb80bbede34df973d41338))
* update email address in security policy ([36cc62e](https://github.com/visitscotland/vs-component-library/commit/36cc62e179b61f0e08aa899391e0fce98a320cdb))
* update email addresses in code of conduct and contribution guide ([63472aa](https://github.com/visitscotland/vs-component-library/commit/63472aa0049045441e315aa81b4ad78358f278a6))
* update README.md with licence info ([2de656b](https://github.com/visitscotland/vs-component-library/commit/2de656b121d4b8c0aeb3dd535729eac4adcd88dd))
* update visitscotland badge URL ([ff387ea](https://github.com/visitscotland/vs-component-library/commit/ff387ea11bc8df7d9602b2f470d5b020cd990091))

### [1.0.12](https://github.com/visitscotland/vs-component-library/compare/v1.0.11...v1.0.12) (2023-08-09)


### 🐛 Bug Fixes

* **third party:** styles in correct place ([4c8b28a](https://github.com/visitscotland/vs-component-library/commit/4c8b28ab004dedd928ffba5cc981a1c50d0324ce))

### [1.0.11](https://github.com/visitscotland/vs-component-library/compare/v1.0.10...v1.0.11) (2023-08-08)


### ✨ Features

* **table:** simply data and fix stacked styles ([c89405b](https://github.com/visitscotland/vs-component-library/commit/c89405b14a0ac65db141fe12cda275660f6e3f98))
* **workflow:** run tests on pr creation ([2a883b5](https://github.com/visitscotland/vs-component-library/commit/2a883b5e80bef222fe0309f64e5c3eec46f12f84))


### 🔖 Others

* fix dependabot issue by upgrading resolutions entries ([0a27a34](https://github.com/visitscotland/vs-component-library/commit/0a27a34f2b409fb0ac1017fa25641dae9d2f6995))


### 🐛 Bug Fixes

* **carousel:** set image urls locally instead of using image from the production site ([2affbe7](https://github.com/visitscotland/vs-component-library/commit/2affbe77e390d8404901d500b0d760c7d7881423))
* **input:** fix validation logic and validation test ([d0060a0](https://github.com/visitscotland/vs-component-library/commit/d0060a0203621e2140341dfc1c63824c2117247b))
* **meganav:** set image urls locally instead of using image from the production site ([8059770](https://github.com/visitscotland/vs-component-library/commit/80597705e68df64844b7e7d117f036e01f3bc9f3))
* **table:** correct table story usage of header ([ccba843](https://github.com/visitscotland/vs-component-library/commit/ccba84309184ce2dd721f7312b176366ad3e0bfa))
* **table:** fix stacked table ([b6773e9](https://github.com/visitscotland/vs-component-library/commit/b6773e915e0ab9cae47f02c3e15d3fecbc0d80d4))
* **tests:** fix logic on carousel throttling test ([d031ff6](https://github.com/visitscotland/vs-component-library/commit/d031ff6481a9ff860e2d2bc5770781af014304d2))
* **tests:** mock map store to and mapboxgl to fix map tests ([ef58f03](https://github.com/visitscotland/vs-component-library/commit/ef58f037d25c364f6bf52f93072747966e064c9c))
* **tests:** mock video for tests and fix other testing logic ([e0bbd36](https://github.com/visitscotland/vs-component-library/commit/e0bbd36c5c76763e6ca691d5829a573bf0262271))
* **tests:** mock window.url.createobjecturl for map wrapper tests ([52ad076](https://github.com/visitscotland/vs-component-library/commit/52ad0764a695424f533537dc2dcf17b18da32990))
* **third party:** fix third party styles and build them in main script ([b9c9753](https://github.com/visitscotland/vs-component-library/commit/b9c97537e50197371f05336126d8f64bc601239f))
* **video:** ensure cookie init status sets to error if onetrust doesn't initiate ([d9caa5d](https://github.com/visitscotland/vs-component-library/commit/d9caa5d30b160232296e3b8e46f264819ca94db3))
* **workflow:** only run on one node version ([3aa0471](https://github.com/visitscotland/vs-component-library/commit/3aa04710e0ff90814f796b1a8b853b38c1338052))

### [1.0.10](https://github.com/visitscotland/vs-component-library/compare/v1.0.9...v1.0.10) (2023-08-04)


### 🐛 Bug Fixes

* **meganav:** ensure search bar is open before focussing input ([7a6311d](https://github.com/visitscotland/vs-component-library/commit/7a6311d478e017c5d7a32894afec9cd88f8b57b6))

### [1.0.9](https://github.com/visitscotland/vs-component-library/compare/v1.0.8...v1.0.9) (2023-08-03)


### 📝 Docs

* **socialshare.stories.js:** wrap the component in an absolutely positioned div ([8907dd7](https://github.com/visitscotland/vs-component-library/commit/8907dd735a3b421e7c26a004597c528d6b737505))


### 🐛 Bug Fixes

* **socialshare.vue:** add container prop set to "body" ([3edc3b8](https://github.com/visitscotland/vs-component-library/commit/3edc3b84932f3b19969caa39a329af71316852b1))
* **ssr:** bring lazy hydrate fix over from other repo ([b707973](https://github.com/visitscotland/vs-component-library/commit/b707973d90ea9212eed71ca30b550c3a1fd1fde8))
