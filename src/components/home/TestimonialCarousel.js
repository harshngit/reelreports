import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import communicationVideo from '../../assets/communication.mp4';
import NoorImage from '../../assets/fallbackimg/Noor.jpeg';
import DawoodImage from '../../assets/fallbackimg/Dawood.jpeg';
import NatashaImage from '../../assets/fallbackimg/Natasha.jpeg';
import RajveerImage from '../../assets/fallbackimg/Rajveer.jpeg';
import ManalImage from '../../assets/fallbackimg/Manal.jpeg';
import NoorVideo from '../../assets/fallbackimg/Noor.mp4';
import DawoodVideo from '../../assets/fallbackimg/Dawood.mp4';
import NatashaVideo from '../../assets/fallbackimg/Natasha.mp4';
import RajVideo from '../../assets/fallbackimg/Raj.mp4';
import ManalVideo from '../../assets/fallbackimg/manal.mp4';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const videoRefs = useRef({});

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

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
    const currentVideo = videoRefs.current[id];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      const playPromise = currentVideo.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = (id) => {
    setHoveredCard(null);
    const currentVideo = videoRefs.current[id];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }
  };

  const testimonials = [
    {
      id: 1,
      category: "Onboarding videos",
      logo: "",
      quote: "50% faster content. Without sacrificing quality",
      name: "",
      image: NoorImage, // fallback image
      videoSrc: NoorVideo, // video source
      bgColor: "bg-gray-200"
    },
    {
      id: 2,
      category: "Doc Companion Reel",
      logo: "",
      quote: "Teams adopt it fast and use it across the company.",
      name: "",
      title: "",
      image: DawoodImage,
      videoSrc: DawoodVideo, // video source
      bgColor: "bg-gray-900"
    },
    {
      id: 3,
      category: "Fast pre-reels",
      logo: "",
      quote: "1 minute summary getting everyone upto speed before the meeting begins",
      name: "",
      title: "",
      image: NatashaImage,
      videoSrc: NatashaVideo, // video source
      bgColor: "bg-gray-700"
    },
    {
      id: 4,
      category: "Video knoweldge database",
      logo: "",
      quote: "We summarized 100s of documents into 1 min reels easy consumption",
      name: "",
      title: "",
      image: RajveerImage,
      videoSrc: RajVideo, // video source
      bgColor: "bg-gray-600"
    },
    {
      id: 5,
      category: "Business Development",
      logo: "",
      quote: "We've trained our sales team to share tailored customer reels to close deals faster",
      name: "",
      title: "",
      image: ManalImage,
      videoSrc: ManalVideo, // video source
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
            Produce Agency-Quality videos <br className="hidden sm:block" />in-house, at scale
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
              {testimonials.map((testimonial) => {
                return (
                <div
                  key={testimonial.id}
                  className="min-w-[calc(100%-0.75rem)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <div 
                    className={`${testimonial.bgColor} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg aspect-[9/16] max-h-[520px] w-full relative group cursor-default`}
                    onMouseEnter={() => handleMouseEnter(testimonial.id)}
                    onMouseLeave={() => handleMouseLeave(testimonial.id)}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      {testimonial.videoSrc ? (
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[testimonial.id] = el;
                            } else {
                              delete videoRefs.current[testimonial.id];
                            }
                          }}
                          src={testimonial.videoSrc}
                          poster={testimonial.image}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
                        />
                      ) : (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              );
              })}
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
            <a href="/book-demo" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1">
              Request a Demo →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;