import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
    SparklesIcon, 
    MapPinIcon, 
    FolderIcon, 
    RocketLaunchIcon,
    HeartIcon
} from '@heroicons/react/24/outline';

const FeatureDropdown = ({ isActive, onClose }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive, onClose]);

    if (!isActive) return null;

    const features = {
        communication: {
            icon: SparklesIcon,
            color: '#6366F1',
            bgColor: '#E0E7FF',
            title: 'Communication',
            linkPath: '/feature/communication',
            items: [
                { label: 'Summarization support', tag: null },
                { label: 'Pre-engineered super prompts', tag: null },
                { label: 'Infographics brought to life', tag: null },
                { label: 'Accurate charting', tag: null },
                { label: 'Captions', tag: null },
                { label: '140+ languages (coming soon)', tag: null },
            ]
        },
        broughtToLife: {
            icon: MapPinIcon,
            color: '#3B82F6',
            bgColor: '#DBEAFE',
            title: 'Brought to life',
            linkPath: '/feature/brought-to-life',
            items: [
                { label: 'Dynamic video', tag: null },
                { label: 'News Anchor style', tag: null },
                { label: 'Animation', tag: null },
                { label: 'AI Voices & Voice cloning', tag: null },
            ]
        },
        branding: {
            icon: FolderIcon,
            color: '#3B82F6',
            bgColor: '#DBEAFE',
            title: 'Within branding guidelines',
            linkPath: '/feature/branding-guidelines',
            items: [
                { label: 'Brand sensing', tag: null },
                { label: 'Multiple brand profiles', tag: null },
                { label: 'Strict adherence and inspired generation', tag: null },
            ]
        },
        userControl: {
            icon: RocketLaunchIcon,
            color: '#8B5CF6',
            bgColor: '#EDE9FE',
            title: 'And full user control',
            linkPath: '/feature/user-control',
            items: [
                { label: 'Video editing tools', tag: null },
                { label: 'Scene level edits', tag: null },
                { label: 'Text', tag: null },
            ]
        }
    };

    return (
        <div 
            ref={dropdownRef}
            className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{ 
                fontFamily: 'var(--brand-font)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
                width: '1100px',
                marginLeft: '-200px'
            }}
        >
            <div className="px-12 py-10">
                {/* Main Features Grid */}
                <div className="grid grid-cols-4 gap-8 mb-8">
                    {Object.entries(features).map(([key, category]) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={key} className="flex flex-col">
                                {/* Category Header */}
                                <Link 
                                    to={category.linkPath}
                                    className="flex items-center gap-3 mb-5 group"
                                    onClick={onClose}
                                >
                                    <div 
                                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: category.bgColor }}
                                    >
                                        <IconComponent 
                                            className="w-5 h-5" 
                                            style={{ color: category.color }}
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold capitalize group-hover:underline transition-colors" style={{ color: '#0F172A' }}>
                                        {category.title || key.replace(/([A-Z])/g, ' $1').trim()}
                                    </h3>
                                </Link>

                                {/* Feature Items */}
                                <div className="flex flex-col gap-3">
                                    {category.items.map((item, idx) => {
                                        // Map categories to their respective pages
                                        let linkPath = '/';
                                        if (key === 'communication') linkPath = '/feature/communication';
                                        else if (key === 'broughtToLife') linkPath = '/feature/brought-to-life';
                                        else if (key === 'branding') linkPath = '/feature/branding-guidelines';
                                        else if (key === 'userControl') linkPath = '/feature/user-control';
                                        
                                        return (
                                            <Link
                                                key={idx}
                                                to={linkPath}
                                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 group"
                                                onClick={onClose}
                                            >
                                                <span className="group-hover:underline">{item.label}</span>
                                                {item.tag && (
                                                    <span 
                                                        className="text-xs px-2 py-0.5 rounded font-semibold"
                                                        style={{
                                                            backgroundColor: item.tag === 'New' ? '#D1FAE5' : '#FEF3C7',
                                                            color: item.tag === 'New' ? '#065F46' : '#92400E'
                                                        }}
                                                    >
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                {/* <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">

                    <Link
                        to="/safety-security"
                        className="group p-6 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-200"
                        onClick={onClose}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#6366F1] transition-colors flex items-center gap-2">
                                AI Safety & Security
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </h4>
                        </div>
                        <div className="flex flex-col gap-2.5 text-sm text-gray-700">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>SOC 2 Type II compliant</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>ISO 42001 compliant</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>GDPR compliant</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        to="/features"
                        className="group p-6 rounded-xl bg-gradient-to-br from-[#1470D2]/10 to-[#8E23C0]/10 hover:from-[#1470D2]/20 hover:to-[#8E23C0]/20 transition-all duration-200 relative overflow-hidden"
                        onClick={onClose}
                    >
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#6366F1] transition-colors mb-2 flex items-center gap-2">
                                All features
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </h4>
                            <p className="text-sm text-gray-600">
                                A secure environment for businesses.
                            </p>
                        </div>

                        <div className="absolute right-0 bottom-0 w-64 h-40 opacity-40 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1470D2]/30 via-[#8E23C0]/30 to-[#F96A17]/30 rounded-tl-[80px]"></div>
                            <div className="absolute right-4 bottom-4 w-20 h-20 bg-white/60 rounded-lg transform rotate-12"></div>
                            <div className="absolute right-16 bottom-8 w-16 h-16 bg-white/50 rounded-lg transform -rotate-6"></div>
                        </div>
                    </Link>
                </div> */}
            </div>

            {/* Bottom CTA Bar */}
            {/* <div className="bg-gradient-to-r from-[#1470D2] to-[#8E23C0] px-12 py-5 flex items-center justify-between">
                <Link
                    to="/create-free"
                    className="text-white font-semibold text-base hover:text-indigo-200 transition-colors"
                    onClick={onClose}
                >
                    Create free AI video
                </Link>
                <span className="text-indigo-300 text-sm">|</span>
                <Link
                    to="/book-demo"
                    className="text-white font-semibold text-base hover:text-indigo-200 transition-colors"
                    onClick={onClose}
                >
                    Book demo
                </Link>
                <div className="flex-1"></div>
                <Link
                    to="/get-started"
                    className="inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-indigo-50 transition-all duration-200 shadow-lg"
                    onClick={onClose}
                >
                    Get started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div> */}
        </div>
    );
};

export default FeatureDropdown;