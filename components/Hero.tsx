import Image from 'next/image';
import type { ProfileType } from '@/types';
import { GrMail, GrGithub, GrLinkedin } from 'react-icons/gr';
import { imageUrlFit } from '@/sanity/sanity.utils';

interface HeroProps {
	profile: ProfileType;
}

const Hero = (props: HeroProps) => {
	const { profile } = props;
	const avatarImage = imageUrlFit(profile.profileImage, 500, 500);

	const getLogo = (name: string) => {
		switch(name){
			case 'email':
				return <GrMail />;
			case 'github':
				return <GrGithub />;
			case 'linkedin':
				return <GrLinkedin />;
			default:
				return null;
		}
	}

	return (
		<section
			id="hero"
			className="flex lg:flex-row flex-col-reverse items-start lg:justify-center justify-between gap-x-4 mt-20 mb-16"
		>
			<div className="w-full lg:max-w-2xl">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full uppercase text-center lg:text-left">
					{profile.headline}
				</h1>
				<p className="text-base text-zinc-400 leading-relaxed">
					{profile.bio}
				</p>
				<ul className="flex items-center justify-center lg:justify-start gap-x-3 lg:gap-x-6 my-10">
					{Object.entries(profile.socialLinks)
						.sort()
						.map(([key, value], id) => (
							<li key={id}>
								<a
									href={value}
									rel="noreferer noopener"
									className="flex items-center rounded-full bg-zinc-800 border border-transparent hover:border-zinc-700 py-2 px-4 gap-x-2 gap mb-5 hover:text-sky-400 duration-300"
								>
									{getLogo(key)}
									{key[0].toUpperCase() + key.toLowerCase().slice(1)}
								</a>
							</li>
						))
					}
				</ul>
			</div>
			<div className="w-full mb-8 lg:mb-0">
				<Image
					className="rounded-full w-full max-w-[220px] lg:max-w-[350px] mx-auto"
					src={avatarImage}
					width={500}
					height={500}
					title={profile.fullName}
					alt={profile.fullName}
					priority={true}
				/>
			</div>
		</section>
	);
};

export default Hero;
