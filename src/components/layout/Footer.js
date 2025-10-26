import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoreelreports.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function Footer() {
	return (
		<footer className="relative bg-gradient-to-b from-white to-[#E5E2FF] mt-20" style={{ fontFamily: 'var(--brand-font)' }}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Brand Section */}
					<div className="col-span-1 md:col-span-2">
						<img src={logo} alt="Reel Reports" className="w-[150px] mb-4" />
						<p className="text-gray-600 text-sm mb-4 max-w-md">
							Transform your documents into engaging animated videos with AI-powered technology. 
							The #1 AI video platform for business.
						</p>
						<div className="flex items-center gap-2">
							<a 
								href="#get-started" 
								className="inline-flex items-center rounded-md gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 shadow-sm"
								style={{
									backgroundImage: 'linear-gradient(90deg, #0118D8 0%, #B771E5 100%)'
								}}
							>
								Get started for FREE
								<ArrowRightIcon className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Product</h3>
						<ul className="space-y-3">
							<li>
								<Link to="/#feature" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Features
								</Link>
							</li>
							<li>
								<Link to="/#solution" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Solutions
								</Link>
							</li>
							<li>
								<Link to="/#pricing" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Pricing
								</Link>
							</li>
							<li>
								<Link to="/#book-demo" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Book Demo
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Company</h3>
						<ul className="space-y-3">
							<li>
								<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
									Careers
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-gray-600">
						© {new Date().getFullYear()} Reel Reports. All rights reserved.
					</div>
					<div className="flex gap-6">
						<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
							Terms of Service
						</a>
						<a href="#" className="text-sm text-gray-600 hover:text-[#9314DC] transition-colors">
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
