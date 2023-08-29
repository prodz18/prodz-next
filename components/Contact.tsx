'use client';

import type { ProfileType } from '@/types';
import { GrMail } from 'react-icons/gr';

interface ContactProps {
	profile: ProfileType;
}

const Contact = (props: ContactProps) => {
	const { profile } = props;

	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-center gap-x-12 mt-32 mb-8"
		>
			<div className="mb-6 text-center">
				Have an exciting project or need help with something? Send me
				over a message and lets chat.
			</div>
			<a
				href={`mailto:${profile.email}`}
				rel="noreferer noopener"
				className="flex items-center rounded-full bg-sky-800 hover:bg-sky-600 border border-transparent hover:border-sky-500 py-2 px-4 gap-x-2 gap mb-5 duration-300"
			>
				<GrMail />
				Send a Message
			</a>
		</section>
	);
};

export default Contact;
