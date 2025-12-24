import { useState } from "react";

const AppShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, type: "image", src: "/src/Shahbaz/Slider images/WhatsApp Image 2025-12-21 at 2.22.37 PM.jpeg", alt: "Project 1" },
    { id: 2, type: "image", src: "/src/Shahbaz/Slider images/WhatsApp Image 2025-12-21 at 2.22.37 2312313PM.jpeg", alt: "Project 2" },
    { id: 3, type: "image", src: "/src/Shahbaz/Slider images/WhatsApp Image 2025-12-21 at 2.22.38 21312 PM.jpeg", alt: "Project 3" },
    { id: 4, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.22.48 23424123PM.mp4", alt: "Video 1" },
    { id: 5, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.23.08 PMwqe123.mp4", alt: "Video 2" },
    { id: 6, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.23.26 PM.mp4", alt: "Video 3" },
    { id: 7, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.23.39 PMwqdsads.mp4", alt: "Video 4" },
    { id: 8, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.24.14 PM1234.mp4", alt: "Video 5" },
    { id: 9, type: "video", src: "/src/Shahbaz/Slider images/WhatsApp Video 2025-12-21 at 2.39.27 PMsdfrs.mp4", alt: "Video 6" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div id="work" className="app-showcase py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Work</h2>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-black flex items-center justify-center">
            {slides[currentSlide].type === "image" ? (
              <img 
                src={slides[currentSlide].src} 
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video 
                key={currentSlide}
                src={slides[currentSlide].src}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              />
            )}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute  cursor-pointer  left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`px-3   cursor-pointer  py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white text-black' 
                  : 'bg-white/20 text-white hover:bg-white/40'
              }`}
            >
              {slide.type === "video" ? "" : ""} {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
