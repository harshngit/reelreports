import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const KnowledgeManagement = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link> */}
                    
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl mb-6">
                            <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Knowledge Management
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Summarize knowledge in engaging teaser reels that make complex information accessible
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="mb-16 bg-gray-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Challenge</h2>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                        Organizations have vast amounts of valuable knowledge trapped in documents, presentations, 
                        and reports. This information is difficult to access, understand, and share effectively.
                    </p>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Reel Reports Helps</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Summarization</h3>
                            <p className="text-gray-600 mb-4">
                                Transform lengthy documents, research papers, and reports into concise video summaries. 
                                Make knowledge accessible to busy team members.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Base Videos</h3>
                            <p className="text-gray-600 mb-4">
                                Create a searchable video library of your organization's knowledge. 
                                Make it easy for employees to find and understand important information.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices Sharing</h3>
                            <p className="text-gray-600 mb-4">
                                Capture and share best practices, lessons learned, and expertise from 
                                across your organization in engaging video format.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Modules</h3>
                            <p className="text-gray-600 mb-4">
                                Convert training materials and educational content into bite-sized video modules 
                                that employees can consume at their own pace.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Research Teams</h3>
                            <p className="text-gray-600">Share research findings in digestible formats</p>
                        </div>
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Learning & Development</h3>
                            <p className="text-gray-600">Create engaging learning content</p>
                        </div>
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Knowledge Transfer</h3>
                            <p className="text-gray-600">Preserve institutional knowledge</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Knowledge Management?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Request a platform invite and start creating engaging knowledge summaries
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

export default KnowledgeManagement;