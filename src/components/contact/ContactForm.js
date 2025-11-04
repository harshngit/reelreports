import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	UserIcon,
	EnvelopeIcon,
	PhoneIcon,
	BuildingOfficeIcon,
	ChatBubbleLeftRightIcon,
	PaperAirplaneIcon,
	CheckCircleIcon,
} from '@heroicons/react/24/outline';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		subject: '',
		message: '',
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [focusedField, setFocusedField] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsSubmitted(true);

		// Reset after 5 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				subject: '',
				message: '',
			});
		}, 5000);
	};

	const subjects = [
		'General Inquiry',
		'Sales Question',
		'Technical Support',
		'Partnership Opportunity',
		'Billing Question',
		'Feature Request',
		'Other',
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="relative"
		>
			{/* Success Overlay */}
			{isSubmitted && (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					className="absolute inset-0 z-10 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl"
				>
					<div className="text-center p-8">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: 'spring', delay: 0.2 }}
							className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl"
						>
							<CheckCircleIcon className="w-10 h-10 text-white" />
						</motion.div>
						<motion.h3
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-2xl font-bold text-gray-900 mb-2"
						>
							Message Sent! 🎉
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="text-gray-600"
						>
							We'll get back to you within 24 hours.
						</motion.p>
					</div>
				</motion.div>
			)}

			{/* Form */}
			<div className="p-8 sm:p-10 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 border border-[#c6c1f0] relative overflow-hidden">
				{/* Animated gradient background */}
				<motion.div
					animate={{
						background: [
							'radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
							'radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
							'radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
						],
					}}
					transition={{ duration: 10, repeat: Infinity }}
					className="absolute inset-0 pointer-events-none"
				/>

				<div className="relative z-10">
					<h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
					<p className="text-gray-600 mb-8">
						Fill out the form below and we'll get back to you as soon as possible.
					</p>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Name and Email Row */}
						<div className="grid sm:grid-cols-2 gap-6">
							{/* Name */}
							<motion.div
								whileHover={{ y: -2 }}
								transition={{ duration: 0.2 }}
							>
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
										onFocus={() => setFocusedField('name')}
										onBlur={() => setFocusedField(null)}
										required
										className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${
											focusedField === 'name'
												? 'border-indigo-500 ring-4 ring-indigo-100'
												: 'border-gray-200 hover:border-gray-300'
										}`}
										placeholder="John Doe"
									/>
								</div>
							</motion.div>

							{/* Email */}
							<motion.div
								whileHover={{ y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
									Email Address *
								</label>
								<div className="relative">
									<EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										onFocus={() => setFocusedField('email')}
										onBlur={() => setFocusedField(null)}
										required
										className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${
											focusedField === 'email'
												? 'border-indigo-500 ring-4 ring-indigo-100'
												: 'border-gray-200 hover:border-gray-300'
										}`}
										placeholder="john@example.com"
									/>
								</div>
							</motion.div>
						</div>

						{/* Phone and Company Row */}
						<div className="grid sm:grid-cols-2 gap-6">
							{/* Phone */}
							<motion.div
								whileHover={{ y: -2 }}
								transition={{ duration: 0.2 }}
							>
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
										onFocus={() => setFocusedField('phone')}
										onBlur={() => setFocusedField(null)}
										className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${
											focusedField === 'phone'
												? 'border-indigo-500 ring-4 ring-indigo-100'
												: 'border-gray-200 hover:border-gray-300'
										}`}
										placeholder="+1 (555) 000-0000"
									/>
								</div>
							</motion.div>

							{/* Company */}
							<motion.div
								whileHover={{ y: -2 }}
								transition={{ duration: 0.2 }}
							>
								<label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
									Company Name
								</label>
								<div className="relative">
									<BuildingOfficeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										onFocus={() => setFocusedField('company')}
										onBlur={() => setFocusedField(null)}
										className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none ${
											focusedField === 'company'
												? 'border-indigo-500 ring-4 ring-indigo-100'
												: 'border-gray-200 hover:border-gray-300'
										}`}
										placeholder="Your Company"
									/>
								</div>
							</motion.div>
						</div>

						{/* Subject */}
						<motion.div
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2 }}
						>
							<label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
								Subject *
							</label>
							<div className="relative">
								<ChatBubbleLeftRightIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
								<select
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									onFocus={() => setFocusedField('subject')}
									onBlur={() => setFocusedField(null)}
									required
									className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none appearance-none bg-white ${
										focusedField === 'subject'
											? 'border-indigo-500 ring-4 ring-indigo-100'
											: 'border-gray-200 hover:border-gray-300'
									}`}
								>
									<option value="">Select a subject</option>
									{subjects.map((subject) => (
										<option key={subject} value={subject}>
											{subject}
										</option>
									))}
								</select>
							</div>
						</motion.div>

						{/* Message */}
						<motion.div
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2 }}
						>
							<label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
								Message *
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								onFocus={() => setFocusedField('message')}
								onBlur={() => setFocusedField(null)}
								required
								rows="6"
								className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none resize-none ${
									focusedField === 'message'
										? 'border-indigo-500 ring-4 ring-indigo-100'
										: 'border-gray-200 hover:border-gray-300'
								}`}
								placeholder="Tell us how we can help you..."
							/>
						</motion.div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							whileHover={{ scale: 1.02, y: -2 }}
							whileTap={{ scale: 0.98 }}
							className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 group"
						>
							Send Message
							<motion.div
								animate={{ x: [0, 3, 0] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							>
								<PaperAirplaneIcon className="w-5 h-5" />
							</motion.div>
						</motion.button>

						<p className="text-xs text-center text-gray-500">
							We typically respond within 24 hours during business days.
						</p>
					</form>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactForm;

