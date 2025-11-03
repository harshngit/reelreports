import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from "react-icons/fi"

const BrandingGuidelines = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
            {/* Brand Sensing Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Side - Banner/Illustration */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 animate-gradient">
                                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="relative h-full flex items-center justify-center p-12">
                                {/* Central Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Outer ring */}
                                        <div className="absolute inset-0 w-72 h-72 border-4 border-white/30 rounded-full animate-pulse"></div>
                                        
                                        {/* Main icon container */}
                                        <div className="relative w-72 h-72 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl">
                                            <div className="relative">
                                                {/* Eye/Vision Icon */}
                                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                
                                                {/* Orbiting mini icons */}
                                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                    </svg>
                                                </div>
                                                
                                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 rounded-lg backdrop-blur-sm transform rotate-12"></div>
                                <div className="absolute bottom-12 left-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Intelligent Detection
                                </div>
                                
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    Smart Brand
                                    <span className="block bg-gradient-to-r from-[#1470D2] to-[#8E23C0] bg-clip-text text-transparent">
                                        Sensing
                                    </span>
                                </h1>
                                
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    Our AI automatically detects and learns your brand's unique visual identity—from colors 
                                    and logos to typography and style patterns. Ensure every video maintains your brand's 
                                    essence without manual configuration.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-gray-200">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">AI</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Detection</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">Auto</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Learning</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1">100%</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-invite"
                                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                >
                                    Try Brand Sensing
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    See How It Works
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Multiple Brand Profiles Section */}
            <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Multiple Brand Profiles
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Manage unlimited brands effortlessly with dedicated profiles for each.
                        </p>
                        <p className="text-lg text-gray-500">
                            Perfect for agencies, enterprises, and multi-brand businesses.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
                        {/* Left - Visual Display */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
                                {/* Brand Profile Cards Stack */}
                                <div className="space-y-4">
                                    {/* Profile Card 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 transform hover:scale-105 transition-transform">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Brand Alpha</h3>
                                                    <p className="text-sm text-gray-500">Active Profile</p>
                                                </div>
                                            </div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            <div className="h-8 bg-purple-500 rounded"></div>
                                            <div className="h-8 bg-pink-500 rounded"></div>
                                            <div className="h-8 bg-purple-400 rounded"></div>
                                            <div className="h-8 bg-pink-400 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Profile Card 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-md opacity-75 hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Brand Beta</h3>
                                                <p className="text-sm text-gray-500">Secondary</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            <div className="h-8 bg-blue-500 rounded"></div>
                                            <div className="h-8 bg-cyan-500 rounded"></div>
                                            <div className="h-8 bg-blue-400 rounded"></div>
                                            <div className="h-8 bg-cyan-400 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Profile Card 3 */}
                                    <div className="bg-white rounded-xl p-6 shadow-md opacity-75 hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg"></div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Brand Gamma</h3>
                                                <p className="text-sm text-gray-500">Inactive</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            <div className="h-8 bg-orange-500 rounded"></div>
                                            <div className="h-8 bg-amber-500 rounded"></div>
                                            <div className="h-8 bg-orange-400 rounded"></div>
                                            <div className="h-8 bg-amber-400 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -right-4 -top-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-purple-600">∞</p>
                                    <p className="text-xs text-gray-600 mt-1">Unlimited Brands</p>
                                </div>
                            </div>

                            <div className="absolute -left-4 -bottom-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-semibold text-gray-900">Quick Switch</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <div className="inline-block bg-purple-100 px-4 py-2 rounded-xl text-sm font-semibold text-purple-700 shadow-sm">
                                Enterprise Ready
                            </div>
                            
                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                Seamless Multi-Brand Management
                            </h3>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Create and manage unlimited brand profiles with dedicated settings for each. Perfect for 
                                agencies handling multiple clients or enterprises with various sub-brands.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Unlimited Brand Profiles</h4>
                                        <p className="text-gray-600 text-sm">Create as many brand profiles as you need without any restrictions or additional costs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-pink-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">One-Click Switching</h4>
                                        <p className="text-gray-600 text-sm">Instantly switch between brand profiles with a single click—no re-configuration needed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Individual Settings</h4>
                                        <p className="text-gray-600 text-sm">Each brand maintains its own colors, fonts, logos, and style preferences independently.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Team Collaboration</h4>
                                        <p className="text-gray-600 text-sm">Share specific brand profiles with team members based on their client assignments.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/request-invite"
                                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                            >
                                Manage Multiple Brands
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strict Adherence & Inspired Generation Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Strict Adherence & Inspired Generation
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Choose your level of brand control—from pixel-perfect consistency to creative exploration.
                        </p>
                        <p className="text-lg text-gray-500">
                            The perfect balance between brand protection and creative freedom.
                        </p>
                    </div>

                    {/* Two Mode Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
                        {/* Strict Mode Card */}
                        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Strict Adherence</h3>
                                    <p className="text-sm text-blue-600 font-semibold">100% Brand Consistency</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Perfect for enterprises and regulated industries. Every video follows your brand guidelines 
                                to the letter—exact colors, precise typography, and approved design patterns only.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Exact color matching (HEX/RGB)</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Approved fonts & styles only</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Locked logo placement</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Compliance-ready output</span>
                                </div>
                            </div>

                            <div className="rounded-lg p-4 text-white" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                                <p className="text-sm font-semibold mb-1">Best For:</p>
                                <p className="text-sm">Enterprises, Financial Services, Healthcare, Legal</p>
                            </div>
                        </div>

                        {/* Inspired Mode Card */}
                        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Inspired Generation</h3>
                                    <p className="text-sm text-purple-600 font-semibold">Creative Evolution</p>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Perfect for creative brands and startups. AI explores variations of your brand while 
                                staying true to your core identity—discovering fresh, on-brand designs you'll love.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Complementary color exploration</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Creative layout variations</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">AI-suggested improvements</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Fresh, on-brand designs</span>
                                </div>
                            </div>

                            <div className="rounded-lg p-4 text-white" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                                <p className="text-sm font-semibold mb-1">Best For:</p>
                                <p className="text-sm">Startups, Creative Agencies, Tech Companies, E-commerce</p>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Section */}
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl mb-10 sm:mb-12 md:mb-16">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">How It Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {/* Left - Process */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-indigo-600 font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Upload Brand Guidelines</h4>
                                        <p className="text-sm text-gray-600">Import your brand book or let our AI learn from existing materials.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Choose Your Mode</h4>
                                        <p className="text-sm text-gray-600">Select strict adherence or inspired generation based on your needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-pink-600 font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Create with Confidence</h4>
                                        <p className="text-sm text-gray-600">Every video automatically follows your chosen brand strategy.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Benefits */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
                                <h4 className="font-bold text-gray-900 mb-4">Key Benefits</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Switch modes anytime per project
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Manual override controls available
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        AI learns from your approvals
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Version history & rollback
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="rounded-2xl p-12 text-center text-white" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                    <h2 className="text-3xl font-bold mb-4">
                        Maintain Perfect Brand Consistency
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and protect your brand identity across all videos
                    </p>
                    <Link
                        to="/request-invite"
                        className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Request Platform Invite
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandingGuidelines;
