# Changelog

All notable changes to the Xophz Compass Magic Wand plugin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [26.9.21] - 2026-09-07

### Fixed
- Content Area Mount Boundary (`src/routes/magic-wand/composables/useMagicWandCanvas.ts`): Resolved critical bug where `renderBlocksToCanvas()` created `#magic-wand-root` and appended it directly to `doc.body`, causing blocks to render after the page footer. Upgraded mount resolution to locate semantic content containers (`[data-mw-type="content"]`, `#mw-page-content`, `#mw-front-content`, `main.mh-page-main`, `main.wp-block-group`, `main`, `.entry-content`), clearing placeholder server-rendered content and mounting blocks strictly between the header and footer.
- Post-Footer Fallback Prevention (`src/routes/magic-wand/composables/useMagicWandCanvas.ts`): Implemented strict defensive insertion before `footer`, `#mw-footer`, or `[data-mw-type="footer"]` if no explicit `<main>` container exists, preventing blocks from ever being injected below the footer in third-party themes.
- Canvas Preview Page Synchronization (`src/routes/magic-wand/components/canvas/magic-wand-canvas-stage.vue`, `src/routes/magic-wand/composables/useMagicWandPages.ts`, `src/routes/magic-wand/magic-wand.vue`): Replaced hardcoded `src="/?preview=true"` with reactive `:preview-url="activePreviewUrl"`, dynamically loading the active page permalink with `?preview=true` when switching pages in the topbar.

### Added
- Universal Point-and-Click Element Editing (`src/routes/magic-wand/composables/useMagicWandCanvas.ts`, `src/routes/magic-wand/magic-wand.controller.ts`): Empowered the Magic Wand canvas to inspect and select any element across the viewport:
  - Theme Regions (Header, Footer, Hero, Sidebar): Clicking template parts highlights them with signature Neon Cyan (`#62c9ff`) outlines and triggers `onRegionSelect`, smoothly switching the editor target to the corresponding template part (`slug: 'header'` or `slug: 'footer'`).
  - Direct Inline Text Editing: Clicking any text element (`h1-h6`, `p`, button links, chips, badges) enables `contenteditable="true"` with instantaneous typing feedback and live block model synchronization.
  - Anchored Floating Toolbar: Extended `useMagicWandCanvas` to emit element bounding box coordinates on click and during iframe scroll events, dynamically anchoring `magic-wand-inline-toolbar` directly above the selected element instead of static top placement.
- Semantic Theme Content Contract (`wp-content/themes/xophz-magic-hat/page.php`, `wp-content/themes/xophz-magic-hat/front-page.php`): Added `data-mw-type="content"` to `<main id="mw-page-content">` and `<main id="mw-front-content">` to complete uniform template part tagging alongside `#mw-header` and `#mw-footer`.

## [26.9.20] - 2026-09-07

### Fixed
- Sidebar and Inspector Tab Bar Layout (`src/routes/magic-wand/components/sidebar-left/magic-wand-left-drawer.vue`, `src/routes/magic-wand/components/sidebar-right/magic-wand-inspector.vue`): Resolved vertical whitespace expansion where `v-tabs grow` in vertical flex column containers caused Vuetify 3's `.v-tabs--grow { flex-grow: 1; }` to consume half the drawer height. Constrained tab bars to fixed 40px height with `flex: 0 0 40px !important`.
- Drawer Slider Overflow Suppression (`src/routes/magic-wand/components/sidebar-left/magic-wand-left-drawer.vue`, `src/routes/magic-wand/components/sidebar-right/magic-wand-inspector.vue`): Added `show-arrows="never"` to eliminate unintended slide group slider buttons (`<` and `>`), and styled tab buttons with `min-width: 0 !important`, `flex: 1 1 0`, and compact padding so all four drawer tabs (Elements, Layers, Pages, Tokens) fit evenly across the 300px sidebar width without horizontal overflow.

## [26.9.19] - 2026-09-07

### Added
- Direct Canvas Editing Architecture (`public/js/xophz-compass-magic-wand-preview.js`): Transformed the live preview canvas into a full WYSIWYG editor aligned with the One Page Express paradigm. Headings (h1-h6), paragraphs, buttons (`.wp-block-button__link`), chips, and badges are directly editable via `contenteditable="true"` with changes syncing cleanly to block content. Section images are directly swappable via the WordPress Media Library on click, and buttons/links feature a floating neon dark-slate link popover for fast URL updates.
- Section Elements Navigator (`admin/js/customizer/side-rail.js`, `admin/css/xophz-compass-magic-wand-admin.css`): Introduced an interactive element outline in the Side Rail Content tab that lists every heading, paragraph, button, and image in the section. Clicking an element in the navigator triggers `mh-focus-element`, smoothly scrolling the preview canvas to that element and highlighting it with a project signature Neon Cyan (`#62c9ff`) outline.
- Direct Canvas Quick Guide (`admin/js/customizer/side-rail.js`, `admin/css/xophz-compass-magic-wand-admin.css`): Added Starship dark slate panel (`#0f172a`) in Customizer Screen 3 guiding users to edit text, buttons, and media directly on the canvas.

