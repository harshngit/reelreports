import React, { useState } from 'react';
import { motion } from 'framer-motion';
import reelbg from '../../assets/img/reelbg.png';
import createImg from '../../assets/img/create.png';

function Hero() {
	const [activeTab, setActiveTab] = useState('Create');

	const tabData = {
		'Create': {
			title: 'Create videos in',
			description: 'Start from a template or blank canvas. Produce studio‑quality videos without cameras, microphones, or actors.',
		},
		'Edit': {
			title: 'Refine Your Story',
			description: 'Adjust visuals, scenes, and narration to match your brand and tone.',
		},
		'Build': {
			title: 'Turn scripts into scenes',
			description: 'Paste your script and let AI help structure scenes, voiceovers, and visuals in a snap.',
		},
		'Share': {
			title: 'Publish and Distribute',
			description: 'Export, post, or send your finished video anywhere instantly..',
		},
	};
	return (
		<>
			<section className="relative" style={{fontFamily:'var(--brand-font)', backgroundImage:`url(${reelbg})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
				<div className="text-center">
					<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm md:text-md font-medium text-[#1470D2] border border-[#1470D2] shadow-sm" >#1 TEXT to VIDEO platform for business</motion.div>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-6xl mx-auto mt-4 sm:mt-6 text-3xl md:text-5xl  font-extrabold tracking-tight text-gray-900 px-2">
					Communication, brought to life, within branding guidelines <br className="hidden sm:block" /> <span className="text-[#1470D2] mt-1">and under your control</span>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-2xl mx-auto mt-4 sm:mt-6 text-sm md:text-base tracking-tight text-gray-900 px-2">
					Summarize the deck in a brand aligned video with avatars, infographics, charts and
					voiceover and save upto 90% of time and cost on video production					</motion.div>
					
					<motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 sm:mt-8 md:mt-10 flex items-center justify-center gap-4">
						<a href="#get-started" className="inline-flex items-center rounded-md px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-sm" style={{
							backgroundImage:'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)'
						}}>Request platform invite</a>
					</motion.div>
				</div>
			</div>
		</section>
		
		{/* Tabs Section */}
		<section className="relative py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50/50 to-white" style={{fontFamily:'var(--brand-font)'}}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Mobile & Tablet: Scrollable container */}
				<div className="flex justify-center lg:justify-center">
					<div 
						className="overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 w-full lg:w-auto" 
						style={{
							scrollbarWidth: 'none',
							msOverflowStyle: 'none',
						}}
					>
						<style>{`
							.tabs-container::-webkit-scrollbar {
								display: none;
							}
						`}</style>
						<div className="tabs-container inline-flex items-center gap-1.5 sm:gap-2 rounded-full p-1.5 sm:p-2 border-2 border-gray-300 bg-white shadow-lg lg:shadow-lg min-w-fit">
							{Object.keys(tabData).map((tab) => (
								<motion.button 
									whileTap={{ scale: 0.98 }} 
									whileHover={{ scale: 1.02 }} 
									key={tab} 
									onClick={() => setActiveTab(tab)} 
									className={`px-5 py-2 sm:px-6 md:px-7 lg:px-8 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
										activeTab === tab 
											? 'text-white shadow-md' 
											: 'text-gray-700 hover:bg-gray-50'
									}`} 
									style={{
										backgroundImage: activeTab === tab ? 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' : 'none',
									}}
								>
									{tab}
								</motion.button>
							))}
						</div>
					</div>
				</div>

			<div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
				<motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
					<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">{tabData[activeTab].title}</h3>
					<p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">{tabData[activeTab].description}</p>
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


