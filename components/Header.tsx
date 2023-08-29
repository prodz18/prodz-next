import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png';

const Header = () => {

	const links = [
		{
			title: 'Skills',
			link: '#skills',
		},
		{
			title: 'Portfolio',
			link: '#portfolio',
		},
		{
			title: 'Contact',
			link: '#contact',
		}
	]

	return (
		<header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<Link href="/">
					<Image src={Logo} width={25} alt="logo" />
				</Link>
				<nav>
					<ul className="flex items-center gap-x-8">
						{links.map((item, index) => (
							<li key={`menu-${index}`}>
								<Link
									href={item.link}
									className="hover:text-sky-400 duration-300 uppercase text-sm"
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;