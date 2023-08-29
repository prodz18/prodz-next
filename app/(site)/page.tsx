import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import type { ProfileType, ProjectType } from '@/types';
import { getProfileQuery, getProjectsQuery } from '@/sanity/sanity.query';
import client from '@/sanity/sanity.client';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
	const profile: ProfileType = await client.fetch(getProfileQuery);
	return {
		title: `${profile.fullName} - ${profile.headline}`,
		description: profile.shortBio,
		openGraph: {
			title: `${profile.fullName} - ${profile.headline}`,
			description: profile.shortBio,
		},
		creator: profile.fullName,
		applicationName: 'PRODZ.dev',
		keywords: [
			'Fullstack',
			'Developer',
			'Frontend Developer',
			'Backend Developer',
			'Mobile Developer',
			'Next.js',
			'React',
			'JavaScript',
			'React Native',
			'Web Developer',
		],
	};
};

const Home = async () => {
	const profile: ProfileType = await client.fetch(getProfileQuery);
	const projects: ProjectType[] = await client.fetch(getProjectsQuery);

	return (
		<main className="max-w-7xl mx-auto lg:px-16 px-6">
			<Hero profile={profile} />

			<Skills list={profile.skills || []} />

			<Portfolio list={projects || []} />

			<Contact profile={profile} />
		</main>
	);
};

export default Home;
