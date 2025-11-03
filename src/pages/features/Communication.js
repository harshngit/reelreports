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
            {/* Summarization Support */}
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
                                                {/* Document Icon */}
                                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                
                                                {/* Orbiting mini icons */}
                                                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                
                                                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                    <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
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
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                    </svg>
                                    Document Intelligence
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Transform Ideas Into
                                    <span className="block bg-gradient-to-r from-[#1470D2] to-[#8E23C0] bg-clip-text text-transparent">
                                        Engaging Stories
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Transform lengthy documents, reports, and presentations into concise video summaries. 
                                    Our AI extracts key insights and creates engaging narratives that capture the essence 
                                    of your content in seconds.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">90%</div>
                                    <div className="text-sm text-gray-600">Time Saved</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-pink-600 mb-1">Smart</div>
                                    <div className="text-sm text-gray-600">AI Analysis</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">PDF</div>
                                    <div className="text-sm text-gray-600">Direct Upload</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-invite"
                                    className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                >
                                    Try Summarization
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Upload Document
                                </button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Pre-engineered super prompts */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Pre-engineered Super Prompts
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Leverage expertly crafted AI prompts designed for maximum impact and engagement.
                        </p>
                        <p className="text-lg text-gray-500">
                            No prompt engineering skills needed—just select, customize, and create stunning content.
                        </p>
                    </div>

                    {/* Two Column Card */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2">
                            {/* Left Column - Feature Description */}
                            <div className="p-12 flex flex-col justify-center border-r border-gray-100">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Optimized Prompt Library
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Access our collection of professionally engineered prompts optimized for different industries, 
                                    content types, and use cases. Each prompt is tested and refined for optimal AI performance.
                                </p>
                                <Link 
                                    to="#" 
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
                                >
                                    Browse Prompt Library
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right Column - Interactive Demo */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-12">
                                {/* Prompt Selection Interface */}
                                <div className="space-y-4">
                                    {/* Prompt Category Selector */}
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-blue-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                    </svg>
                                                    Select Prompt Template
                                                </div>
                                                <p className="text-sm text-gray-700 font-medium">
                                                    Product Launch Announcement - B2B Tech
                                                </p>
                                            </div>
                                            <button className="px-4 py-2 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                    {/* Generated Prompt Output */}
                                    <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                                        <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-4">
                                            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Optimized Prompt Applied
                                        </div>
                                        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                            <p className="font-medium text-gray-800">
                                                🎯 Target Audience: <span className="bg-blue-100 text-blue-900 px-1 rounded">Tech Decision Makers</span>
                                            </p>
                                            <p className="font-medium text-gray-800">
                                                📊 Key Message: <span className="bg-cyan-100 text-cyan-900 px-1 rounded">Innovation & ROI</span>
                                            </p>
                                            <p className="text-gray-600 italic">
                                                "Introducing [Product Name] - the revolutionary solution that reduces costs by 40% 
                                                while increasing productivity. See how leading companies are transforming their operations..."
                                            </p>
                                        </div>
                                        
                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Customize
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-cyan-50 text-cyan-700 rounded-lg hover:bg-cyan-100 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                                </svg>
                                                Save Template
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-lg hover:bg-green-100 transition-colors ml-auto">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Generate Video
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infographics brought to life */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Infographics Brought to Life
                        </h2>
                        <p className="text-xl text-gray-600 mb-2">
                            Transform static graphics into dynamic, engaging animated content.
                        </p>
                        <p className="text-lg text-gray-500">
                            Add motion, transitions, and storytelling to your visual data.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Animated Charts */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Animated Charts & Graphs
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Bring bar charts, pie charts, and line graphs to life with smooth animations that reveal data progressively for maximum impact.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group">
                                    See Animation Styles
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

                        {/* Card 2: Visual Storytelling */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Visual Storytelling
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Convert static infographics into compelling video narratives with zoom effects, highlights, and progressive reveals.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group">
                                    Explore Effects
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

                        {/* Card 3: Interactive Elements */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Smart Transitions
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Add professional transitions, callouts, and emphasis effects that guide viewer attention to key data points automatically.
                                </p>
                                <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold group">
                                    View Transitions
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            
                            {/* Language Selector Preview */}
                            <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 h-64 p-6 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                {/* Video Player with Language Menu */}
                                <div className="relative bg-gray-900 rounded-lg h-full overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20"></div>
                                    
                                    {/* Language Dropdown */}
                                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-2 min-w-[160px]">
                                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-green-50 rounded cursor-pointer">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
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
                                            <svg className="w-7 h-7 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
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

            {/* Accurate charting */}
            <div className=" py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
                            <div className="lg:max-w-xl">
                                <div className="inline-block mb-6">
                                    <span className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-lg uppercase tracking-wide">
                                        Data Precision
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    Accurate Charting & Data Visualization
                                </h2>
                            </div>
                            <div className="lg:max-w-md">
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Create pixel-perfect, data-accurate charts and visualizations that maintain integrity 
                                    while delivering stunning visual impact. Every number counts.
                                </p>
                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200">
                                    Explore Chart Types
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1: Data Accuracy */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    100% Data Accuracy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Every chart is mathematically precise, ensuring your data visualization maintains complete integrity from source to display.
                                </p>
                            </div>

                            {/* Card 2: Multiple Chart Types */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Multiple Chart Types
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Support for bar, line, pie, scatter, area charts and more. Choose the perfect visualization for your data story.
                                </p>
                            </div>

                            {/* Card 3: Live Data Sync */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Live Data Updates
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Connect to live data sources and automatically update your charts in real-time as your data changes.
                                </p>
                            </div>

                            {/* Card 4: Custom Styling */}
                            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Custom Styling
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Match your brand colors, fonts, and style guidelines with fully customizable chart themes and templates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                 {/* Captions & Subtitles Section */}
                <div className="mb-20 max-w-7xl mx-auto rounded-3xl pt-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                Caption Technology
                            </div>
                            
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Auto-Generated Captions & Subtitles
                            </h2>
                            
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Create perfectly synchronized captions and subtitles automatically with our AI-powered 
                                transcription technology. Support for 140+ languages with industry-leading accuracy.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">99% Accuracy Rate</h4>
                                        <p className="text-gray-600 text-sm">State-of-the-art speech recognition ensures precise transcription across all languages and accents.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Instant Translation</h4>
                                        <p className="text-gray-600 text-sm">Translate captions to 140+ languages instantly with native-quality translations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-pink-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Custom Styling</h4>
                                        <p className="text-gray-600 text-sm">Fully customizable fonts, colors, sizes, and positions to match your brand identity.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 flex-shrink-0 mt-1">
                                        <FiCheck className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Easy Editing</h4>
                                        <p className="text-gray-600 text-sm">Edit timestamps, text, and formatting with our intuitive caption editor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link 
                                    to="/request-invite" 
                                    className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg"
                                    style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}
                                >
                                    Try Caption Generator
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Visual Demo */}
                        <div className="relative">
                            {/* Video Player Mockup */}
                            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Video Content */}
                                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                                    <video 
                                        src={communicationVideo} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Caption Overlay */}
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-11/12">
                                        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                                            <p className="text-white text-center font-medium text-lg leading-relaxed">
                                                Transform your ideas into engaging video content
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Caption Controls */}
                                <div className="bg-gray-800 px-6 py-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-gray-300 text-sm font-medium">Captions</span>
                                        <div className="flex items-center gap-3">
                                            <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors">
                                                English
                                            </button>
                                            <button className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition-colors">
                                                Español
                                            </button>
                                            <button className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition-colors">
                                                Français
                                            </button>
                                            <button className="text-xs text-gray-400 hover:text-white transition-colors">
                                                +140
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Auto-generated • 99% accuracy • Editable</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Feature Cards */}
                            <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">140+</p>
                                        <p className="text-xs text-gray-600">Languages</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-20 bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Real-time</p>
                                        <p className="text-xs text-gray-600">Generation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-20 pt-12">
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


                {/* Accurate Charting */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative z-10 w-full h-[350px] rounded-bl-[60px] overflow-hidden border-4 border-white shadow-lg">
                                <video 
                                    src={communicationVideo} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                    {/* <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <p className="text-gray-600">Data Visualization</p>
                        </div>
                    </div> */}
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
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                                <span className="text-gray-700">Multiple chart types supported</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                                <span className="text-gray-700">Data accuracy guaranteed</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
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
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                                <span className="text-gray-700">Animate charts and graphs</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                                <span className="text-gray-700">Add motion and transitions</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                                <FiCheck className="h-4 w-4 text-white" />
                            </div>
                                <span className="text-gray-700">Engage viewers with visual storytelling</span>
                            </li>
                        </ul>
                    </div>
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



                {/* CTA Section */}
                <div className="rounded-2xl p-12 text-center text-white" style={{ backgroundImage: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)' }}>
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