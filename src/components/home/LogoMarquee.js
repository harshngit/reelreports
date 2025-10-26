import React from 'react';

function LogoMarquee() {
	// Array of company names - you can replace these with actual logo images
	const companies = [
		{ name: 'SAP', className: 'text-3xl font-bold' },
		{ name: 'MERCK', className: 'text-3xl font-bold' },
		{ name: 'Heineken', className: 'text-3xl font-bold' },
		{ name: "MOODY'S", className: 'text-3xl font-bold' },
		{ name: 'REUTERS', className: 'text-2xl font-semibold' },
		{ name: 'zoom', className: 'text-3xl font-bold' },
		{ name: 'SAP', className: 'text-3xl font-bold' },
		{ name: 'Nielsen', className: 'text-3xl font-bold' },
	];

	return (
		<section className="relative py-8 overflow-hidden bg-white" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="relative w-full overflow-hidden">
				{/* Gradient overlays for smooth fade effect */}
				<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
				<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
				
				{/* Marquee container */}
				<div className="flex animate-marquee whitespace-nowrap">
					{/* First set of logos */}
					{companies.map((company, index) => (
						<div 
							key={`first-${index}`}
							className="inline-flex items-center justify-center mx-12 lg:mx-16"
						>
							<span className={`${company.className} text-gray-800 opacity-70 hover:opacity-100 transition-opacity`}>
								{company.name}
							</span>
						</div>
					))}
					
					{/* Duplicate set for seamless loop */}
					{companies.map((company, index) => (
						<div 
							key={`second-${index}`}
							className="inline-flex items-center justify-center mx-12 lg:mx-16"
						>
							<span className={`${company.className} text-gray-800 opacity-70 hover:opacity-100 transition-opacity`}>
								{company.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default LogoMarquee;

