import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from "react-icons/fi"

const BroughtToLife = () => {
    const [activeTab, setActiveTab] = useState('motion');
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
            {/* Dynamic Video Section */}
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Banner/Illustration */}
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 animate-gradient">
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
                                                {/* Video Play Icon */}
                                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                
                                                {/* Orbiting mini icons */}
                                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                
                                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                    Video Creation
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Dynamic Video
                                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                        Generation
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Create engaging videos that adapt and respond to your content in real-time. 
                                    Our intelligent video engine optimizes every frame for maximum impact, ensuring 
                                    your message resonates with your audience.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 mb-1">4K</div>
                                    <div className="text-sm text-gray-600">HD Quality</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-600 mb-1">Real</div>
                                    <div className="text-sm text-gray-600">Time Render</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-teal-600 mb-1">Auto</div>
                                    <div className="text-sm text-gray-600">Adaptive</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-invite"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Start Creating
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Anchor Style Section */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Professional News Anchor Style
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Deliver your message with broadcast-quality presentation and authority.
                        </p>
                        <p className="text-lg text-gray-500">
                            Choose from a diverse library of professional AI avatars.
                        </p>
                    </div>

                    {/* Two Column Card */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2">
                            {/* Left Column - Feature Description */}
                            <div className="p-12 flex flex-col justify-center border-r border-gray-100">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    AI-Powered Presenters
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Select from our extensive library of hyper-realistic AI presenters. Each avatar 
                                    is designed to deliver your content with natural gestures, expressions, and 
                                    professional presence that builds trust and credibility.
                                </p>
                                <Link 
                                    to="#" 
                                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-lg group"
                                >
                                    Browse Avatars
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right Column - Features Grid */}
                            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-12">
                                <div className="space-y-6">
                                    {/* Feature 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">150+ Avatars</h4>
                                                <p className="text-sm text-gray-600">Diverse presenters representing all demographics and professional styles</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Natural Expressions</h4>
                                                <p className="text-sm text-gray-600">Realistic facial expressions and gestures synchronized with speech</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Custom Branding</h4>
                                                <p className="text-sm text-gray-600">Add your logo, colors, and backgrounds to maintain brand consistency</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Section - Interactive Tab Design */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Professional Animation & Effects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your videos with stunning animations that capture attention and enhance storytelling.
                        </p>
                    </div>

                    {/* Interactive Tab Buttons */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        <button
                            onClick={() => setActiveTab('motion')}
                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 ${
                                activeTab === 'motion'
                                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:shadow-md'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Motion Graphics
                        </button>

                        <button
                            onClick={() => setActiveTab('transitions')}
                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 ${
                                activeTab === 'transitions'
                                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                            Smooth Transitions
                        </button>

                        <button
                            onClick={() => setActiveTab('presets')}
                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 ${
                                activeTab === 'presets'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Custom Presets
                        </button>
                    </div>

                    {/* Content Block with Animation */}
                    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="space-y-6">
                                {activeTab === 'motion' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-orange-100 px-4 py-2 rounded-xl text-sm font-semibold text-orange-700 mb-4 shadow-sm">
                                            Dynamic & Engaging
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Make your content move with purpose
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Create eye-catching motion graphics with dynamic text animations, kinetic typography, 
                                            and animated elements. Our AI-powered tools ensure every movement enhances your 
                                            message and keeps viewers engaged from start to finish.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            Explore Motion Graphics
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                {activeTab === 'transitions' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-purple-100 px-4 py-2 rounded-xl text-sm font-semibold text-purple-700 mb-4 shadow-sm">
                                            Seamless Flow
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Transitions that captivate viewers
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Master the art of seamless storytelling with professional transitions. From elegant 
                                            fades to dynamic wipes and custom effects, maintain perfect viewer engagement as your 
                                            content flows from scene to scene with cinematic quality.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            View Transitions
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                {activeTab === 'presets' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-blue-100 px-4 py-2 rounded-xl text-sm font-semibold text-blue-700 mb-4 shadow-sm">
                                            Ready-to-Use
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Professional templates at your fingertips
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Access our extensive library of pre-built animation templates designed by industry 
                                            experts. Each preset is optimized for different content types and industries—simply 
                                            apply with one click and customize to match your unique brand style.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            Browse Library
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Visual Element */}
                            <div className="relative h-[450px] flex items-center justify-center">
                                {activeTab === 'motion' && (
                                    <div className="animate-fade-in w-full h-full flex items-center justify-center">
                                        {/* Motion Graphics Animation */}
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 flex items-center justify-center gap-6">
                                                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-2xl animate-bounce-slow transform rotate-12"></div>
                                                <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl animate-float transform -rotate-6"></div>
                                                <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl shadow-2xl animate-bounce-slower transform rotate-6"></div>
                                            </div>
                                            {/* Text Animation */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-6xl font-bold text-gray-900 opacity-5 animate-pulse-slow">
                                                        MOTION
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'transitions' && (
                                    <div className="animate-fade-in w-full h-full">
                                        {/* Transitions Animation */}
                                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 animate-slide-right"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 animate-slide-left opacity-70"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center text-white">
                                                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center animate-spin-slow">
                                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-2xl font-bold opacity-90">Seamless Flow</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'presets' && (
                                    <div className="animate-fade-in w-full h-full">
                                        {/* Presets Grid Animation */}
                                        <div className="relative w-full h-full p-8">
                                            <div className="grid grid-cols-2 gap-4 h-full">
                                                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl shadow-xl animate-scale-up"></div>
                                                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl animate-scale-up" style={{animationDelay: '0.1s'}}></div>
                                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl animate-scale-up" style={{animationDelay: '0.2s'}}></div>
                                                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl animate-scale-up" style={{animationDelay: '0.3s'}}></div>
                                            </div>
                                            {/* Center Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0) rotate(12deg); }
                    50% { transform: translateY(-20px) rotate(12deg); }
                }
                @keyframes bounce-slower {
                    0%, 100% { transform: translateY(0) rotate(6deg); }
                    50% { transform: translateY(-25px) rotate(6deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-6deg); }
                    50% { transform: translateY(-30px) rotate(-6deg); }
                }
                @keyframes slide-right {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(50px); }
                }
                @keyframes slide-left {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(-50px); }
                }
                @keyframes scale-up {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.2; }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                .animate-bounce-slower {
                    animation: bounce-slower 3.5s ease-in-out infinite;
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-slide-right {
                    animation: slide-right 4s ease-in-out infinite;
                }
                .animate-slide-left {
                    animation: slide-left 4s ease-in-out infinite;
                }
                .animate-scale-up {
                    animation: scale-up 0.6s ease-out forwards;
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>

            {/* AI Voices & Voice Cloning Section */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Side - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                                Voice Technology
                            </div>
                            
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                AI Voices & Voice Cloning
                            </h2>
                            
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Choose from our extensive library of ultra-realistic AI voices or clone your own voice 
                                for consistent, personalized narration across all your content. Natural intonation, 
                                emotion, and emphasis in over 120 languages.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">400+ Premium Voices</h4>
                                        <p className="text-gray-600 text-sm">Diverse voice library covering all ages, genders, accents, and languages for global reach.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Voice Cloning</h4>
                                        <p className="text-gray-600 text-sm">Clone your voice with just 30 seconds of audio. Perfect for maintaining brand voice consistency.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Emotional Intelligence</h4>
                                        <p className="text-gray-600 text-sm">AI voices that understand context and deliver appropriate emotion, tone, and emphasis.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">120+ Languages</h4>
                                        <p className="text-gray-600 text-sm">Multi-language support with native pronunciation and cultural nuances.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link 
                                    to="/request-invite" 
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
                                >
                                    Try Voice Cloning
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Voice Interface Demo */}
                        <div className="relative">
                            {/* Voice Selection Interface */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-2xl border border-green-100">
                                {/* Header */}
                                <div className="bg-white px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900">Voice Library</h3>
                                    <p className="text-sm text-gray-500">Select an AI voice for your video</p>
                                </div>

                                {/* Voice Options */}
                                <div className="p-6 space-y-3">
                                    {/* Voice 1 */}
                                    <div className="bg-white rounded-lg p-4 border-2 border-green-500 shadow-md">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Sarah - Professional</p>
                                                    <p className="text-xs text-gray-500">English (US) • Female</p>
                                                </div>
                                            </div>
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="flex-1 bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-100 transition-colors">
                                                <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                                Preview
                                            </button>
                                            <div className="flex gap-1">
                                                {[1,2,3,4,5].map(i => (
                                                    <div key={i} className="w-1 h-8 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Voice 2 */}
                                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">James - Friendly</p>
                                                    <p className="text-xs text-gray-500">English (UK) • Male</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                            <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Preview
                                        </button>
                                    </div>

                                    {/* Voice 3 */}
                                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Maria - Energetic</p>
                                                    <p className="text-xs text-gray-500">Spanish • Female</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                                            <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Preview
                                        </button>
                                    </div>

                                    {/* Voice Cloning Option */}
                                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Clone Your Voice</p>
                                                    <p className="text-xs opacity-90">30 seconds of audio required</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="w-full bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/30 transition-colors">
                                            Start Cloning
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">120+</p>
                                        <p className="text-xs text-gray-600">Languages</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Premium</p>
                                        <p className="text-xs text-gray-600">Quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Bring Your Content to Life?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and start creating professional videos today
                    </p>
                    <Link
                        to="/request-invite"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
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

export default BroughtToLife;
