import React from 'react';

function Hero() {
	return (
		<section className="relative" style={{fontFamily:'var(--brand-font)'}}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center">
					<div className="inline-flex items-center rounded-full px-3 py-1 text-md font-medium text-[#cf7bff] border border-[#cf7bff] shadow-sm" >#1 AI VIDEO PLATFORM FOR BUSINESS</div>
					<h1 className="mt-6 text-8xl sm:text-7xl font-extrabold tracking-tight text-gray-900">
						Turn Documment Into <br /> <span className="text-[#cf7bff] mt-1">Animated Video</span>
					</h1>
					
					<div className="mt-10 flex items-center justify-center gap-4">
						<a href="#get-started" className="inline-flex items-center rounded-md px-6 py-3 text-base font-semibold text-black shadow-sm" style={{
							backgroundImage:'linear-gradient(90deg, #0118D8 0%, #B771E5 100%, )'
						}}>Get started for FREE</a>
						<a href="#book-demo" className="text-base font-semibold" style={{color:'#0013C1'}}>Book demo</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;


