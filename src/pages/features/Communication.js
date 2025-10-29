import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Communication = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link> */}
                    
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Communication Features
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your ideas into engaging video content with our advanced communication tools
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {/* Summarization Support */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Summarization Support
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Automatically condense lengthy documents, reports, and presentations into concise, 
                            engaging video summaries. Our AI understands context and highlights key points.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Extract key insights from lengthy content</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Maintain context and accuracy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Create executive summaries in minutes</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Summarization Illustration</p>
                        </div>
                    </div>
                </div>

                {/* Pre-engineered Super Prompts */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">AI Prompts Illustration</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Pre-engineered Super Prompts
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Access a library of professionally crafted prompts designed to generate 
                            high-quality video content across various industries and use cases.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Industry-specific templates</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Optimized for best results</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Customizable to your needs</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Infographics Brought to Life */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Infographics Brought to Life
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Transform static infographics into dynamic, animated video content that 
                            captures attention and improves information retention.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Animate charts and graphs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Add motion and transitions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Engage viewers with visual storytelling</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Infographics Animation</p>
                        </div>
                    </div>
                </div>

                {/* Accurate Charting */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Data Visualization</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Accurate Charting
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Create precise, professional charts and data visualizations that are 
                            automatically animated and integrated into your video content.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Multiple chart types supported</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Data accuracy guaranteed</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Real-time updates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Communication?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and start creating engaging video content today
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

export default Communication;