import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    RocketLaunchIcon,
    MegaphoneIcon,
    ChatBubbleLeftRightIcon,
    BookOpenIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

const SolutionDropdown = ({ isActive, onClose }) => {
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

    const solutions = [
        {
            key: 'sales',
            icon: RocketLaunchIcon,
            color: '#6366F1',
            bgColor: '#E0E7FF',
            title: 'Sales acceleration',
            description: 'Engaging, targeted pitch reels that stand out and hep close deals',
        },
        {
            key: 'marketing',
            icon: MegaphoneIcon,
            color: '#3B82F6',
            bgColor: '#DBEAFE',
            title: 'Marketing',
            description: 'Generate brand adherent videos to promote your business',
        },
        {
            key: 'internal',
            icon: ChatBubbleLeftRightIcon,
            color: '#3B82F6',
            bgColor: '#DBEAFE',
            title: 'Internal communication',
            description: 'Communicate clear engaging updates',
        },
        {
            key: 'knowledge',
            icon: BookOpenIcon,
            color: '#8B5CF6',
            bgColor: '#EDE9FE',
            title: 'Knowledge management',
            description: 'Summarize knowledge in engaging teaser reels',
        },
        {
            key: 'financial',
            icon: ChartBarIcon,
            color: '#8B5CF6',
            bgColor: '#EDE9FE',
            title: 'Financial reporting',
            description: 'Translate KPIs into board-ready recap reels',
        }
    ];

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
                {/* Solutions Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {solutions.map((solution) => {
                        const IconComponent = solution.icon;
                        return (
                            <Link
                                key={solution.key}
                                to={`/solution/${solution.key}`}
                                className="group p-6 rounded-xl border-2 border-transparent hover:border-blue-200 bg-gradient-to-br from-gray-50/50 to-white hover:from-[#1470D2]/10 hover:to-[#8E23C0]/10 transition-all duration-300"
                                onClick={onClose}
                            >
                                {/* Icon */}
                                <div 
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                    style={{ backgroundColor: solution.bgColor }}
                                >
                                    <IconComponent 
                                        className="w-6 h-6" 
                                        style={{ color: solution.color }}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                
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

export default SolutionDropdown;