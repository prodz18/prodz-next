import { defineField } from 'sanity';
import { BiTable } from 'react-icons/bi';

const projects = {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	icon: BiTable,
	fields: [
		defineField({ name: 'summary', title: 'Short summary', type: 'text', rows: 3, description: 'Shown beside the featured screenshot. Falls back to Description.', validation: rule => rule.max(350) }),
		defineField({ name: 'tags', title: 'Display tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' }, description: 'For example: Community, Music, Web application. Falls back to Type.', validation: rule => rule.max(6).unique() }),
		defineField({ name: 'role', title: 'Your role', type: 'string', description: 'Shown in the project details.' }),
		defineField({ name: 'projectURL', title: 'Live project URL', type: 'url', validation: rule => rule.uri({ scheme: ['http', 'https'] }) }),
		defineField({ name: 'sourceURL', title: 'Source code URL', type: 'url', validation: rule => rule.uri({ scheme: ['http', 'https'] }) }),
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
            description: 'Show this project on the website. Turning this off also hides it from featured and selected work.',
            initialValue: true,
		}),
	],
};

export default projects;
