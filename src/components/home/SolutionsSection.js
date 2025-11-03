import React from 'react';
import { motion } from 'framer-motion';
import { BoltIcon, BanknotesIcon, ChatBubbleLeftRightIcon, BuildingOffice2Icon, PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline';

function SolutionsSection() {
	const cards = [
		{ id: 'sales', title: 'Sales acceleration', desc: 'Engaging, targeted reels that stand out and help close deals', icon: BoltIcon, size: 'rect' },
		{ id: 'marketing', title: 'Marketing', desc: 'Generate brand‑adherent videos to promote your business', icon: BanknotesIcon, size: 'rect' },
		{ id: 'internal', title: 'Internal communication', desc: 'Communicate clear, engaging updates', icon: ChatBubbleLeftRightIcon, size: 'rect' },
		{ id: 'knowledge', title: 'Knowledge management', desc: 'Summarize knowledge in engaging teaser reels', icon: BookOpenIcon, size: 'rect' },
	];

	return (
		<section id="solutions" className="relative py-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-10 text-center">
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0]">Solutions</span>
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">Where Reel Reports shines</h2>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">Use cases tailored to common business outcomes.</p>
				</div>

				{/* Masonry-like balanced grid: rectangles span 2 columns on md+ */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{cards.map((card, idx) => (
						<motion.div
							key={card.id}
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.45, delay: idx * 0.06 }}
							className={`${card.size === 'rect' ? ' h-44' : 'h-44'} p-6 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 border border-[#c6c1f0] hover:border-[#0013C1] hover:shadow-md transition-all duration-300 flex`}
						>
							<div className="w-12 h-12 mr-4 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundImage:'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)'}}>
								<card.icon className="w-6 h-6 text-white" />
							</div>
							<div className="flex flex-col justify-center">
								<h3 className="text-xl font-bold text-gray-900 tracking-tight">{card.title}</h3>
								<p className="text-gray-600 text-sm mt-1 leading-6">{card.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SolutionsSection;


