import type { ProfileType } from '@/types';

const defaultGroups = [
	{ _key: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
	{ _key: 'backend', title: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'] },
	{ _key: 'mobile', title: 'Mobile', items: ['React Native', 'iOS', 'Android'] },
	{ _key: 'tools', title: 'Tools & content', items: ['Docker', 'Git', 'Sanity', 'Storybook'] },
];

export default function Skills({ profile }: { profile: ProfileType }) {
	const groups = profile.toolkitGroups ?? defaultGroups;
	return <section className="grid grid-cols-1 gap-[18px] border-t border-site-line pt-[46px] pb-10 desktop:grid-cols-[.8fr_1.2fr] desktop:gap-[45px]" id="skills" aria-labelledby="toolkit-title">
		<div><p className="mb-[22px] text-xs leading-normal tracking-[2px] text-site-blue uppercase">The toolkit</p><h2 className="mb-[18px] font-display text-[32px] leading-[1.2] font-medium tracking-[-1px]" id="toolkit-title">{profile.toolkitTitle || 'Built with care.'}</h2>
			<p className="max-w-[450px] text-base leading-[1.8] text-site-muted desktop:max-w-[320px]">{profile.toolkitIntro || 'From interfaces and APIs to mobile apps. Outside of code: family, games, and making music.'}</p></div>
		<div>{groups.map(group => <div className="grid grid-cols-1 gap-[6px] border-b border-site-line py-[15px] text-base leading-[1.65] last:border-b-0 tablet:grid-cols-[140px_1fr] tablet:gap-5" key={group._key}><strong className="font-medium">{group.title}</strong><span className="text-site-muted">{group.items?.join(' · ')}</span></div>)}</div>
	</section>;
}
