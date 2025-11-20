import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/reellogo.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function Footer() {
    return (
		<footer className="relative " style={{ fontFamily: 'var(--brand-font)', backgroundColor: '#E5E2FF' }}>
			{/* white-to-transparent fade at top */}
			<div aria-hidden="true" className="pointer-events-none absolute -top-2 left-0 right-0 h-10" style={{
				backgroundImage:'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))'
			}} />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				{/* Top Section */}
				<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Brand Section */}
					<div className="col-span-1 md:col-span-2">
						<img src={logo} alt="Reel Reports" className="w-[150px] mb-4" />
						<p className="text-[#000] text-sm mb-4 max-w-md">
							Transform your documents into engaging animated videos with AI-powered technology. 
							The #1 AI video platform for business.
						</p>
						
					</div>

					{/* Quick Links */}
					<div>
					<h3 className="text-sm font-bold text-[#000] mb-4 uppercase tracking-wider">Product</h3>
						<ul className="space-y-3">
							<li>
							<Link to="/#feature" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
									Features
								</Link>
							</li>
							<li>
							<Link to="/#solution" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
									Solutions
								</Link>
							</li>
							
						</ul>
					</div>

					{/* Company Links */}
					<div>
					<h3 className="text-sm font-bold text-[#000] mb-4 uppercase tracking-wider">Company</h3>
						<ul className="space-y-3">
							{/* <li>
							<a href="/pricing" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
									Pricing
								</a>
							</li> */}
							<li>
							<a href="/contact" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
									Contact
								</a>
							</li>
							<li>
								<a href="/book-demo" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
									Request a Demo
								</a>
							</li>
							
						</ul>
					</div>
				</motion.div>

				{/* Bottom Section */}
				<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className="border-t border-[#000/20] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm" style={{ color:'#000' }}>
						© {new Date().getFullYear()} Reel Reports. All rights reserved.
					</div>
					{/* <div className="flex gap-6">
						<a href="#" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
							Terms of Service
						</a>
						<a href="#" className="text-sm text-[#000/80] hover:text-[#000] transition-colors">
							Cookie Policy
						</a>
					</div> */}
				</motion.div>
			</div>
		</footer>
	);
}

export default Footer;
