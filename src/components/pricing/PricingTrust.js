import React from 'react';
import { motion } from 'framer-motion';
import {
	ShieldCheckIcon,
	CreditCardIcon,
	ClockIcon,
	UserGroupIcon,
	StarIcon,
	ArrowPathIcon,
} from '@heroicons/react/24/outline';

function PricingTrust() {
	const trustItems = [
		{
			icon: ShieldCheckIcon,
			title: 'Secure Payments',
			description: 'Bank-level encryption and PCI compliance for all transactions',
			gradient: 'from-indigo-600 to-purple-600',
		},
		{
			icon: ArrowPathIcon,
			title: '30-Day Money-Back',
			description: 'Not satisfied? Get a full refund within 30 days, no questions asked',
			gradient: 'from-indigo-600 to-purple-600',
		},
		{
			icon: ClockIcon,
			title: 'Cancel Anytime',
			description: 'No long-term contracts or cancellation fees. You\'re in control',
			gradient: 'from-indigo-600 to-purple-600',
		},
		{
			icon: CreditCardIcon,
			title: 'Flexible Billing',
			description: 'Choose monthly or yearly billing. Switch plans whenever you need',
			gradient: 'from-indigo-600 to-purple-600',
		},
	];

	const stats = [
		{ value: '50K+', label: 'Active Users', icon: UserGroupIcon },
		{ value: '4.9/5', label: 'Customer Rating', icon: StarIcon },
		{ value: '99.9%', label: 'Uptime', icon: ShieldCheckIcon },
		{ value: '24/7', label: 'Support Available', icon: ClockIcon },
	];

	return (
		<section className="relative py-20 px-4" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-6xl">
				{/* Trust Badges */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Why customers trust ReelReport
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						We're committed to providing the best experience with transparent pricing and exceptional support.
					</p>
				</motion.div>

				{/* Trust Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{trustItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300"
						>
							<div
								className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-lg mb-4`}
							>
								<item.icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
							<p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
						</motion.div>
					))}
				</div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="rounded-3xl bg-gradient-to-br from-blue-100  to-blue-100 p-8 sm:p-12 border border-[#c6c1f0]"
				>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="text-center"
							>
								<div className="flex justify-center mb-3">
									<div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
										<stat.icon className="w-6 h-6 text-purple-600" />
									</div>
								</div>
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 + 0.3 }}
									className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1"
								>
									{stat.value}
								</motion.div>
								<div className="text-sm text-gray-600 font-medium">{stat.label}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				

				{/* Final CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-16 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl"
				>
					<h3 className="text-2xl sm:text-3xl font-bold mb-3">
						Ready to create amazing videos?
					</h3>
					<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
						Join thousands of content creators and businesses using ReelReport to scale their video production.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-600 font-bold shadow-lg hover:shadow-xl transition-all"
					>
						Start Free Trial
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</motion.button>
					<p className="mt-4 text-sm text-blue-100">
						No credit card required • 14-day free trial • Cancel anytime
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default PricingTrust;

