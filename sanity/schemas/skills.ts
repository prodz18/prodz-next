import { defineField } from 'sanity';
import { BiBriefcase } from 'react-icons/bi';

const skills = {
	name: 'skills',
	title: 'Skills & Toolset',
	type: 'document',
	icon: BiBriefcase,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
            description: 'Enter in lowercase. The website will assign an icon for it and display the name in uppercase.',
            validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'bgColor',
			title: 'Background Color',
            description: 'Background color for the icon (ex: #ff0000)',
			type: 'string',
		}),
        defineField({
			name: 'visible',
			title: 'Visible',
			type: 'boolean',
            description: 'This will show or hide the icon',
            initialValue: true,
		}),
	],
};

export default skills;