### Changed
- Customizer Separation of Concerns (`admin/js/customizer/side-rail.js`, `admin/js/customizer/section-list.js`, `admin/js/customizer/section-modal.js`): Retired rigid title, eyebrow, subtitle, and action button inputs from the Side Rail Content tab to avoid clashing with canvas content. Look and feel controls (Container Width, Top and Bottom Padding, Background Styling, and Text Color Scheme) remain cleanly isolated in the Style and Layout tab, and Anchor ID and CSS classes remain in Advanced.
- Non-Destructive Block Persistence (`public/class-xophz-compass-magic-wand-public.php`, `admin/class-xophz-compass-magic-wand-admin.php`): Updated `render_section_type()` to prioritize authentic section block content (`$section['content']`) over static pattern definitions and retired destructive blind regex replacements on inner headings and column cards. Dynamic column item compilation now runs only when sections lack existing block content, preventing corruption of multi-card templates like `about-four-boxes-section`.
- Native Gutenberg parse_blocks Synchronization (`public/class-xophz-compass-magic-wand-public.php`, `admin/class-xophz-compass-magic-wand-admin.php`): Upgraded `get_page_sections()` to parse native Gutenberg blocks directly from `wp_posts.post_content` using WordPress `parse_blocks()` and `serialize_block()`. Edits made in the Gutenberg Site Editor or Block Editor are now instantly detected by the Customizer and Magic Wand without metadata desynchronization, establishing `post_content` as the canonical source of truth across all three editors.

## [26.9.18] - 2026-09-07

### Fixed
- Preview Section Text Editing Debounce Removal (`public/js/xophz-compass-magic-wand-preview.js`): Removed the 750ms keyup debounce timer on `[data-mw-edit]` section fields. Field edits now commit cleanly on `blur` and upon Customizer save/publish triggers, preventing mid-keystroke AJAX requests and focus drops while typing.

## [26.9.17] - 2026-09-06

### Added
- Category 7 Quantum Atoms Section Templates (`includes/sections/category-quantum-atoms.php`): Added 4 flagship section templates leveraging Project Compass Vue 3 Quantum Atoms: `atom-countdown-hero` (launch hero with live `XCountdownClock`, `XChip`, and `XBtn`), `atom-glassmorphic-features` (3-column glassmorphic feature grid with `XCard`, `XChip`, and `XBtn`), `atom-interactive-alert-banner` (announcement bar with tonal `XAlert` and `XBtn`), and `atom-quantum-pricing` (3-tier pricing matrix with `XCard`, `XChip` popular highlights, and `XBtn`).
- Pattern Registry Category (`includes/class-xophz-compass-magic-wand-pattern-registry.php`, `includes/sections-catalog.php`, `admin/js/customizer/wireframes.js`): Registered `quantum-atoms` category in pattern registry, catalog loader (expanding catalog to 67 sections), and wireframe Dashicon map (`dashicons-superhero-alt`).
- Universal Dynamic Section Item Compiler (`public/class-xophz-compass-magic-wand-public.php`): Implemented `compile_section_items()` static compiler to parse Gutenberg column blocks (`<!-- wp:column -->`), dynamically updating item card titles, descriptions, roles, icons, prices, links, and buttons based on user repeater inputs in `$section['items']`. Automatically formats single-paragraph cards (showcase boxes) into bold title and description pairs, injecting `data-mw-item-idx` and `data-mw-item-prop` markers for live preview binding.
- Eyebrow, Action Button, and Countdown Date Compiler (`public/class-xophz-compass-magic-wand-public.php`): Enhanced `render_section_type()` with `preg_replace_callback` execution to safely inject dynamic eyebrow text, custom button text and links (`btn1_text`, `btn1_link`), and countdown target dates (`target_date`) without regex backreference collisions.
- Customizer Side Rail Field Controls (`admin/js/customizer/side-rail.js`): Added dedicated input fields in the Content tab for Section Eyebrow, Action Button Text and URL, and Countdown Target Date (ISO 8601), with two-way synchronization into `syncCurrentSideRailChanges()`.
- Default Archetype Item Schemas (`admin/js/customizer/default-items.js`): Added standard field schemas for `about-big-images-section`, `atom-countdown-hero`, `atom-glassmorphic-features`, and `atom-quantum-pricing`.

