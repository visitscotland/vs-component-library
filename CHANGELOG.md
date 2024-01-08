# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
