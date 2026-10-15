import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { selectWork } from '@/utils/portfolio';
import { cache } from 'react';
import type { ProfileType, ProjectType } from '@/types';
import { getProfileQuery, getProjectsQuery } from '@/sanity/sanity.query';
import client from '@/sanity/sanity.client';
import { Metadata } from 'next';

export const revalidate = 60;
const getProfile = cache(() => client.fetch<ProfileType>(getProfileQuery));

export const generateMetadata = async (): Promise<Metadata> => {
	const profile: ProfileType = await getProfile();
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
	const profile: ProfileType = await getProfile();
	const projects = await client.fetch<ProjectType[]>(getProjectsQuery);
	const work = selectWork(profile, projects || []);

	return (
		<main className="site-container" id="main-content">
			<Hero profile={profile} />

			<Portfolio featured={work.featured} selected={work.selected} intro={profile.workIntro} />

			<Skills profile={profile} />

			<Contact profile={profile} />
			<Footer profile={profile} />
		</main>
	);
};

export default Home;
