import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	CheckIcon,
	XMarkIcon,
	SparklesIcon,
	RocketLaunchIcon,
	BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

function PricingCards() {
	const [isYearly, setIsYearly] = useState(false);

	const plans = [
		{
			name: 'Basic',
			description: 'Perfect for getting started',
			icon: SparklesIcon,
			monthlyPrice: 0,
			yearlyPrice: 0,
			priceLabel: 'Free',
			popular: false,
			videoLimit: '3 minutes of video per month',
			features: [
				{ name: 'Download your videos', included: true },
				{ name: 'Up to 10 super prompted document summaries', included: true },
				{ name: 'Anchor style avatar scenes', included: true },
				{ name: '3 personalized avatars', included: true },
			],
			gradient: 'from-blue-500 to-cyan-500',
			buttonClass: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
		},
		{
			name: 'Hobbyist',
			description: 'Everything in Basic +',
			icon: RocketLaunchIcon,
			monthlyPrice: 39,
			yearlyPrice: 390,
			popular: true,
			videoLimit: '10 minutes of video per month',
			features: [
				{ name: 'Remove Reel Reports Logo', included: true },
				{ name: 'Up to 30 super prompted document summaries', included: true },
				{ name: 'Infographic scenes', included: true },
				{ name: 'Chart based scenes', included: true },
				{ name: '10 personalized avatars', included: true },
			],
			gradient: 'from-purple-500 to-pink-500',
			buttonClass: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
		},
		{
			name: 'Creator',
			description: 'Everything in Hobbyist +',
			icon: SparklesIcon,
			monthlyPrice: 99,
			yearlyPrice: 990,
			popular: false,
			videoLimit: '10 minutes of video per month',
			features: [
				{ name: 'Up to 90 super prompted document summaries', included: true },
				{ name: 'Dynamic avatar scenes', included: true },
				{ name: 'Unlimited personalized avatars', included: true },
				{ name: 'Voice cloning', included: true },
				{ name: 'Multiple brand profiles', included: true },
			],
			gradient: 'from-indigo-500 to-purple-500',
			buttonClass: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600',
		},
		{
			name: 'Enterprise',
			description: 'Everything in Hobbyist +',
			icon: BuildingOfficeIcon,
			monthlyPrice: null,
			yearlyPrice: null,
			priceLabel: "Let's talk",
			customPricing: true,
			videoLimit: 'Unlimited video minutes',
			popular: false,
			features: [
				{ name: 'Unlimited video minutes', included: true },
				{ name: 'Translation to +80 languages', included: true },
				{ name: 'Script saving', included: true },
				{ name: 'SAML / SSO', included: true },
				{ name: 'Tailored onboarding', included: true },
				{ name: 'System integration', included: true },
				{ name: 'Dedicated chat/email support', included: true },
				{ name: 'Adoption support campaign', included: true },
			],
			gradient: 'from-orange-500 to-red-500',
			buttonClass: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.4, 0.25, 1],
			},
		},
	};

	return (
		<section className="relative py-20 px-4" style={{ fontFamily: 'var(--brand-font)' }}>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1 }}
					className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
				/>
			</div>

			<div className="mx-auto max-w-7xl relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm">
						Pricing
					</span>
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
						Choose the perfect plan for you
					</h2>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">
						Start creating amazing video content today. All plans include a 14-day free trial.
					</p>

					{/* Billing Toggle */}
					{/* <div className="mt-8 flex items-center justify-center gap-3">
						<span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
							Monthly
						</span>
						<motion.button
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsYearly(!isYearly)}
							className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
							style={{
								backgroundColor: isYearly ? '#9333ea' : '#cbd5e1',
							}}
						>
							<motion.span
								layout
								transition={{ type: 'spring', stiffness: 500, damping: 30 }}
								className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
								style={{
									marginLeft: isYearly ? '1.75rem' : '0.25rem',
								}}
							/>
						</motion.button>
						<span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
							Yearly
						</span>
						{isYearly && (
							<motion.span
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800"
							>
								Save 17%
							</motion.span>
						)}
					</div> */}
				</motion.div>

				{/* Pricing Cards */}
				<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					{plans.map((plan, index) => (
						<motion.div
							key={plan.name}
							variants={cardVariants}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
							className="relative"
						>
							{/* Popular Badge */}
							{plan.popular && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
								>
									<span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${plan.gradient} px-4 py-1.5 text-xs font-bold text-white shadow-lg`}>
										<SparklesIcon className="w-3 h-3" />
										Most Popular
									</span>
								</motion.div>
							)}

							<div
								className={`relative h-full p-8 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 border-2 transition-all duration-300 ${
									plan.popular ? 'border-purple-500 shadow-2xl' : 'border-[#c6c1f0] hover:border-[#0013C1]'
								}`}
							>
								{/* Icon */}
								<div className="flex items-center justify-between mb-6">
									<div
										className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.gradient} shadow-lg`}
									>
										<plan.icon className="w-7 h-7 text-white" />
									</div>
									{plan.popular && (
										<motion.div
											animate={{ rotate: [0, 10, -10, 10, 0] }}
											transition={{ repeat: Infinity, duration: 2, delay: 1 }}
										>
											<SparklesIcon className="w-6 h-6 text-purple-500" />
										</motion.div>
									)}
								</div>

								{/* Plan Name and Description */}
								<h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
								<p className="text-sm text-gray-600 mb-6">{plan.description}</p>

							{/* Price */}
							<div className="mb-8">
								{plan.customPricing ? (
									<div>
										<motion.div
											key="custom"
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3 }}
											className="text-3xl font-bold text-gray-900 mb-2"
										>
											{plan.priceLabel}
										</motion.div>
										<p className="text-gray-600">Custom pricing</p>
									</div>
								) : (
									<div>
									<div className="flex items-baseline gap-2">
										<motion.span
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3 }}
											className="text-5xl font-bold text-gray-900"
										>
											{plan.priceLabel || `$${plan.monthlyPrice}`}
										</motion.span>
										{!plan.priceLabel && (
											<span className="text-gray-600">
												/month
											</span>
										)}
									</div>
								</div>
								)}
							</div>

							{/* CTA Button */}
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className={`w-full py-3 px-6 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 ${plan.buttonClass}`}
							>
								{plan.customPricing ? 'Contact Sales' : 'Get Started'}
							</motion.button>

								{/* Features */}
								<div className="mt-8 pt-8 border-t border-gray-200">
									<p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
									<ul className="space-y-3">
										{plan.features.map((feature, idx) => (
											<motion.li
												key={idx}
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: idx * 0.05 }}
												className="flex items-start gap-3"
											>
											{feature.included ? (
												<div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
													<CheckIcon className="w-3.5 h-3.5 text-indigo-600 font-bold" />
												</div>
											) : (
												<div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
													<XMarkIcon className="w-3.5 h-3.5 text-gray-400" />
												</div>
											)}
												<span
													className={`text-sm leading-6 ${
														feature.included ? 'text-gray-700' : 'text-gray-400'
													}`}
												>
													{feature.name}
												</span>
											</motion.li>
										))}
									</ul>
								</div>

								{/* Video Credits Section */}
								{plan.videoLimit && (
									<div className="mt-8 pt-8 border-t border-gray-200">
										<p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
											Includes X Credits / Mo
										</p>
										<p className="text-xs text-gray-600 mb-2">Useable for up to</p>
										<div className="flex items-center gap-2">
											<div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
												<CheckIcon className="w-3.5 h-3.5 text-indigo-600 font-bold" />
											</div>
											<span className="text-sm font-medium text-gray-900">
												{plan.videoLimit}
											</span>
										</div>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="mt-16 text-center"
				>
					<p className="text-gray-600 mb-4">
						Need a custom plan? We're here to help!
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg  transition-colors"
					>
						Contact Sales
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}

export default PricingCards;

