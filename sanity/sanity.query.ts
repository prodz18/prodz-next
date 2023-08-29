import { groq } from "next-sanity";

export const getProfileQuery = groq`*[_type == "profile"][0]{
	_id,
	fullName,
	headline,
	profileImage {
		...,
		alt,
		"image": asset->url
	},
	bio,
	shortBio,
	email,
	socialLinks,
	skills[]-> {
		_id,
		title,
		bgColor
	}
}`;


export const getSkillsQuery = groq`*[_type == "skills" && visible == true] | order(title asc){
	_id,
	title,
	bgColor
}`;

export const getProjectsQuery = groq`*[_type == "projects" && visible == true] | order(_createdAt desc){
	_id,
	title,
	type,
	description,
	projectImage {
		...,
		alt,
		"image": asset->url
	}
}`;