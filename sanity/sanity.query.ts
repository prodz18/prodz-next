import { groq } from 'next-sanity';

const projectFields = groq`
	_id, title, type, description, summary, tags, role, projectURL, sourceURL, visible,
	projectImage { ..., "image": asset->url }
`;

export const getProfileQuery = groq`*[_type == "profile"] | order(_createdAt asc)[0]{
	_id, fullName, headline, bio, shortBio, email, location, socialLinks,
	heroTitle, heroAccent, heroIntro, workIntro,
	toolkitTitle, toolkitIntro, toolkitGroups, contactTitle,
	profileImage { ..., "image": asset->url },
	skills[]-> { _id, title, bgColor },
	featuredProject-> { ${projectFields} },
	selectedProjects[]-> { ${projectFields} }
}`;

export const getSkillsQuery = groq`*[_type == "skills" && visible == true] | order(title asc){
	_id, title, bgColor
}`;

export const getProjectsQuery = groq`*[_type == "projects" && visible == true] | order(_createdAt desc){
	${projectFields}
}`;
