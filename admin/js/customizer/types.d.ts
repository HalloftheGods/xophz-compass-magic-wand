/**
 * Magic Wand Customizer - Type Declarations
 *
 * Adheres to Quantum Engineering Standards (Protocol 4A: Hierarchical Pure *.d.ts Declarations).
 * Zero runtime JavaScript, zero implicit any, zero em dashes.
 *
 * @package Xophz_Compass_Magic_Wand
 */

export interface CustomizerSectionCategory {
	readonly id: string;
	readonly name: string;
}

export interface CustomizerSectionDefinition {
	readonly id: string;
	readonly name: string;
	readonly category: string;
	readonly desc?: string;
	readonly icon?: string;
	readonly color?: string;
	readonly source?: 'core' | 'classic' | string;
	readonly content?: string;
}

export type SectionLayoutMode = 'boxed' | 'full';
export type SectionPaddingPreset = 'compact' | 'normal' | 'spacious' | 'extra';
export type SectionBgType = 'default' | 'surface' | 'color' | 'gradient' | 'image';
export type SectionTextScheme = 'auto' | 'dark' | 'light';

export interface SectionSettings {
	title?: string;
	subtitle?: string;
	layout?: SectionLayoutMode;
	padding_top?: SectionPaddingPreset;
	padding_bottom?: SectionPaddingPreset;
	bg_type?: SectionBgType;
	bg_color?: string;
	bg_gradient?: string;
	bg_image?: string;
	text_scheme?: SectionTextScheme;
	anchor?: string;
	classes?: string;
	hide_mobile?: boolean;
	hide_desktop?: boolean;
	[key: string]: unknown;
}

export interface SectionItemFeature {
	title?: string;
	desc?: string;
	icon?: string;
	link?: string;
}

export interface SectionItemTestimonial {
	name?: string;
	role?: string;
	quote?: string;
	rating?: number;
	avatar?: string;
}

export interface SectionItemMetric {
	value?: string;
	label?: string;
}

export interface SectionItemPricing {
	name?: string;
	price?: string;
	period?: string;
	features?: string;
	btn_text?: string;
	btn_link?: string;
	is_popular?: boolean;
}

export interface SectionItemTeam {
	name?: string;
	role?: string;
	bio?: string;
	photo?: string;
	social?: string;
}

export interface SectionItemFaq {
	question?: string;
	answer?: string;
}

export interface SectionItemCta {
	title?: string;
	desc?: string;
	btn1_text?: string;
	btn1_link?: string;
	btn2_text?: string;
	btn2_link?: string;
}

export interface SectionItemContact {
	address?: string;
	phone?: string;
	email?: string;
	hours?: string;
	shortcode?: string;
}

export interface SectionItemHero {
	badge?: string;
	headline?: string;
	subtitle?: string;
	btn1_text?: string;
	btn1_link?: string;
	btn2_text?: string;
	btn2_link?: string;
	image?: string;
}

export interface SectionItemGeneric {
	title?: string;
	desc?: string;
	[key: string]: unknown;
}

export type SectionItem =
	| SectionItemFeature
	| SectionItemTestimonial
	| SectionItemMetric
	| SectionItemPricing
	| SectionItemTeam
	| SectionItemFaq
	| SectionItemCta
	| SectionItemContact
	| SectionItemHero
	| SectionItemGeneric;

export interface CustomizerSectionInstance {
	id: string;
	type: string;
	label: string;
	settings?: SectionSettings;
	items?: SectionItem[];
	edits?: Record<string, unknown>;
}

export interface MagicWandLocalizedData {
	readonly sections: CustomizerSectionDefinition[];
	readonly categories: CustomizerSectionCategory[];
	readonly strings: {
		readonly select_section?: string;
		readonly search_placeholder?: string;
		readonly add_section?: string;
		readonly remove?: string;
		readonly no_sections?: string;
	};
	readonly ajaxUrl: string;
	readonly nonce: string;
	readonly showOnFront: string;
	readonly pageOnFront: number;
}

declare global {
	interface Window {
		mhMagicWand?: MagicWandLocalizedData;
		mhCustomizer?: Record<string, unknown>;
		mhOpenAddSectionPanel?: (insertAt?: number | null) => void;
		mhOpenSectionSideRail?: (index: number) => void;
	}
}
