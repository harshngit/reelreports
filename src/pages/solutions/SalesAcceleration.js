import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const SalesAcceleration = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden" style={{
                background: 'linear-gradient(to right, #E0F2FE 0%, #FEF3E2 100%)',
                fontFamily: 'var(--brand-font)'
            }}>
                {/* Organic white wave shape */}
                <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <svg className="absolute bottom-0 left-0 w-full" style={{ height: '600px' }} viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path 
                            d="M0,600 Q300,400 600,450 T1200,350 L1200,600 L0,600 Z" 
                            fill="white" 
                            opacity="0.9"
                        />
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                    {/* Top Banner */}
                    <div className="mb-8">
                        <div className="inline-flex items-center rounded-full px-4 py-2 bg-blue-100 border border-blue-200">
                            <span className="text-sm font-semibold text-blue-900">
                                #1 AI VIDEO PLATFORM FOR SALES ENABLEMENT
                            </span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
                        <span className="text-gray-900">Create</span>{' '}
                        <span className="text-orange-600">sales</span>{' '}
                        <span className="text-red-900">training videos in</span>{' '}
                        <span className="text-gray-900">minutes</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
                        Turn boring docs and PPTs into engaging sales enablement videos with AI avatars - no video editing skills required.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-4">
                        <Link
                            to="/create-free"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
                        >
                            Create free AI video
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Sub-text */}
                    <p className="text-sm text-gray-600 mb-12">
                        No credit card required.
                    </p>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4">
                        {/* Avatar Stack */}
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div 
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-500"
                                    style={{
                                        backgroundImage: `url(https://i.pravatar.cc/150?img=${i})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                            ))}
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-lg font-semibold text-gray-900">4.7</span>
                            </div>
                            <span className="text-sm text-gray-600">from 2,000+ reviews on G2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Training Video Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-20" style={{ fontFamily: 'var(--brand-font)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Video/Image Container */}
                    <div className="mb-16">
                        <img 
                            src="/path/to/your/training-video-screenshot.png" 
                            alt="Interactive Sales Training Video"
                            className="w-full rounded-3xl shadow-2xl"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"%3E%3Crect fill="%23E5E7EB" width="1200" height="675"/%3E%3Cg fill="%239CA3AF"%3E%3Cpath d="M450 250h300v175H450z"/%3E%3Ccircle cx="525" cy="312" r="25"/%3E%3Cpath d="M475 375l50-50 50 50 75-75 75 75v50H475z"/%3E%3C/g%3E%3Ctext x="600" y="500" font-family="Arial, sans-serif" font-size="24" fill="%239CA3AF" text-anchor="middle"%3EInteractive Sales Training Video%3C/text%3E%3C/svg%3E';
                            }}
                        />
                    </div>
                    
                    {/* Company Logos Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <p className="text-base text-gray-700 font-medium">Trusted by over 50,000</p>
                            <p className="text-base text-gray-600">companies of all sizes</p>
                        </div>
                        
                        {/* Logos Marquee */}
                        <div className="flex items-center gap-12 flex-wrap justify-center md:justify-end flex-1">
                            <div className="text-2xl font-bold text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
                                zoom
                            </div>
                            <div className="text-2xl font-bold text-gray-800">
                                SAP
                            </div>
                            <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
                                MERCK
                            </div>
                            <div className="flex items-center gap-1 text-2xl font-bold text-gray-800">
                                <span>★</span>
                                <span>Heineken</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-800">
                                MOODY'S
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" fill="white" />
                                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                                </svg>
                                <span className="text-xl font-bold text-gray-800">REUTERS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick and Easy - Voiceovers Section */}
            <div className="py-20 bg-white" style={{ fontFamily: 'var(--brand-font)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div>
                        {/* Tag - Brand color badge */}
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide border" style={{ color: '#cf7bff', borderColor: '#cf7bff' }}>
                                QUICK AND EASY
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            Turn text into<br />high-quality voiceovers
                        </h2>

                        {/* Features List */}
                        <div className="space-y-5 mb-10">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#cf7bff' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Get consistent voiceovers in over 140+ languages
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#cf7bff' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Automatic closed captions included
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#cf7bff' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Clone your own voice
                                </p>
                            </div>
                        </div>

                        {/* CTA Button - White with brand color border */}
                        <Link
                            to="/languages"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg hover:opacity-90 transition-all group"
                            style={{ border: '2px solid #cf7bff' }}
                        >
                            Test all languages
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Side - Video with Language Buttons */}
                    <div>
                        {/* Video Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4">
                            {/* Video Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop"
                                alt="AI Avatar Voiceover Demo"
                                className="w-full aspect-video object-cover"
                            />

                            {/* Play Button - Upper Left Corner, White Circular with Brand Color Triangle */}
                            <div className="absolute top-4 left-4">
                                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#cf7bff' }}>
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Language Selection Buttons */}
                        <div className="flex gap-3">
                            {/* US ENGLISH - Selected (Brand Purple) */}
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-lg border-2 border-white shadow-md hover:opacity-90 transition-colors" style={{ background: 'linear-gradient(90deg, #0118D8 0%, #B771E5 100%)' }}>
                                <span className="text-lg">🇺🇸</span>
                                <span className="text-xs">US ENGLISH</span>
                            </button>

                            {/* GERMAN - Unselected (White) */}
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇩🇪</span>
                                <span className="text-xs">GERMAN</span>
                            </button>

                            {/* FRENCH - Unselected (White) */}
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇫🇷</span>
                                <span className="text-xs">FRENCH</span>
                            </button>

                            {/* SPANISH - Unselected (White) */}
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇪🇸</span>
                                <span className="text-xs">SPANISH</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* ROI Section */}
            <div className="py-20 bg-white" style={{ fontFamily: 'var(--brand-font)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Badge */}
                    <div className="text-center mb-6">
                        <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide" style={{ backgroundColor: '#E5E2FF', color: '#0013C1' }}>
                            THE ROI FOR YOUR BUSINESS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#2D3748' }}>
                        You don't have to choose between cost, time, and quality
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Cost Savings */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>DUPONT</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#cf7bff' }}>↓$10K</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>PER VIDEO</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                DuPont's Operational Excellence team reduced video production costs by $10,000 per training video compared to 3rd party providers.
                            </p>

                            {/* CTA Link */}
                            <Link
                                to="/case-study/dupont"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#cf7bff' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Card 2: Time Savings */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>zoom</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#cf7bff' }}>↑90%</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>TIME SAVINGS</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                Zoom's sales training team cut 90% off their video creation time – from days to hours, compared to traditional video creation methods.
                            </p>

                            {/* CTA Link */}
                            <Link
                                to="/case-study/zoom"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#cf7bff' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Card 3: Engagement Increase */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>B/S/H/</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#cf7bff' }}>↑30%</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>ENGAGEMENT INCREASE</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                BSH experienced over 30% increase in engagement with their e-learning, compared to text-based e-learning modules and PowerPoints.
                            </p>

                            {/* CTA Link */}
                            <Link
                                to="/case-study/bsh"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#cf7bff' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    );
};

export default SalesAcceleration;