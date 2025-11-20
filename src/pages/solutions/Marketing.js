import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


const Marketing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
                        <div className="inline-flex items-center rounded-full px-4 py-2 border" style={{ backgroundColor: '#E5E2FF', borderColor: '#1470D2' }}>
                            <span className="text-sm font-semibold" style={{ color: '#0013C1' }}>
                                #1 AI VIDEO PLATFORM FOR MARKETING
                            </span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
                        <span className="text-gray-900">Generate</span>{' '}
                        <span className="text-[#1470D2]">brand videos</span>{' '}
                        <span className="text-gray-900">to promote your business</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
                        Create engaging marketing videos that stay true to your brand guidelines - produce professional promotional content with AI avatars in minutes, not weeks.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-4">
                        <Link
                            to="/book-demo"
                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:opacity-90"
                            style={{ background: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                        >
                            Create free marketing video
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Sub-text */}
                    <p className="text-sm text-gray-600 mb-12">
                        No credit card required.
                    </p>

                    {/* Social Proof */}
                    {/* <div className="flex items-center gap-4">
                        
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


                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">

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
                    </div> */}
                </div>
            </div>

            {/* Marketing Video Showcase Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-20" style={{ fontFamily: 'var(--brand-font)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Video/Image Container */}
                    <div className="mb-0">
                        <img 
                            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=675&fit=crop" 
                            alt="Marketing Video Showcase"
                            className="w-full rounded-3xl shadow-2xl"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"%3E%3Crect fill="%23E5E7EB" width="1200" height="675"/%3E%3Cg fill="%239CA3AF"%3E%3Cpath d="M450 250h300v175H450z"/%3E%3Ccircle cx="525" cy="312" r="25"/%3E%3Cpath d="M475 375l50-50 50 50 75-75 75 75v50H475z"/%3E%3C/g%3E%3Ctext x="600" y="500" font-family="Arial, sans-serif" font-size="24" fill="%239CA3AF" text-anchor="middle"%3EMarketing Video Showcase%3C/text%3E%3C/svg%3E';
                            }}
                        />
                    </div>
                    
                    {/* Company Logos Section */}
                    {/* <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left">
                            <p className="text-base text-gray-700 font-medium">Trusted by over 50,000</p>
                            <p className="text-base text-gray-600">companies of all sizes</p>
                        </div>
                        
                        
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
                    </div> */}
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
                            <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide border" style={{ color: '#1470D2', borderColor: '#1470D2' }}>
                                BRAND CONSISTENCY
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Create marketing videos with in your brand guidelines
                        </h2>

                        {/* Features List */}
                        <div className="space-y-5 mb-10">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1470D2' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Automatic brand color and style adherence
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1470D2' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Multiple brand profiles for different campaigns
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1470D2' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-base md:text-lg text-gray-700">
                                    Custom brand voice and tone matching
                                </p>
                            </div>
                        </div>

                        {/* CTA Button - White with brand color border */}
                        <Link
                            to="/book-demo"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg hover:opacity-90 transition-all group"
                            style={{ border: '2px solid #1470D2' }}
                        >
                            Create marketing video
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
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
                                alt="Marketing Video Demo"
                                className="w-full aspect-video object-cover"
                            />

                        </div>

                        {/* Language Selection Buttons */}
                        {/* <div className="flex gap-3">
                            
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-lg border-2 border-white shadow-md hover:opacity-90 transition-colors" style={{ background: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                                <span className="text-lg">🇺🇸</span>
                                <span className="text-xs">US ENGLISH</span>
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇩🇪</span>
                                <span className="text-xs">GERMAN</span>
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇫🇷</span>
                                <span className="text-xs">FRENCH</span>
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors" style={{ border: '2px solid #E5E2FF' }}>
                                <span className="text-lg">🇪🇸</span>
                                <span className="text-xs">SPANISH</span>
                            </button>
                        </div> */}
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
                        Marketing teams that scale their video production
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Brand Consistency */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>HEINEKEN</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#1470D2' }}>↑85%</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>BRAND CONSISTENCY</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                Heineken's marketing team achieved 85% improvement in brand guideline adherence across all promotional videos while reducing production time by 70%.
                            </p>

                            {/* CTA Link */}
                            {/* <Link
                                to="/case-study/heineken"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#1470D2' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link> */}
                        </div>

                        {/* Card 2: Video Output */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>SAP</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#1470D2' }}>↑300%</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>VIDEO OUTPUT</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                SAP's marketing department increased their video output by 300% while maintaining brand quality, producing 50+ promotional videos per quarter.
                            </p>

                            {/* CTA Link */}
                            {/* <Link
                                to="/case-study/sap"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#1470D2' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link> */}
                        </div>

                        {/* Card 3: Cost Reduction */}
                        <div className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            {/* Logo */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#2D3748' }}>MOODY'S</h3>
                            </div>

                            {/* Metric */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-5xl font-bold" style={{ color: '#1470D2' }}>↓65%</span>
                                </div>
                                <p className="text-sm font-medium" style={{ color: '#4A5568' }}>PRODUCTION COST</p>
                            </div>

                            {/* Description */}
                            <p className="text-base mb-6 leading-relaxed" style={{ color: '#4A5568' }}>
                                Moody's cut marketing video production costs by 65% while scaling content creation across multiple regions and languages simultaneously.
                            </p>

                            {/* CTA Link */}
                            {/* <Link
                                to="/case-study/moodys"
                                className="inline-flex items-center gap-2 text-base font-medium hover:gap-3 transition-all"
                                style={{ color: '#1470D2' }}
                            >
                                Read case study
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;