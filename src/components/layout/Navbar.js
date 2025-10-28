import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logoreelreports.png';
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAV_BG_COLOR = '#E5E2FF';

const navItems = [
	{ label: 'Feature', to: '/feature' },
	{ label: 'Solution', to: '/solution' },
	{ label: 'Pricing', to: '/pricing' },
];

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const currentHash = location.hash || '';
    const [mobileOpen, setMobileOpen] = useState(false);

    const getLinkClasses = (hash) => {
        const isActive = currentHash === hash;
        return `text-base font-semibold rounded-md px-2 py-1 ${
            isActive
                ? 'text-[#0013C1] bg-white/60'
                : 'text-gray-700 hover:text-[#9314DC]'
        }`;
    };

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
			style={{
				backgroundColor: scrolled ? NAV_BG_COLOR : 'transparent',
				backdropFilter: scrolled ? 'saturate(180%) blur(8px)' : undefined,
				boxShadow: scrolled ? '0 2px 12px rgba(17, 17, 26, 0.05)' : 'none',
                fontFamily: 'var(--brand-font)'
			}}
		>
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
				<div className="flex h-16 items-center justify-between">
					{/* Left: logo + nav links */}
					<div className="flex items-center gap-8">
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="Reel Reports" className="w-[150px]" />
					</Link>
					<div className="hidden md:flex items-center gap-6">
						{navItems.map((item) => {
                            const hash = item.to.replace('/', '');
                            return (
                                <Link key={item.label} to={item.to} className={getLinkClasses(hash)} aria-current={currentHash === hash ? 'page' : undefined}>
                                    {item.label}
                                </Link>
                            );
                        })}
						</div>
					</div>

					{/* Right: actions */}
					<div className="hidden md:flex items-center gap-4">
						<Link
							to="/#book-demo"
							className={getLinkClasses('#book-demo')}
						>
							Book Demo
						</Link>
						<Link
							to="/#get-started"
							className="inline-flex items-center rounded-md gap-2 px-4 py-2 text-md font-semibold text-[#fff] bg-[#cf7bff] hover:bg-[#9314DC] transition-all duration-300 shadow-sm"
							
						>
							Get started
							<ArrowRightIcon className="w-4 h-4" />
						</Link>
					</div>

				{/* Mobile hamburger */}
				<button
					className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900"
					onClick={() => setMobileOpen(true)}
					aria-label="Open menu"
				>
					<Bars3Icon className="w-6 h-6" />
				</button>
			</div>
			</nav>

				{/* Mobile drawer overlay */}
				<div
					className={`${mobileOpen ? 'block' : 'hidden'} fixed inset-0 z-40 bg-black/30`}
					onClick={() => setMobileOpen(false)}
				></div>
				{/* Mobile drawer panel */}
				<div
					className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
					style={{ fontFamily: 'var(--brand-font)' }}
				>
					<div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
						<img src={logo} alt="Reel Reports" className="w-[140px]" />
						<button
							className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900"
							onClick={() => setMobileOpen(false)}
							aria-label="Close menu"
						>
							<XMarkIcon className="w-6 h-6" />
						</button>
					</div>
					<nav className="px-4 py-4 flex flex-col gap-2">
						{navItems.map((item) => {
							const hash = item.to.replace('/', '');
							const active = currentHash === hash;
							return (
								<Link
									key={item.label}
									to={item.to}
									className={`text-base font-semibold rounded-md px-2 py-2 ${active ? 'text-[#0013C1] bg-[#E5E2FF]/70' : 'text-gray-700 hover:text-gray-900'}`}
									onClick={() => setMobileOpen(false)}
								>
									{item.label}
								</Link>
							);
						})}
						<hr className="my-3 border-gray-100" />
						<Link to="/#book-demo" className="text-base font-semibold text-gray-700 hover:text-gray-900 px-2 py-2" onClick={() => setMobileOpen(false)}>
							Book Demo
						</Link>
						<Link
							to="/#get-started"
							className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-3 text-base font-semibold text-[#0013C1] shadow-sm"
							style={{ backgroundImage: 'linear-gradient(90deg, #E5E2FF 0%, #B771E5 100%)' }}
							onClick={() => setMobileOpen(false)}
						>
							Get started
						</Link>
					</nav>
				</div>
		</header>
	);
}

export default Navbar;