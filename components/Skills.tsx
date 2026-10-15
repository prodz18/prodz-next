import type { ProfileType } from '@/types';

const defaultGroups = [
	{ _key: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
	{ _key: 'backend', title: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'] },
	{ _key: 'mobile', title: 'Mobile', items: ['React Native', 'iOS', 'Android'] },
	{ _key: 'tools', title: 'Tools & content', items: ['Docker', 'Git', 'Sanity', 'Storybook'] },
];

export default function Skills({ profile }: { profile: ProfileType }) {
	const groups = profile.toolkitGroups ?? defaultGroups;
	return <section className="toolkit-section" id="skills" aria-labelledby="toolkit-title">
		<div><p className="eyebrow">The toolkit</p><h2 id="toolkit-title">{profile.toolkitTitle || 'Built with care.'}</h2>
			<p>{profile.toolkitIntro || 'From interfaces and APIs to mobile apps. Outside of code: family, games, and making music.'}</p></div>
		<div>{groups.map(group => <div className="skill-group" key={group._key}><strong>{group.title}</strong><span>{group.items?.join(' · ')}</span></div>)}</div>
	</section>;
}
