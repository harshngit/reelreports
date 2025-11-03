import React from 'react';

function WhySynthesia() {
    return (
		<section className="relative py-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Badge */}
				<div className="mb-6 flex items-center justify-between">
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] transition-all duration-300">
						WHY REEL REPORTS
					</span>
						
					</div>

				{/* Main Heading */}
				<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mb-12">
					Loved by users. Approved by legal. Signed off by CFOs
				</h2>

				{/* Feature Grid - refined visuals */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					{/* Feature 1 */}
							<div className="flex flex-col p-6 rounded-2xl border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300 bg-white shadow-sm ring-1 ring-black/5">
						<div className="mb-4">
							<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundImage:'linear-gradient(90deg, #1470D2 0%, #F96A17 100%)'}}>
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8l7-3.5L19 8v5c0 4-3 7-7 7z"/>
									<circle cx="12" cy="12" r="3"/>
								</svg>
							</div>
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">No video editing skills or equipment required.</h3>
						<p className="text-gray-600 mb-4 leading-relaxed">90% of users publish their first video without needing a tutorial. And if you want to go deeper, there's a whole Academy.</p>
						<a href="#" className="inline-flex items-center text-sm font-semibold gap-1 mt-auto" style={{ color: '#0013C1' }}>
							Learn more about all features
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>

					{/* Feature 2 */}
					<div className="flex flex-col p-6 rounded-2xl border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300 bg-white shadow-sm ring-1 ring-black/5">
						<div className="mb-4 flex gap-2">
							{['SOC2','ISO','GDPR'].map((label) => (
								<div key={label} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: label==='GDPR' ? '#4B5563' : '#0013C1' }}>
									<span className="text-white text-xs font-bold">{label}</span>
								</div>
							))}
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">SOC2. GDPR. ISO42001. SAML/SSO. <span style={{ color: '#0013C1' }}>Locked down.</span></h3>
						<p className="text-gray-600 mb-4 leading-relaxed">Passed ironclad compliance audits at 90% of the Fortune 100. Built to satisfy the toughest legal and security teams.</p>
						<a href="#" className="inline-flex items-center text-sm font-semibold gap-1 mt-auto" style={{ color: '#0013C1' }}>
							Learn more about security
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</a>
					</div>

					{/* Feature 3 */}
					<div className="flex flex-col p-6 rounded-2xl border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300 bg-white shadow-sm ring-1 ring-black/5">
						<div className="mb-4">
							<div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundImage:'linear-gradient(90deg, #1470D2 0%, #F96A17 100%)'}}>
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
								</svg>
							</div>
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-3">One budget, one login. <span style={{ color: '#0013C1' }}>No extra tools. No agencies.</span></h3>
						<p className="text-gray-600 mb-4 leading-relaxed">Your entire video workflow on one platform. Create, localize, manage, and publish AI videos at scale.</p>
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


