import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

function PricingComparison() {
	const features = [
		{
			category: 'Video Credits & Minutes',
			items: [
				{ name: 'Video minutes per month', basic: '3 minutes', hobbyist: '10 minutes', creator: '10 minutes', enterprise: 'Unlimited' },
				{ name: 'Download videos', basic: true, hobbyist: true, creator: true, enterprise: true },
			],
		},
		{
			category: 'Document Summaries',
			items: [
				{ name: 'Super prompted document summaries', basic: 'Up to 10', hobbyist: 'Up to 30', creator: 'Up to 90', enterprise: 'Unlimited' },
			],
		},
		{
			category: 'Scene Types',
			items: [
				{ name: 'Anchor style avatar scenes', basic: true, hobbyist: true, creator: true, enterprise: true },
				{ name: 'Infographic scenes', basic: false, hobbyist: true, creator: true, enterprise: true },
				{ name: 'Chart based scenes', basic: false, hobbyist: true, creator: true, enterprise: true },
				{ name: 'Dynamic avatar scenes', basic: false, hobbyist: false, creator: true, enterprise: true },
			],
		},
		{
			category: 'Avatars & Personalization',
			items: [
				{ name: 'Personalized avatars', basic: '3 avatars', hobbyist: '10 avatars', creator: 'Unlimited', enterprise: 'Unlimited' },
				{ name: 'Voice cloning', basic: false, hobbyist: false, creator: true, enterprise: true },
			],
		},
		{
			category: 'Branding',
			items: [
				{ name: 'Remove Reel Reports Logo', basic: false, hobbyist: true, creator: true, enterprise: true },
				{ name: 'Multiple brand profiles', basic: false, hobbyist: false, creator: true, enterprise: true },
			],
		},
		{
			category: 'Enterprise Features',
			items: [
				{ name: 'Translation to +80 languages', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'Script saving', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'SAML / SSO', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'Tailored onboarding', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'System integration', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'Dedicated chat/email support', basic: false, hobbyist: false, creator: false, enterprise: true },
				{ name: 'Adoption support campaign', basic: false, hobbyist: false, creator: false, enterprise: true },
			],
		},
	];

	const renderCell = (value) => {
		if (typeof value === 'boolean') {
			return value ? (
				<div className="flex justify-center">
					<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
						<CheckIcon className="w-4 h-4 text-indigo-600 font-bold" />
					</div>
				</div>
			) : (
				<div className="flex justify-center">
					<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
						<XMarkIcon className="w-4 h-4 text-gray-400" />
					</div>
				</div>
			);
		}
		return <span className="text-sm text-gray-900 font-medium">{value}</span>;
	};

	return (
		<section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm">
						Feature Comparison
					</span>
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
						Compare all features
					</h2>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">
						See exactly what's included in each plan to find the perfect fit for your needs.
					</p>
				</motion.div>

				{/* Comparison Table - Desktop */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="hidden lg:block overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
				>
				{/* Table Header */}
				<div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-blue-500 to-purple-500 border-b border-gray-200">
					<div className="font-bold text-white text-lg">Features</div>
					<div className="text-center font-bold text-white text-lg">Basic</div>
					<div className="text-center font-bold text-white text-lg">Hobbyist</div>
					<div className="text-center font-bold text-white text-lg">Creator</div>
					<div className="text-center font-bold text-white text-lg">Enterprise</div>
				</div>

					{/* Table Body */}
					{features.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
						>
							{/* Category Header */}
							<div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
								<h3 className="font-bold text-gray-900">{category.category}</h3>
							</div>

						{/* Category Items */}
						{category.items.map((item, itemIndex) => (
							<div
								key={itemIndex}
								className={`grid grid-cols-5 gap-4 p-6 items-center ${
									itemIndex !== category.items.length - 1 ? 'border-b border-gray-100' : ''
								} hover:bg-gray-50 transition-colors`}
							>
								<div className="text-sm text-gray-700">{item.name}</div>
								<div className="text-center">{renderCell(item.basic)}</div>
								<div className="text-center">{renderCell(item.hobbyist)}</div>
								<div className="text-center">{renderCell(item.creator)}</div>
								<div className="text-center">{renderCell(item.enterprise)}</div>
							</div>
						))}
						</motion.div>
					))}
				</motion.div>

			{/* Comparison Cards - Mobile/Tablet */}
			<div className="lg:hidden space-y-6">
				{['basic', 'hobbyist', 'creator', 'enterprise'].map((plan, planIndex) => {
					const planNames = { basic: 'Basic', hobbyist: 'Hobbyist', creator: 'Creator', enterprise: 'Enterprise' };
					const planGradients = {
						basic: 'from-blue-500 to-cyan-500',
						hobbyist: 'from-purple-500 to-pink-500',
						creator: 'from-indigo-500 to-purple-500',
						enterprise: 'from-orange-500 to-red-500',
					};

						return (
							<motion.div
								key={plan}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: planIndex * 0.15 }}
								className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden"
							>
								{/* Plan Header */}
								<div className={`p-6 bg-gradient-to-r ${planGradients[plan]} text-white`}>
									<h3 className="text-2xl font-bold">{planNames[plan]}</h3>
								</div>

								{/* Features */}
								<div className="p-6">
									{features.map((category, categoryIndex) => (
										<div key={categoryIndex} className="mb-6 last:mb-0">
											<h4 className="font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">
												{category.category}
											</h4>
											<div className="space-y-3">
												{category.items.map((item, itemIndex) => (
													<div key={itemIndex} className="flex items-center justify-between">
														<span className="text-sm text-gray-700">{item.name}</span>
														<div className="ml-4">{renderCell(item[plan])}</div>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default PricingComparison;

