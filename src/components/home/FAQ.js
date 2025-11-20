import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function FAQ() {
	const [openIndex, setOpenIndex] = useState(0); // First item open by default

	const faqs = [
		{
			question: 'How can I access Reel Reports platform?',
			answer: 'Contact us to book a demo and join our invite only platform.'
		},
		{
			question: 'What types of videos can I create with Reel Report?',
			answer: 'Reel Report lets you transform documents and concepts into engaging video content with AI avatars, infographics, charts, and dynamic scenes. Perfect for creating, report summaries, educational content, business presentations, marketing videos, sales pitches and financial reports.'
		},
		{
			question: 'How do document summaries work?',
			answer: 'Our AI-powered super prompts analyze your documents and automatically generate video-ready summaries. Upload your document and our platform creates a structured video script with key insights.'
		},
		{
			question: 'Can I use my own voice and brand identity?',
			answer: 'Absolutely! you can use voice cloning to create videos with your own voice. You can also customize videos with your brand colors, logos, and create multiple brand profiles to maintain consistent brand identity across all content.'
		},
		{
			question: 'What are personalized avatars?',
			answer: 'Personalized avatars are AI-generated video presenters that deliver your content. You can customize avatars to match your brand style and tone, making your videos more engaging and relatable.'
		},
		{
			question: 'Is Reel Report secure for enterprise use?',
			answer: 'Yes, Reel Report is built with enterprise-grade security. Our Enterprise plan includes SAML/SSO authentication, dedicated support, system integration, and tailored onboarding. We ensure your data and content are protected with industry-standard security measures.'
		}
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className="relative section-spacing" style={{ fontFamily: 'var(--brand-font)' }}>
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

