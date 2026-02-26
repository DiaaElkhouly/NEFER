/**
 * Image Slider Component - Professional Carousel Design
 */
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "motion/react";

// Collection of images with their labels and paths
const MyCollection = [
  {
    label: "BODY SPLASH - COCONUT",
    imgPath: "./images/S-C.png",
    description: "Tropical paradise in every spray",
  },
  {
    label: "BODY SPLASH - GINGHAM",
    imgPath: "./images/S-G.png",
    description: "Elegant scent for modern women",
  },
  {
    label: "BODY LOTION - COCONUT",
    imgPath: "./images/L-C.png",
    description: "Deep moisturizing treatment",
  },
  {
    label: "BODY LOTION - GINGHAM",
    imgPath: "./images/L-G.png",
    description: "Luxurious skin nourishment",
  },
  {
    label: "Lip Palm",
    imgPath: "./images/lip-palm-1.png",
    description: "Essential lip care solution",
  },
];

const ImageSlider = () => {
  const CollectionSize = MyCollection.length;
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNextPicture = () => {
    setIndex((prev) => (prev + 1) % CollectionSize);
  };

  const goToPreviousPicture = () => {
    setIndex((prev) => (prev - 1 + CollectionSize) % CollectionSize);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextPicture,
    onSwipedRight: goToPreviousPicture,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Auto-play effect - runs on every index change
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % CollectionSize);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, isAutoPlaying, CollectionSize]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Main Slider Container */}
      <div
        {...swipeHandlers}
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Image Container with Border */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-900/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={MyCollection[index].imgPath}
                alt={MyCollection[index].label}
                className="w-full h-48 md:h-64 object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/80 via-transparent to-transparent"></div>

              {/* Label on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  {MyCollection[index].label}
                </h3>
                <p className="text-gray-200 text-sm mt-1 drop-shadow">
                  {MyCollection[index].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPreviousPicture}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pink-950/70 hover:bg-pink-950 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextPicture}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pink-950/70 hover:bg-pink-950 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {MyCollection.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                slideIndex === index
                  ? "bg-yellow-500 w-8"
                  : "bg-pink-800 hover:bg-pink-600"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-pink-900/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-yellow-500"
          key={`progress-${index}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
