import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
	SparklesIcon,
	VideoCameraIcon,
	RocketLaunchIcon,
	CheckCircleIcon,
} from '@heroicons/react/24/outline';

function HeroCTA({ variant = 'default' }) {
	const navigate = useNavigate();

	const handleBookDemo = () => {
		navigate('/book-demo');
	};

	const handleGetStarted = () => {
		navigate('/get-started');
	};

	// Full Hero Section
	if (variant === 'hero') {
		return (
			<section className="relative section-spacing px-4 overflow-hidden" style={{ fontFamily: 'var(--brand-font)' }}>
				{/* Background decorative elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 0.15, scale: 1 }}
						transition={{ duration: 1 }}
						className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 0.15, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
					/>
				</div>

				<div className="mx-auto max-w-7xl relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-purple-200 mb-6"
							>
								<SparklesIcon className="w-4 h-4 text-purple-600" />
								<span className="text-sm font-semibold text-purple-900">AI-Powered Video Creation</span>
							</motion.div>

							<h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
								Create stunning videos in{' '}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									minutes
								</span>
							</h1>

							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Transform your content into professional videos with AI. No experience needed. Join 50,000+ creators already using ReelReport.
							</p>

							{/* Features List */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="space-y-3 mb-8"
							>
								{[
									'Create videos 10x faster with AI',
									'500+ professional templates',
									'No credit card required to start',
								].map((feature, index) => (
									<div key={index} className="flex items-center gap-3">
										<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
											<CheckCircleIcon className="w-4 h-4 text-green-600" />
										</div>
										<span className="text-gray-700 font-medium">{feature}</span>
									</div>
								))}
							</motion.div>

							{/* CTA Buttons */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
							>
								<motion.button
									onClick={handleGetStarted}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-2xl hover:shadow-3xl transition-all"
								>
									Get Started Free
									<motion.svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										animate={{ x: [0, 3, 0] }}
										transition={{ repeat: Infinity, duration: 1.5 }}
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</motion.svg>
								</motion.button>

								<motion.button
									onClick={handleBookDemo}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-4 rounded-xl text-gray-900 font-bold bg-white border-2 border-gray-300 hover:border-gray-900 transition-all shadow-lg hover:shadow-xl"
								>
									Book a Demo
								</motion.button>
							</motion.div>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
								className="mt-6 text-sm text-gray-500"
							>
								Start your 14-day free trial • No credit card required
							</motion.p>
						</motion.div>

						{/* Right - Visual */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="relative"
						>
							<div className="relative rounded-3xl overflow-hidden shadow-2xl">
								{/* Placeholder for video/image */}
								<div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
									<motion.div
										animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
										transition={{ repeat: Infinity, duration: 3 }}
										className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
									>
										<VideoCameraIcon className="w-12 h-12 text-white" />
									</motion.div>
								</div>

								{/* Floating elements */}
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{ repeat: Infinity, duration: 2 }}
									className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-white shadow-lg flex items-center gap-2"
								>
									<SparklesIcon className="w-4 h-4 text-purple-600" />
									<span className="text-sm font-semibold text-gray-900">AI Powered</span>
								</motion.div>

								<motion.div
									animate={{ y: [0, 10, 0] }}
									transition={{ repeat: Infinity, duration: 2.5 }}
									className="absolute bottom-4 left-4 px-4 py-2 rounded-lg bg-white shadow-lg flex items-center gap-2"
								>
									<RocketLaunchIcon className="w-4 h-4 text-blue-600" />
									<span className="text-sm font-semibold text-gray-900">Fast Export</span>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		);
	}

	// Simple CTA Banner
	if (variant === 'banner') {
		return (
			<section className="relative section-spacing px-4" style={{ fontFamily: 'var(--brand-font)' }}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-4xl"
				>
					<div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl text-center">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Ready to transform your content?
						</h2>
						<p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
							Join thousands of creators making amazing videos with AI. Start your free trial today.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<motion.button
								onClick={handleGetStarted}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-xl bg-white text-purple-600 font-bold shadow-lg hover:shadow-xl transition-all"
							>
								Get Started Free
							</motion.button>

							<motion.button
								onClick={handleBookDemo}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 rounded-xl bg-transparent text-white font-bold border-2 border-white hover:bg-white/10 transition-all"
							>
								Book a Demo
							</motion.button>
						</div>

						<p className="mt-6 text-sm text-blue-100">
							No credit card required • 14-day free trial • Cancel anytime
						</p>
					</div>
				</motion.div>
			</section>
		);
	}

	// Minimal variant - just buttons
	return (
		<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
			<motion.button
				onClick={handleBookDemo}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="px-8 py-3 rounded-xl text-gray-900 font-semibold bg-white border-2 border-gray-300 hover:border-gray-900 transition-all shadow-sm hover:shadow-md"
			>
				Book Demo
			</motion.button>

			<motion.button
				onClick={handleGetStarted}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
			>
				Get Started
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</motion.button>
		</div>
	);
}

export default HeroCTA;

