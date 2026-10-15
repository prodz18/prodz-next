import type { ProfileType } from '@/types';

export default function Contact({ profile }: { profile: ProfileType }) {
	return (
		<section className="border-t border-site-line pt-[46px] pb-10" id="contact" aria-labelledby="contact-title">
			<p className="mb-[22px] text-xs leading-normal tracking-[2px] text-site-blue uppercase">Let’s connect</p>
			<h2 className="mb-[25px] font-display text-[clamp(30px,4.3vw,46px)] leading-[1.15] font-medium tracking-[-1px] whitespace-pre-line tablet:tracking-[-1.8px]" id="contact-title">{profile.contactTitle || 'Have something in mind?\nLet’s build it together.'}</h2>
			{profile.email && <a className="border-b border-site-blue pb-[5px] text-[19px] wrap-anywhere text-site-blue" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>}
		</section>
	);
}
