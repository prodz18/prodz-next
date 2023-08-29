'use client'

import { useState } from "react";
import type { ProjectType } from "@/types";
import { imageUrlFit } from '@/sanity/sanity.utils';
import Image from 'next/image';
import Modal from "./Modal";
import { getImageDimensions } from '@sanity/asset-utils';

interface PortfolioProps {
	list: ProjectType[];
}

const PortfolioItem = ({ project } : { project: ProjectType }) => {
	const [open, setOpen] = useState(false);
	const imgPreview = imageUrlFit(project.projectImage, 500, 500);

	const { aspectRatio } = getImageDimensions(project.projectImage);
	
	const displayWidth = 1000;
	const displayHeight = displayWidth / aspectRatio;
	const modalImageUrl = imageUrlFit(project.projectImage, Math.floor(displayWidth), Math.floor(displayHeight));

	return (
		<div className="bg-zinc-800 rounded-lg text-center overflow-hidden">
			<Modal open={open} onOpenChange={setOpen}>
          		<Modal.Button className="w-full h-auto m-0 p-0">
					<Image
						className="w-full"
						src={imgPreview}
						width={500}
						height={500}
						title={project.title}
						alt={project.title}
					/>
          		</Modal.Button>
          		<Modal.Content title={project.title}>
				  <Image
						className="w-full"
						src={modalImageUrl}
						width={displayWidth}
						height={displayHeight}
						title={project.title}
						alt={project.title}
					/>
          		</Modal.Content>
        	</Modal>
		</div>
	);
};

const Portfolio = (props: PortfolioProps) => {

	const { list } = props;

	return (
		<section id="portfolio" className="flex flex-col">
			<div className="flex-1">
				<h1 className="text-2xl font-bold tracking-tight mb-4 leading-[3.7rem] lg:min-w-[700px] min-w-full uppercase text-center lg:text-left">
					Some of my work
				</h1>
			</div>
			<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{list.map((item, index) => <PortfolioItem key={`project-${index}`} project={item} />)}
			</div>
		</section>
	);
};



export default Portfolio;
