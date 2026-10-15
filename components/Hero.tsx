import Image from 'next/image';
import type { ProfileType } from '@/types';
import { imageUrlFit } from '@/sanity/sanity.utils';

export default function Hero({ profile }: { profile: ProfileType }) {
	return <section className="hero" id="hero">
		<div><p className="eyebrow">{profile.fullName} / {profile.headline}</p>
			<h1>{profile.heroTitle || 'Thoughtful interfaces.'}<br /><span>{profile.heroAccent || 'Solid engineering.'}</span></h1>
			<p className="hero-intro">{profile.heroIntro || profile.shortBio || profile.bio}</p>
			<div className="hero-actions"><a className="primary-link" href="#portfolio">Explore selected work <span aria-hidden="true">↓</span></a><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
		</div>
		{profile.profileImage?.asset && <figure className="portrait">
			<Image src={imageUrlFit(profile.profileImage, 600, 600)} alt={profile.profileImage.alt || profile.fullName} width={600} height={600} sizes="(max-width: 520px) 210px, 290px" preload />
			{profile.location && <figcaption><span>Based in</span> {profile.location}</figcaption>}
		</figure>}
	</section>;
}