### Changed
- Core About Section Upgrade (`includes/sections/category-content-about.php`): Upgraded `about-big-images-section` with `data-mw-edit` bindings, `<x-btn>` atom wrapper, and structured title and description paragraphs across all 3 showcase columns.
- Live Preview Real-Time DOM Synchronization (`public/js/xophz-compass-magic-wand-preview.js`): Enhanced `mh-update-section-preview` listener to dynamically synchronize titles, subtitles, eyebrows, action buttons, countdown dates, and repeated column cards in real time as the user edits fields in Customizer Screen 3. Automatically triggers `window.XophzMagicWandAtoms.mount()` to re-hydrate Vue atoms on live canvas DOM mutations.
- Multi-Mount and Lifecycle Tracking (`src/components/atoms/magic-wand-atoms.ts`): Upgraded `mountMagicWandAtoms()` to support mounting across all `[data-magic-wand-mount]` elements via `querySelectorAll()`. Added WeakMap tracking (`mountedApps`) to support clean unmounting and re-hydration without memory leaks. Rebuilt UMD bundle (`public/dist/magic-wand-atoms.umd.js`) and scoped CSS (`public/dist/magic-wand-atoms.css`).
- Customizer Modal Atoms Hydration (`admin/js/customizer/section-modal.js`, `admin/class-xophz-compass-magic-wand-admin.php`): Enqueued `magic-wand-atoms.umd.js` on Customizer controls screen and mounted Vue atoms inside `#mh-preview-content` when previewing sections in the Section Library modal.

## [26.9.16] - 2026-09-06

### Added
- Customizer Controls Styling Enqueues (`admin/class-xophz-compass-magic-wand-admin.php`): Enqueued WordPress block library stylesheets (`wp-block-library`, `wp-block-library-theme`), theme token definitions (`variables.css`), all 6 modular category stylesheets, and `magic-wand-atoms.css` into Customizer controls scripts to ensure complete CSS coverage within `#mh-preview-pane`.
- Dynamic Global Stylesheet Injection (`admin/class-xophz-compass-magic-wand-admin.php`): Injected `wp_get_global_stylesheet()` as inline CSS on the Customizer controls screen, propagating WordPress `--wp--preset--*` tokens and utility classes into parent window UI components.
- Section Live Preview Pane Styling (`admin/css/xophz-compass-magic-wand-admin.css`): Added comprehensive design token declarations, responsive column flex layout rules, button variant support (`is-style-outline`), `.mh-mock-media-box`, `.mh-mock-video-box`, and card surface elevation rules.

### Changed
- Synchronized Block Inline Style Attributes Across All 63 Section Archetypes (`includes/sections/category-*.php`): Serialized explicit inline `style="..."` attributes across all Gutenberg block markup (`wp:group`, `wp:columns`, `wp:column`, `wp:buttons`, `wp:button`) in all 6 catalog files to match JSON block comment attributes, resolving front-end unstyled rendering.
- Standardized Media Placeholders (`includes/sections/category-content-about.php`, `includes/sections/category-features-numbers.php`): Replaced bare visual showcase text in `stripped-about-four-boxes-section` and `stripped-features-image-cards-section` with styled `.mh-mock-media-box` containers and FontAwesome icons.

## [26.9.15] - 2026-09-06

### Added
- Vite Packaging Pipeline for Magic Wand Atoms (`vite.magic-wand.config.js`): Configured dedicated Vite library build pipeline outputting tree-shaken UMD bundle (`public/dist/magic-wand-atoms.umd.js`) and scoped CSS (`public/dist/magic-wand-atoms.css`) exposing `XophzAtoms` with zero runtime JSX dependencies.
- Magic Wand Atoms Runtime Entrypoint (`src/components/atoms/magic-wand-atoms.ts`): Standalone Vue 3 mounting pipeline that auto-installs tree-shaken Vuetify primitives (`VBtn`, `VCard`, `VChip`, `VDivider`, `VDialog`, `VAlert`) and project Compass `X*` atoms (`XBtn`, `XCard`, `XChip`, `XDivider`, `XDialog`, `XIcon`, `XAlert`, `XCountdownClock`, `XMarkdown`) onto custom elements or containers.
- Atoms Build Script (`package.json`): Added `"build:magic-wand:atoms": "vite build --config vite.magic-wand.config.js"` to monorepo scripts.
- Atoms Manifest (`public/dist/atoms-manifest.json`): Published machine-readable component manifest documenting registered atoms, attributes, props, and Gutenberg tag bindings for AI and block generators.
- Dynamic Anatomy Engine for Wireframe SVGs (`admin/js/customizer/wireframes.js`): Replaced 436-line switch-case wireframe generator with an anatomy-driven vector generator. Supports 9 distinct layout archetypes (`hero-overlap`, `hero-centered`, `split-right-media`, `grid`, `pricing`, `testimonials`, `faq`, `cta`, `numbers`) with proportional columns, badges, cards, buttons, and icons.
- Section Anatomy Annotations across all 6 Section Catalogs (`includes/sections/`): Annotated 100% of the 63 canonical section patterns (`category-hero-overlap.php`, `category-content-about.php`, `category-features-numbers.php`, `category-team-testimonials.php`, `category-cta-contact.php`, `category-pricing-portfolio.php`) with explicit layout anatomy (`layout`, `columns`, `hasCards`, `hasMedia`, `hasButtons`, `hasIcons`, `hasBadge`).
- Automatic Fallback Layout Derivation (`admin/js/customizer/wireframes.js`): Added `deriveAnatomyFromContent()` to parse Gutenberg block markup via pattern matching to gracefully resolve wireframe layouts when explicit anatomy metadata is absent.

