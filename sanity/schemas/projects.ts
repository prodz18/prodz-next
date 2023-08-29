import { defineField } from 'sanity';
import { BiTable } from 'react-icons/bi';

const projects = {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	icon: BiTable,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
            validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'type',
			title: 'Type',
            description: 'Web or Mobile',
			type: 'string',
            options:{
                list: ['web','mobile'],
            }
		}),
        defineField({
			name: 'description',
			title: 'Description (optional)',
			type: 'text',
            rows: 8
		}),
        {
			name: 'projectImage',
			title: 'Project Screenshot',
			type: 'image',
			description: 'Upload a screenshot or preview image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
        defineField({
			name: 'visible',
			title: 'Visible',
			type: 'boolean',
            description: 'This will show or hide the icon',
            initialValue: true,
		}),
	],
};

export default projects;