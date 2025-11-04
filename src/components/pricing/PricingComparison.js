import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

function PricingComparison() {
	const features = [
		{
			category: 'Video Creation',
			items: [
				{ name: 'Monthly video limit', starter: '10 videos', pro: '50 videos', enterprise: 'Unlimited' },
				{ name: 'Video quality', starter: '1080p HD', pro: '4K Ultra HD', enterprise: '4K Ultra HD' },
				{ name: 'Video length', starter: 'Up to 5 min', pro: 'Up to 15 min', enterprise: 'Unlimited' },
				{ name: 'Export formats', starter: 'MP4', pro: 'MP4, MOV, WebM', enterprise: 'All formats' },
				{ name: 'Batch processing', starter: false, pro: true, enterprise: true },
			],
		},
		{
			category: 'Templates & Assets',
			items: [
				{ name: 'Template library', starter: '100+ templates', pro: '500+ templates', enterprise: 'All templates + custom' },
				{ name: 'Stock footage', starter: '1,000 clips', pro: '10,000 clips', enterprise: 'Unlimited' },
				{ name: 'Stock music library', starter: '50 tracks', pro: '500 tracks', enterprise: 'Unlimited' },
				{ name: 'Custom templates', starter: false, pro: 'Up to 10', enterprise: 'Unlimited' },
				{ name: 'Upload custom assets', starter: true, pro: true, enterprise: true },
			],
		},
		{
			category: 'AI Features',
			items: [
				{ name: 'AI voice-over voices', starter: '5 voices', pro: '50+ voices', enterprise: 'All voices + custom' },
				{ name: 'Voice cloning', starter: false, pro: false, enterprise: true },
				{ name: 'Auto-captions', starter: true, pro: true, enterprise: true },
				{ name: 'AI script writing', starter: 'Basic', pro: 'Advanced', enterprise: 'Premium + custom' },
				{ name: 'Auto-translation', starter: false, pro: '10 languages', enterprise: '140+ languages' },
			],
		},
		{
			category: 'Branding & Customization',
			items: [
				{ name: 'Custom branding', starter: false, pro: true, enterprise: true },
				{ name: 'Brand kits', starter: false, pro: '1 brand', enterprise: 'Unlimited brands' },
				{ name: 'Watermark removal', starter: false, pro: true, enterprise: true },
				{ name: 'Custom fonts', starter: false, pro: '10 fonts', enterprise: 'Unlimited' },
				{ name: 'White-label solution', starter: false, pro: false, enterprise: true },
			],
		},
		{
			category: 'Collaboration & Workflow',
			items: [
				{ name: 'Team members', starter: '1 user', pro: 'Up to 5 users', enterprise: 'Unlimited' },
				{ name: 'Cloud storage', starter: '10 GB', pro: '100 GB', enterprise: '1 TB+' },
				{ name: 'Project sharing', starter: true, pro: true, enterprise: true },
				{ name: 'Comments & feedback', starter: false, pro: true, enterprise: true },
				{ name: 'Version control', starter: false, pro: true, enterprise: true },
			],
		},
		{
			category: 'Support & Services',
			items: [
				{ name: 'Support channels', starter: 'Email', pro: 'Email + Chat', enterprise: 'Email + Chat + Phone' },
				{ name: 'Response time', starter: '48 hours', pro: '24 hours', enterprise: '1 hour (24/7)' },
				{ name: 'Onboarding session', starter: false, pro: '1 session', enterprise: 'Full onboarding' },
				{ name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
				{ name: 'Custom training', starter: false, pro: false, enterprise: true },
			],
		},
		{
			category: 'Advanced Features',
			items: [
				{ name: 'API access', starter: false, pro: false, enterprise: 'Full API' },
				{ name: 'Priority rendering', starter: false, pro: true, enterprise: true },
				{ name: 'Advanced analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom dashboard' },
				{ name: 'SSO integration', starter: false, pro: false, enterprise: true },
				{ name: 'Custom integrations', starter: false, pro: false, enterprise: true },
			],
		},
	];

	const renderCell = (value) => {
		if (typeof value === 'boolean') {
			return value ? (
				<div className="flex justify-center">
					<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
						<CheckIcon className="w-4 h-4 text-green-600 font-bold" />
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
					<div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-blue-500 to-purple-500 border-b border-gray-200">
						<div className="font-bold text-white text-lg">Features</div>
						<div className="text-center font-bold text-white text-lg">Starter</div>
						<div className="text-center font-bold text-white text-lg">Professional</div>
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
									className={`grid grid-cols-4 gap-4 p-6 items-center ${
										itemIndex !== category.items.length - 1 ? 'border-b border-gray-100' : ''
									} hover:bg-gray-50 transition-colors`}
								>
									<div className="text-sm text-gray-700">{item.name}</div>
									<div className="text-center">{renderCell(item.starter)}</div>
									<div className="text-center">{renderCell(item.pro)}</div>
									<div className="text-center">{renderCell(item.enterprise)}</div>
								</div>
							))}
						</motion.div>
					))}
				</motion.div>

				{/* Comparison Cards - Mobile/Tablet */}
				<div className="lg:hidden space-y-6">
					{['starter', 'pro', 'enterprise'].map((plan, planIndex) => {
						const planNames = { starter: 'Starter', pro: 'Professional', enterprise: 'Enterprise' };
						const planGradients = {
							starter: 'from-blue-500 to-cyan-500',
							pro: 'from-purple-500 to-pink-500',
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

