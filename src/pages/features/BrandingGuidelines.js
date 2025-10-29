import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BrandingGuidelines = () => {
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
                            Within Branding Guidelines
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Maintain perfect brand consistency across all your video content with intelligent brand sensing and adherence
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Brand Sensing */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Brand Sensing
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Our AI automatically detects and learns your brand's visual identity, 
                            ensuring every video maintains your unique brand essence.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Automatic brand color detection</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Logo and font recognition</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Style pattern learning</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Brand Detection AI</p>
                        </div>
                    </div>
                </div>

                {/* Multiple Brand Profiles */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Multiple Brands</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Multiple Brand Profiles
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Manage different brands or sub-brands effortlessly with separate profiles 
                            for each, making multi-brand content creation seamless.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Unlimited brand profiles</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Quick profile switching</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Individual brand settings</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Strict Adherence & Inspired Generation */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Strict Adherence and Inspired Generation
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Choose between strict brand guideline adherence for consistency or 
                            inspired generation that creatively explores your brand's boundaries.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Strict mode for perfect consistency</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Inspired mode for creative variations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">AI-powered brand evolution</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Brand Protection</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Maintain Perfect Brand Consistency
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and protect your brand identity across all videos
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

export default BrandingGuidelines;