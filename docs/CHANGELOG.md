# Changelog

All notable changes to the Xophz Compass Magic Wand plugin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
