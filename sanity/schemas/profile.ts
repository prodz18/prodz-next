import { defineField } from 'sanity';
import { BiUser } from 'react-icons/bi';

const profile = {
	name: 'profile',
	title: 'Profile',
	type: 'document',
	icon: BiUser,
	fields: [
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
            description: 'This will appear in the Skills & Toolbet section',
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
