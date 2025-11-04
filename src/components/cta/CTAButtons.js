import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function CTAButtons({ onBookDemo, onGetStarted, variant = 'default' }) {
	// Default variant - horizontal layout
	if (variant === 'default') {
		return (
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
				{/* Book Demo Button */}
				<motion.button
					onClick={onBookDemo}
					whileHover={{ scale: 1.05, x: -2 }}
					whileTap={{ scale: 0.95 }}
					className="px-8 py-3 rounded-xl text-gray-900 font-semibold bg-white border-2 border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
				>
					Book Demo
				</motion.button>

				{/* Get Started Button */}
				<motion.button
					onClick={onGetStarted}
					whileHover={{ scale: 1.05, x: 2 }}
					whileTap={{ scale: 0.95 }}
					className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
				>
					Get Started
					<motion.div
						animate={{ x: [0, 3, 0] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
					>
						<ArrowRightIcon className="w-5 h-5" />
					</motion.div>
				</motion.button>
			</div>
		);
	}

	// Stacked variant - vertical layout
	if (variant === 'stacked') {
		return (
			<div className="flex flex-col items-center justify-center gap-4 w-full max-w-sm mx-auto">
				{/* Get Started Button */}
				<motion.button
					onClick={onGetStarted}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
					className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
				>
					Get Started
					<ArrowRightIcon className="w-5 h-5" />
				</motion.button>

				{/* Book Demo Button */}
				<motion.button
					onClick={onBookDemo}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
					className="w-full px-8 py-4 rounded-xl text-gray-900 font-bold bg-white border-2 border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
				>
					Book Demo
				</motion.button>
			</div>
		);
	}

	// Large variant - bigger buttons
	if (variant === 'large') {
		return (
			<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
				{/* Book Demo Button */}
				<motion.button
					onClick={onBookDemo}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="px-10 py-5 rounded-2xl text-gray-900 font-bold text-lg bg-white border-2 border-gray-300 hover:border-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
				>
					Book Demo
				</motion.button>

				{/* Get Started Button */}
				<motion.button
					onClick={onGetStarted}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
				>
					Get Started
					<ArrowRightIcon className="w-6 h-6" />
				</motion.button>
			</div>
		);
	}

	return null;
}

export default CTAButtons;

