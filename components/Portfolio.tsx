'use client';

import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import type { ProjectType } from '@/types';
import { imageUrl, imageUrlFit } from '@/sanity/sanity.utils';
import { projectTags, safeWebURL } from '@/utils/portfolio';
import Modal from './Modal';

function Project({ project, featured = false }: { project: ProjectType; featured?: boolean }) {
	const liveURL = safeWebURL(project.projectURL);
	const sourceURL = safeWebURL(project.sourceURL);
	const dimensions = project.projectImage?.asset ? getImageDimensions(project.projectImage) : undefined;
	return <article className={featured ? 'featured-project' : 'selected-project'}>
		<Modal>
			<Modal.Button className="project-image" aria-label={`View ${project.title} details`}>
				{project.projectImage?.asset ? <Image src={imageUrlFit(project.projectImage, 900, 650)} alt={project.projectImage.alt || `${project.title} screenshot`} width={900} height={650} sizes={featured ? '(max-width: 720px) 100vw, 55vw' : '(max-width: 520px) 100vw, (max-width: 720px) 50vw, 33vw'} /> : <span className="project-placeholder">{project.title}</span>}
			</Modal.Button>
			<div className="project-info">
				<p className="project-index">{featured ? 'Featured project' : 'Selected work'}</p>
				<h3><Modal.Button className="project-title">{project.title} <span aria-hidden="true">↗</span></Modal.Button></h3>
				{featured && (project.summary || project.description) && <p className="project-summary">{project.summary || project.description}</p>}
				<p className="project-tags">{projectTags(project).join(' · ')}</p>
			</div>
			<Modal.Content title={project.title}>
				<p className="project-tags">{projectTags(project).join(' · ')}</p>
				{project.role && <p className="project-role">Role: {project.role}</p>}
				{(project.description || project.summary) && <p className="project-description">{project.description || project.summary}</p>}
				{(liveURL || sourceURL) && <div className="project-links">{liveURL && <a href={liveURL} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}{sourceURL && <a href={sourceURL} target="_blank" rel="noopener noreferrer">View source ↗</a>}</div>}
				{project.projectImage?.asset && dimensions && <Image className="project-full-image" src={imageUrl(project.projectImage, 1200)} alt={project.projectImage.alt || `${project.title} screenshot`} width={1200} height={Math.round(1200 / dimensions.aspectRatio)} sizes="(max-width: 720px) 90vw, 760px" style={{ height: 'auto' }} />}
			</Modal.Content>
		</Modal>
	</article>;
}

export default function Portfolio({ featured, selected, intro }: { featured?: ProjectType; selected: ProjectType[]; intro?: string }) {
	if (!featured && !selected.length) return null;
	return <section id="portfolio" aria-labelledby="work-title">
		<div className="section-heading"><h2 id="work-title">Selected work<span>.</span></h2><p>{intro || 'A few projects I’m proud to share.'}</p></div>
		{featured && <Project project={featured} featured />}
		<div className="project-grid">{selected.map(project => <Project project={project} key={project._id} />)}</div>
	</section>;
}
