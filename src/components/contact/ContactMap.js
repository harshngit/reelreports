import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

function ContactMap() {
	const offices = [
		{
			city: 'San Francisco',
			country: 'USA',
			address: '123 Innovation Street, CA 94107',
			email: 'sf@reelreport.com',
			flag: '🇺🇸',
		},
		{
			city: 'London',
			country: 'UK',
			address: '456 Tech Lane, London EC2A 4NE',
			email: 'london@reelreport.com',
			flag: '🇬🇧',
		},
		{
			city: 'Singapore',
			country: 'Singapore',
			address: '789 Business Road, Singapore 018956',
			email: 'singapore@reelreport.com',
			flag: '🇸🇬',
		},
	];

	return (
		<section className="relative py-20 px-4" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] bg-white/50 backdrop-blur-sm mb-4">
						<GlobeAltIcon className="w-4 h-4" />
						Global Presence
					</span>
					<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
						Our Offices Worldwide
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						We have offices around the globe to serve you better. Visit us or reach out to your nearest location.
					</p>
				</motion.div>

				{/* Map Placeholder */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
				>
					<div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
						{/* Interactive Map Placeholder */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center p-8">
								<motion.div
									animate={{
										scale: [1, 1.05, 1],
										rotate: [0, 5, -5, 0],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<MapPinIcon className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
								</motion.div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
								<p className="text-gray-600">
									In production, this would show an embedded Google Maps or Mapbox view
								</p>
							</div>
						</div>

						{/* Animated Pins */}
						{[
							{ left: '20%', top: '40%' },
							{ left: '50%', top: '35%' },
							{ left: '75%', top: '45%' },
						].map((position, index) => (
							<motion.div
								key={index}
								initial={{ scale: 0, opacity: 0 }}
								animate={{
									scale: [0, 1.2, 1],
									opacity: 1,
								}}
								transition={{
									delay: index * 0.2,
									duration: 0.5,
								}}
								style={{ left: position.left, top: position.top }}
								className="absolute"
							>
								<motion.div
									animate={{
										y: [0, -10, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										delay: index * 0.3,
									}}
								>
									<div className="w-8 h-8 rounded-full bg-red-500 border-4 border-white shadow-lg" />
								</motion.div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Office Cards */}
				<div className="grid md:grid-cols-3 gap-8">
					{offices.map((office, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.15, duration: 0.5 }}
							whileHover={{ y: -8, transition: { duration: 0.3 } }}
						>
							<div className="p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0] hover:shadow-2xl transition-all duration-300 h-full">
								{/* Flag and City */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
											{office.flag} {office.city}
										</h3>
										<p className="text-sm text-gray-600">{office.country}</p>
									</div>
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
										className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg"
									>
										<BuildingOfficeIcon className="w-6 h-6 text-white" />
									</motion.div>
								</div>

								{/* Address */}
								<div className="space-y-3">
									<div className="flex items-start gap-3">
										<MapPinIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
										<p className="text-sm text-gray-700">{office.address}</p>
									</div>

									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-gray-400 flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<a
											href={`mailto:${office.email}`}
											className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
										>
											{office.email}
										</a>
									</div>
								</div>

								{/* Get Directions Button */}
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="mt-6 w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-all"
								>
									Get Directions
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ContactMap;

