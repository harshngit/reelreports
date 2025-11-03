import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/reportlogo.png';
import { ArrowRightIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import FeatureDropdown from './FeatureDropdown';
import SolutionDropdown from './SolutionDropdown';

const NAV_BG_COLOR = '#D4E4FF';

const navItems = [
	{ label: 'Feature', to: '/feature', hasDropdown: true, dropdownType: 'feature' },
	{ label: 'Solution', to: '/solution', hasDropdown: true, dropdownType: 'solution' },
	{ label: 'Pricing', to: '/pricing' },
];

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const currentHash = location.hash || '';
    const [mobileOpen, setMobileOpen] = useState(false);
    const [featureDropdownOpen, setFeatureDropdownOpen] = useState(false);
    const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);
    
    const featureDropdownRef = useRef(null);
    const solutionDropdownRef = useRef(null);
    const featureCloseTimeoutRef = useRef(null);
    const solutionCloseTimeoutRef = useRef(null);

    const getLinkClasses = (hash) => {
        const isActive = currentHash === hash;
        return `text-base font-semibold rounded-md px-2 py-1 ${
            isActive
                ? 'text-[#0013C1] bg-white/60'
                : 'text-gray-700 hover:text-[#1470D2]'
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

    const handleMouseEnter = (dropdownType) => {
        if (dropdownType === 'feature') {
            if (featureCloseTimeoutRef.current) {
                clearTimeout(featureCloseTimeoutRef.current);
                featureCloseTimeoutRef.current = null;
            }
            setFeatureDropdownOpen(true);
            setSolutionDropdownOpen(false);
        } else if (dropdownType === 'solution') {
            if (solutionCloseTimeoutRef.current) {
                clearTimeout(solutionCloseTimeoutRef.current);
                solutionCloseTimeoutRef.current = null;
            }
            setSolutionDropdownOpen(true);
            setFeatureDropdownOpen(false);
        }
    };

    const handleMouseLeave = (dropdownType) => {
        if (dropdownType === 'feature') {
            if (featureCloseTimeoutRef.current) {
                clearTimeout(featureCloseTimeoutRef.current);
            }
            featureCloseTimeoutRef.current = setTimeout(() => {
                setFeatureDropdownOpen(false);
            }, 200);
        } else if (dropdownType === 'solution') {
            if (solutionCloseTimeoutRef.current) {
                clearTimeout(solutionCloseTimeoutRef.current);
            }
            solutionCloseTimeoutRef.current = setTimeout(() => {
                setSolutionDropdownOpen(false);
            }, 200);
        }
    };

    useEffect(() => {
        return () => {
            if (featureCloseTimeoutRef.current) clearTimeout(featureCloseTimeoutRef.current);
            if (solutionCloseTimeoutRef.current) clearTimeout(solutionCloseTimeoutRef.current);
        };
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
                            
                            // Special handling for items with dropdown
                            if (item.hasDropdown) {
                                const isFeature = item.dropdownType === 'feature';
                                const isSolution = item.dropdownType === 'solution';
                                const isOpen = isFeature ? featureDropdownOpen : solutionDropdownOpen;
                                const dropdownRef = isFeature ? featureDropdownRef : solutionDropdownRef;
                                
                                return (
                                    <div 
                                        key={item.label} 
                                        ref={dropdownRef}
                                        className="relative dropdown-container"
                                        onMouseEnter={() => handleMouseEnter(item.dropdownType)}
                                        onMouseLeave={() => handleMouseLeave(item.dropdownType)}
                                    >
                                        <button
                                            type="button"
                                            className={`${getLinkClasses(hash)} flex items-center gap-1 cursor-pointer`}
                                            aria-expanded={isOpen}
                                        >
                                            {item.label}
                                            <ChevronDownIcon 
                                                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        {isFeature && (
                                            <FeatureDropdown 
                                                isActive={featureDropdownOpen} 
                                                onClose={() => setFeatureDropdownOpen(false)}
                                            />
                                        )}
                                        {isSolution && (
                                            <SolutionDropdown 
                                                isActive={solutionDropdownOpen} 
                                                onClose={() => setSolutionDropdownOpen(false)}
                                            />
                                        )}
                                    </div>
                                );
                            }
                            
                            return (
                                <Link 
                                    key={item.label} 
                                    to={item.to} 
                                    className={getLinkClasses(hash)} 
                                    aria-current={currentHash === hash ? 'page' : undefined}
                                >
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
							className="inline-flex items-center rounded-md gap-2 px-4 py-2 text-md font-semibold text-[#fff] transition-all duration-300 shadow-sm"
							style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
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
							className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-3 text-base font-semibold text-white shadow-sm"
							style={{ backgroundImage: 'linear-gradient(90deg, #1470D2 0%, #8E23C0 100%)' }}
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