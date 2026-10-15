import type { ProfileType } from '@/types';
import { safeWebURL } from '@/utils/portfolio';

export default function Footer({ profile }: { profile: ProfileType }) {
	const github = safeWebURL(profile.socialLinks?.github);
	const linkedin = safeWebURL(profile.socialLinks?.linkedin);
	const linkClass = 'pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';

	return (
		<footer className="flex flex-wrap justify-between gap-5 pt-8 pb-[26px] text-sm leading-normal text-site-muted">
			<span>© {new Date().getFullYear()} {profile.fullName}</span>
			<div className="flex flex-wrap gap-5">
				{github && <a className={linkClass} href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
				{linkedin && <a className={linkClass} href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
				<a className={linkClass} href="#hero">Back to top ↑</a>
			</div>
		</footer>
	);
}
