import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const InternalCommunication = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 mb-8">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link> */}
                    
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-2xl mb-6">
                            <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Internal Communication
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Communicate clear engaging updates to your team with professional video messages
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mb-16 bg-gray-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Challenge</h2>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                        Important company updates get lost in email overload. Teams are distributed globally, 
                        making it difficult to ensure everyone receives and understands critical information.
                    </p>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Reel Reports Helps</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Announcements</h3>
                            <p className="text-gray-600 mb-4">
                                Deliver executive messages with impact. Create engaging video announcements 
                                that capture attention and ensure message retention.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Onboarding</h3>
                            <p className="text-gray-600 mb-4">
                                Create comprehensive training materials and onboarding videos that new hires 
                                can watch on-demand. Consistent training across all locations.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h3>
                            <p className="text-gray-600 mb-4">
                                Make policy changes clear and accessible. Transform dense policy documents 
                                into easy-to-understand video explanations.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Updates</h3>
                            <p className="text-gray-600 mb-4">
                                Keep distributed teams aligned with regular video updates. Share wins, 
                                challenges, and priorities across time zones.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Improve Internal Communication?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and start engaging your team with clear video updates
                    </p>
                    <Link
                        to="/request-invite"
                        className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
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

export default InternalCommunication;