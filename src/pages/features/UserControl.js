import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const UserControl = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link> */}
                    
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            And Full User Control
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Take complete control of your videos with powerful editing tools and granular scene-level customization
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Video Editing Tools */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Video Editing Tools
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Professional-grade editing tools that give you complete control over 
                            every aspect of your video content.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Intuitive timeline editor</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Trim, cut, and merge clips</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Add effects and filters</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Audio mixing and enhancement</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Professional Editing</p>
                        </div>
                    </div>
                </div>

                {/* Scene Level Edits */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Scene Management</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Scene Level Edits
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Edit individual scenes with precision. Modify, rearrange, or customize 
                            each scene independently for perfect storytelling.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Individual scene customization</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Drag and drop scene reordering</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Scene-specific transitions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Scene duration control</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Text */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Text Customization
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Full control over text elements including titles, subtitles, and captions 
                            with advanced typography options.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Custom fonts and typography</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Text animations and effects</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Positioning and alignment tools</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Style presets and templates</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Text Tools</p>
                        </div>
                    </div>
                </div>

                {/* Additional Feature: Real-time Preview */}
                <div className="mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Real-time Preview
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See your changes instantly with our real-time preview system. 
                            What you see is what you get, every time.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Updates</h3>
                            <p className="text-sm text-gray-600">Changes appear in real-time</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">WYSIWYG</h3>
                            <p className="text-sm text-gray-600">What you see is what you get</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Save Time</h3>
                            <p className="text-sm text-gray-600">No waiting for renders</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
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