# Changelog

All notable changes to the Xophz Compass Magic Wand plugin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
