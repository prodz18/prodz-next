import Image from 'next/image';
import type { ProfileType } from '@/types';
import { imageUrlFit } from '@/sanity/sanity.utils';

export default function Hero({ profile }: { profile: ProfileType }) {
	return (
		<section className="grid grid-cols-1 items-center gap-[30px] pt-[38px] pb-[50px] tablet:grid-cols-[1.4fr_1fr] tablet:gap-[22px] tablet:pt-[50px] desktop:grid-cols-[1.65fr_1fr] desktop:gap-11 desktop:pt-20 desktop:pb-[74px]" id="hero">
			<div>
				<p className="mb-[22px] text-xs leading-normal tracking-[2px] text-site-blue uppercase">{profile.fullName} / {profile.headline}</p>
				<h1 className="mb-6 font-display text-[clamp(32px,8.2vw,39px)] leading-[1.09] font-medium tracking-[-1.7px] tablet:text-[38px] desktop:text-[clamp(36px,5.3vw,57px)] desktop:tracking-[-2.5px]">
					{profile.heroTitle || 'Thoughtful interfaces.'}<br /><span className="text-site-blue">{profile.heroAccent || 'Solid engineering.'}</span>
				</h1>
				<p className="mb-[26px] max-w-[480px] text-sm leading-[1.75] text-site-muted desktop:text-base">{profile.heroIntro || profile.shortBio || profile.bio}</p>
				<div className="flex flex-wrap items-center gap-[22px]">
					<a className="w-full rounded bg-site-blue px-[19px] py-[13px] text-center text-base font-semibold text-site-bg hover:text-site-bg hover:brightness-[1.08] tablet:w-auto" href="#portfolio">Explore selected work <span aria-hidden="true">↓</span></a>
					<a className="w-full border-b-0 border-site-line py-3 text-center text-base tablet:w-auto tablet:border-b" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
				</div>
			</div>
			{profile.profileImage?.asset && (
				<figure className="row-start-1 text-center tablet:row-auto">
					<Image className="mx-auto block aspect-square h-auto w-full max-w-[210px] rounded-full object-cover tablet:max-w-[290px]" src={imageUrlFit(profile.profileImage, 600, 600)} alt={profile.profileImage.alt || profile.fullName} width={600} height={600} sizes="(max-width: 520px) 210px, 290px" preload />
					{profile.location && <figcaption className="mt-[18px] text-xs leading-normal tracking-[.5px] text-site-muted"><span className="text-site-blue">Based in</span> {profile.location}</figcaption>}
				</figure>
			)}
		</section>
	);
}
