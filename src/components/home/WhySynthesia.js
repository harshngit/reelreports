import React from 'react';

function WhySynthesia() {
	return (
		<section className="relative py-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Badge */}
				<div className="mb-6">
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase" style={{ color: '#0013C1', backgroundColor: '#E5E2FF' }}>
						WHY SYNTHESIA
					</span>
				</div>

				{/* Main Heading and CTA */}
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
						Loved by users. Approved by legal. Signed off by CFOs
					</h2>
					<button className="inline-flex items-center rounded-md px-8 py-3 text-base font-semibold transition-all duration-300 whitespace-nowrap" style={{ backgroundColor: '#E5E2FF', color: '#0013C1' }}>
						Book demo
					</button>
				</div>

				{/* Three Column Feature Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					{/* Feature 1 */}
					<div className="flex flex-col">
						<div className="mb-4">
							<svg className="w-8 h-8" style={{ color: '#0013C1' }} fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8l7-3.5L19 8v5c0 4-3 7-7 7z"/>
								<circle cx="12" cy="12" r="3"/>
							</svg>
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">
							<span style={{ color: '#0013C1' }}>No video editing</span> skills or equipment required.
						</h3>
						<p className="text-gray-600 mb-4 leading-relaxed">
							90% of users publish their first video without needing a tutorial. And if you want to go deeper, there's a whole Academy.
						</p>
						<a href="#" className="inline-flex items-center text-sm font-semibold gap-1 mt-auto" style={{ color: '#0013C1' }}>
							Learn more about all features
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>

					{/* Feature 2 */}
					<div className="flex flex-col">
						<div className="mb-4 flex gap-2">
							<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0013C1' }}>
								<span className="text-white text-xs font-bold">SOC2</span>
							</div>
							<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0013C1' }}>
								<span className="text-white text-xs font-bold">ISO</span>
							</div>
							<div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B5563' }}>
								<span className="text-white text-xs font-bold">GDPR</span>
							</div>
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">
							SOC2. GDPR. ISO42001. SAML/SSO. <span style={{ color: '#0013C1' }}>Locked down.</span>
						</h3>
						<p className="text-gray-600 mb-4 leading-relaxed">
							Passed ironclad compliance audits at 90% of the Fortune 100. Built to satisfy the toughest legal and security teams.
						</p>
						<a href="#" className="inline-flex items-center text-sm font-semibold gap-1 mt-auto" style={{ color: '#0013C1' }}>
							Learn more about security
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>

					{/* Feature 3 */}
					<div className="flex flex-col">
						<div className="mb-4">
							<svg className="w-8 h-8" style={{ color: '#0013C1' }} fill="currentColor" viewBox="0 0 24 24">
								<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
							</svg>
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">
							One budget, one login. <span style={{ color: '#0013C1' }}>No extra tools. No agencies.</span>
						</h3>
						<p className="text-gray-600 mb-4 leading-relaxed">
							Your entire video workflow on one platform. Create, localize, manage, and publish AI videos at scale.
						</p>
						<a href="#" className="inline-flex items-center text-sm font-semibold gap-1 mt-auto" style={{ color: '#0013C1' }}>
							Learn more about pricing
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhySynthesia;


