export type Outfit = {
	id: string;
	name: string;
	description: string;
	type: {
		value: string;
		displayValue: string;
		backendValue: string;
	};
	rarity: {
		value: string;
		displayValue: string;
		backendValue: string;
	};
	series?: {
		value: string;
		image?: string;
		colors: Array<string>;
		backendValue: string;
	};
	set?: {
		value?: string;
		text?: string;
		backendValue: string;
	};
	introduction?: {
		chapter: string;
		season: string;
		text: string;
		backendValue: number;
	};
	images: {
		smallIcon: string;
		icon: string;
		featured: string;
		other: any;
	};
	variants?: Array<{
		channel: string;
		type: string;
		options: Array<{
			tag: string;
			name?: string;
			image: string;
			unlockRequirements?: string;
		}>;
	}>;
	searchTags?: Array<string>;
	gameplayTags: Array<string>;
	metaTags?: Array<string>;
	showcaseVideo?: string;
	dynamicPakId: any;
	displayAssetPath?: string;
	definitionPath: string;
	path: string;
	added: string;
	shopHistory?: Array<string>;
	builtInEmoteIds?: Array<string>;
	unlockRequirements?: string;
	exclusiveDescription?: string;
};
