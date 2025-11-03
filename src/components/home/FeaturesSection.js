import React from 'react';
import {
	ChatBubbleLeftRightIcon,
	SparklesIcon,
	ShieldCheckIcon,
	AdjustmentsHorizontalIcon,
	CheckCircleIcon,
} from '@heroicons/react/24/outline';

function FeaturesSection() {
	const accent = '#0013C1';

	const groups = [
		{
			id: 'communication',
			icon: ChatBubbleLeftRightIcon,
			title: 'Communication',
			items: [
				'Summarization support',
				'Pre-engineered super prompts',
				'Infographics brought to life',
				'Accurate charting',
				'Captions',
				'140+ languages (coming soon)'
			]
		},
		{
			id: 'brought',
			icon: SparklesIcon,
			title: 'Brought to life',
			items: [
				'Dynamic video',
				'News Anchor style',
				'Animation',
				'AI Voices & Voice cloning'
			]
		},
		{
			id: 'brand',
			icon: ShieldCheckIcon,
			title: 'Within branding guidelines',
			items: [
				'Brand sensing',
				'Multiple brand profiles',
				'Strict adherence and inspired generation'
			]
		},
		{
			id: 'control',
			icon: AdjustmentsHorizontalIcon,
			title: 'And full user control',
			items: [
				'Video editing tools',
				'Scene level edits',
				'Text'
			]
		},
	];

	return (
		<section id="feature" className="relative py-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-10 text-center">
					<span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0]">Features</span>
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">Built to create. Generate to scale.</h2>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">A focused toolset that brings your content to life while staying fully on-brand.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{groups.map((group) => (
						<div key={group.id} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-black/5 border border-[#c6c1f0] hover:border-[#0013C1] transition-all duration-300">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundImage:'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)'}}>
									<group.icon className="w-5 h-5 text-white" />
								</div>
								<h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
							</div>
							<ul className="space-y-2">
								{group.items.map((item, idx) => (
									<li key={idx} className="flex items-start gap-2 text-gray-700">
										<CheckCircleIcon className="w-5 h-5 mt-0.5" style={{ color: accent }} />
										<span className="text-sm leading-6">{item}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FeaturesSection;


