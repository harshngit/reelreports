import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FiCheck, FiMousePointer } from "react-icons/fi"
import { useState, useEffect } from "react"
import communicationVideo from '../../assets/communication.mp4'


const Communication = () => {
    const [videos] = useState([
        {
          id: "1",
          videoUrl: "/landscape-with-rolling-hills-and-golden-fields.jpg",
          description:
            "A radiant, sunlit landscape with gently rolling hills, lush green meadows, and a vibrant sky painted in soft pastels. The terrain undulates like waves, dotted with wildflowers and distant trees.",
        },
        {
          id: "2",
          videoUrl: "/green-meadow-landscape-scenic.jpg",
          description: "Scenic green meadow",
        },
        {
          id: "3",
          videoUrl: "/golden-hour-sunset-landscape.jpg",
          description: "Golden hour sunset",
        },
      ])
    
      const [activeVideo, setActiveVideo] = useState(videos[0] || null)
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveVideo((prev) => {
            const currentIndex = videos.findIndex((v) => v.id === prev?.id)
            const nextIndex = (currentIndex + 1) % videos.length
            return videos[nextIndex]
          })
        }, 5000)
    
        return () => clearInterval(interval)
      }, [videos])
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
            {/* Hero Section with Banner */}
            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Banner/Illustration */}
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
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
                                                {/* Communication Icon */}
                                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                
                                                {/* Orbiting mini icons */}
                                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                
                                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
                                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                    </svg>
                                    Communication Suite
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Transform Ideas Into
                                    <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Engaging Stories
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Elevate your communication with AI-powered tools that transform documents, 
                                    data, and ideas into captivating video content. Create professional presentations 
                                    in minutes, not hours.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">10x</div>
                                    <div className="text-sm text-gray-600">Faster Creation</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">AI</div>
                                    <div className="text-sm text-gray-600">Powered Tools</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-pink-600 mb-1">100+</div>
                                    <div className="text-sm text-gray-600">Templates</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-invite"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200">
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

            {/* No More Manual Content Creation Section */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            No more tedious manual content creation.
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Generate engaging video content from text, data, and documents automatically.
                        </p>
                        <p className="text-lg text-gray-500">
                            No need for video editing expertise, expensive software, or hours of work.
                        </p>
                    </div>

                    {/* Two Column Card */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2">
                            {/* Left Column - Feature Description */}
                            <div className="p-12 flex flex-col justify-center border-r border-gray-100">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    AI Script Generation
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Transform your ideas, documents, or data into professional video scripts instantly. 
                                    Our AI understands context, maintains your brand voice, and creates compelling narratives.
                                </p>
                                <Link 
                                    to="#" 
                                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-lg group"
                                >
                                    Try Script Generation
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right Column - Interactive Demo */}
                            <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-12">
                                {/* Script Generation Interface */}
                                <div className="space-y-4">
                                    {/* Input Bar */}
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                    Your Input
                                                </div>
                                                <p className="text-sm text-gray-700 italic">
                                                    "Create a video about the benefits of renewable energy..."
                                                </p>
                                            </div>
                                            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow">
                                                Generate
                                            </button>
                                        </div>
                                    </div>

                                    {/* Generated Output */}
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
                                        <div className="flex items-center gap-2 text-sm text-indigo-600 font-semibold mb-4">
                                            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Generated Script
                                        </div>
                                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                            <p>
                                                <span className="bg-indigo-100 text-indigo-900 px-1 rounded">Renewable energy is transforming</span> how we power our world. 
                                                From solar panels to wind turbines, these technologies are <span className="bg-purple-100 text-purple-900 px-1 rounded">reducing carbon emissions</span> and 
                                                creating sustainable solutions for future generations.
                                            </p>
                                            <p className="text-gray-600">
                                                Join us as we explore the incredible impact of clean energy on our planet 
                                                and discover how you can be part of this green revolution.
                                            </p>
                                        </div>
                                        
                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Edit
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                Regenerate
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors ml-auto">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Create Video
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Showcase Cards Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Data Visualization */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Data Visualization
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Transform complex data and spreadsheets into dynamic, animated charts and graphs that tell compelling stories.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group">
                                    Explore Data Tools
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            
                            {/* Video Preview */}
                            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 h-64 flex items-center justify-center group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Chart Preview */}
                                <div className="w-full h-full p-8 flex items-end gap-2 justify-center">
                                    <div className="w-12 h-24 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg shadow-lg transform group-hover:scale-105 transition-transform"></div>
                                    <div className="w-12 h-32 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg shadow-lg transform group-hover:scale-105 transition-transform delay-75"></div>
                                    <div className="w-12 h-20 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg shadow-lg transform group-hover:scale-105 transition-transform delay-100"></div>
                                    <div className="w-12 h-40 bg-gradient-to-t from-pink-500 to-pink-400 rounded-t-lg shadow-lg transform group-hover:scale-105 transition-transform delay-150"></div>
                                </div>
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Document Summarization */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Document Summarization
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Convert lengthy reports, presentations, and documents into concise, engaging video summaries in seconds.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group">
                                    See Summarization
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            
                            {/* Document Preview */}
                            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 h-64 p-8 group cursor-pointer overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Document Pages */}
                                <div className="relative h-full">
                                    <div className="absolute top-0 left-4 w-48 h-56 bg-white rounded-lg shadow-xl p-4 transform rotate-2 group-hover:rotate-3 transition-transform">
                                        <div className="space-y-2">
                                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                                            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                                            <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-8 w-48 h-56 bg-white rounded-lg shadow-xl p-4 transform -rotate-1 group-hover:-rotate-2 transition-transform">
                                        <div className="space-y-2">
                                            <div className="h-2 bg-purple-100 rounded w-full"></div>
                                            <div className="h-2 bg-purple-100 rounded w-3/4"></div>
                                            <div className="h-2 bg-purple-100 rounded w-full"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Multi-language Support */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Multi-language Content
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Create content once and automatically translate to 50+ languages with native-quality narration and captions.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group">
                                    See Languages
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            
                            {/* Language Selector Preview */}
                            <div className="relative bg-gradient-to-br from-green-50 to-teal-50 h-64 p-6 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Video Player with Language Menu */}
                                <div className="relative bg-gray-900 rounded-lg h-full overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20"></div>
                                    
                                    {/* Language Dropdown */}
                                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-2 min-w-[160px]">
                                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-green-50 rounded cursor-pointer">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-sm font-medium text-gray-700">EN English</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded cursor-pointer">
                                            <div className="w-2 h-2 bg-transparent border border-gray-300 rounded-full"></div>
                                            <span className="text-sm text-gray-600">FR Français</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded cursor-pointer">
                                            <div className="w-2 h-2 bg-transparent border border-gray-300 rounded-full"></div>
                                            <span className="text-sm text-gray-600">ES Español</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded cursor-pointer">
                                            <div className="w-2 h-2 bg-transparent border border-gray-300 rounded-full"></div>
                                            <span className="text-sm text-gray-600">DE Deutsch</span>
                                        </div>
                                    </div>
                                    
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-green-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enterprise-Grade Communication Section */}
            <div className="bg-white py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
                            <div className="lg:max-w-xl">
                                <div className="inline-block mb-6">
                                    <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-lg uppercase tracking-wide">
                                        Communication Excellence
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    Built on the foundations of clarity and engagement
                                </h2>
                            </div>
                            <div className="lg:max-w-md">
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Communication first, always. We've designed every feature to help you create 
                                    clear, impactful, and engaging content that resonates with your audience.
                                </p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200">
                                    Learn more
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1: Smart Content Analysis */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Smart Content Analysis
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our AI analyzes your content structure and automatically optimizes it for maximum clarity and impact.
                                </p>
                            </div>

                            {/* Card 2: Audience Optimization */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Audience Optimization
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Tailor your message for different audiences with AI-powered tone and style adjustments for every viewer.
                                </p>
                            </div>

                            {/* Card 3: Real-time Collaboration */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Real-time Collaboration
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Work seamlessly with your team, share feedback instantly, and iterate on content in real-time.
                                </p>
                            </div>

                            {/* Card 4: Brand Consistency */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Brand Consistency
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Maintain your unique voice and brand guidelines across all communications with intelligent templates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 pb-20 pt-12">
                    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-black mb-12 leading-tight">
                        Generate bespoke b-roll footage
                        </h1>

                        <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                            </div>
                            <p className="text-lg text-gray-700">
                            Integrate AI-generated assets seamlessly into your Synthesia videos
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                            </div>
                            <p className="text-lg text-gray-700">
                            Create custom, cinematic-quality b-roll and scene backgrounds simply by typing a prompt
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                            </div>
                            <p className="text-lg text-gray-700">
                            Add industry-specific materials and branded content to enhance your content
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Right Video Display */}
                    <div className="relative">
                        {/* Main Video Display */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Background blur effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

                            {/* Main Video Frame */}
                            <div className="relative z-10 w-full h-[350px] rounded-br-[60px] overflow-hidden border-4 border-white shadow-lg">
                                <video 
                                    src={communicationVideo} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                

                {/* Pre-engineered Super Prompts */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
                        <video 
                            src={communicationVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                        />
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
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
                        <video 
                            src={communicationVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                        />
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
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
                        <video 
                            src={communicationVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-full object-cover"
                        />
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