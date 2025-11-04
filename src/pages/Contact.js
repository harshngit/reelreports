import React from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import QuickHelp from '../components/contact/QuickHelp';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Contact = () => {
	return (
		<AppLayout>
			{/* Hero Section */}
			<section className="relative py-20 px-4 overflow-hidden" style={{ fontFamily: 'var(--brand-font)' }}>
				{/* Background decorative elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 0.1, scale: 1 }}
						transition={{ duration: 1 }}
						className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 0.1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
					/>
				</div>

				<div className="mx-auto max-w-7xl relative z-10">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm mb-6"
						>
							<SparklesIcon className="w-4 h-4 text-indigo-600" />
							Get in Touch
						</motion.div>

						<h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
							We'd love to{' '}
							<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
								hear from you
							</span>
						</h1>

						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Have a question, feedback, or need support? Our team is here to help you succeed.
							Reach out and we'll respond as soon as possible.
						</p>
					</motion.div>

					{/* Main Contact Section - Form + Info */}
					<div className="grid lg:grid-cols-3 gap-8 mb-20">
						{/* Contact Form - 2 columns */}
						<div className="lg:col-span-2">
							<ContactForm />
						</div>

						{/* Contact Info Sidebar - 1 column */}
						<div>
							<ContactInfo />
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<ContactMap />

			{/* Quick Help Section */}
			<QuickHelp />

			{/* Stats Section */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="relative py-16 px-4"
				style={{ fontFamily: 'var(--brand-font)' }}
			>
				<div className="mx-auto max-w-7xl">
					<div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 sm:p-12 text-white shadow-2xl">
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							{[
								{ value: '50K+', label: 'Happy Customers' },
								{ value: '24/7', label: 'Support Available' },
								{ value: '<2min', label: 'Avg. Response Time' },
								{ value: '99%', label: 'Satisfaction Rate' },
							].map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<motion.div
										animate={{ scale: [1, 1.05, 1] }}
										transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
										className="text-4xl sm:text-5xl font-bold mb-2"
									>
										{stat.value}
									</motion.div>
									<div className="text-indigo-100 font-medium">{stat.label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.section>
		</AppLayout>
	);
};

export default Contact;

