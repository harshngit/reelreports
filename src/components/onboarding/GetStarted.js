import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	UserIcon,
	EnvelopeIcon,
	LockClosedIcon,
	ArrowRightIcon,
	ArrowLeftIcon,
	CheckCircleIcon,
	RocketLaunchIcon,
} from '@heroicons/react/24/outline';

function GetStarted() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		useCase: '',
		experience: '',
	});

	const totalSteps = 3;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleNext = () => {
		if (step < totalSteps) {
			setStep(step + 1);
		}
	};

	const handleBack = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setStep(4); // Success step
	};

	const useCases = [
		{ value: 'marketing', label: 'Marketing & Advertising', icon: '✨' },
		{ value: 'education', label: 'Education & Training', icon: '📚' },
		{ value: 'social', label: 'Social Media Content', icon: '📱' },
		{ value: 'business', label: 'Business Communications', icon: '💼' },
		{ value: 'entertainment', label: 'Entertainment', icon: '🎬' },
		{ value: 'other', label: 'Other', icon: '🎯' },
	];

	const experienceLevels = [
		{ value: 'beginner', label: 'Beginner', description: 'New to video creation' },
		{ value: 'intermediate', label: 'Intermediate', description: 'Some experience with video tools' },
		{ value: 'advanced', label: 'Advanced', description: 'Professional video creator' },
	];

	// Success Screen
	if (step === 4) {
		return (
			<section className="relative py-20 px-4 min-h-screen flex items-center" style={{ fontFamily: 'var(--brand-font)' }}>
				<div className="mx-auto max-w-2xl w-full text-center">
					

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-4xl font-bold text-gray-900 mb-4"
					>
						Welcome to ReelReport! 🎉
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-lg text-gray-600 mb-8"
					>
						Your account has been created successfully. Let's start creating amazing videos!
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="grid sm:grid-cols-3 gap-4 mb-8"
					>
						{[
							{ icon: '🎨', title: 'Templates', desc: '500+ ready to use' },
							{ icon: '🤖', title: 'AI Tools', desc: 'Powered by latest AI' },
							{ icon: '⚡', title: 'Fast Export', desc: 'Minutes, not hours' },
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6 + index * 0.1 }}
								className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-[#c6c1f0]"
							>
								<div className="text-3xl mb-2">{feature.icon}</div>
								<div className="font-bold text-gray-900">{feature.title}</div>
								<div className="text-sm text-gray-600">{feature.desc}</div>
							</motion.div>
						))}
					</motion.div>

					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl transition-all"
					>
						Go to Dashboard
						<ArrowRightIcon className="w-5 h-5" />
					</motion.button>
				</div>
			</section>
		);
	}

	return (
		<section className="relative py-20 px-4 min-h-screen flex items-center" style={{ fontFamily: 'var(--brand-font)' }}>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1 }}
					className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
				/>
			</div>

			<div className="mx-auto max-w-2xl w-full relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-8"
				>
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm mb-4">
						Get Started
					</span>
					<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
						Create your account
					</h1>
					<p className="text-gray-600">
						Join thousands of creators making amazing videos with AI
					</p>
				</motion.div>

				{/* Progress Bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8"
				>
					<div className="flex items-center justify-between mb-2">
						<span className="text-sm font-semibold text-gray-900">Step {step} of {totalSteps}</span>
						<span className="text-sm text-gray-600">{Math.round((step / totalSteps) * 100)}%</span>
					</div>
					<div className="h-2 bg-gray-200 rounded-full overflow-hidden">
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: `${(step / totalSteps) * 100}%` }}
							transition={{ duration: 0.5 }}
							className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
						/>
					</div>
				</motion.div>

				{/* Form Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="p-8 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 border border-[#c6c1f0]"
				>
					<form onSubmit={handleSubmit}>
						<AnimatePresence mode="wait">
							{/* Step 1: Basic Info */}
							{step === 1 && (
								<motion.div
									key="step1"
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									className="space-y-5"
								>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">Let's start with the basics</h3>

									{/* Name */}
									<div>
										<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
											Full Name
										</label>
										<div className="relative">
											<UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
												placeholder="John Doe"
											/>
										</div>
									</div>

									{/* Email */}
									<div>
										<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
											Email Address
										</label>
										<div className="relative">
											<EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
												placeholder="john@example.com"
											/>
										</div>
									</div>

									{/* Password */}
									<div>
										<label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
											Password
										</label>
										<div className="relative">
											<LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
											<input
												type="password"
												id="password"
												name="password"
												value={formData.password}
												onChange={handleChange}
												required
												className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
												placeholder="••••••••"
											/>
										</div>
										<p className="mt-2 text-xs text-gray-500">Must be at least 8 characters</p>
									</div>
								</motion.div>
							)}

							{/* Step 2: Use Case */}
							{step === 2 && (
								<motion.div
									key="step2"
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
								>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">What will you use ReelReport for?</h3>
									<p className="text-gray-600 mb-6">This helps us personalize your experience</p>

									<div className="grid grid-cols-2 gap-4">
										{useCases.map((useCase) => (
											<motion.label
												key={useCase.value}
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.98 }}
												className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
													formData.useCase === useCase.value
														? 'border-indigo-500 bg-indigo-50'
														: 'border-gray-200 hover:border-gray-300'
												}`}
											>
												<input
													type="radio"
													name="useCase"
													value={useCase.value}
													checked={formData.useCase === useCase.value}
													onChange={handleChange}
													className="sr-only"
												/>
												<div className="text-2xl mb-2">{useCase.icon}</div>
												<div className="font-semibold text-gray-900 text-sm">{useCase.label}</div>
												{formData.useCase === useCase.value && (
													<CheckCircleIcon className="absolute top-3 right-3 w-5 h-5 text-indigo-600" />
												)}
											</motion.label>
										))}
									</div>
								</motion.div>
							)}

							{/* Step 3: Experience Level */}
							{step === 3 && (
								<motion.div
									key="step3"
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
								>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">What's your experience level?</h3>
									<p className="text-gray-600 mb-6">We'll tailor the onboarding to match your expertise</p>

									<div className="space-y-3">
										{experienceLevels.map((level) => (
											<motion.label
												key={level.value}
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
												className={`block p-5 rounded-xl border-2 cursor-pointer transition-all ${
													formData.experience === level.value
														? 'border-purple-500 bg-purple-50'
														: 'border-gray-200 hover:border-gray-300'
												}`}
											>
												<input
													type="radio"
													name="experience"
													value={level.value}
													checked={formData.experience === level.value}
													onChange={handleChange}
													className="sr-only"
												/>
												<div className="flex items-center justify-between">
													<div>
														<div className="font-bold text-gray-900 mb-1">{level.label}</div>
														<div className="text-sm text-gray-600">{level.description}</div>
													</div>
													{formData.experience === level.value && (
														<CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
													)}
												</div>
											</motion.label>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>

						{/* Navigation Buttons */}
						<div className="flex items-center justify-between mt-8 gap-4">
							{step > 1 ? (
								<motion.button
									type="button"
									onClick={handleBack}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-700 font-semibold bg-gray-100 hover:bg-gray-200 transition-all"
								>
									<ArrowLeftIcon className="w-5 h-5" />
									Back
								</motion.button>
							) : (
								<div />
							)}

							{step < totalSteps ? (
								<motion.button
									type="button"
									onClick={handleNext}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all ml-auto"
								>
									Next
									<ArrowRightIcon className="w-5 h-5" />
								</motion.button>
							) : (
								<motion.button
									type="submit"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all ml-auto"
								>
									Create Account
									<RocketLaunchIcon className="w-5 h-5" />
								</motion.button>
							)}
						</div>
					</form>

					{/* Terms */}
					<p className="mt-6 text-xs text-center text-gray-500">
						By continuing, you agree to our{' '}
						<a href="#" className="text-purple-600 hover:underline">
							Terms of Service
						</a>{' '}
						and{' '}
						<a href="#" className="text-purple-600 hover:underline">
							Privacy Policy
						</a>
					</p>
				</motion.div>

				{/* Social Proof */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mt-8 text-center text-sm text-gray-600"
				>
					<p>Join 50,000+ creators already using ReelReport</p>
				</motion.div>
			</div>
		</section>
	);
}

export default GetStarted;

