export type ProfileType = {
	_id: string;
	fullName: string;
	headline: string;
	profileImage: {
		alt: string;
		image: string;
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		}
	};
	email: string;
	socialLinks: string[];
	skills: SkillsType[];
	bio: string;
	shortBio: string;
};

export type SkillsType = {
	_id: string;
	title: string;
	bgColor: string;
}

export type ProjectType = {
	_id: string;
	title: string;
	type: string;
	description: string;
	projectImage: {
		alt: string;
		image: string;
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		}
	};
}
