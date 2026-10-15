export default function Header() {
	const linkClass = 'pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center';

	return (
		<header className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[18px] px-[22px] py-7 after:absolute after:inset-x-[22px] after:bottom-0 after:h-px after:bg-site-line after:content-[''] tablet:flex-nowrap tablet:gap-7 tablet:px-[27px] tablet:after:inset-x-[27px] desktop:px-[54px] desktop:after:inset-x-[54px]">
			<a className={`font-display text-[21px] leading-[normal] font-medium tracking-[-1px] tablet:text-[23px] ${linkClass}`} href="#hero" aria-label="prodz.dev home">
				prodz<span className="text-site-blue">.</span>dev
			</a>
			<nav className="flex gap-[18px] text-sm leading-normal text-site-muted tablet:gap-[25px]" aria-label="Main navigation">
				<a className={linkClass} href="#portfolio">Work</a>
				<a className={linkClass} href="#skills">About</a>
				<a className={linkClass} href="#contact">Contact</a>
			</nav>
		</header>
	);
}
