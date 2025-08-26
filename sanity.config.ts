import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/deskStructure';
import { media } from 'sanity-plugin-media'

export default defineConfig({
  	name: 'default',
	title: 'prodz-website',

	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	useCdn: true,

	basePath: '/studio',

	plugins: [
		structureTool({
			structure
		}), 
		visionTool(),
		media()
	],

	schema: {
		types: schemaTypes,
	},
});
