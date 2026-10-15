import type { ProfileType, ProjectType } from '@/types';

// Legacy content stays useful until the profile's explicit selection is saved.
const defaultSelection = ['GoyaPR', 'Guilty v3', 'Arco Financiero', 'Escuela Optometria PR', 'PR Wheels', 'Fuel It (web)'];

export function selectWork(profile: ProfileType, projects: ProjectType[]) {
	const available = projects.filter(project => project.visible !== false);
	const featuredCandidate = profile.featuredProject
		?? available.find(project => project.title === 'ToneHunt')
		?? available[0];
	const featured = featuredCandidate?.visible === false ? undefined : featuredCandidate;
	const candidates = profile.selectedProjects != null
		? profile.selectedProjects
		: [...defaultSelection.map(title => available.find(project => project.title === title)), ...available];
	const seen = new Set(featured ? [featured._id] : []);
	const selected = candidates.filter((project): project is ProjectType => {
		if (!project || project.visible === false || seen.has(project._id)) return false;
		seen.add(project._id);
		return true;
	}).slice(0, 6);
	return { featured, selected };
}

export function projectTags(project: ProjectType) {
	return project.tags?.length ? project.tags : [project.type === 'mobile' ? 'Mobile' : 'Website'];
}

export function safeWebURL(value?: string) {
	if (!value) return undefined;
	try {
		const url = new URL(value);
		return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined;
	} catch { return undefined; }
}