### Changed
- Customizer Section Library Modal (`admin/js/customizer/section-modal.js`): Updated `getWireframeSvg` calls to pass complete section definitions, enabling 1:1 dynamic SVG rendering corresponding to the actual section structure instead of generic repeating wireframes.
- Script and Style Enqueues (`public/class-xophz-compass-magic-wand-public.php`, `includes/class-xophz-compass-magic-wand.php`): Registered and enqueued `magic-wand-atoms` runtime script and stylesheet on frontend pages and Customizer previews where atoms are detected.
- Preview Page Detection & Active Page Title Resolution (`includes/class-xophz-compass-magic-wand.php`, `public/class-xophz-compass-magic-wand-public.php`, `admin/js/xophz-compass-magic-wand-customizer.js`, `admin/css/xophz-compass-magic-wand-admin.css`): Hooked `enqueue_preview_scripts` to `wp_enqueue_scripts` instead of `customize_preview_init` so the queried object ID is parsed and accessible. Resolved `$page_id` and `$page_title` from `get_queried_object_id()`, fixing the bug where the active page badge erroneously displayed "Home" on non-front pages such as Services. Added native styling and event binding for the Homepage Settings subnavigation link with smooth focus chaining.
- Customizer Section & Navigation Emoji Styling (`admin/css/xophz-compass-magic-wand-admin.css`): Styled `.mh-section-emoji` and `.mh-nav-icon` with 1.45em font scaling, inline-block alignment, drop shadow, and tactile hover scale for enriched visual hierarchy across Customizer section lists and menus.

## [26.9.14] - 2026-09-06

### Added
- Modular Customizer Module Architecture (`admin/js/customizer/`): Decomposed the monolithic 1,998-line `xophz-compass-magic-wand-customizer.js` into crystalline single-responsibility modules coordinated under the `window.mhCustomizer` namespace.
  - `types.d.ts`: Pure TypeScript definitions for Customizer sections, instances, items, and settings adhering to Quantum Engineering Standards Protocol 4A.
  - `utils.js`: Shared utility module containing HTML attribute escaping (`escAttr`), anchor slugification (`slugify`), and self-cleaning timer debouncing (`createDebounce`).
  - `wireframes.js`: Lightweight SVG wireframe illustration generator (`getWireframeSvg`) and category Dashicon mapping (`catIconMap`) with zero external bitmap dependencies.
  - `default-items.js`: Authentic section archetype content schema provider (`getDefaultItems`) completely free of synthetic personal identities.
  - `state.js`: Encapsulated state and storage controller managing active page tracking, cache, and WordPress AJAX synchronization using 2-stage atomic booleans.
  - `section-modal.js`: Section Library Modal manager featuring category navigation, source filtering, 2-stage atomic boolean search filtering, and responsive device live preview.
  - `side-rail.js`: Native WordPress Customizer 3rd Controls Screen drawer engine with tabbed navigation, item accordion repeater, background styling, and debounced preview synchronization.
  - `section-list.js`: Screen 2 Page Settings rows controller with jQuery UI drag-and-drop sortable, item action triggers, and homepage template switching.

### Changed
- Customizer Orchestrator Entrypoint (`admin/js/xophz-compass-magic-wand-customizer.js`): Streamlined into a lightweight 114-line lifecycle orchestrator initializing submodules and binding previewer postMessage events (`mh-preview-page-loaded`, `mh-page-sections-updated`, `mh-open-section-side-rail`).
- Admin Script Enqueueing (`admin/class-xophz-compass-magic-wand-admin.php`): Enqueued all customizer submodules in structured dependency sequence before the orchestrator script.
- Zero-Inline-Style Compliance (`admin/css/xophz-compass-magic-wand-admin.css`): Added dedicated CSS classes (`.mh-active-page-badge`, `.mh-modal-empty-state`, `.mh-preview-empty`) and Level 4 CSS variables (`--mh-badge-color`, `--mh-swatch-color`, `--mh-grad-val`) to replace all inline styles.

### Removed
- Monolithic Customizer Script: Purged 1,998-line monolithic script structure.
- Synthetic Mock Data: Purged all hardcoded mock identities, fake personal names, dummy emails, and fake phone numbers from default section items.

## [26.9.13] - 2026-09-06

### Added
- Modular Category Pattern Modules (`includes/sections/`): Created 6 modular category pattern definitions (`category-hero-overlap.php`, `category-content-about.php`, `category-features-numbers.php`, `category-team-testimonials.php`, `category-cta-contact.php`, `category-pricing-portfolio.php`) housing all 63 canonical section patterns.
- 100% Native Gutenberg Core Block Patterns: Converted all 63 classic section templates into pure native WordPress core blocks (`core/group`, `core/columns`, `core/column`, `core/heading`, `core/paragraph`, `core/buttons`, `core/button`), eliminating all raw 2017 HTML elements (`.gridContainer`, `.flexbox-list`) inside `wp:group` to resolve Site Editor validation errors ("Block contains unexpected or invalid content").
- Magic Wand Category Slugs & Scoped Wrappers: Standardized all 63 section patterns to use `magic-wand-*` category slugs and `.mh-section-*` container classes.

