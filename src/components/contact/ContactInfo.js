import React from 'react';
import { motion } from 'framer-motion';
import {
	EnvelopeIcon,
	PhoneIcon,
	MapPinIcon,
	ClockIcon,
	ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import {
	FaTwitter,
	FaLinkedin,
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTiktok,
} from 'react-icons/fa';

function ContactInfo() {
	const contactDetails = [
		{
			icon: EnvelopeIcon,
			title: 'Email Us',
			content: 'info@reelreport.com',
			subContent: 'sales@reelreport.com',
			link: 'mailto:info@reelreport.com',
			gradient: 'from-blue-500 to-cyan-500',
		},
		{
			icon: PhoneIcon,
			title: 'Call Us',
			content: '+1 (647) 970-7700',
			subContent: 'Mon-Fri, 9am-6pm EST',
			link: 'tel:+15551234567',
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: MapPinIcon,
			title: 'Visit Us',
			content: 'DIFC, innovation hub',
			subContent: 'Dubai, UAE',
			link: 'https://maps.app.goo.gl/NkZdEJ4ENiUutSBU7',
			gradient: 'from-orange-500 to-red-500',
		},
		{
			icon: ClockIcon,
			title: 'Business Hours',
			content: 'Monday - Friday',
			subContent: '9:00 AM - 6:00 PM EST',
			gradient: 'from-indigo-500 to-blue-500',
		},
	];

	const socialLinks = [
		{ icon: FaLinkedin, label: 'LinkedIn', link: 'https://linkedin.com', color: '#0A66C2' },
		{ icon: FaTiktok, label: 'Tik Tok', link: 'https://tiktok.com', color: '#000000' },
		{ icon: FaYoutube, label: 'YouTube', link: 'https://youtube.com', color: '#FF0000' },
	];

	return (
		<div className="space-y-6">
			{/* Contact Details Cards */}
			{contactDetails.map((detail, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: index * 0.1, duration: 0.5 }}
					whileHover={{ x: 5, transition: { duration: 0.2 } }}
				>
					<a
						href={detail.link}
						target={detail.link?.startsWith('http') ? '_blank' : '_self'}
						rel="noopener noreferrer"
						className={`block p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0] transition-all duration-300 hover:shadow-xl ${
							detail.link ? 'cursor-pointer' : 'cursor-default'
						}`}
					>
						<div className="flex items-start gap-4">
							<motion.div
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.6 }}
								className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${detail.gradient} shadow-lg`}
							>
								<detail.icon className="w-6 h-6 text-white" />
							</motion.div>
							<div className="flex-1 min-w-0">
								<h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
									{detail.title}
								</h3>
								<p className="text-lg font-bold text-gray-900 mb-0.5">{detail.content}</p>
								{detail.subContent && (
									<p className="text-sm text-gray-600">{detail.subContent}</p>
								)}
							</div>
						</div>
					</a>
				</motion.div>
			))}

			{/* Live Chat Card */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4, duration: 0.5 }}
				whileHover={{ scale: 1.02 }}
				className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl cursor-pointer"
			>
				<div className="flex items-center gap-4 mb-3">
					<div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
						<ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wide opacity-90">
							Need Quick Help?
						</h3>
						<p className="text-lg font-bold">Start Live Chat</p>
					</div>
				</div>
				<p className="text-sm text-white/80 mb-4">
					Chat with our support team in real-time. Average response time: 2 minutes.
				</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="w-full py-3 px-4 rounded-xl bg-white text-indigo-600 font-semibold shadow-lg hover:shadow-xl transition-all"
				>
					Open Chat
				</motion.button>
			</motion.div>

			{/* Social Media */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="p-6 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 border border-[#c6c1f0]"
			>
				<h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
				<div className="flex items-center gap-3 flex-wrap">
					{socialLinks.map((social, index) => (
						<motion.a
							key={index}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all group"
							aria-label={social.label}
						>
							<social.icon
								className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
								style={{ color: social.color }}
							/>
						</motion.a>
					))}
				</div>
			</motion.div>

			{/* Trust Badge */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.6, duration: 0.5 }}
				className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200"
			>
				<div className="text-center">
					<div className="text-4xl mb-2">🔒</div>
					<h3 className="text-sm font-bold text-gray-900 mb-1">Your Privacy Matters</h3>
					<p className="text-xs text-gray-600">
						All information is encrypted and never shared with third parties.
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default ContactInfo;

