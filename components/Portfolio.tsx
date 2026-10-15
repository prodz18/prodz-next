'use client';

import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import type { ProjectType } from '@/types';
import { imageUrl, imageUrlFit } from '@/sanity/sanity.utils';
import { projectTags, safeWebURL } from '@/utils/portfolio';
import { cx } from '@/utils/helpers';
import Modal from './Modal';

const tagClass = 'text-[11px] leading-[1.6] tracking-[.7px] uppercase text-site-muted wrap-anywhere';
const externalLinkClass = 'pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';

function Project({ project, featured = false }: { project: ProjectType; featured?: boolean }) {
	const liveURL = safeWebURL(project.projectURL);
	const sourceURL = safeWebURL(project.sourceURL);
	const dimensions = project.projectImage?.asset ? getImageDimensions(project.projectImage) : undefined;

	return (
		<article className={featured ? 'mb-[38px] grid grid-cols-1 items-center gap-[23px] tablet:grid-cols-[1.35fr_1fr] tablet:gap-6 desktop:gap-9' : 'min-w-0'}>
			<Modal>
				<Modal.Button
					className={cx('block w-full overflow-hidden rounded-[5px] border-0 bg-site-surface px-[14px] pt-[14px] text-left transition-colors duration-200 ease-[ease] hover:bg-site-line motion-reduce:transition-none', featured && 'px-[25px] pt-[23px]')}
					aria-label={`View ${project.title} details`}
				>
					{project.projectImage?.asset ? (
						<Image
							className={cx('block h-[235px] w-full rounded-t-[3px] object-cover object-top', featured ? 'tablet:h-[230px] desktop:h-[270px]' : 'tablet:h-[175px]')}
							src={imageUrlFit(project.projectImage, 900, 650)}
							alt={project.projectImage.alt || `${project.title} screenshot`}
							width={900}
							height={650}
							sizes={featured ? '(max-width: 720px) 100vw, 55vw' : '(max-width: 520px) 100vw, (max-width: 720px) 50vw, 33vw'}
						/>
					) : <span className="flex min-h-[175px] items-center justify-center text-site-muted">{project.title}</span>}
				</Modal.Button>
				<div>
					<p className={cx('text-[11px] leading-normal tracking-[1.7px] text-site-blue uppercase', featured ? 'mb-3' : 'mt-[19px] mb-[9px]')}>{featured ? 'Featured project' : 'Selected work'}</p>
					<h3 className={cx('mb-3 font-display font-medium tracking-[-.8px]', featured ? 'text-[26px]' : 'text-xl', 'leading-[1.3]')}>
						<Modal.Button className="border-0 bg-transparent p-0 text-left hover:text-site-blue pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center">{project.title} <span className="text-lg leading-[inherit] text-site-blue" aria-hidden="true">↗</span></Modal.Button>
					</h3>
					{featured && (project.summary || project.description) && <p className="mb-5 text-sm leading-[1.7] whitespace-pre-line text-site-muted">{project.summary || project.description}</p>}
					<p className={cx(tagClass, featured ? 'mt-5' : 'mt-2')}>{projectTags(project).join(' · ')}</p>
				</div>
				<Modal.Content title={project.title}>
					<p className={cx(tagClass, 'mt-5')}>{projectTags(project).join(' · ')}</p>
					{project.role && <p className="mt-5 text-sm leading-normal">Role: {project.role}</p>}
					{(project.description || project.summary) && <p className="my-5 leading-[1.8] whitespace-pre-line text-site-muted">{project.description || project.summary}</p>}
					{(liveURL || sourceURL) && (
						<div className="my-[22px] flex flex-wrap gap-6 text-site-blue">
							{liveURL && <a className={externalLinkClass} href={liveURL} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}
							{sourceURL && <a className={externalLinkClass} href={sourceURL} target="_blank" rel="noopener noreferrer">View source ↗</a>}
						</div>
					)}
					{project.projectImage?.asset && dimensions && <Image className="mt-6 block h-auto w-full rounded" src={imageUrl(project.projectImage, 1200)} alt={project.projectImage.alt || `${project.title} screenshot`} width={1200} height={Math.round(1200 / dimensions.aspectRatio)} sizes="(max-width: 720px) 90vw, 760px" />}
				</Modal.Content>
			</Modal>
		</article>
	);
}

export default function Portfolio({ featured, selected, intro }: { featured?: ProjectType; selected: ProjectType[]; intro?: string }) {
	if (!featured && !selected.length) return null;

	return (
		<section id="portfolio" aria-labelledby="work-title">
			<div className="mb-7 flex flex-col items-start justify-between gap-2 border-t border-site-line pt-[33px] tablet:flex-row tablet:items-end tablet:gap-5">
				<h2 className="font-display text-[30px] leading-[normal] font-medium tracking-[-1px]" id="work-title">Selected work<span className="text-site-blue">.</span></h2>
				<p className="mb-[5px] text-base leading-[1.6] text-site-muted">{intro || 'A few projects I’m proud to share.'}</p>
			</div>
			{featured && <Project project={featured} featured />}
			<div className="mb-[60px] grid grid-cols-1 gap-x-[23px] gap-y-[34px] tablet:grid-cols-2 desktop:grid-cols-3">{selected.map(project => <Project project={project} key={project._id} />)}</div>
		</section>
	);
}
