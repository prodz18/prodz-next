import type { ProfileType } from '@/types';
import { safeWebURL } from '@/utils/portfolio';

export default function Footer({ profile }: { profile: ProfileType }) {
	const github = safeWebURL(profile.socialLinks?.github);
	const linkedin = safeWebURL(profile.socialLinks?.linkedin);
	return <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.fullName}</span><div>
		{github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
		{linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
		<a href="#hero">Back to top ↑</a>
	</div></footer>;
}
