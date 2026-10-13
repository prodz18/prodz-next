import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
			<body className="bg-zinc-900 text-white">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
