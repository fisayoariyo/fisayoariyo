"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Poem = {
  id: number;
  title: string;
  text: string;
};

export default function PoemCarousel({
  poems,
  loading,
}: {
  poems: Poem[];
  loading: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (!poems?.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % poems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [poems]);

  useEffect(() => {
    if (!showControls) return;
    const timer = setTimeout(() => setShowControls(false), 2500);
    return () => clearTimeout(timer);
  }, [showControls]);

  if (loading)
    return <p className="text-gray-500 text-center py-20">Loading...</p>;
  if (!poems?.length)
    return <p className="text-gray-500 text-center py-20">No poems found.</p>;

  const poem = poems[current];

  const goNext = () => setCurrent((prev) => (prev + 1) % poems.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + poems.length) % poems.length);

  return (
    <section
      id="poetry"
      className="px-6 py-32 bg-gray-50 flex flex-col items-center justify-center text-center group"
      onClick={() => setShowControls(true)}
    >
      <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-gray-900">
        Poetry
      </h3>

      <div className="relative w-full max-w-3xl h-[360px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute text-gray-800 px-6"
          >
            <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-6">
              {poem.title}
            </h4>
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-gray-700">
              {poem.text}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Hover/tap controls */}
        <button
          onClick={() => {
            setShowControls(true);
            goPrev();
          }}
          className={`absolute left-0 p-3 rounded-full bg-white/70 shadow-md transition-all duration-300 hover:bg-white ${
            showControls ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => {
            setShowControls(true);
            goNext();
          }}
          className={`absolute right-0 p-3 rounded-full bg-white/70 shadow-md transition-all duration-300 hover:bg-white ${
            showControls ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex gap-2 mt-10">
        {poems.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-gray-900" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
