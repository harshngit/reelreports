import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function FAQ() {
	const [openIndex, setOpenIndex] = useState(0); // First item open by default

	const faqs = [
		{
			question: 'Is Synthesia free?',
			answer: 'We have a free plan that lets you create free AI videos! It includes 3 minutes of video per month, 9 stock avatars and a full range of AI voices in 140+ languages. Learn more about all available plans or try our free AI video generator.'
		},
		{
			question: 'Can I customize AI videos to add brand identity?',
			answer: 'Yes, you can fully customize your AI videos with your brand colors, logos, fonts, and more to maintain consistent brand identity across all your video content.'
		},
		{
			question: 'Does AI video creation integrate with existing LMS?',
			answer: 'Absolutely! Our AI video creation platform integrates seamlessly with popular Learning Management Systems, making it easy to incorporate videos into your existing training workflows.'
		},
		{
			question: 'How does AI video creation improve employee productivity?',
			answer: 'AI video creation significantly reduces the time and resources needed to produce training materials, allowing employees to focus on their core tasks while still accessing high-quality educational content.'
		},
		{
			question: 'Is it safe for businesses to create AI videos in Synthesia?',
			answer: 'Yes, Synthesia is built with enterprise-grade security. We are SOC 2 Type II certified, GDPR compliant, and trusted by 90% of Fortune 100 companies for secure video creation.'
		},
		{
			question: "What can you do with Synthesia's AI video tools?",
			answer: 'With Synthesia, you can create professional training videos, product demos, marketing content, internal communications, and more - all without cameras, studios, or actors.'
		}
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className="relative py-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Left side - Heading */}
					<div className="flex flex-col justify-start">
						<div className="mb-6">
						<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] transition-all duration-300">
						FAQS
					</span>
						</div>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
							You've likely got a few questions
						</h2>
					</div>

					{/* Right side - FAQ Accordion */}
					<div className="flex flex-col gap-4">
						{faqs.map((faq, index) => (
					<div 
						key={index}
						className="rounded-2xl transition-colors duration-300"
						style={{ 
							backgroundColor: openIndex === index ? '#E5E2FF' : '#F8F9FA',
						}}
					>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
								>
									<span 
										className="text-base sm:text-lg font-semibold pr-4"
										style={{ color: '#0F172A' }}
									>
										{faq.question}
									</span>
						<span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
							<ChevronDownIcon 
								className="w-5 h-5 flex-shrink-0" 
								style={{ color: '#1470D2' }}
							/>
						</span>
								</button>
								
					{/* Answer - Animated dropdown */}
					<div 
						className="overflow-hidden"
						style={{
							maxHeight: openIndex === index ? '400px' : '0px',
							opacity: openIndex === index ? 1 : 0,
							transition: 'max-height 400ms ease, opacity 300ms ease'
						}}
					>
						<div className="px-6 pb-6 pt-0">
										<p className="text-gray-700 leading-relaxed">
											{faq.answer.split('Learn more about all available plans')[0]}
											{faq.answer.includes('Learn more about all available plans') && (
												<>
													<a 
														href="#pricing" 
														className="font-semibold hover:underline" 
														style={{ color: '#0013C1' }}
													>
														Learn more about all available plans
													</a>
													{' or try our '}
													<a 
														href="#generator" 
														className="font-semibold hover:underline" 
														style={{ color: '#0013C1' }}
													>
														free AI video generator
													</a>
													.
												</>
											)}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default FAQ;

