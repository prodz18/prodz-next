import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import { DM_Sans, Space_Grotesk } from 'next/font/google';

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const headingFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

export const metadata: Metadata = {
	metadataBase: new URL('https://www.prodz.dev'),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`portfolio-site bg-site-bg font-sans text-site-text scheme-dark ${bodyFont.variable} ${headingFont.variable}`}>
				<a className="absolute -top-[100px] left-5 z-100 bg-site-surface p-3 focus:top-3" href="#main-content">Skip to content</a>
				<Header />
				{children}
			</body>
		</html>
	);
}
