import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	CalendarDaysIcon,
	UserIcon,
	EnvelopeIcon,
	PhoneIcon,
	BuildingOfficeIcon,
	ChatBubbleLeftRightIcon,
	CheckCircleIcon,
	SparklesIcon,
} from '@heroicons/react/24/outline';

function BookDemo() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		teamSize: '',
		message: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
		setIsSubmitted(true);
	};

	const benefits = [
		{
			icon: SparklesIcon,
			title: 'Personalized Walkthrough',
			description: 'Get a customized demo tailored to your specific needs',
		},
		{
			icon: CalendarDaysIcon,
			title: 'Flexible Scheduling',
			description: 'Choose a time that works best for your schedule',
		},
		{
			icon: ChatBubbleLeftRightIcon,
			title: 'Ask Questions',
			description: 'Direct access to our product experts',
		},
	];

	if (isSubmitted) {
		return (
			<section className="relative py-20 px-4 min-h-screen flex items-center" style={{ fontFamily: 'var(--brand-font)' }}>
				<div className="mx-auto max-w-2xl w-full text-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: 'spring', duration: 0.6 }}
						className="mb-8"
					>
						<div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl">
							<CheckCircleIcon className="w-12 h-12 text-white" />
						</div>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-4xl font-bold text-gray-900 mb-4"
					>
						Thank You!
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-lg text-gray-600 mb-8"
					>
						We've received your demo request. Our team will reach out to you within 24 hours to schedule your personalized demo.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-[#c6c1f0]"
					>
						<p className="text-sm text-gray-600">
							In the meantime, check your email for confirmation and resources to help you get started.
						</p>
					</motion.div>
				</div>
			</section>
		);
	}

	return (
		<section className="relative py-20 px-4" style={{ fontFamily: 'var(--brand-font)' }}>
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1 }}
					className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
				/>
			</div>

			<div className="mx-auto max-w-6xl relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm">
						Schedule a Demo
					</span>
					<h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
						See ReelReport in action
					</h1>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">
						Book a personalized demo with our team and discover how ReelReport can transform your video creation process.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left side - Benefits */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-8"
					>
						<div className="space-y-6">
							{benefits.map((benefit, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 + index * 0.1 }}
									whileHover={{ x: 5 }}
									className="flex gap-4 p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0] transition-all duration-300"
								>
									<div className="flex-shrink-0">
										<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
											<benefit.icon className="w-6 h-6 text-white" />
										</div>
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
										<p className="text-gray-600">{benefit.description}</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Trust indicators */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-[#c6c1f0]"
						>
							<p className="text-sm font-semibold text-gray-900 mb-4">What you'll learn:</p>
							<ul className="space-y-3">
								{[
									'How to create professional videos in minutes',
									'Advanced AI features and customization options',
									'Team collaboration and workflow management',
									'Integration with your existing tools',
								].map((item, index) => (
									<li key={index} className="flex items-start gap-2">
										<CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700">{item}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>

					{/* Right side - Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 border border-[#c6c1f0]">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Fill in your details</h3>

							<div className="space-y-5">
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
										Full Name *
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
										Work Email *
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
											placeholder="john@company.com"
										/>
									</div>
								</div>

								{/* Phone */}
								<div>
									<label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
										Phone Number
									</label>
									<div className="relative">
										<PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
											placeholder="+1 (555) 000-0000"
										/>
									</div>
								</div>

								{/* Company */}
								<div>
									<label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
										Company Name *
									</label>
									<div className="relative">
										<BuildingOfficeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onChange={handleChange}
											required
											className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
											placeholder="Your Company"
										/>
									</div>
								</div>

								{/* Team Size */}
								<div>
									<label htmlFor="teamSize" className="block text-sm font-semibold text-gray-900 mb-2">
										Team Size
									</label>
									<select
										id="teamSize"
										name="teamSize"
										value={formData.teamSize}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
									>
										<option value="">Select team size</option>
										<option value="1-10">1-10 people</option>
										<option value="11-50">11-50 people</option>
										<option value="51-200">51-200 people</option>
										<option value="201-500">201-500 people</option>
										<option value="500+">500+ people</option>
									</select>
								</div>

								{/* Message */}
								<div>
									<label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
										What are you looking to achieve?
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows="4"
										className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none"
										placeholder="Tell us about your video creation needs..."
									/>
								</div>
							</div>

							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Schedule My Demo
							</motion.button>

							<p className="mt-4 text-xs text-center text-gray-500">
								By submitting, you agree to our Terms of Service and Privacy Policy
							</p>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default BookDemo;

