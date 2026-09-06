# Changelog

All notable changes to the Xophz Compass Magic Wand plugin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
