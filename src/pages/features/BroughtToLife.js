import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BroughtToLife = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link> */}
                    
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Brought to Life
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Bring your content to life with dynamic videos, professional anchors, and AI-powered voices
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Dynamic Video */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Dynamic Video
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Create engaging videos that adapt and respond to your content. Our dynamic video 
                            engine ensures every frame is optimized for maximum impact.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Adaptive layouts and compositions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Real-time rendering</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Multiple output formats</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Dynamic Video Engine</p>
                        </div>
                    </div>
                </div>

                {/* News Anchor Style */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Professional Presenter</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            News Anchor Style
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Professional news anchor presentation style that delivers your message 
                            with authority and credibility.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Professional presenter avatars</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Broadcast-quality delivery</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Multiple presenter styles</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Animation */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Animation
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Add professional animations and transitions to make your videos more 
                            engaging and visually appealing.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Smooth transitions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Motion graphics</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Custom animation presets</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Animation Effects</p>
                        </div>
                    </div>
                </div>

                {/* AI Voices & Voice Cloning */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Voice Technology</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            AI Voices & Voice Cloning
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Choose from a library of natural-sounding AI voices or clone your own 
                            voice for consistent, personalized narration.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Natural-sounding voices</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Voice cloning technology</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Multiple languages and accents</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
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