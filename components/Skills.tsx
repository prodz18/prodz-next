'use client'
import Logo from "./Logos";
import type { SkillsType } from "@/types";

interface SkillsProps {
	list: SkillsType[];
}

const Skills = (props: SkillsProps) => {

	const { list } = props;
	
	return (
		<section id="skills" className="flex flex-col lg:mt-32 mt-20 mb-16">
			<div className="flex-1">
				<h1 className="text-2xl font-bold tracking-tight mb-4 leading-[3.7rem] lg:min-w-[700px] min-w-full uppercase text-center lg:text-left">
					Skills & Toolset
				</h1>
			</div>
			<div className="flex-1">
				{list.map((item, index) => (
					<div
						key={`skill-${index}`}
						className="inline-block rounded-full bg-zinc-800 p-2 mr-4 mb-4"
					>
						<div className="flex flex-row items-center justify-center">
							<div className={`rounded-full bg-${item.title} w-8 h-8 inline-block mr-2`}>
								<div className="flex w-full h-full items-center justify-center">
									<Logo name={item.title} />
								</div>
							</div>
							<span className="pr-2 uppercase text-xs">{item.title.replace('-'," ")}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
