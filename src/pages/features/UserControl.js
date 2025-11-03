import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from "react-icons/fi"

const UserControl = () => {
    const [activeEditTab, setActiveEditTab] = useState('timeline');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
            {/* Video Editing Tools Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Side - Banner/Illustration */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 animate-gradient">
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
                                                {/* Edit/Pencil Icon */}
                                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                
                                                {/* Orbiting mini icons */}
                                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                    </svg>
                                                </div>
                                                
                                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                    Professional Tools
                                </div>
                                
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    Powerful Video
                                    <span className="block bg-gradient-to-r from-[#1470D2] to-[#8E23C0] bg-clip-text text-transparent">
                                        Editing Suite
                                    </span>
                        </h1>
                                
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    Take complete control with professional-grade editing tools. Intuitive timeline editor, 
                                    precise trimming, seamless merging, and advanced effects—all in a user-friendly interface 
                                    that makes professional editing accessible to everyone.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-gray-200">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">Pro</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Grade Tools</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">Real</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Time Edit</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">Easy</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Interface</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-invite"
                                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                >
                                    Start Editing
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch Tutorial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scene Level Edits - Interactive Tab Design */}
            <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Granular Scene-Level Control
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Edit, customize, and perfect every scene individually for complete creative freedom.
                        </p>
                    </div>

                    {/* Interactive Tab Buttons */}
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 flex-wrap">
                        <button
                            onClick={() => setActiveEditTab('timeline')}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                                activeEditTab === 'timeline'
                                    ? 'text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1470D2] hover:shadow-md'
                            }`}
                            style={activeEditTab === 'timeline' ? { backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' } : {}}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            Timeline Editor
                        </button>

                        <button
                            onClick={() => setActiveEditTab('reorder')}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                                activeEditTab === 'reorder'
                                    ? 'text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1470D2] hover:shadow-md'
                            }`}
                            style={activeEditTab === 'reorder' ? { backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' } : {}}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            Drag & Drop
                        </button>

                        <button
                            onClick={() => setActiveEditTab('customize')}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                                activeEditTab === 'customize'
                                    ? 'text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#1470D2] hover:shadow-md'
                            }`}
                            style={activeEditTab === 'customize' ? { backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' } : {}}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            Customize
                        </button>
                    </div>

                    {/* Content Block with Animation */}
                    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="space-y-6">
                                {activeEditTab === 'timeline' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-blue-100 px-4 py-2 rounded-xl text-sm font-semibold text-blue-700 mb-4 shadow-sm">
                                            Precision Control
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Professional timeline editing
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Master your video creation with an intuitive timeline editor. Trim clips with frame-level 
                                            precision, cut unwanted sections, and merge multiple clips seamlessly. Everything you need 
                                            to create professional videos is at your fingertips.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                            style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                        >
                                            Explore Timeline
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                {activeEditTab === 'reorder' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-indigo-100 px-4 py-2 rounded-xl text-sm font-semibold text-indigo-700 mb-4 shadow-sm">
                                            Effortless Organization
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Drag, drop, and perfect your story
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Rearrange scenes effortlessly with drag-and-drop functionality. Experiment with different 
                                            narrative flows, reorder segments instantly, and find the perfect sequence that tells 
                                            your story most effectively.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                            style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                        >
                                            Try Scene Reordering
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                {activeEditTab === 'customize' && (
                                    <div className="animate-fade-in">
                                        <div className="inline-block bg-purple-100 px-4 py-2 rounded-xl text-sm font-semibold text-purple-700 mb-4 shadow-sm">
                                            Individual Control
                                        </div>
                                        <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            Customize every scene detail
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            Fine-tune each scene independently. Adjust timing, apply unique transitions, modify backgrounds, 
                                            and tweak visual elements per scene. Create dynamic videos where each moment is perfectly 
                                            crafted to your vision.
                                        </p>
                                        <Link
                                            to="/request-invite"
                                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                            style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                        >
                                            Customize Scenes
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Visual Element */}
                            <div className="relative h-[300px] sm:h-[350px] md:h-[450px] flex items-center justify-center">
                                {activeEditTab === 'timeline' && (
                                    <div className="animate-fade-in w-full h-full">
                                        {/* Timeline Visualization */}
                                        <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl p-6">
                                            {/* Timeline Header */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm font-semibold text-gray-900">Timeline</span>
                                                <div className="ml-auto text-xs text-gray-500">0:00 / 2:45</div>
                                            </div>
                                            
                                            {/* Timeline Tracks */}
                                            <div className="space-y-3">
                                                <div className="h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg shadow-md relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                                                </div>
                                                <div className="h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg shadow-md relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                                                </div>
                                                <div className="h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg shadow-md relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                                                </div>
                                                <div className="h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-md"></div>
                                            </div>

                                            {/* Playhead */}
                                            <div className="absolute top-20 left-1/3 w-1 h-64 bg-red-500 shadow-lg">
                                                <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeEditTab === 'reorder' && (
                                    <div className="animate-fade-in w-full h-full">
                                        {/* Drag & Drop Scene Cards */}
                                        <div className="relative w-full h-full p-4 space-y-4">
                                            <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-indigo-300 transform hover:scale-105 transition-transform cursor-move">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                    </div>
                                                    <div className="w-16 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded"></div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-gray-900 text-sm">Scene 1: Introduction</p>
                                                        <p className="text-xs text-gray-500">0:00 - 0:30</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-indigo-200 transform hover:scale-105 transition-transform cursor-move">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                    </div>
                                                    <div className="w-16 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded"></div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-gray-900 text-sm">Scene 2: Main Content</p>
                                                        <p className="text-xs text-gray-500">0:30 - 1:45</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-indigo-200 transform hover:scale-105 transition-transform cursor-move">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                    </div>
                                                    <div className="w-16 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded"></div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-gray-900 text-sm">Scene 3: Call to Action</p>
                                                        <p className="text-xs text-gray-500">1:45 - 2:15</p>
                        </div>
                    </div>
                </div>

                                            {/* Drop Zone Indicator */}
                                            <div className="border-2 border-dashed border-indigo-300 rounded-xl p-4 bg-indigo-50/50 text-center">
                                                <svg className="w-8 h-8 text-indigo-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                <p className="text-xs text-indigo-600 font-medium">Drop here to add scene</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeEditTab === 'customize' && (
                                    <div className="animate-fade-in w-full h-full">
                                        {/* Scene Customization Panel */}
                                        <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl p-6">
                                            <h4 className="font-bold text-gray-900 mb-4">Scene Settings</h4>
                                            
                                            <div className="space-y-4">
                                                {/* Duration Control */}
                                                <div className="bg-purple-50 rounded-lg p-4">
                                                    <label className="text-sm font-semibold text-gray-900 mb-2 block">Duration</label>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-1 h-2 bg-purple-200 rounded-full relative">
                                                            <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                                            <div className="absolute left-3/4 -top-1.5 w-5 h-5 bg-white border-2 border-purple-500 rounded-full"></div>
                                                        </div>
                                                        <span className="text-sm font-medium text-purple-600">4.5s</span>
                                                    </div>
                                                </div>

                                                {/* Transition Selection */}
                                                <div className="bg-indigo-50 rounded-lg p-4">
                                                    <label className="text-sm font-semibold text-gray-900 mb-2 block">Transition</label>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <button className="h-10 rounded-md text-white text-xs font-medium" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>Fade</button>
                                                        <button className="h-10 bg-white border border-gray-200 rounded-md text-gray-700 text-xs font-medium">Slide</button>
                                                        <button className="h-10 bg-white border border-gray-200 rounded-md text-gray-700 text-xs font-medium">Zoom</button>
                                                    </div>
                                                </div>

                                                {/* Background Options */}
                                                <div className="bg-pink-50 rounded-lg p-4">
                                                    <label className="text-sm font-semibold text-gray-900 mb-2 block">Background</label>
                                                    <div className="flex gap-2">
                                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg border-2 border-purple-600"></div>
                                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg border-2 border-transparent"></div>
                                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg border-2 border-transparent"></div>
                                                        <div className="w-12 h-12 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                                        </div>
                                                    </div>
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
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
            `}</style>

            {/* Text Customization Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
                        {/* Left Side - Content */}
                    <div>
                            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Typography Control
                            </div>
                            
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Complete Text Customization
                            </h2>
                            
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Perfect control over every text element in your videos. Choose from hundreds of fonts, 
                                apply stunning text animations, and position elements exactly where you want them. 
                                Advanced typography tools meet intuitive design.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-pink-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">800+ Premium Fonts</h4>
                                        <p className="text-gray-600 text-sm">Google Fonts integration plus custom font upload for perfect brand matching.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-rose-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Dynamic Text Animations</h4>
                                        <p className="text-gray-600 text-sm">50+ text animation presets including typewriter, fade-in, bounce, and kinetic effects.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Precise Positioning</h4>
                                        <p className="text-gray-600 text-sm">Pixel-perfect alignment with smart guides and snapping for professional layouts.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Advanced Styling</h4>
                                        <p className="text-gray-600 text-sm">Shadows, outlines, gradients, and effects to make your text stand out beautifully.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/request-invite"
                                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                            >
                                Explore Text Tools
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right Side - Text Editor Interface */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden shadow-2xl border border-pink-100">
                                {/* Editor Header */}
                                <div className="bg-white px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900">Text Editor</h3>
                                    <p className="text-sm text-gray-500">Customize your text elements</p>
                                </div>

                                {/* Text Preview */}
                                <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 min-h-[250px] flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-white mb-2 animate-pulse-slow">Your Title Here</h3>
                                        <p className="text-lg text-white/90">Subtitle with custom styling</p>
                                    </div>
                                </div>

                                {/* Text Controls */}
                                <div className="bg-white p-6 space-y-4">
                                    {/* Font Selector */}
                                    <div>
                                        <label className="text-xs font-semibold text-gray-700 mb-2 block">Font Family</label>
                                        <div className="flex gap-2">
                                            <button className="flex-1 px-3 py-2 bg-pink-100 text-pink-700 rounded-lg text-sm font-medium">Montserrat</button>
                                            <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Roboto</button>
                                            <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Inter</button>
                                        </div>
                                    </div>

                                    {/* Size & Color */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Size</label>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                                                </div>
                                                <span className="text-xs font-medium text-gray-600">48px</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Color</label>
                                            <div className="flex gap-1">
                                                <div className="w-8 h-8 bg-white border-2 border-pink-500 rounded-md"></div>
                                                <div className="w-8 h-8 bg-purple-500 rounded-md"></div>
                                                <div className="w-8 h-8 bg-indigo-500 rounded-md"></div>
                                                <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animation */}
                                    <div>
                                        <label className="text-xs font-semibold text-gray-700 mb-2 block">Animation</label>
                                        <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                                            <option>Fade In</option>
                                            <option>Slide Up</option>
                                            <option>Typewriter</option>
                                            <option>Bounce</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">800+</p>
                                        <p className="text-xs text-gray-600">Fonts</p>
                        </div>
                    </div>
                </div>

                            <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">50+</p>
                                        <p className="text-xs text-gray-600">Animations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Custom Font Upload
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Upload and use your own brand fonts for complete typography control and brand consistency.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Smart Alignment
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Intelligent guides and snap-to-grid functionality ensure perfect text positioning every time.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Style Presets
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Pre-designed text styles and templates that you can apply instantly and customize as needed.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="rounded-2xl p-12 text-center text-white" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                    <h2 className="text-3xl font-bold mb-4">
                        Take Full Control of Your Videos
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and experience the power of professional video editing
                    </p>
                    <Link
                        to="/request-invite"
                        className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
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

export default UserControl;
