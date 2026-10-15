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
			<body className={`portfolio-site ${bodyFont.variable} ${headingFont.variable}`}>
				<a className="skip-link" href="#main-content">Skip to content</a>
				<Header />
				{children}
			</body>
		</html>
	);
}
