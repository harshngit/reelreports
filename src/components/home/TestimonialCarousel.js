import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      category: "TECHNICAL TRAINING",
      logo: "opentext",
      quote: "50% faster content. Without sacrificing quality",
      name: "Miki Ishikawa",
      title: "Director, Learning Services",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      bgColor: "bg-gray-200"
    },
    {
      id: 2,
      category: "EMPLOYEE TRAINING",
      logo: "sap",
      quote: "Teams adopt it fast and use it across the company.",
      name: "Sabrina Childress",
      title: "Innovation, Enablement, and Adoption",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      bgColor: "bg-gray-900"
    },
    {
      id: 3,
      category: "EMPLOYEE TRAINING",
      logo: "boldyn",
      quote: "Interactive video is redefining training for us",
      name: "Jen Ruthven",
      title: "Group Director, Learning & Career Development",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      bgColor: "bg-gray-700"
    },
    {
      id: 4,
      category: "COMPLIANCE TRAINING",
      logo: "BRINKS",
      quote: "We push updates without touching the LMS.",
      name: "Mark Stauffer",
      title: "Senior Manager, Global L&D",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bgColor: "bg-gray-600"
    },
    {
      id: 5,
      category: "EMPLOYEE TRAINING",
      logo: "metrobank",
      quote: "We saved $50K and hit 100+ customer videos",
      name: "Matt Moser",
      title: "Senior Director, Customer Engagement",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bgColor: "bg-gray-300"
    }
  ];

  const maxIndex = testimonials.length - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full py-10 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <span className="inline-flex items-center rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold tracking-wide uppercase border border-[#c6c1f0] transition-all duration-300">
					USE CASES
				</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 sm:mt-6 px-2">
            Train, market and sell like a<br className="hidden sm:block" />Fortune 100 company
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative px-2 sm:px-0">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-3 sm:gap-4 md:gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-[calc(100%-0.75rem)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <div 
                    className={`${testimonial.bgColor} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-[400px] sm:h-[450px] md:h-[500px] relative group cursor-pointer`}
                    onMouseEnter={() => setHoveredCard(testimonial.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                      <span className="bg-white px-2 py-1 sm:px-3 rounded-full text-xs font-semibold text-gray-700">
                        {testimonial.category}
                      </span>
                    </div>

                    {/* Logo */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                      <div className="text-white font-bold text-lg sm:text-xl">
                        {testimonial.logo}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    {/* Content - Slides down and disappears on hover */}
                    <div className={`absolute bottom-0 backdrop-blur-sm bg-black/20 left-0 right-0 p-4 sm:p-6 md:p-8 text-white transition-all duration-500 ease-out ${
                      hoveredCard === testimonial.id 
                        ? 'translate-y-full opacity-0' 
                        : 'translate-y-0 opacity-100'
                    }`}>
                      <div className="p-0">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                          "{testimonial.quote}"
                        </p>
                        <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-gray-300">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Play Button - Appears in content area on hover */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex items-center justify-center z-20 transition-all duration-500 ease-out ${
                      hoveredCard === testimonial.id 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-full opacity-0'
                    }`}>
                      <div className="bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3">
                        {/* Circular Play Icon */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 fill-gray-800 ml-0.5" />
                        </div>
                        {/* Play Text */}
                        <span className="text-gray-800 font-medium text-xs sm:text-sm">Play story</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all z-10 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all z-10 ${
              currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
          <p className="text-sm sm:text-base text-gray-700">
            Get custom pricing, a personalized tour, and learn how teams like yours succeed.{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1">
              Book demo →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;