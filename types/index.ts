export type ContentImage = {
	alt?: string;
	image?: string;
	_type: 'image';
	asset: { _ref: string; _type: 'reference' };
};

export type ToolkitGroup = { _key: string; title: string; items: string[] };

export type ProfileType = {
	_id: string;
	fullName: string;
	headline: string;
	profileImage?: ContentImage;
	email?: string;
	location?: string;
	socialLinks?: { email?: string; github?: string; linkedin?: string };
	skills?: SkillsType[];
	bio?: string;
	shortBio?: string;
	heroTitle?: string;
	heroAccent?: string;
	heroIntro?: string;
	workIntro?: string;
	toolkitTitle?: string;
	toolkitIntro?: string;
	toolkitGroups?: ToolkitGroup[];
	contactTitle?: string;
	featuredProject?: ProjectType | null;
	selectedProjects?: (ProjectType | null)[] | null;
};

export type SkillsType = { _id: string; title: string; bgColor?: string };

export type ProjectType = {
	_id: string;
	title: string;
	type?: string;
	description?: string;
	summary?: string;
	tags?: string[];
	role?: string;
	projectURL?: string;
	sourceURL?: string;
	visible?: boolean;
	projectImage?: ContentImage;
};
