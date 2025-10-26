import React, { useState } from 'react';
import { motion } from 'framer-motion';
import reelbg from '../../assets/img/reelbg.png';
import createImg from '../../assets/img/create.png';

function Hero() {
	const [activeTab, setActiveTab] = useState('Create');

	const tabData = {
		'Create': {
			title: 'Create videos in minutes',
			description: 'Start from a template or blank canvas. Produce studio‑quality videos without cameras, microphones, or actors.',
		},
		'Dynamic Question': {
			title: 'Ask dynamic questions',
			description: 'Gather inputs and tailor content on the fly. Make each viewer’s experience feel uniquely theirs.',
		},
		'Script': {
			title: 'Turn scripts into scenes',
			description: 'Paste your script and let AI help structure scenes, voiceovers, and visuals in a snap.',
		},
		'Video Generation': {
			title: 'Generate and scale instantly',
			description: 'Render high‑quality videos fast and update them at scale whenever your content changes.',
		},
	};
	return (
		<>
			<section className="relative" style={{fontFamily:'var(--brand-font)', backgroundImage:`url(${reelbg})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center">
					<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center rounded-full px-3 py-1 text-md font-medium text-[#cf7bff] border border-[#cf7bff] shadow-sm" >#1 AI VIDEO PLATFORM FOR BUSINESS</motion.div>
					<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-8xl sm:text-7xl font-extrabold tracking-tight text-gray-900">
						Turn Document Into <br /> <span className="text-[#cf7bff] mt-1">Animated Video</span>
					</motion.h1>
					
					<motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 flex items-center justify-center gap-4">
						<a href="#get-started" className="inline-flex items-center rounded-md px-6 py-3 text-base font-semibold text-white shadow-sm" style={{
							backgroundImage:'linear-gradient(90deg, #0118D8 0%, #B771E5 100%)'
						}}>Get started for FREE</a>
					</motion.div>
				</div>
			</div>
		</section>
		
		{/* Tabs Section */}
		<section className="relative py-16" style={{fontFamily:'var(--brand-font)'}}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center">
					<div className="inline-flex items-center gap-2 rounded-full p-1 border bg-white/70 backdrop-blur shadow-sm">
						{Object.keys(tabData).map((tab) => (
							<motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === tab ? 'text-white' : 'text-gray-700'}`} style={{
								backgroundImage: activeTab === tab ? 'linear-gradient(90deg, #0118D8 0%, #B771E5 100%)' : 'none',
							}}
							>
								{tab}
							</motion.button>
						))}
					</div>
				</div>

			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
					<h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{tabData[activeTab].title}</h3>
					<p className="text-gray-600 text-lg leading-relaxed max-w-xl">{tabData[activeTab].description}</p>
				</motion.div>
				<motion.div key={activeTab + '-img'} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="relative">
					<div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
						<img src={createImg} alt="Feature preview" className="w-full h-auto object-cover" />
					</div>
				</motion.div>
			</div>
			
		</div>
		</section>
		</>
	);
}

export default Hero;


