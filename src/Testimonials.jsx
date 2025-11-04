import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Maxim Philip",
      role: "CTO, TaskBees Inc",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Moses is an exceptional project manager and developer. His ability to deliver complex projects on time while maintaining high quality standards is truly remarkable."
    },
    {
      name: "Patrick Ndayambaje",
      role: "CTO, NaviGO",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Working with Moses was a game-changer for our backend infrastructure. His expertise in DevOps and cloud technologies helped us reduce latency by 45%."
    },
    {
      name: "Sadrah Irasubiza",
      role: "Product Manager, Jivah Project",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Moses brought our vision to life with incredible attention to detail. His leadership skills and technical prowess made our collaboration seamless."
    },
    {
      name: "Habyarimana Projecte",
      role: "Founder, CryptaVita",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "Moses built our entire blockchain infrastructure from scratch. His understanding of security, scalability, and performance optimization is outstanding."
    },
    {
      name: "Lisa Anderson",
      role: "Director, Mashirika Arts Hub",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      text: "Moses managed our event platform development with exceptional skill. His agile approach and clear communication kept the team aligned and productive."
    },
    {
      name: "James Wilson",
      role: "Engineering Lead, DynaTrace",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      text: "Moses's frontend work on our monitoring dashboards was exceptional. He has a keen eye for UI/UX and writes clean, maintainable code."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-32 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Testimonials</h2>
          <div className="w-16 h-px bg-white/20"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="border-l border-white/10 pl-12 py-8 transition-all duration-500">
            {/* Testimonial Text */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-8 min-h-[140px] flex items-center">
                {testimonials[currentIndex].text}
              </p>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 border border-white/20 overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-light mb-1 tracking-wide">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-white/40 tracking-wider">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Counter */}
            <div className="text-xs text-white/40 tracking-widest uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronLeft size={18} className="text-white/60 group-hover:text-white transition-colors duration-300" />
              </button>
              
              <button
                onClick={goToNext}
                className="p-3 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronRight size={18} className="text-white/60 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-white/40 hover:text-white/60 transition-colors duration-300 tracking-widest uppercase"
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-px transition-all duration-500 ${
                  index === currentIndex
                    ? 'flex-1 bg-white/60'
                    : 'w-8 bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Overview */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group transition-all duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <div className="mb-4">
                <div className={`w-20 h-20 mx-auto border overflow-hidden transition-all duration-500 ${
                  index === currentIndex 
                    ? 'border-white/40' 
                    : 'border-white/10 group-hover:border-white/20'
                }`}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-white/60 text-center tracking-wide">
                {testimonial.name.split(' ')[0]}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;