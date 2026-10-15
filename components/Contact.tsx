import type { ProfileType } from '@/types';

export default function Contact({ profile }: { profile: ProfileType }) {
	return <section className="contact" id="contact" aria-labelledby="contact-title">
		<p className="eyebrow">Let’s connect</p>
		<h2 id="contact-title">{profile.contactTitle || 'Have something in mind?\nLet’s build it together.'}</h2>
		{profile.email && <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>}
	</section>;
}