### Changed
- Modular Sections Catalog Orchestrator (`includes/sections-catalog.php`): Refactored `mh_get_sections_catalog()` into a modular orchestrator that dynamically merges category definitions from `includes/sections/`, loading all 63 sections cleanly.
- Public and Preview Enqueue Modernization (`public/class-xophz-compass-magic-wand-public.php`): Added fallback enqueuing for all 6 modular category stylesheets in frontend rendering and Customizer live preview with zero legacy stylesheet references.
- Design Token Integration: Integrated theme.json presets (`var:preset|spacing|*`, `has-surface-body-background-color`, `has-brand-base-color`) and CSS custom properties across all section markup.

### Fixed
- Section Insertion Preview Refresh Synchronization (`admin/js/xophz-compass-magic-wand-customizer.js`): Fixed race condition where inserting a section in the Customizer required manually refreshing the browser for it to appear. Updated `saveSections` to accept an `onComplete` callback triggered when the asynchronous `mh_save_page_sections` AJAX request completes, and updated `insertSectionById` to delay `api.previewer.refresh()` until the database metadata and block content are fully committed, accompanied by a defensive timeout fallback.
- Section Library Modal Blank State (`includes/sections/*.php`, `includes/sections-catalog.php`, `admin/js/xophz-compass-magic-wand-customizer.js`): Fixed issue where Customizer Section Library modal came up blank with 0 matching sections. Stripped redundant `magic-wand-` prefix from all 63 section category keys in `includes/sections/` to align with the canonical taxonomy slugs (`hero`, `clients`, `features`, etc.) in the pattern registry. Added defensive category normalization in `mh_get_sections_catalog()` and `xophz-compass-magic-wand-customizer.js` to ensure consistent category matching and wireframe SVG generation.

### Removed
- Monolithic Stylesheet Purge: Permanently removed duplicated 5,307-line legacy `public/css/one-page-express-sections.css`.
- Legacy URL and Shortcode Purge: Purged all occurrences of `onepageexpress.com`, `tag_companion_uri`, and legacy `[one_page_express_*]` shortcodes across all section definitions.

## [26.9.12] - 2026-09-06

