import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function PricingFAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: 'Can I change my plan later?',
			answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged a prorated amount for the remainder of your billing cycle. When downgrading, the change will take effect at the start of your next billing cycle.',
		},
		{
			question: 'What payment methods do you accept?',
			answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment partners.',
		},
		{
			question: 'Is there a free trial available?',
			answer: 'Absolutely! All plans come with a 14-day free trial. No credit card required to start your trial. You can explore all the features and create videos to see if ReelReport is the right fit for you.',
		},
		{
			question: 'What happens when I exceed my video limit?',
			answer: 'If you reach your monthly video limit, you\'ll be notified and can either upgrade your plan or purchase additional videos as add-ons. We\'ll never cut off your access without warning.',
		},
		{
			question: 'Do you offer refunds?',
			answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with ReelReport within the first 30 days, contact our support team for a full refund.',
		},
		{
			question: 'Can I cancel my subscription anytime?',
			answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won\'t be charged again. No cancellation fees or penalties.',
		},
		{
			question: 'What\'s included in Enterprise support?',
			answer: 'Enterprise plans include 24/7 dedicated support via phone, email, and chat, a dedicated account manager, custom onboarding and training sessions, SLA guarantees, and priority feature requests.',
		},
		{
			question: 'Can I use my videos commercially?',
			answer: 'Yes! All videos you create with ReelReport are 100% yours to use commercially. You retain full ownership and rights to your content, including for commercial purposes, advertising, and client work.',
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="relative section-spacing px-4" style={{ fontFamily: 'var(--brand-font)' }}>
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
						FAQ
					</span>
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
						Frequently Asked Questions
					</h2>
					<p className="mt-3 text-gray-600">
						Can't find the answer you're looking for? Reach out to our customer support team.
					</p>
				</motion.div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05, duration: 0.5 }}
						>
							<motion.button
								onClick={() => toggleFAQ(index)}
								className="w-full text-left p-6 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300"
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
							>
								<div className="flex items-center justify-between gap-4">
									<h3 className="text-lg font-bold text-gray-900 pr-8">
										{faq.question}
									</h3>
									<motion.div
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className="flex-shrink-0"
									>
										<ChevronDownIcon className="w-5 h-5 text-gray-600" />
									</motion.div>
								</div>

								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden"
										>
											<p className="mt-4 text-gray-600 leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</motion.div>
					))}
				</div>

				{/* Contact Support */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-[#c6c1f0]"
				>
					<h3 className="text-xl font-bold text-gray-900 mb-2">
						Still have questions?
					</h3>
					<p className="text-gray-600 mb-4">
						Our team is here to help you find the perfect solution
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
					>
						Contact Support
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}

export default PricingFAQ;

