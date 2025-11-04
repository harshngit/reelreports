import React from 'react';
import { motion } from 'framer-motion';
import {
	QuestionMarkCircleIcon,
	BookOpenIcon,
	AcademicCapIcon,
	CommandLineIcon,
	LifebuoyIcon,
	ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

function QuickHelp() {
	const helpResources = [
		{
			icon: BookOpenIcon,
			title: 'Documentation',
			description: 'Browse our comprehensive guides and tutorials',
			link: '/docs',
			gradient: 'from-blue-500 to-cyan-500',
		},
		{
			icon: QuestionMarkCircleIcon,
			title: 'FAQs',
			description: 'Find quick answers to common questions',
			link: '/faq',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: AcademicCapIcon,
			title: 'Learning Center',
			description: 'Video tutorials and best practices',
			link: '/learn',
			gradient: 'from-orange-500 to-red-500',
		},
		{
			icon: CommandLineIcon,
			title: 'API Reference',
			description: 'Technical documentation for developers',
			link: '/api',
			gradient: 'from-teal-500 to-cyan-500',
		},
		{
			icon: LifebuoyIcon,
			title: 'Support Center',
			description: 'Get help from our support team',
			link: '/support',
			gradient: 'from-indigo-500 to-purple-500',
		},
		{
			icon: ChatBubbleBottomCenterTextIcon,
			title: 'Community Forum',
			description: 'Connect with other ReelReport users',
			link: '/community',
			gradient: 'from-pink-500 to-rose-500',
		},
	];

	return (
		<section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm mb-4">
						Quick Help
					</span>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
						Looking for something specific?
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Explore our help resources to find the answers you need quickly.
					</p>
				</motion.div>

				{/* Help Cards Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{helpResources.map((resource, index) => (
						<motion.a
							key={index}
							href={resource.link}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{
								y: -8,
								boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
								transition: { duration: 0.3 },
							}}
							className="group p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0] transition-all duration-300 cursor-pointer"
						>
							<motion.div
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.6 }}
								className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${resource.gradient} shadow-lg mb-4`}
							>
								<resource.icon className="w-7 h-7 text-white" />
							</motion.div>

							<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
								{resource.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>

							<motion.div
								className="mt-4 inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm"
								whileHover={{ x: 3 }}
							>
								Learn more
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</motion.div>
						</motion.a>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200"
				>
					<h3 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h3>
					<p className="text-gray-600 mb-4">
						Our support team is available 24/7 to assist you with any questions.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-all"
						>
							Start Live Chat
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-sm hover:shadow-md transition-all border-2 border-indigo-200"
						>
							Call Support
						</motion.button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default QuickHelp;