### Added
- Unified 63-Section Catalog (`includes/sections-catalog.php`): Combined 9 core Magic Hat modular patterns with 54 classic One Page Express archetypes across 18 normalized categories (`hero`, `overlapable`, `about`, `features`, `content`, `cta`, `testimonials`, `numbers`, `clients`, `team`, `latest_news`, `contact`, `portfolio`, `woocommerce`, `gallery`, `pricing`, `faq`, `subscribe`).
- Add Section Modal Sidebar Navigation (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Added dedicated left side navigation with category Dashicons and dynamic count badges reflecting active source filters and live search queries.
- Interactive Live Preview Pane (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Added slide-over live preview canvas rendering pure mock markup with responsive device viewport toggles (Desktop 100%, Tablet 768px, Mobile 375px) and "+ Insert Section" action button.
- Comprehensive Vector SVG Wireframes (`admin/js/xophz-compass-magic-wand-customizer.js`): Expanded `getWireframeSvg` across all 18 categories, generating crisp, lightweight inline SVG wireframes with zero external image dependencies.

### Changed
- Add Section Library Modal (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Redesigned modal with segmented source filter pills (All, Core, Classic), live search with clear button, and dual card hover actions (Preview and + Add).
- Pure Mock Architecture (`includes/sections-catalog.php`): Replaced all external image references in classic section archetypes with pure CSS mock containers (`mh-mock-media-box`, `mh-mock-avatar-box`, `mh-mock-video-box`, `mh-mock-client-box`).

### Fixed
- Section Deletion and Empty State Persistence (`admin/class-xophz-compass-magic-wand-admin.php`, `public/class-xophz-compass-magic-wand-public.php`, `admin/js/xophz-compass-magic-wand-customizer.js`, & `public/js/xophz-compass-magic-wand-preview.js`): Fixed issue where deleting sections failed to persist. Resolved nonce validation mismatch in `ajax_save_page_sections` to accept both query parameters (`nonce` and `_ajax_nonce`) and both security tokens (`mh_switch_template_nonce` and `mh_page_builder_nonce`). Ensured `wp_update_post` clears `post_content` when all sections are removed. Updated `get_page_sections` and `sync_sections_to_front_page` to respect empty arrays so deleted sections are not resurrected from outdated post content. Prevented preview iframe DOM harvesting from repopulating deleted sections during live Customizer sessions.

### Removed
- Purged Copied Stock Assets: Purged all copied bitmap PNG preview files and external image folders from the plugin directory.

## [26.9.11] - 2026-09-06

### Added
- Canonical One Page Express Sections Catalog (`includes/sections-catalog.php`): Registered all 54 One Page Express sections across 16 categories (`overlapable`, `about`, `features`, `content`, `cta`, `testimonials`, `numbers`, `clients`, `team`, `latest_news`, `contact`, `portfolio`, `woocommerce`, `gallery`, `pricing-tables`, `subscribe`) wrapped in Gutenberg full-width group block markup.
- Section Assets and Previews (`admin/images/sections/`, `public/images/sections/`, `public/css/one-page-express-sections.css`): Mirrored all 54 preview PNG thumbnails and section stylesheets into the companion plugin.

### Changed
- Gutenberg Block Pattern Registry (`includes/class-xophz-compass-magic-wand-pattern-registry.php`): Connected pattern registry directly to the 54 canonical One Page Express section archetypes, registering all 16 categories with WordPress core block patterns.
- Customizer Add Section Modal (`admin/js/xophz-compass-magic-wand-customizer.js`): Updated modal to group sections under gray uppercase category bars, displaying preview cards with dark caption pills across the bottom and hover "+ Add Section" overlays.
- Frontend Section Renderer (`public/class-xophz-compass-magic-wand-public.php`): Updated `render_section_type` to resolve all 54 section archetypes and dynamically map companion image placeholders to local theme assets.

## [26.9.10] - 2026-09-06

### Changed
- Standard WordPress Customizer Third Controls Screen (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Re-engineered section side rail into an authentic WordPress Customizer Third Controls Screen with native `.customize-section-title` header, standard `.customize-section-back` navigation button, `Customizing ▸ Page Settings` breadcrumb, and WordPress core typography and control cards.
- Standard WordPress Tab Navigation (`admin/css/xophz-compass-magic-wand-admin.css` & `admin/js/xophz-compass-magic-wand-customizer.js`): Replaced custom pill buttons with WordPress admin tab navigation (`.mh-screen3-tabs`) styled to match core Customizer sub-navigation.
- Native Content Items Accordion (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Restructured item repeaters to follow the WordPress Customizer Menu Item accordion pattern, featuring collapsible cards with drag handle, title, toggle arrow, and delete link.
- In-Place Third Controls Screen Positioning (`admin/css/xophz-compass-magic-wand-admin.css` & `admin/js/xophz-compass-magic-wand-customizer.js`): Eliminated horizontal translateX translation and protrusion into the preview canvas. Positioned `#mh-section-side-rail` strictly within the 300px Customizer sidebar (`top: 45px; bottom: 45px; left: 0; width: 100%`) with clean in-place display toggling, keeping the Customizer header and footer actions permanently accessible.

### Fixed
- Page Settings Section Item Sizing and Layout (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Resolved squished and wrapped text in Screen 2 (`Page Settings`) section rows. Replaced the crowded horizontal flex row with spacious, clickable section cards displaying full section titles, type/layout meta pills, clean action buttons, and drag handles.
- Link Popover Initial Visibility Leak (`public/js/xophz-compass-magic-wand-preview.js`): Fixed conflicting inline styles (`display:none;` followed by `display:flex;`) that overrode hiding and caused popovers to render permanently in the preview canvas on initial load.

### Removed
- Obsolete Shortcode Popover (`public/js/xophz-compass-magic-wand-preview.js`): Removed unused `#mw-shortcode-popover` element, styles, and click listeners from the preview canvas.

## [26.9.9] - 2026-09-06

### Added
- One Page Express Section Settings Side Rail (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Slide-in child drawer panel for fine-grained section customization directly from the Customizer Page Settings section. Features dedicated Content, Style & Layout, and Advanced configuration tabs.
- Dynamic Section Items Manager (`admin/js/xophz-compass-magic-wand-customizer.js`): Interactive accordion-card repeater allowing users to add, edit, reorder, and remove section cards (features, testimonials, pricing tiers, metrics, team members, FAQ items) with real-time preview sync.
- Modular Section Style & Background Engine (`admin/js/xophz-compass-magic-wand-customizer.js` & `public/class-xophz-compass-magic-wand-public.php`): Per-section container width toggle (Boxed vs Full Width), vertical padding slider, text color scheme, and multi-mode backgrounds (Transparent, Solid Color, Linear Gradient, Background Image via WP Media Library).
- Real-Time Canvas Section Sync (`public/js/xophz-compass-magic-wand-preview.js`): Bi-directional PostMessage event handling (`mh-update-section-preview` and `mh-open-section-side-rail`) updating section layout, background, and titles without full-page reloads.
- Media Uploader Integration (`admin/class-xophz-compass-magic-wand-admin.php`): Enqueued `wp_enqueue_media()` in Customizer controls to support image selection for section backgrounds and item media.

### Fixed
- Page Sections Persistence & Registration (`admin/class-xophz-compass-magic-wand-admin.php`, `public/class-xophz-compass-magic-wand-public.php`, `includes/class-xophz-compass-magic-wand-migration.php`, & `includes/class-xophz-compass-magic-wand-compiler.php`): Resolved issue where Page Settings showed "No sections added" despite sections existing on the page. Eliminated erroneous `delete_post_meta` and `remove_theme_mod` calls that wiped out section configurations upon saving or viewing pages. Added dual persistence to both `_mh_page_sections` post meta and `mh_page_sections` theme mod in `ajax_save_page_sections` and `sync_sections_to_front_page`.
- Post Content Block Parsing Fallback (`public/class-xophz-compass-magic-wand-public.php`): Introduced `get_page_sections()` with automatic Gutenberg block parsing. If section metadata is missing or empty, it scans `post_content` for `.mh-section` block containers, reconstructs the section configurations, and auto-populates the database so the Customizer always reflects live page sections.
- In-Canvas DOM Section Harvesting Fallback (`public/js/xophz-compass-magic-wand-preview.js` & `admin/js/xophz-compass-magic-wand-customizer.js`): Added live DOM harvesting in preview iframe. If preview boots with empty settings, it harvests `.mh-section` elements directly from the canvas DOM, updates the Customizer `mh_page_sections` setting, and immediately renders section rows in the Page Settings sidebar.
- Section Overlay Actions Execution (`public/js/xophz-compass-magic-wand-preview.js`): Fixed overlay action buttons (Settings, Width, Move Up, Move Down, Delete) that appeared unresponsive. Added direct in-canvas DOM manipulation for instant visual feedback: Move Up and Move Down physically reorder section elements in the iframe DOM, Width toggles container width classes immediately, and Delete smoothly removes the section node.
- Section Settings Side Rail Activation (`admin/js/xophz-compass-magic-wand-customizer.js` & `admin/css/xophz-compass-magic-wand-admin.css`): Repositioned `#mh-section-side-rail` to anchor directly to `#customize-controls`, ensuring the slide-in drawer displays reliably regardless of whether the Page Settings section was previously expanded. Configured automatic expansion of `mh_page_builder` upon opening the side rail and added visibility toggling to prevent phantom overflow.
- Preview Page Data and Setting Synchronization (`public/class-xophz-compass-magic-wand-public.php` & `admin/js/xophz-compass-magic-wand-customizer.js`): Resolved empty sections cache race condition by localizing initial `sections`, `ajaxUrl`, and `nonce` in `mhPreviewData`, ensuring `mh-preview-page-loaded` preserves active section records and keeps the Customizer `mh_page_sections` setting synchronized.
- Section Settings Overlay Visual Contrast (`public/js/xophz-compass-magic-wand-preview.js` & `public/class-xophz-compass-magic-wand-public.php`): Replaced inverted `--mh-color-text-heading` color token with guaranteed Starship Dark Slate (`#0f172a`) pill badge design (`.mw-preview-badge`), eliminating solid white overlays in dark/circadian modes. Standardized overlay buttons to use native Dashicons matching header, hero, and footer overlay controls.
- Debounced Keyup Text Saving (`admin/js/xophz-compass-magic-wand-customizer.js` & `public/js/xophz-compass-magic-wand-preview.js`): Added 750ms keyup debounce delay to side rail settings inputs, section row labels, and in-canvas `[data-mw-edit]` elements, eliminating immediate save requests on every keystroke and preventing jarring background re-renders during typing.
- In-Canvas Inline Text Focus Retention (`public/js/xophz-compass-magic-wand-preview.js`): Prevented click events on `.mw-editable` and `[data-mw-edit]` elements from triggering parent Customizer control focus, ensuring direct on-site editing without losing cursor focus.

## [26.9.8] - 2026-09-06

### Added
- Native Gutenberg Pattern Registry (`includes/class-xophz-compass-magic-wand-pattern-registry.php`): Registered native block patterns for core modular section archetypes (hero, features, about, pricing, cta, contact, numbers, faq).
- One-Way Block Migration Tool (`includes/class-xophz-compass-magic-wand-migration.php`): Added non-destructive converter transforming legacy `_mh_page_sections` post meta into native Gutenberg block comments in `post_content`, retiring legacy metadata cleanly.

### Changed
- Refactored Public Frontend (`public/class-xophz-compass-magic-wand-public.php`): Streamlined public display from 832 lines to 160 lines. Removed destructive `the_content` filter override that previously hid Gutenberg Site Editor content.
- Standardized REST Envelopes (`includes/class-xophz-compass-magic-wand-compiler.php`): Unified all `magic-wand/v1` REST endpoints to output structured `{ success: true, data: ..., meta: ... }` response envelopes.
- Dynamic Section Catalog (`admin/class-xophz-compass-magic-wand-admin.php`): Connected Customizer section catalog directly to the Gutenberg Pattern Registry.
- Design Token Modernization (`public/js/xophz-compass-magic-wand-preview.js` & `public/css/xophz-compass-magic-wand-public.css`): Replaced hardcoded hex colors with CSS variables and removed CSS `!important` flags.

### Fixed
- Tripartite Conflict Resolution: Eliminated state desynchronization between WordPress Customizer, Gutenberg Site Editor, and Magic Wand Studio by establishing native Gutenberg grammar in `post_content` as the single source of truth.
- Zero Mock Data Compliance: Purged all synthetic image URLs (Picsum, Unsplash, and placehold.co) across public rendering and editor libraries.
- Activator Markup Error (`includes/class-xophz-compass-magic-wand-activator.php`): Corrected malformed HTML tags in fatal error output.

## [26.9.7] - 2026-09-05

### Added
- Page-Specific Builder Sections Scoping (`public/class-xophz-compass-magic-wand-public.php`): Scoped section loading and rendering to `_mh_page_sections` post meta per page, preventing sections from leaking across all site pages.
- AJAX Page Section Persister (`admin/class-xophz-compass-magic-wand-admin.php` & `includes/class-xophz-compass-magic-wand.php`): Added `mh_save_page_sections` endpoint to save sections specifically to the target page ID and compile native Gutenberg blocks into its `post_content`.
- Preview Page Synchronization (`public/js/xophz-compass-magic-wand-preview.js` & `admin/js/xophz-compass-magic-wand-customizer.js`): Added live bi-directional messaging between preview frame and Customizer controls (`mh-preview-page-loaded` and `mh-page-sections-updated`) with an "Editing Page: [Title]" indicator badge.

### Fixed
- Global Page Hijacking: Fixed `render_page_builder_content` replacing content across all pages (`is_page()`). Pages without custom sections now cleanly render their original post content.

## [26.9.6] - 2026-09-05

### Added
- Modular Section Width Controls (`admin/js/xophz-compass-magic-wand-customizer.js`): Added interactive layout toggle button (`[ ⛶ Full | ◻ Boxed ]`) on each section row within the Customizer Page Builder sidebar list, allowing instant switching between 100% full-bleed edge-to-edge layout and constrained 1200px boxed container.
- Dynamic Full-Width CSS and Gutenberg Serialization (`public/class-xophz-compass-magic-wand-public.php`): Injected `.mh-section-full-width` and `.mh-section-boxed` classes with responsive padding into frontend markup and synced `{"layout":{"type":"default"}}` vs `{"layout":{"type":"constrained"}}` to native Gutenberg blocks.

## [26.9.5] - 2026-09-05

### Added
- Universal 31-Section plug-and-play pattern suite across 10 categories: Heroes, Features, About, Social Proof, Metrics, Pricing, Team, FAQ, CTA, and Contact/Blog.
- Responsive visual section library modal in Customizer with category tabs, search filter, and 1-click insertion.
- Visual SVG wireframe preview thumbnails embedded across all 34 section cards in the catalog modal.
- Front Page Template Switcher backend endpoint (`mh_switch_front_template`) to toggle between Magic Hat canvas and blog posts feed.
- Guided blank canvas empty state for live Customizer preview when no sections are added yet.
- Inter-section hover insertion notches (`+ Add Section`) on direct canvas with targeted index insertion.
- Floating inline text formatting toolbar with Bold, Italic, Underline, and clear formatting commands.
- Automatic Gutenberg block serialization to front page upon Customizer publish via `customize_save_after`.

### Changed
- Modernized canvas hover overlays, image pickers, and popovers with clean dark slate and indigo accents.
- Updated `render_page_builder_content` to apply subtle alternating section surface backgrounds (`#ffffff` / `#f8fafc`).

### Fixed
- Customizer sidebar initialization crash: Removed obsolete `$panel.on(...)` reference in `xophz-compass-magic-wand-customizer.js` that threw fatal `ReferenceError: $panel is not defined`.
- Replaced legacy tan `#c3a486` accents and outdated single-column slide-out panel.

## [26.9.4] - 2026-09-04

### Added
- Extended REST API endpoints for native Gutenberg block site editing under `magic-wand/v1`:
  - `GET /magic-wand/v1/pages`: Retrieve WordPress pages/posts with status, template, and block flags.
  - `GET /magic-wand/v1/page-content`: Retrieve raw Gutenberg block markup, parsed AST, and rendered preview HTML.
  - `POST /magic-wand/v1/save-page`: Persist block markup natively into WordPress post content via `wp_update_post()`.
  - `POST /magic-wand/v1/create-page`: Instant page creation directly from the Magic Wand visual editor.
  - `GET /magic-wand/v1/templates`: List theme block templates and template parts (`header`, `footer`, `blank`, `index`).
  - `POST /magic-wand/v1/save-template`: Save block markup to active child theme or template parts.
  - `GET /magic-wand/v1/patterns`: Enumerate Magic Hat block patterns (`hero`, `features`, `cta`, `header`, `footer`).
  - `POST /magic-wand/v1/render-blocks`: Server-side rendering of Gutenberg block comments via `do_blocks()`.
  - `GET /magic-wand/v1/theme-tokens`: Extract color palette, typography scales, and spacing presets from `theme.json`.

### Changed
- Refactored `Xophz_Compass_Magic_Wand_Compiler` to support both classic PHP compilation and modern Full Site Editing block templates.
- Purged synthetic mock user arrays and fake emails from `class-xophz-compass-magic-wand-public.php` in adherence to Zero Mock Data standards.

### Fixed
- Resolved PHP parse error in `class-xophz-compass-magic-wand-compiler.php` caused by a literal closing tag inside a comment prematurely dropping out of PHP mode.
