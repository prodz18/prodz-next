import { defineField } from 'sanity';
import { BiUser } from 'react-icons/bi';

const profile = {
	name: 'profile',
	title: 'Profile',
	type: 'document',
	icon: BiUser,
	fields: [
		defineField({ name: 'heroTitle', title: 'Hero title — first line', type: 'string', validation: rule => rule.max(70), initialValue: 'Thoughtful interfaces.' }),
		defineField({ name: 'heroAccent', title: 'Hero title — blue line', type: 'string', validation: rule => rule.max(70), initialValue: 'Solid engineering.' }),
		defineField({ name: 'heroIntro', title: 'Hero introduction', type: 'text', rows: 3, description: 'A short introduction. Falls back to Short Bio, then Bio.', validation: rule => rule.max(500) }),
		defineField({ name: 'workIntro', title: 'Selected work introduction', type: 'string', initialValue: 'A few projects I’m proud to share.' }),
		defineField({ name: 'featuredProject', title: 'Featured project', type: 'reference', to: [{ type: 'projects' }], options: { filter: 'visible == true' }, description: 'The large project above the grid. Hidden projects are not displayed.' }),
		defineField({
			name: 'selectedProjects', title: 'Selected projects', type: 'array',
			description: 'Drag to reorder. Up to six projects below the featured one. Keep the featured project out of this list.',
			of: [{ type: 'reference', to: [{ type: 'projects' }], options: { filter: 'visible == true' } }],
			validation: rule => rule.max(6).unique().custom((value, context) => {
				const featured = context.document?.featuredProject as { _ref?: string } | undefined;
				return value?.some(item => (item as { _ref?: string })._ref === featured?._ref)
					? 'The featured project is already shown above the grid.' : true;
			}),
		}),
		defineField({ name: 'toolkitTitle', title: 'Toolkit heading', type: 'string', initialValue: 'Built with care.' }),
		defineField({ name: 'toolkitIntro', title: 'Toolkit introduction', type: 'text', rows: 3 }),
		defineField({ name: 'toolkitGroups', title: 'Toolkit rows', type: 'array', description: 'Drag to reorder the categories.', of: [{ type: 'object', name: 'toolkitGroup', fields: [
			defineField({ name: 'title', title: 'Category', type: 'string', validation: rule => rule.required() }),
			defineField({ name: 'items', title: 'Technologies', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' }, validation: rule => rule.required().min(1).unique() }),
		], preview: { select: { title: 'title' } } }] }),
		defineField({ name: 'contactTitle', title: 'Contact heading', type: 'text', rows: 2, description: 'Line breaks are preserved.', initialValue: 'Have something in mind?\nLet’s build it together.' }),
		defineField({
			name: 'fullName',
			title: 'Full Name',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'headline',
			title: 'Headline',
			type: 'string',
			description: 'In one short sentence, what do you do?',
			validation: (Rule) => Rule.required(),
		}),
		{
			name: 'profileImage',
			title: 'Profile Image',
			type: 'image',
			description: 'Upload a profile picture',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
			rows: 8,
		},
		{
			name: 'shortBio',
			title: 'Short Bio',
			type: 'text',
			rows: 4,
		},
		{
			name: 'email',
			title: 'Email Address',
			type: 'string',
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string',
		},
		{
			name: 'resumeURL',
			title: 'Upload Resume',
			type: 'file',
		},
		{
			name: 'socialLinks',
			title: 'Social Links',
			type: 'object',
			description: 'Add your social media links:',
			fields: [
				{
					name: 'email',
					title: 'Email',
					type: 'string',
					initialValue: 'mailto:some@email.com',
				},
				{
					name: 'github',
					title: 'Github URL',
					type: 'url',
					initialValue: 'https://github.com/',
				},
				{
					name: 'linkedin',
					title: 'Linkedin URL',
					type: 'url',
					initialValue: 'https://linkedin.com/in/',
				},
			],
			options: {
				collapsed: false,
				collapsible: false,
				columns: 1,
			},
		},
		defineField({
            name: 'skills',
            type: 'array',
            title: 'Skills',
            description: 'Legacy skill references. The refreshed site uses Toolkit rows above.',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'skills' }],
                }
            ],
			validation: (rule) => rule.unique()
        }),
	],
};

export default profile;
